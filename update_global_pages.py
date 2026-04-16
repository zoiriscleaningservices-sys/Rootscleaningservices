import os
import re

# 1. Update app/services/page.js to feature SEO Links
with open("app/services/page.js", "r", encoding="utf-8") as f:
    services_content = f.read()

# For each section, let's inject a "View Full Details" link pointing to the SEO Silo.
replacements = [
    ('carpet', 'carpet-cleaning'),
    ('upholstery', 'house-cleaning'),
    ('commercial', 'commercial-cleaning'),
    ('deep-clean', 'deep-cleaning'),
    ('move-out', 'move-out-cleaning'),
]

for section_id, seo_id in replacements:
    services_content = services_content.replace(
        f'<a href="/contact" className="btn btn-accent mt-4" style={{"padding": "0.8rem 2rem"}}>Get a Quote</a>',
        f'<div className="mt-4"><a href="/contact" className="btn btn-accent" style={{"padding": "0.8rem 2rem", "marginRight": "1rem"}}>Get a Quote</a><Link href="/{seo_id}-in-richmond-va" className="btn btn-outline" style={{"padding": "0.8rem 2rem"}}>View Coverage details</Link></div>',
        1 # Only replace once per block theoretically, but since it's exactly matching, we will just use regex based on section block
    )

# wait, the string is exactly the same for all of them so string replace will just replace them blindly. Let's do a regex that captures the section ID.
with open("app/services/page.js", "r", encoding="utf-8") as f:
    services_content = f.read()

def replace_link(match):
    section_id = match.group(1)
    
    # Map section ids to seo ids
    seo_mapping = {
        'carpet': 'carpet-cleaning',
        'upholstery': 'house-cleaning',
        'commercial': 'commercial-cleaning',
        'deep-clean': 'deep-cleaning',
        'move-out': 'move-out-cleaning'
    }
    
    seo_id = seo_mapping.get(section_id, 'cleaning-services')
    
    inject = f'\n                    <div className="d-flex mt-4" style={{"flexWrap": "wrap", "gap": "1rem"}}>\n                        <a href="/contact" className="btn btn-accent" style={{"padding": "0.8rem 2rem"}}>Get a Quote</a>\n                        <Link href="/{seo_id}-in-richmond-va" className="btn btn-outline" style={{"padding": "0.8rem 2rem"}}>SEO Details</Link>\n                    </div>'
    
    return f'<section id="{section_id}"{match.group(2)}{inject}'

# Regex to find the <section id="..."> and then the specific <a href="/contact"...
services_content = re.sub(r'<section id="([^"]+)"(.*?)<a href="/contact" className="btn btn-accent mt-4" style=\{\{"padding": "0\.8rem 2rem"\}\}>Get a Quote</a>', replace_link, services_content, flags=re.DOTALL)

with open("app/services/page.js", "w", encoding="utf-8") as f:
    f.write(services_content)


# 2. Update app/page.js exactly like we did for app/[seo_slug]/page.js for the carousel
# Actually, the easiest way is to just let the user use app/page.js! But the services carousel still has static `.html` links!
with open("app/page.js", "r", encoding="utf-8") as f:
    home_content = f.read()

# Replace hardcoded `services.html#id` with dynamic SEO links in the static text.
home_content = home_content.replace('href="services.html#carpet"', 'href="/carpet-cleaning-in-richmond-va"')
home_content = home_content.replace('href="services.html#upholstery"', 'href="/house-cleaning-in-richmond-va"')
home_content = home_content.replace('href="services.html#commercial"', 'href="/commercial-cleaning-in-richmond-va"')
home_content = home_content.replace('href="services.html#tile"', 'href="/cleaning-services-in-richmond-va"')
home_content = home_content.replace('href="services.html#pets"', 'href="/cleaning-services-in-richmond-va"')
home_content = home_content.replace('href="services.html#rugs"', 'href="/carpet-cleaning-in-richmond-va"')
home_content = home_content.replace('href="services.html#deep-clean"', 'href="/deep-cleaning-in-richmond-va"')
home_content = home_content.replace('href="services.html#kitchen-bath"', 'href="/deep-cleaning-in-richmond-va"')
home_content = home_content.replace('href="services.html#move-out"', 'href="/move-out-cleaning-in-richmond-va"')
home_content = home_content.replace('href="services.html#standard"', 'href="/house-cleaning-in-richmond-va"')
home_content = home_content.replace('href="contact.html"', 'href="/contact"')
home_content = home_content.replace('href="services.html"', 'href="/services"')

with open("app/page.js", "w", encoding="utf-8") as f:
    f.write(home_content)

print("done")
