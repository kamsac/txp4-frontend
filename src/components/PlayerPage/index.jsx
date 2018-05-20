import React from 'react';
import PropTypes from 'prop-types';
import Page from '../Page';
import MainInventory from '../../containers/MainInventory';
import trackmaniaStyleParser from '../../trackmania-style-parser';

export default class PlayerPage extends React.Component {
  componentDidMount() {
    this.props.loadPlayer(this.props.playerLogin);
  }

  render() {
    const {
      playerNick,
    } = this.props;

    if (!playerNick) {
      return (
        <Page>
          <div />
        </Page>
      );
    }

    return (
      <Page>
        <div>
          <h1>
            <span
              dangerouslySetInnerHTML={{
                __html: trackmaniaStyleParser(this.props.playerNick),
              }}
            />&apos;s summary
          </h1>
          <MainInventory ownerLogin={this.props.playerLogin} />
        </div>
      </Page>
    );
  }
}

PlayerPage.propTypes = {
  playerLogin: PropTypes.string.isRequired,
  playerNick: PropTypes.string,
  loadPlayer: PropTypes.func.isRequired,
};

PlayerPage.defaultProps = {
  playerNick: null,
};
