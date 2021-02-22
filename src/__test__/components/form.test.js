import { render } from '@testing-library/react';
import React from 'react';
import Form from '../../components/form';

jest.mock('react-router-dom');

describe('<Form/>', () => {
  it('should render form with passing text ', () => {
    const { container, getByText, getByPlaceholderText } = render(
      <Form>
        <Form.Title>Sign In</Form.Title>

        <Form.Base onSubmit={() => {}} method="POST">
          <Form.Input placeholder="Email address" onChange={() => {}} />
          <Form.Input
            type="password"
            placeholder="Password"
            onChange={() => {}}
          />
          <Form.Submit disabled type="submit">
            SignIn
          </Form.Submit>
        </Form.Base>

        <Form.Text>
          New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
        </Form.Text>
        <Form.TextSmall>
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          Learn more.
        </Form.TextSmall>
      </Form>
    );
    expect(getByText('Sign In')).toBeTruthy();
    expect(getByText('New to Netflix?')).toBeTruthy();
    expect(getByText('SignIn').disabled).toBeTruthy();
    expect(getByPlaceholderText('Password')).toBeTruthy();
    expect(getByPlaceholderText('Email address')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
  it('form with an error ', () => {
    const { container, getByText, queryByText } = render(
      <Form>
        <Form.Error>
          The email address is already in use by another account.
        </Form.Error>
        <Form.Submit type="submit">Sign In</Form.Submit>
      </Form>
    );
    expect(
      getByText('The email address is already in use by another account.')
    ).toBeTruthy();
    expect(queryByText('Sign In').disabled).toBeFalsy();
  });
});
