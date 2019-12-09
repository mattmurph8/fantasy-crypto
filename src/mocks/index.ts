export const mockGames = [
  {
    id: 0,
    name: "$10k Sunday Night",
    description: "SUN 9pm EST start",
    fee: "$20",
    maxParticipants: 100,
    currentParticipants: 57
  },
  {
    id: 1,
    name: "Weekly Football Challenge",
    description: "SUN 9pm EST start",
    fee: "$9",
    maxParticipants: 250,
    currentParticipants: 225
  },
  {
    id: 2,
    name: "$10k Sunday Night",
    description: "SUN 9pm EST start",
    fee: "$25",
    maxParticipants: 50,
    currentParticipants: 25
  }
];

export const mockUserGames = [
  {
    id: 0,
    remaining: 1000000,
    balance: 2000000,
    assets: [
      {
        currency: "BTC",
        balance: 2065.0
      },
      {
        currency: "USD",
        balance: 0
      },
      {
        currency: "XRP",
        balance: 1613.78
      }
    ]
  },
  {
    id: 1,
    remaining: 1000000,
    balance: 2000000,
    assets: [
      {
        currency: "BTC",
        balance: 2065.0
      },
      {
        currency: "USD",
        balance: 0.0
      },
      {
        currency: "XRP",
        balance: 1613.78
      }
    ]
  }
];

export const mockCurrentUser = {
  id: 1,
  name: "Matt",
  username: "mmurphy",
  balance: 1000000
};

export const mockFriends = [
  {
    id: 1,
    name: "Matt",
    username: "mmurphy"
  },
  {
    id: 11,
    name: "Ethan",
    username: "ebooth"
  },
  {
    id: 13,
    name: "Michael",
    username: "mcastaneda"
  }
];

export const mockStandings = [
  {
    id: 11,
    position: 1,
    balance: 1000,
    username: "ebooth"
  },
  {
    id: 12,
    position: 2,
    balance: 900,
    username: "svo"
  },
  {
    id: 13,
    position: 3,
    balance: 800,
    username: "mcastaneda"
  },
  {
    id: 1,
    position: 4,
    balance: 700,
    username: "mmurphy"
  },
  {
    id: 11,
    position: 5,
    balance: 600,
    username: "dtravis"
  },
  {
    id: 11,
    position: 6,
    balance: 500,
    username: "ebooth"
  },
  {
    id: 11,
    position: 7,
    balance: 400,
    username: "nmajor"
  },
  {
    id: 11,
    position: 8,
    balance: 300,
    username: "rcastro"
  }
];
