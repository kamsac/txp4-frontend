import React from 'react';
import { shallow } from 'enzyme';
import UserAuthenticator from './index';
import { ACCESS_TOKEN } from '../../resources/auth/mock';

describe('<UserAuthenticator>', () => {
  it('should render', () => {
    const component = shallow(<UserAuthenticator
      loginUser={() => {}}
      isFetching
      isUserAuthenticated={false}
      magicLinkToken={ACCESS_TOKEN}
    />);
    expect(component).toMatchSnapshot();
  });

  it('should try to authenticate', () => {
    const loginUserSpy = jest.fn();
    shallow(<UserAuthenticator
      loginUser={loginUserSpy}
      isFetching={false}
      isUserAuthenticated={false}
      magicLinkToken={ACCESS_TOKEN}
    />);
    expect(loginUserSpy).toBeCalledWith(ACCESS_TOKEN);
  });

  it('should redirect when authenticated to /inventory page', () => {
    const component = shallow(<UserAuthenticator
      loginUser={() => {}}
      isFetching={false}
      isUserAuthenticated
      magicLinkToken={ACCESS_TOKEN}
    />);
    const redirect = component.find('Redirect[to="/inventory"]');
    expect(redirect.length).toEqual(1);
  });
});
