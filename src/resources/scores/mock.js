const SCORES = [
  {
    player: {
      login: 'lymak',
      nick: 'lymak',
    },
    score: 4242,
  },
  {
    player: {
      login: 'kibes',
      nick: 'kibes',
    },
    score: 3232,
  },
  {
    player: {
      login: 'tomek',
      nick: 'tomek',
    },
    score: 2416,
  },
  {
    player: {
      login: 'omed',
      nick: 'omed',
    },
    score: 2000,
  },
  {
    player: {
      login: 'tar',
      nick: 'tar',
    },
    score: 1960,
  },
  {
    player: {
      login: 'oiz',
      nick: 'oiz',
    },
    score: 680,
  },
  {
    player: {
      login: 'xetrow',
      nick: 'xetrow',
    },
    score: 403,
  },
  {
    player: {
      login: 'ginok',
      nick: 'ginok',
    },
    score: 30,
  },
  {
    player: {
      login: 'llif',
      nick: 'llif',
    },
    score: 20,
  },
  {
    player: {
      login: 'ida',
      nick: 'ida',
    },
    score: 10,
  },
];

const ScoresResourceMock = {
  getScores() {
    return new Promise((resolve) => {
      const response = {
        data: SCORES,
      };
      setTimeout(() => resolve(response), 100);
    });
  },
};

export default ScoresResourceMock;
