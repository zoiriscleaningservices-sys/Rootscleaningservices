import os
import re

# 1. Update `app/[seo_slug]/page.js`
with open("app/[seo_slug]/page.js", "r", encoding="utf-8") as f:
    text = f.read()

# Replace iframe
# Need to replace exactly the big iframe string.
iframe_regex = r'<iframe className="gmap" src="https://www\.google\.com/maps/embed\?pb=[^"]+" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
new_iframe = '<iframe className="gmap" src={`https://maps.google.com/maps?q=${encodeURIComponent(locationName)}&t=&z=13&ie=UTF8&iwloc=&output=embed`} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>'
text = re.sub(iframe_regex, new_iframe, text)

# Prepare Schema
schema_block = """  
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "CleaningService",
    "name": `${data.isLocationHub ? 'Premium Cleaning Services' : data.service.name} in ${locationName}`,
    "description": heroDescription,
    "areaServed": {
      "@type": "City",
      "name": locationName
    },
    "url": `https://roots-cleaning-services.vercel.app/${seo_slug}`,
    "telephone": "(804) 873-7546",
    "priceRange": "$$",
    "image": "https://roots-cleaning-services.vercel.app/images/logo.png"
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />"""

text = text.replace('  return (\n    <>\n', schema_block)

with open("app/[seo_slug]/page.js", "w", encoding="utf-8") as f:
    f.write(text)


# 2. Update global pages
def update_global_pages(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()
    
    # We just replace the static iframe with the exact Richmond string
    richmond_iframe = '<iframe className="gmap" src="https://maps.google.com/maps?q=Richmond%2C%20VA&t=&z=13&ie=UTF8&iwloc=&output=embed" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>'
    content = re.sub(iframe_regex, richmond_iframe, content)
    
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(content)

update_global_pages("app/page.js")
update_global_pages("app/contact/page.js")
update_global_pages("app/services/page.js")

print("done")
