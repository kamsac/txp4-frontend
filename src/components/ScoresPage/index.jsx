import React from 'react';
import Page from '../Page/index';
import MainScoreTable from '../../containers/MainScoreTable';

export default class ScoresPage extends React.Component {
  render() {
    return (
      <Page>
        <MainScoreTable />
      </Page>
    );
  }
}
