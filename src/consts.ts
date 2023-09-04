import { ColumnFields } from './types/Table.type';
import { User } from './types/User.type';

export const DEFAULT_USER_INFO: User = {
  id: '0',
  name: '',
  age: 18,
  subscribedStatus: 'Not Subscribed',
  employmentStatus: 'Unemployed',
  selected: false,
};

export const TABLE_COLUMNS: Partial<ColumnFields> = {
  name: 'Name',
  age: 'Age',
  subscribedStatus: 'Subscription',
  employmentStatus: 'Employment',
};
