export const mockGames = [
  {
    id: 0,
    name: "$10k Sunday Night",
    description: "SUN 9pm EST start",
    fee: "$20",
    maxParticipants: 50,
    currentParticipants: 25
  },
  {
    id: 1,
    name: "Weekly Football Challenge",
    description: "SUN 9pm EST start",
    fee: "$9",
    maxParticipants: 50,
    currentParticipants: 25
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
  id: 0,
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
    id: 2,
    name: "Matt",
    username: "mmurphy"
  },
  {
    id: 3,
    name: "Matt",
    username: "mmurphy"
  }
];
