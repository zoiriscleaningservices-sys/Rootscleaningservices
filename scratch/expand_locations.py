import re

base_cities = [
    'Richmond', 'Midlothian', 'Chesterfield', 'Henrico', 'Mechanicsville', 'Short Pump', 'Glen Allen', 
    'Petersburg', 'Hopewell', 'Colonial Heights', 'Ashland', 'Hanover', 'Powhatan', 'Goochland',
    'New Kent', 'Charles City', 'Dinwiddie', 'Prince George', 'Sussex', 'Surry', 'Sandston',
    'Highland Springs', 'Tuckahoe', 'Lakeside', 'Bon Air', 'Chester', 'Matoaca', 'Enon',
    'Woodlake', 'Brandermill', 'Bensley', 'Bellwood', 'Montrose', 'East Highland Park',
    'Chamberlayne', 'Dumbarton', 'Innsbrook', 'Wyndham', 'Studley', 'Doswell', 'Hanover Courthouse',
    'Montpelier', 'Manakin Sabot', 'Crozier', 'Oilville', 'Sandy Hook', 'Cartersville', 'Cumberland',
    'Farmville', 'Amelia Court House', 'Jetersville', 'Crewe', 'Blackstone', 'Nottoway',
    'Burkeville', 'Victoria', 'Kenbridge', 'Lunenburg', 'South Hill', 'Chase City', 'Boydton',
    'Clarksville', 'Halifax', 'South Boston', 'Danville', 'Chatham', 'Pittsylvania', 'Martinsville',
    'Henry', 'Patrick', 'Stuart', 'Floyd', 'Willis', 'Roanoke', 'Salem', 'Vinton', 'Cave Spring',
    'Hollins', 'Botetourt', 'Fincastle', 'Buchanan', 'Troutville', 'Blue Ridge', 'Bedford',
    'Forest', 'Lynchburg', 'Madison Heights', 'Amherst', 'Appomattox', 'Rustburg', 'Campbell',
    'Altavista', 'Brookneal', 'Charlotte Court House', 'Keysville', 'Drakes Branch', 'Prince Edward',
    'Buckingham', 'Dillwyn', 'Nelson', 'Lovingston', 'Fluvanna', 'Palmyra', 'Louisa',
    'Mineral', 'Gordonsville', 'Orange', 'Albemarle', 'Charlottesville', 'Crozet', 'Scottsville',
    'Waynesboro', 'Staunton', 'Augusta', 'Stuarts Draft', 'Fishersville', 'Harrisonburg',
    'Rockingham', 'Bridgewater', 'Dayton', 'Broadway', 'Timberville', 'Elkton', 'Shenandoah',
    'Page', 'Luray', 'Warren', 'Front Royal', 'Frederick', 'Winchester', 'Stephens City',
    'Clarke', 'Berryville', 'Loudoun', 'Leesburg', 'Ashburn', 'Sterling', 'Purcellville',
    'Fairfax', 'Reston', 'Herndon', 'Vienna', 'Oakton', 'McLean', 'Great Falls', 'Falls Church',
    'Arlington', 'Alexandria', 'Annandale', 'Springfield', 'Burke', 'Centreville', 'Chantilly',
    'Prince William', 'Woodbridge', 'Dale City', 'Dumfries', 'Manassas', 'Manassas Park',
    'Fauquier', 'Warrenton', 'Bealeton', 'Stafford', 'Fredericksburg', 'Spotsylvania',
    'King George', 'Caroline', 'Bowling Green', 'King William', 'West Point',
    'King and Queen', 'Essex', 'Tappahannock', 'Richmond County', 'Warsaw', 'Westmoreland',
    'Montross', 'Colonial Beach', 'Northumberland', 'Heathsville', 'Lancaster', 'Kilmarnock',
    'Middlesex', 'Urbanna', 'Saluda', 'Mathews', 'Gloucester', 'Hayes', 'Williamsburg',
    'James City', 'York', 'Yorktown', 'Poquoson', 'Hampton', 'Newport News', 'Isle of Wight',
    'Smithfield', 'Surry', 'Suffolk', 'Portsmouth', 'Chesapeake', 'Norfolk', 'Virginia Beach'
]

locations_out = []
for city in base_cities:
    slug = city.lower().replace(' ', '-')
    locations_out.append(f"  {{ id: '{slug}-va', name: '{city}, VA' }},")
    locations_out.append(f"  {{ id: 'north-{slug}-va', name: 'North {city}, VA' }},")
    locations_out.append(f"  {{ id: 'south-{slug}-va', name: 'South {city}, VA' }},")
    locations_out.append(f"  {{ id: 'east-{slug}-va', name: 'East {city}, VA' }},")
    locations_out.append(f"  {{ id: 'west-{slug}-va', name: 'West {city}, VA' }},")

loc_string = "export const LOCATIONS = [\n" + "\n".join(locations_out) + "\n];"

with open('data/seoDb.js', 'r', encoding='utf-8') as f:
    content = f.read()

new_content = re.sub(r'export const LOCATIONS = \[.*?\];', loc_string, content, flags=re.DOTALL)

with open('data/seoDb.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print(f"Successfully expanded LOCATIONS to {len(locations_out)} Virginia zones.")
