import os
import re

base_path = 'out'
repo_name = '/Rootscleaningservices'

def patch_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Prefix absolute internal paths with repo_name 
    # (e.g., href="/something" -> href="/Rootscleaningservices/something")
    # Exclude external links with root-relative paths like //fonts.googleapis.com
    # by checking that the character after / is not a second slash /
    content = re.sub(r'href="/([^/])', rf'href="{repo_name}/\1', content)
    content = re.sub(r"href='/([^/])", rf"href='{repo_name}/\1", content)
    
    content = re.sub(r'src="/([^/])', rf'src="{repo_name}/\1', content)
    content = re.sub(r"src='/([^/])", rf"src='{repo_name}/\1", content)
    
    # Next.js specific mapping for background images defined in inline CSS or JS chunks
    content = re.sub(r"url\('/([^/])", rf"url('{repo_name}/\1", content)
    content = re.sub(r'url\("/([^/])', rf'url("{repo_name}/\1', content)
    
    # Specific edge case: Exact root path href="/"
    content = content.replace('href="/"', f'href="{repo_name}/"')
    content = content.replace("href='/'", f"href='{repo_name}/'")

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

for root, _, files in os.walk(base_path):
    for filename in files:
        if filename.endswith('.html') or filename.endswith('.css') or filename.endswith('.js'):
            patch_file(os.path.join(root, filename))

print(f"✅ Successfully Patched GitHub Pages asset paths with: {repo_name}")
