export const SCORES = [
  {
    player: {
      login: 'lymak',
      nickname: 'lymak',
    },
    points: 4242,
  },
  {
    player: {
      login: 'kibes',
      nickname: 'kibes',
    },
    points: 3232,
  },
  {
    player: {
      login: 'tomek',
      nickname: 'tomek',
    },
    points: 2416,
  },
  {
    player: {
      login: 'omed',
      nickname: 'omed',
    },
    points: 2000,
  },
  {
    player: {
      login: 'tar',
      nickname: 'tar',
    },
    points: 1960,
  },
  {
    player: {
      login: 'oiz',
      nickname: 'oiz',
    },
    points: 680,
  },
  {
    player: {
      login: 'xetrow',
      nickname: 'xetrow',
    },
    points: 403,
  },
  {
    player: {
      login: 'ginok',
      nickname: 'ginok',
    },
    points: 30,
  },
  {
    player: {
      login: 'llif',
      nickname: 'llif',
    },
    points: 20,
  },
  {
    player: {
      login: 'ida',
      nickname: 'ida',
    },
    points: 10,
  },
];

const ScoresResource = {
  getScores(cb) {
    setTimeout(() => cb(SCORES), 100);
  },
};

export default ScoresResource;