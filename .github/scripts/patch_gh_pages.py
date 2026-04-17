import os
import re

base_path = 'out'
repo_name = '/Rootscleaningservices'

def patch_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Define exact replacements for the base domain mapping.
    
    # Standard HTML Attributes (Matches src="/foo" and href="/foo")
    content = re.sub(r'href="/(?!Rootscleaningservices|/)([^"]*)"', rf'href="{repo_name}/\1"', content)
    content = re.sub(r"href='/(?!Rootscleaningservices|/)([^']*)'", rf"href='{repo_name}/\1'", content)
    
    content = re.sub(r'src="/(?!Rootscleaningservices|/)([^"]*)"', rf'src="{repo_name}/\1"', content)
    content = re.sub(r"src='/(?!Rootscleaningservices|/)([^']*)'", rf"src='{repo_name}/\1'", content)
    
    # CSS Background Images inside CSS files or <style> blocks
    content = re.sub(r"url\('/(?!Rootscleaningservices|/)([^']*)'\)", rf"url('{repo_name}/\1')", content)
    content = re.sub(r'url\("/(?!Rootscleaningservices|/)([^"]*)"\)', rf'url("{repo_name}/\1")', content)

    # Next.js React HTML Entity Escaped Strings (e.g. style={{backgroundImage: "url('/...')"}} => style="background-image:url(&#x27;/...&#x27;)")
    content = re.sub(r"url\(&#x27;/(?!Rootscleaningservices|/)([^;]*?)&#x27;\)", rf"url(&#x27;{repo_name}/\1&#x27;)", content)
    content = re.sub(r"url\(&quot;/(?!Rootscleaningservices|/)([^;]*?)&quot;\)", rf"url(&quot;{repo_name}/\1&quot;)", content)

    # Specific exact root
    content = content.replace('href="/"', f'href="{repo_name}/"')
    content = content.replace("href='/'", f"href='{repo_name}/'")

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

for root, _, files in os.walk(base_path):
    for filename in files:
        if filename.endswith(('.html', '.css', '.js')):
            patch_file(os.path.join(root, filename))

print(f"✅ Successfully Patched GitHub Pages asset paths with: {repo_name}")
