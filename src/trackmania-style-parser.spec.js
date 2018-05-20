import trackmaniaStyleParser from './trackmania-style-parser';
import { PLAYER } from './resources/players/mock';

describe('trackmaniaStyleParser', () => {
  it('should parse', () => {
    expect(trackmaniaStyleParser(PLAYER.nick)).toMatchSnapshot();
  });

  it('should strip links', () => {
    const nickWithLink = `$l[https://example.com]${PLAYER.nick}`;
    const parsedNick = trackmaniaStyleParser(nickWithLink);
    expect(parsedNick).not.toContain('<a');
    expect(parsedNick).not.toContain('href');
  });
});
