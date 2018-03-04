const SCORES = [
  {
    nickname: 'lymak',
    points: 4242,
  },
  {
    nickname: 'kibes',
    points: 3232,
  },
  {
    nickname: 'tomek',
    points: 2416,
  },
  {
    nickname: 'omed',
    points: 2000,
  },
  {
    nickname: 'tar',
    points: 1960,
  },
  {
    nickname: 'oiz',
    points: 680,
  },
  {
    nickname: 'xetrow',
    points: 403,
  },
  {
    nickname: 'ginok',
    points: 30,
  },
  {
    nickname: 'llif',
    points: 20,
  },
  {
    nickname: 'ida',
    points: 10,
  },
];

const ScoresService = {
  getScores(cb) {
    setTimeout(() => cb(SCORES), 100);
  },
};

export default ScoresService;