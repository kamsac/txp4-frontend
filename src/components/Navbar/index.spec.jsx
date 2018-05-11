import React from 'react';
import { shallow } from 'enzyme';
import Navbar from './index';
import dotenvConfiguration from '../../dotenv-configuration';
import { PLAYER } from '../../resources/player/mock';

describe('<Navbar>', () => {
  it('should render', () => {
    dotenvConfiguration.API_URL = jest.fn().mockReturnValue('https://localhost:9000/api');
    const component = shallow(<Navbar
      logoutUser={() => null}
      isUserLogged={false}
    />);
    expect(component).toMatchSnapshot();
  });

  it('should add "login mock" button when no api url is defined', () => {
    dotenvConfiguration.API_URL = jest.fn().mockReturnValue('');
    const component = shallow(<Navbar
      logoutUser={() => null}
      isUserLogged={false}
    />);
    expect(component).toMatchSnapshot();
  });

  it('should try to logout user on logout button click', () => {
    const logoutUserSpy = jest.fn();
    const component = shallow(<Navbar
      logoutUser={logoutUserSpy}
      userLogin={PLAYER.login}
      userNick={PLAYER.nick}
      isUserLogged
    />);
    const logoutButton = component.find('.NavigationItem__anchor').filterWhere(wrapper => wrapper.text() === 'Logout');
    logoutButton.simulate('click');
    expect(logoutUserSpy).toBeCalled();
  });
});
