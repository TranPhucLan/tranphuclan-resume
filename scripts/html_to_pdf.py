#!/usr/bin/env python3
"""Convert index.html (CV) sang PDF khổ A4 bằng Google Chrome (headless).

Script chỉ dùng thư viện chuẩn của Python + Google Chrome đã cài sẵn,
không cần cài thêm Node.js hay package nào.

Cách dùng:
    python3 scripts/html_to_pdf.py                # xuất cả 2 bản (vi + en)
    python3 scripts/html_to_pdf.py --lang vi      # chỉ bản tiếng Việt
    python3 scripts/html_to_pdf.py --lang en      # chỉ bản tiếng Anh
    python3 scripts/html_to_pdf.py --input index.html --out dist
"""

import argparse
import os
import subprocess
import sys
import tempfile
from pathlib import Path

# Các vị trí Chrome/Chromium phổ biến trên macOS, Linux, Windows.
CHROME_CANDIDATES = [
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/Applications/Chromium.app/Contents/MacOS/Chromium",
    "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
    "/Applications/Brave Browser.app/Contents/MacOS/Brave Browser",
    "/usr/bin/google-chrome",
    "/usr/bin/google-chrome-stable",
    "/usr/bin/chromium",
    "/usr/bin/chromium-browser",
    r"C:\Program Files\Google\Chrome\Application\chrome.exe",
    r"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe",
]


def find_chrome() -> str:
    env = os.environ.get("CHROME_PATH")
    if env and Path(env).exists():
        return env
    for path in CHROME_CANDIDATES:
        if Path(path).exists():
            return path
    sys.exit(
        "❌ Không tìm thấy Google Chrome/Chromium.\n"
        "   Hãy cài Chrome hoặc đặt biến môi trường CHROME_PATH trỏ tới file thực thi."
    )


def build_temp_html(source: Path, lang: str) -> Path:
    """Tạo bản HTML tạm (cùng thư mục để giữ đường dẫn tương đối) và ép ngôn ngữ."""
    html = source.read_text(encoding="utf-8")
    inject = (
        "\n<script>window.addEventListener('load',function(){"
        "try{if(typeof applyLanguage==='function')applyLanguage('%s');}catch(e){}"
        "});</script>\n"
    ) % lang
    if "</body>" in html:
        html = html.replace("</body>", inject + "</body>", 1)
    else:
        html += inject

    fd, tmp_name = tempfile.mkstemp(
        prefix=f".cv-{lang}-", suffix=".html", dir=str(source.parent)
    )
    with os.fdopen(fd, "w", encoding="utf-8") as f:
        f.write(html)
    return Path(tmp_name)


def render(chrome: str, html_file: Path, out_file: Path) -> None:
    cmd = [
        chrome,
        "--headless=new",
        "--disable-gpu",
        "--no-sandbox",
        "--no-pdf-header-footer",
        "--allow-file-access-from-files",
        "--virtual-time-budget=15000",
        f"--print-to-pdf={out_file}",
        html_file.as_uri(),
    ]
    result = subprocess.run(cmd, capture_output=True, text=True)
    if result.returncode != 0 or not out_file.exists():
        sys.exit(
            f"❌ Chrome tạo PDF thất bại (exit {result.returncode}).\n{result.stderr}"
        )


def main() -> None:
    parser = argparse.ArgumentParser(description="Convert CV HTML sang PDF")
    parser.add_argument("--lang", choices=["vi", "en", "all"], default="all")
    parser.add_argument("--input", default="index.html")
    parser.add_argument("--out", default=".")
    args = parser.parse_args()

    source = Path(args.input).resolve()
    if not source.exists():
        sys.exit(f"❌ Không tìm thấy file HTML: {source}")

    out_dir = Path(args.out).resolve()
    out_dir.mkdir(parents=True, exist_ok=True)

    chrome = find_chrome()
    langs = ["vi", "en"] if args.lang == "all" else [args.lang]

    for lang in langs:
        tmp = build_temp_html(source, lang)
        try:
            out_file = out_dir / f"Tran-Phuc-Lan-CV-{lang}.pdf"
            render(chrome, tmp, out_file)
            rel = os.path.relpath(out_file, Path.cwd())
            print(f"✅ Đã tạo: {rel}")
        finally:
            tmp.unlink(missing_ok=True)


if __name__ == "__main__":
    main()
