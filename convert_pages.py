import os
import json
import re

def convert_to_jsx(content):
    content = content.replace("class=", "className=")
    content = content.replace("<br>", "<br />")
    content = content.replace("<hr>", "<hr />")
    content = re.sub(r'<img(.*?)(?<!/)>', r'<img\1 />', content)
    content = re.sub(r'<input(.*?)(?<!/)>', r'<input\1 />', content)
    content = re.sub(r'<textarea(.*?)(?<!/)>', r'<textarea\1>', content)
    
    # Textarea has closing tag in html, but if it was replaced with /> we need to fix it? No, textarea isn't void.
    content = re.sub(r'<!--(.*?)-->', '', content, flags=re.DOTALL)
    content = content.replace('images/', '/images/')
    content = content.replace('index.html', '/')
    content = content.replace('services.html', '/services')
    content = content.replace('contact.html', '/contact')

    def style_replacement(match):
        style_str = match.group(1)
        parts = [p.strip() for p in style_str.split(';') if p.strip()]
        style_obj = {}
        for p in parts:
            if ':' in p:
                k, v = p.split(':', 1)
                k = k.strip()
                v = v.strip()
                k = re.sub(r'-([a-z])', lambda m: m.group(1).upper(), k)
                style_obj[k] = v
        json_str = json.dumps(style_obj)
        return 'style={' + json_str + '}'
    
    content = re.sub(r'style="([^"]*)"', style_replacement, content)
    return content

def process_file(source_html_path, target_js_path, export_name):
    with open(source_html_path, "r", encoding="utf-8") as f:
        html = f.read()

    # Find where content between header and footer starts
    # Some pages might not have <header class="navbar"> exactly if they are different, but wait, they do.
    start_tag = "</header>"
    end_tag = '<footer class="footer-ultra">'
    start_idx = html.find(start_tag) + len(start_tag)
    end_idx = html.find(end_tag)

    if start_idx == -1 or end_idx == -1:
        print(f"Could not find exact bounding regions for {source_html_path}")
        return

    content = html[start_idx:end_idx]
    jsx_content = convert_to_jsx(content)

    # Some JSX strict parsing fixes
    # Ensure any <main> tags are closed if they were unclosed.
    # The header starts with <main> but end doesn't.
    if "<main>" in jsx_content and "</main>" not in jsx_content:
        # insert </main> before the final </section> or just append it
        jsx_content = jsx_content + "\n</main>\n"

    page_js_template = f"""
import MapContactCard from '@/components/sections/MapContactCard';
import Link from 'next/link';
import Image from 'next/image';

export default function {export_name}() {{
  return (
    <>
      {jsx_content}
    </>
  );
}}
"""
    os.makedirs(os.path.dirname(target_js_path), exist_ok=True)
    with open(target_js_path, "w", encoding="utf-8") as f:
        f.write(page_js_template)
    print(f"Successfully converted {source_html_path} to {target_js_path}")

process_file("_html_backup/services.html", "app/services/page.js", "Services")
process_file("_html_backup/contact.html", "app/contact/page.js", "Contact")
