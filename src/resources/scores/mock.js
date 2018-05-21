import getRandomApiMockResponseTime from '../get-random-api-mock-response-time';

export const SCORES = [
  {
    player: {
      login: 'lymak',
      nick: '$s$o$a60l$c82y$fa3m$c82a$a60k',
    },
    score: 4242,
  },
  {
    player: {
      login: 'kibes',
      nick: '$s$w$fffkibes',
    },
    score: 3232,
  },
  {
    player: {
      login: 'tomek',
      nick: '$w$o$s$08ftom$fffek',
    },
    score: 2416,
  },
  {
    player: {
      login: 'omed',
      nick: '$f80omed',
    },
    score: 2000,
  },
  {
    player: {
      login: 'tar',
      nick: '$f00tar',
    },
    score: 1960,
  },
  {
    player: {
      login: 'oiz',
      nick: '$o$w$000oiz',
    },
    score: 680,
  },
  {
    player: {
      login: 'xetrow',
      nick: '$w$484xetrow',
    },
    score: 403,
  },
  {
    player: {
      login: 'ginok',
      nick: '$n$880ginok',
    },
    score: 30,
  },
  {
    player: {
      login: 'llif',
      nick: '$400$wllif',
    },
    score: 20,
  },
  {
    player: {
      login: 'ida',
      nick: '$f00ida',
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
      setTimeout(() => resolve(response), getRandomApiMockResponseTime());
    });
  },
};

export default ScoresResourceMock;
