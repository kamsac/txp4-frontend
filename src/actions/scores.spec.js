import moxios from 'moxios';
import { fetchScores, receiveScores } from './scores';
import { SCORES } from '../resources/scores/mock';
import dotenvConfiguration from '../dotenv-configuration';

test('receiveScores', () => {
  expect(receiveScores(SCORES)).toMatchSnapshot();
});

test('fetchScores', (done) => {
  moxios.install();
  dotenvConfiguration.API_URL = jest.fn().mockReturnValue('https://localhost:9000/api');

  const dispatchMock = jest.fn();
  moxios.withMock(() => {
    fetchScores()(dispatchMock);
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request
        .respondWith({
          status: 200,
          response: SCORES,
        })
        .then(() => {
          expect(request.url).toEqual(`${dotenvConfiguration.API_URL}/scores`);
          expect(dispatchMock).toBeCalledWith(receiveScores(SCORES));
          moxios.uninstall();
          done();
        });
    });
  });
});

test('fetchScores mock', (done) => {
  moxios.install();
  dotenvConfiguration.API_URL = jest.fn().mockReturnValue('');

  const dispatchMock = jest.fn();
  moxios.withMock(() => {
    fetchScores()(dispatchMock);
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request
        .respondWith({
          status: 200,
          response: SCORES,
        })
        .then(() => {
          expect(request.url).toEqual(`${dotenvConfiguration.API_URL}/scores`);
          expect(dispatchMock).toBeCalledWith(receiveScores(SCORES));
          moxios.uninstall();
          done();
        });
    });
  });
});
