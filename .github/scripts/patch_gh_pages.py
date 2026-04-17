import os
import re

base_path = 'out'
repo_name = '/Rootscleaningservices'

def patch_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Next.js sets basePath so _next links are already /Rootscleaningservices/_next/
    # We only want to patch hardcoded absolute links like /images, /css, /js, or /services
    
    # Target href="/..." but specifically DO NOT patch href="/Rootscleaningservices..." or href="//..."
    content = re.sub(r'href="/(?!Rootscleaningservices|/)([^"]+)"', rf'href="{repo_name}/\1"', content)
    content = re.sub(r"href='/(?!Rootscleaningservices|/)([^']+)'", rf"href='{repo_name}/\1'", content)
    
    # Target src="/..." (like our manually injected <script src="/js/main.js">)
    content = re.sub(r'src="/(?!Rootscleaningservices|/)([^"]+)"', rf'src="{repo_name}/\1"', content)
    content = re.sub(r"src='/(?!Rootscleaningservices|/)([^']+)'", rf"src='{repo_name}/\1'", content)
    
    # Target css url('/images/...')
    content = re.sub(r"url\('/(?!Rootscleaningservices|/)([^']+)'\)", rf"url('{repo_name}/\1')", content)
    content = re.sub(r'url\("/(?!Rootscleaningservices|/)([^"]+)"\)', rf'url("{repo_name}/\1")', content)

    # Specific exact root
    content = content.replace('href="/"', f'href="{repo_name}/"')
    content = content.replace("href='/'", f"href='{repo_name}/'")

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

for root, _, files in os.walk(base_path):
    for filename in files:
        if filename.endswith(('.html', '.css', '.js')):
            patch_file(os.path.join(root, filename))

print("✅ Perfect Path Replacements complete!")
