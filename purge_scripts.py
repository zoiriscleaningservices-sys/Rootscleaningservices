import os
import re

def purge_scripts(directory):
    script_count = 0
    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith('.html'):
                filepath = os.path.join(root, file)
                with open(filepath, 'r', encoding='utf-8') as f:
                    html = f.read()
                
                # Specifically target Next.js hydration scripts
                original = html
                html = re.sub(r'<script[^>]*src="[^"]*_next[^>]*><\/script>', '', html, flags=re.IGNORECASE)
                html = re.sub(r'<script>(?:self\.)?__next_f.*?<\/script>', '', html, flags=re.DOTALL)
                html = re.sub(r'<script[^>]*id="_R_"[^>]*><\/script>', '', html, flags=re.IGNORECASE)
                
                if html != original:
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(html)
                    script_count += 1
    print(f"Purged Next.js hydration scripts from {script_count} files.")

purge_scripts('out')
