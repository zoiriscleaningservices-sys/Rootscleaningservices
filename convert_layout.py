import os
import json
import re

with open("_html_backup/index.html", "r", encoding="utf-8") as f:
    html = f.read()

def convert_to_jsx(content):
    content = content.replace("class=", "className=")
    content = content.replace("<br>", "<br />")
    content = content.replace("<hr>", "<hr />")
    content = re.sub(r'<img(.*?)(?<!/)>', r'<img\1 />', content)
    content = re.sub(r'<input(.*?)(?<!/)>', r'<input\1 />', content)
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

# NAVBAR
start_idx_nav = html.find('<header class="navbar">')
end_idx_nav = html.find('</header>') + len('</header>')
nav_content = convert_to_jsx(html[start_idx_nav:end_idx_nav])

nav_js = f"""import Link from 'next/link';

export default function Navbar() {{
  return (
    <>
      {nav_content}
    </>
  );
}}
"""

with open("components/layout/Navbar.js", "w", encoding="utf-8") as f:
    f.write(nav_js)

# FOOTER
start_idx_footer = html.find('<footer class="footer-ultra">')
end_idx_footer = html.find('</footer>') + len('</footer>')
footer_content = convert_to_jsx(html[start_idx_footer:end_idx_footer])

footer_js = f"""import Link from 'next/link';

export default function Footer() {{
  return (
    <>
      {footer_content}
    </>
  );
}}
"""

with open("components/layout/Footer.js", "w", encoding="utf-8") as f:
    f.write(footer_js)

print("done")
