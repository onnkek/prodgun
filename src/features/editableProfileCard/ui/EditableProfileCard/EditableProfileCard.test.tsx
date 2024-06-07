import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { EditableProfileCard } from './EditableProfileCard';
import { Profile } from 'entities/Profile';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { profileReducer } from '../../model/slice/profileSlice';
import { userEvent } from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import { $api } from 'shared/api/api';

const profile: Profile = {
  id: '1',
  first: 'testFirstname',
  lastname: 'testLastname',
  age: 1,
  currency: Currency.EUR,
  country: Country.USA,
  city: 'testCity',
  username: 'test'
};

describe('features/EditableProfileCard', () => {

  global.ResizeObserver = class MockedResizeObserver {
    observe = jest.fn();
    unobserve = jest.fn();
    disconnect = jest.fn();
  };

  const options = {
    initialState: {
      profile: {
        readonly: true,
        data: profile,
        form: profile,
      },
      user: {
        authData: {
          id: profile.id,
          username: profile.username
        }
      }
    },
    asyncReducers: {
      profile: profileReducer
    }
  };

  test('switch readonly mode', async () => {
    componentRender(<EditableProfileCard id='1' />, options);
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
    expect(screen.getByTestId('EditableProfileCardHeader.CancelButton')).toBeInTheDocument();
  });

  test('back values after cancel edit', async () => {
    componentRender(<EditableProfileCard id='1' />, options);
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
    await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));
    await userEvent.clear(screen.getByTestId('ProfileCard.lastname'));
    await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'user');
    await userEvent.type(screen.getByTestId('ProfileCard.lastname'), 'user');
    expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('user');
    expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('user');

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelButton'));
    expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue(profile.first);
    expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue(profile.lastname);
  });

  test('validation', async () => {
    componentRender(<EditableProfileCard id='1' />, options);
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
    await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));
    
    expect(screen.getByTestId('EditableProfileCard.Error.Text')).toBeInTheDocument();
  });

  test('success save', async () => {
    const mockPutReq = jest.spyOn($api, 'put');
    componentRender(<EditableProfileCard id='1' />, options);
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
    await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'user');
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));
    
    expect(mockPutReq).toHaveBeenCalled();
  });

});