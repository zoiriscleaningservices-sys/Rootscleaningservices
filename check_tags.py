from html.parser import HTMLParser

class MyHTMLParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.stack = []
        self.void_elements = {'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr', 'path'}

    def handle_starttag(self, tag, attrs):
        if tag not in self.void_elements:
            self.stack.append((tag, self.getpos()))
            # print(f"Open: {tag} at {self.getpos()}")

    def handle_endtag(self, tag):
        if tag not in self.void_elements:
            if not self.stack:
                print(f"Error: Encountered closing tag </{tag}> at {self.getpos()} but stack is empty!")
                return
            expected_tag, pos = self.stack.pop()
            if tag != expected_tag:
                print(f"Error: Expected </{expected_tag}> (opened at {pos}) but got </{tag}> at {self.getpos()}")
                # Try to recover by popping until we find it
                found = False
                for i in range(len(self.stack)-1, -1, -1):
                    if self.stack[i][0] == tag:
                        print(f"  Recovered by assuming missing closing tags for: {[t[0] for t in self.stack[i+1:]]}")
                        self.stack = self.stack[:i]
                        found = True
                        break
                if not found:
                    print(f"  Could not recover, putting <{expected_tag}> back on stack.")
                    self.stack.append((expected_tag, pos))

with open("app/page.js", "r", encoding="utf-8") as f:
    text = f.read()
    # just strip JS imports and wrapper to parse pure HTMLish JSX
    start = text.find("<>")
    end = text.rfind("</>")
    jsx = text[start+2:end]

parser = MyHTMLParser()
parser.feed(jsx)
if parser.stack:
    print("Unclosed tags remaining in stack:")
    for tag, pos in parser.stack:
        print(f"  <{tag}> opened at {pos}")
else:
    print("All tags matched perfectly!")
