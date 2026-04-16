import os
import glob

def bypass_spa(directory):
    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith('.js') or file.endswith('.jsx'):
                path = os.path.join(root, file)
                with open(path, 'r', encoding='utf-8') as f:
                    content = f.read()

                if '<Link' in content or '</Link>' in content:
                    content = content.replace('<Link', '<a')
                    content = content.replace('</Link>', '</a>')
                    
                    with open(path, 'w', encoding='utf-8') as f:
                        f.write(content)
                    print(f"Bypassed SPA Link in: {path}")

bypass_spa('app')
bypass_spa('components')
