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
      lattitude: "56.42",
      longitude: "44.42",
      userid: "->users.bart"
    }
  },
  categories: {
    _model : "Category",
    free : {
      category: "Free",
      pinId: "->pins.kinsale"
    },
  }
};
