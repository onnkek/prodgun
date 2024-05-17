import { CounterScheme } from 'entities/Counter';
import { UserScheme } from 'entities/User';
import { LoginScheme } from 'features/AuthByUsername';

export interface StateScheme {
  counter: CounterScheme;
  user: UserScheme;
  loginForm?: LoginScheme;
}