export const seedData = {
  users: {
    _model: "User",
    homer: {
      firstName: "Homer",
      lastName: "Simpson",
      email: "homer@simpson.com",
      password: "secret"
    },
    marge: {
      firstName: "Marge",
      lastName: "Simpson",
      email: "marge@simpson.com",
      password: "secret"
    },
    bart: {
      firstName: "Bart",
      lastName: "Simpson",
      email: "bart@simpson.com",
      password: "secret"
    }
  },
  pins: {
    _model: "Pin",
    kinsale: {
      name: "Kinsale",
      description: "Seaside town",
      longitude: "-8.5225",
      lattitude: "51.7061",
      userid: "->users.bart"
    },
    beach1: {
      name: "Ballinskelligs Beach",
      description: "Stunning sandy beach with crystal-clear waters",
      longitude: "-10.2537",
      lattitude: "51.8353",
      userid: "->users.homer"
    },
    beach2: {
      name: "Portmarnock Beach",
      description: "Miles of sandy shoreline near Dublin",
      longitude: "-6.1376",
      lattitude: "53.4214",
      userid: "->users.marge"
    },
    beach3: {
      name: "Curracloe Beach",
      description: "Golden sandy beach featured in 'Saving Private Ryan'",
      longitude: "-6.3734",
      lattitude: "52.4175",
      userid: "->users.bart"
    },
    beach4: {
      name: "Inchydoney Beach",
      description: "Blue Flag beach with scenic surroundings",
      longitude: "-8.8841",
      lattitude: "51.6095",
      userid: "->users.homer"
    },
    beach5: {
      name: "Derrynane Beach",
      description: "Pristine beach with turquoise waters",
      longitude: "-10.0862",
      lattitude: "51.7596",
      userid: "->users.marge"
    },
    beach6: {
      name: "Lahinch Beach",
      description: "A top spot for surfing and kite-surfing",
      longitude: "-9.3491",
      lattitude: "52.9360",
      userid: "->users.homer"
    },
    beach7: {
      name: "Rosses Point Beach",
      description: "A Blue Flag beach with stunning views of Knocknarea mountain",
      longitude: "-8.5357",
      lattitude: "54.3064",
      userid: "->users.marge"
    },
    beach8: {
      name: "Banna Strand",
      description: "A long sandy beach with stunning natural scenery",
      longitude: "-9.8247",
      lattitude: "52.2670",
      userid: "->users.bart"
    },
    beach9: {
      name: "Silver Strand",
      description: "A beautiful secluded beach with clear waters",
      longitude: "-9.6403",
      lattitude: "53.2623",
      userid: "->users.homer"
    },
    beach10: {
      name: "Keem Bay",
      description: "A stunning, sheltered beach on Achill Island",
      longitude: "-10.0396",
      lattitude: "53.9619",
      userid: "->users.marge"
    },
    beach11: {
      name: "Salthill Beaches",
      description: "Series of small beaches in Galway city",
      longitude: "-9.0652",
      lattitude: "53.2603",
      userid: "->users.homer"
    },
    beach12: {
      name: "Barleycove Beach",
      description: "Large sandy beach located in West Cork",
      longitude: "-9.8312",
      lattitude: "51.4830",
      userid: "->users.marge"
    },
    beach13: {
      name: "Coumeenoole Beach",
      description: "Small but beautiful beach located on the Dingle Peninsula",
      longitude: "-10.4560",
      lattitude: "52.1228",
      userid: "->users.bart"
    },
    beach14: {
      name: "Rossbeigh Beach",
      description: "Stunning 6km sandy beach in County Kerry",
      longitude: "-9.9763",
      lattitude: "52.0586",
      userid: "->users.homer"
    },
    beach15: {
      name: "White Strand Beach",
      description: "Family-friendly beach in County Clare",
      longitude: "-9.4242",
      lattitude: "52.8117",
      userid: "->users.marge"
    },
    beach16: {
      name: "Carrowniskey Strand",
      description: "Popular location for surfing in County Mayo",
      longitude: "-9.8321",
      lattitude: "53.7593",
      userid: "->users.bart"
    },
    beach17: {
      name: "Spanish Point Beach",
      description: "Popular surf spot located in County Clare",
      longitude: "-9.4300",
      lattitude: "52.8471",
      userid: "->users.homer"
    },
    beach18: {
      name: "Coral Strand",
      description: "Unique beach with coral instead of sand",
      longitude: "-9.7489",
      lattitude: "53.4433",
      userid: "->users.marge"
    },
    beach19: {
      name: "Tramore Beach",
      description: "Long, sandy beach located in County Waterford",
      longitude: "-7.1174",
      lattitude: "52.1559",
      userid: "->users.bart"
    },
    beach20: {
      name: "Dog's Bay",
      description: "Spectacular horseshoe-shaped beach",
      longitude: "-9.9904",
      lattitude: "53.3542",
      userid: "->users.bart"
    },
    beach21: {
      name: "Fanore Beach",
      description: "Beautiful beach located on the Wild Atlantic Way",
      longitude: "-9.2603",
      lattitude: "53.0856",
      userid: "->users.bart"
    },
    lake1: {
      name: "Lough Corrib",
      description: "Largest lake in the Republic of Ireland",
      longitude: "-9.3159",
      lattitude: "53.4814",
      userid: "->users.bart"
    },
    lake2: {
      name: "Lough Derg",
      description: "Second-largest lake in Ireland",
      longitude: "-8.3133",
      lattitude: "52.9245",
      userid: "->users.homer"
    },
    lake3: {
      name: "Lough Ree",
      description: "Third-largest lake on the River Shannon",
      longitude: "-7.8616",
      lattitude: "53.5122",
      userid: "->users.marge"
    },
    lake4: {
      name: "Lough Neagh",
      description: "Largest lake in the United Kingdom and Ireland",
      longitude: "-6.4487",
      lattitude: "54.6161",
      userid: "->users.bart"
    },
    lake5: {
      name: "Lough Conn",
      description: "Beautiful lake with stunning scenery",
      longitude: "-9.2477",
      lattitude: "53.9815",
      userid: "->users.homer"
    },
    lake6: {
      name: "Lough Gill",
      description: "Picturesque lake in County Sligo",
      longitude: "-8.3804",
      lattitude: "54.2506",
      userid: "->users.marge"
    },
    lake7: {
      name: "Lough Allen",
      description: "Serene lake surrounded by mountains",
      longitude: "-8.0013",
      lattitude: "54.0096",
      userid: "->users.bart"
    },
    lake8: {
      name: "Lough Sheelin",
      description: "Tranquil lake popular for fishing",
      longitude: "-7.4275",
      lattitude: "53.8578",
      userid: "->users.homer"
    },
    lake9: {
      name: "Lough Erne",
      description: "Two interconnected lakes with historic islands",
      longitude: "-7.6341",
      lattitude: "54.4419",
      userid: "->users.marge"
    },
    lake10: {
      name: "Lough Oughter",
      description: "Scenic lake with multiple islands",
      longitude: "-7.2627",
      lattitude: "53.9388",
      userid: "->users.bart"
    },
    lake11: {
      name: "Lough Ramor",
      description: "Peaceful lake in County Cavan",
      longitude: "-7.0819",
      lattitude: "53.8723",
      userid: "->users.homer"
    },
    lake12: {
      name: "Lough Carra",
      description: "Nature reserve and angler's paradise",
      longitude: "-9.2791",
      lattitude: "53.7698",
      userid: "->users.marge"
    },
    lake13: {
      name: "Lough Gowna",
      description: "Limestone lake in County Cavan",
      longitude: "-7.4978",
      lattitude: "53.8089",
      userid: "->users.bart"
    },
    lake14: {
      name: "Lough Melvin",
      description: "Shared lake between County Leitrim and County Fermanagh",
      longitude: "-8.0246",
      lattitude: "54.4349",
      userid: "->users.homer"
    },
    lake15: {
      name: "Lough Muckno",
      description: "Large lake surrounded by parkland",
      longitude: "-6.7413",
      lattitude: "53.7195",
      userid: "->users.marge"
    },
    lake16: {
      name: "Lough Swilly",
      description: "Sea lough on the Inishowen Peninsula",
      longitude: "-7.5228",
      lattitude: "55.0547",
      userid: "->users.bart"
    },
    lake17: {
      name: "Lough Connolly",
      description: "Scenic lake near Letterkenny",
      longitude: "-7.7431",
      lattitude: "54.9521",
      userid: "->users.homer"
    },
    lake18: {
      name: "Lough Arrow",
      description: "Beautiful lake in County Sligo",
      longitude: "-8.3029",
      lattitude: "54.0596",
      userid: "->users.marge"
    },
    aires1: {
      name: "Silver Strand Caravan Park",
      description: "Scenic campervan park near Wicklow",
      longitude: "-6.0731",
      lattitude: "52.9855",
      userid: "->users.bart"
    },
    aires2: {
      name: "Clifden Eco Beach Camping and Caravanning Park",
      description: "Sustainable campervan park on the Wild Atlantic Way",
      longitude: "-10.0601",
      lattitude: "53.4606",
      userid: "->users.homer"
    },
    aires3: {
      name: "Nagles Camping & Caravan Park",
      description: "Family-friendly campervan park in County Kerry",
      longitude: "-9.6847",
      lattitude: "52.1119",
      userid: "->users.marge"
    },
    aires4: {
      name: "Lough Key Caravan and Camping Park",
      description: "Campervan park near Boyle with beautiful surroundings",
      longitude: "-8.0906",
      lattitude: "54.0027",
      userid: "->users.bart"
    },
    aires5: {
      name: "Dromquinna Manor Camping & Caravan Park",
      description: "Luxurious campervan park overlooking Kenmare Bay",
      longitude: "-9.6426",
      lattitude: "51.7992",
      userid: "->users.homer"
    },
    aires6: {
      name: "Battlebridge Caravan & Camping Park",
      description: "Riverside campervan park in County Leitrim",
      longitude: "-8.0533",
      lattitude: "54.0628",
      userid: "->users.marge"
    },
    aires7: {
      name: "Keel Sandybanks Caravan & Camping Park",
      description: "Seaside campervan park on Achill Island",
      longitude: "-10.0201",
      lattitude: "53.9727",
      userid: "->users.bart"
    },
    aires8: {
      name: "Killybegs Holiday Park",
      description: "Coastal campervan park with stunning views",
      longitude: "-8.4593",
      lattitude: "54.6379",
      userid: "->users.homer"
    },
    aires9: {
      name: "Lough Arrow Touring Caravan Park",
      description: "Tranquil campervan park near Boyle",
      longitude: "-8.3151",
      lattitude: "54.0564",
      userid: "->users.marge"
    },
    aires10: {
      name: "Ferrybank Caravan & Camping Park",
      description: "Riverside campervan park in County Wexford",
      longitude: "-6.8431",
      lattitude: "52.4009",
      userid: "->users.bart"
    },
    aires11: {
      name: "Roundwood Caravan and Camping Park",
      description: "Peaceful campervan park in County Wicklow",
      longitude: "-6.2175",
      lattitude: "53.0577",
      userid: "->users.homer"
    },
    aires12: {
      name: "Mannix Point Camping and Caravan Park",
      description: "Coastal campervan park on the Ring of Kerry",
      longitude: "-9.9006",
      lattitude: "52.1051",
      userid: "->users.marge"
    },
    aires13: {
      name: "Wave Crest Caravan Park",
      description: "Seaside campervan park in County Waterford",
      longitude: "-7.6103",
      lattitude: "52.1162",
      userid: "->users.bart"
    },
    aires14: {
      name: "Lough Ennell Caravan & Camping Park",
      description: "Lakeside campervan park near Mullingar",
      longitude: "-7.4043",
      lattitude: "53.5047",
      userid: "->users.homer"
    },
    aires15: {
      name: "Beara Camping",
      description: "Idyllic campervan park on the Beara Peninsula",
      longitude: "-9.8174",
      lattitude: "51.6906",
      userid: "->users.marge"
    },
    aires16: {
      name: "Wavecrest Caravan and Camping Park",
      description: "Family-friendly campervan park in County Kerry",
      longitude: "-10.2717",
      lattitude: "52.1587",
      userid: "->users.bart"
    },
    aires17: {
      name: "Valentia Island Caravan and Camping",
      description: "Campervan park on Valentia Island with beautiful views",
      longitude: "-10.3666",
      lattitude: "51.9249",
      userid: "->users.homer"
    },
    aires18: {
      name: "Nagles Doolin Camping & Caravan Park",
      description: "Campervan park near the Cliffs of Moher",
      longitude: "-9.3999",
      lattitude: "53.0105",
      userid: "->users.marge"
    },
    aires19: {
      name: "Cong Caravan & Camping Park",
      description: "Tranquil campervan park near Ashford Castle",
      longitude: "-9.2821",
      lattitude: "53.5431",
      userid: "->users.bart"
    },
    aires20: {
      name: "Lough Ree East Caravan and Camping Park",
      description: "Scenic campervan park on Lough Ree",
      longitude: "-7.9657",
      lattitude: "53.4641",
      userid: "->users.homer"
    }
  },
  categories: {
    _model: "Category",
    beach: {
      category: "Beach",
      pinId: "->pins.kinsale"
    },
    free: {
      category: "Free",
      pinId: "->pins.kinsale"
    },
    beach1: {
      category: "Beach",
      pinId: "->pins.beach1"
    },
    free1: {
      category: "Free",
      pinId: "->pins.beach1"
    },
    beach2: {
      category: "Beach",
      pinId: "->pins.beach2"
    },
    free2: {
      category: "Free",
      pinId: "->pins.beach2"
    },
    beach3: {
      category: "Beach",
      pinId: "->pins.beach3"
    },
    free3: {
      category: "Free",
      pinId: "->pins.beach3"
    },
    beach4: {
      category: "Beach",
      pinId: "->pins.beach4"
    },
    free4: {
      category: "Free",
      pinId: "->pins.beach4"
    },
    beach5: {
      category: "Beach",
      pinId: "->pins.beach5"
    },
    free5: {
      category: "Free",
      pinId: "->pins.beach5"
    },
    beach6: {
      category: "Beach",
      pinId: "->pins.beach6"
    },
    free6: {
      category: "Free",
      pinId: "->pins.beach6"
    },
    beach7: {
      category: "Beach",
      pinId: "->pins.beach7"
    },
    free7: {
      category: "Free",
      pinId: "->pins.beach7"
    },
    beach8: {
      category: "Beach",
      pinId: "->pins.beach8"
    },
    free8: {
      category: "Free",
      pinId: "->pins.beach8"
    },
    beach9: {
      category: "Beach",
      pinId: "->pins.beach9"
    },
    free9: {
      category: "Free",
      pinId: "->pins.beach9"
    },
    beach10: {
      category: "Beach",
      pinId: "->pins.beach10"
    },
    free10: {
      category: "Free",
      pinId: "->pins.beach10"
    },
    beach11: {
      category: "Beach",
      pinId: "->pins.beach11"
    },
    free11: {
      category: "Free",
      pinId: "->pins.beach11"
    },
    beach12: {
      category: "Beach",
      pinId: "->pins.beach12"
    },
    free12: {
      category: "Free",
      pinId: "->pins.beach12"
    },
    beach13: {
      category: "Beach",
      pinId: "->pins.beach13"
    },
    free13: {
      category: "Free",
      pinId: "->pins.beach13"
    },
    beach14: {
      category: "Beach",
      pinId: "->pins.beach14"
    },
    free14: {
      category: "Free",
      pinId: "->pins.beach14"
    },
    beach15: {
      category: "Beach",
      pinId: "->pins.beach15"
    },
    free15: {
      category: "Free",
      pinId: "->pins.beach15"
    },
    beach16: {
      category: "Beach",
      pinId: "->pins.beach16"
    },
    free16: {
      category: "Free",
      pinId: "->pins.beach16"
    },
    beach17: {
      category: "Beach",
      pinId: "->pins.beach17"
    },
    free17: {
      category: "Free",
      pinId: "->pins.beach17"
    },
    beach18: {
      category: "Beach",
      pinId: "->pins.beach18"
    },
    free18: {
      category: "Free",
      pinId: "->pins.beach18"
    },
    beach19: {
      category: "Beach",
      pinId: "->pins.beach19"
    },
    free19: {
      category: "Free",
      pinId: "->pins.beach19"
    },
    beach20: {
      category: "Beach",
      pinId: "->pins.beach20"
    },
    free20: {
      category: "Free",
      pinId: "->pins.beach20"
    },
    beach21: {
      category: "Beach",
      pinId: "->pins.beach21"
    },
    free21: {
      category: "Free",
      pinId: "->pins.beach21"
    },
    county1: {
      category: "Kerry",
      pinId: "->pins.beach1"
    },
    county2: {
      category: "Dublin",
      pinId: "->pins.beach2"
    },
    county3: {
      category: "Wexford",
      pinId: "->pins.beach3"
    },
    county4: {
      category: "Cork",
      pinId: "->pins.beach4"
    },
    county5: {
      category: "Kerry",
      pinId: "->pins.beach5"
    },
    county6: {
      category: "Clare",
      pinId: "->pins.beach6"
    },
    county7: {
      category: "Sligo",
      pinId: "->pins.beach7"
    },
    county8: {
      category: "Kerry",
      pinId: "->pins.beach8"
    },
    county9: {
      category: "Galway",
      pinId: "->pins.beach9"
    },
    county10: {
      category: "Mayo",
      pinId: "->pins.beach10"
    },
    county11: {
      category: "Galway",
      pinId: "->pins.beach11"
    },
    county12: {
      category: "Cork",
      pinId: "->pins.beach12"
    },
    county13: {
      category: "Kerry",
      pinId: "->pins.beach13"
    },
    county14: {
      category: "Kerry",
      pinId: "->pins.beach14"
    },
    county15: {
      category: "Clare",
      pinId: "->pins.beach15"
    },
    county16: {
      category: "Mayo",
      pinId: "->pins.beach16"
    },
    county17: {
      category: "Clare",
      pinId: "->pins.beach17"
    },
    county18: {
      category: "Galway",
      pinId: "->pins.beach18"
    },
    county19: {
      category: "Waterford",
      pinId: "->pins.beach19"
    },
    county20: {
      category: "Galway",
      pinId: "->pins.beach20"
    },
    county21: {
      category: "Clare",
      pinId: "->pins.beach21"
    },
    lake1: {
      category: "Lake",
      pinId: "->pins.lake1"
    },
    free22: {
      category: "Free",
      pinId: "->pins.lake1"
    },
    lake2: {
      category: "Lake",
      pinId: "->pins.lake2"
    },
    free23: {
      category: "Free",
      pinId: "->pins.lake2"
    },
    lake3: {
      category: "Lake",
      pinId: "->pins.lake3"
    },
    free24: {
      category: "Free",
      pinId: "->pins.lake3"
    },
    lake4: {
      category: "Lake",
      pinId: "->pins.lake4"
    },
    free25: {
      category: "Free",
      pinId: "->pins.lake4"
    },
    lake5: {
      category: "Lake",
      pinId: "->pins.lake5"
    },
    free26: {
      category: "Free",
      pinId: "->pins.lake5"
    },
    lake6: {
      category: "Lake",
      pinId: "->pins.lake6"
    },
    free27: {
      category: "Free",
      pinId: "->pins.lake6"
    },
    lake7: {
      category: "Lake",
      pinId: "->pins.lake7"
    },
    free28: {
      category: "Free",
      pinId: "->pins.lake7"
    },
    lake8: {
      category: "Lake",
      pinId: "->pins.lake8"
    },
    free29: {
      category: "Free",
      pinId: "->pins.lake8"
    },
    lake9: {
      category: "Lake",
      pinId: "->pins.lake9"
    },
    free30: {
      category: "Free",
      pinId: "->pins.lake9"
    },
    lake10: {
      category: "Lake",
      pinId: "->pins.lake10"
    },
    free31: {
      category: "Free",
      pinId: "->pins.lake10"
    },
    lake11: {
      category: "Lake",
      pinId: "->pins.lake11"
    },
    free32: {
      category: "Free",
      pinId: "->pins.lake11"
    },
    lake12: {
      category: "Lake",
      pinId: "->pins.lake12"
    },
    free33: {
      category: "Free",
      pinId: "->pins.lake12"
    },
    lake13: {
      category: "Lake",
      pinId: "->pins.lake13"
    },
    free34: {
      category: "Free",
      pinId: "->pins.lake13"
    },
    lake14: {
      category: "Lake",
      pinId: "->pins.lake14"
    },
    free35: {
      category: "Free",
      pinId: "->pins.lake14"
    },
    lake15: {
      category: "Lake",
      pinId: "->pins.lake15"
    },
    free36: {
      category: "Free",
      pinId: "->pins.lake15"
    },
    lake16: {
      category: "Lake",
      pinId: "->pins.lake16"
    },
    free37: {
      category: "Free",
      pinId: "->pins.lake16"
    },
    lake17: {
      category: "Lake",
      pinId: "->pins.lake17"
    },
    free38: {
      category: "Free",
      pinId: "->pins.lake17"
    },
    lake18: {
      category: "Lake",
      pinId: "->pins.lake18"
    },
    free39: {
      category: "Free",
      pinId: "->pins.lake18"
    },
    paid1: {
      category: "Paid",
      pinId: "->pins.aires1"
    },
    campervan1aires: {
      category: "Aires",
      pinId: "->pins.aires1"
    },
    paid2: {
      category: "Paid",
      pinId: "->pins.aires2"
    },
    campervan2aires: {
      category: "Aires",
      pinId: "->pins.aires2"
    },
    paid3: {
      category: "Paid",
      pinId: "->pins.aires3"
    },
    campervan3aires: {
      category: "Aires",
      pinId: "->pins.aires3"
    },
    paid4: {
      category: "Paid",
      pinId: "->pins.aires4"
    },
    campervan4aires: {
      category: "Aires",
      pinId: "->pins.aires4"
    },
    paid5: {
      category: "Paid",
      pinId: "->pins.aires5"
    },
    campervan5aires: {
      category: "Aires",
      pinId: "->pins.aires5"
    },
    paid6: {
      category: "Paid",
      pinId: "->pins.aires6"
    },
    campervan6aires: {
      category: "Aires",
      pinId: "->pins.aires6"
    },
    paid7: {
      category: "Paid",
      pinId: "->pins.aires7"
    },
    campervan7aires: {
      category: "Aires",
      pinId: "->pins.aires7"
    },
    paid8: {
      category: "Paid",
      pinId: "->pins.aires8"
    },
    campervan8aires: {
      category: "Aires",
      pinId: "->pins.aires8"
    },
    paid9: {
      category: "Paid",
      pinId: "->pins.aires9"
    },
    campervan9aires: {
      category: "Aires",
      pinId: "->pins.aires9"
    },
    paid10: {
      category: "Paid",
      pinId: "->pins.aires10"
    },
    campervan10aires: {
      category: "Aires",
      pinId: "->pins.aires10"
    },
    paid11: {
      category: "Paid",
      pinId: "->pins.aires11"
    },
    campervan11aires: {
      category: "Aires",
      pinId: "->pins.aires11"
    },
    paid12: {
      category: "Paid",
      pinId: "->pins.aires12"
    },
    campervan12aires: {
      category: "Aires",
      pinId: "->pins.aires12"
    },
    paid13: {
      category: "Paid",
      pinId: "->pins.aires13"
    },
    campervan13aires: {
      category: "Aires",
      pinId: "->pins.aires13"
    },
    paid14: {
      category: "Paid",
      pinId: "->pins.aires14"
    },
    campervan14aires: {
      category: "Aires",
      pinId: "->pins.aires14"
    },
    paid15: {
      category: "Paid",
      pinId: "->pins.aires15"
    },
    campervan15aires: {
      category: "Aires",
      pinId: "->pins.aires15"
    },
    paid16: {
      category: "Paid",
      pinId: "->pins.aires16"
    },
    campervan16aires: {
      category: "Aires",
      pinId: "->pins.aires16"
    },
    paid17: {
      category: "Paid",
      pinId: "->pins.aires17"
    },
    campervan17aires: {
      category: "Aires",
      pinId: "->pins.aires17"
    },
    paid18: {
      category: "Paid",
      pinId: "->pins.aires18"
    },
    campervan18aires: {
      category: "Aires",
      pinId: "->pins.aires18"
    },
    paid19: {
      category: "Paid",
      pinId: "->pins.aires19"
    },
    campervan19aires: {
      category: "Aires",
      pinId: "->pins.aires19"
    },
    paid20: {
      category: "Paid",
      pinId: "->pins.aires20"
    },
    campervan20aires: {
      category: "Aires",
      pinId: "->pins.aires20"
    }
  }
  }