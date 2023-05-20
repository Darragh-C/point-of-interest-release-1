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
    }
  }
  }