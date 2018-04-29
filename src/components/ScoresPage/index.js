import React from 'react';
import Page from '../Page';
import MainScoreTable from '../../containers/MainScoreTable';

export default class ScoresPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Page>
        <MainScoreTable />
      </Page>
    );
  }
}
