with open("app/services/page.js", "r", encoding="utf-8") as f:
    text = f.read()

# Fix broken JSX objects
text = text.replace('style={{flexWrap":', 'style={{"flexWrap":')
text = text.replace('style={{padding":', 'style={{"padding":')

with open("app/services/page.js", "w", encoding="utf-8") as f:
    f.write(text)
