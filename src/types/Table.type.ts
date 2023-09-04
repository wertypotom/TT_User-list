import { User } from './User.type';

type UserKeys = keyof User;

export type ColumnFields = Record<
  UserKeys,
  'Name' | 'Age' | 'Employment' | 'Subscription'
>;
