import React from 'react';
import { shallow } from 'enzyme';
import ScoreTable from './index';
import { SCORES } from '../../resources/scores/mock';

test('<ScoreTable>', () => {
  const component = shallow(<ScoreTable
    scores={SCORES}
    requestScores={jest.fn}
  />);
  expect(component).toMatchSnapshot();
});

test('should display specified numbers of rows', () => {
  const rowsLimit = 3;
  const component = shallow(<ScoreTable
    rowsLimit={rowsLimit}
    scores={SCORES}
    requestScores={jest.fn}
  />);
  const rows = component.find('tbody tr');
  expect(rows.length).toEqual(rowsLimit);
});
