export type User = {
  id?: string;
  name: string;
  age: number;
  subscribedStatus: 'Subscribed' | 'Not Subscribed' | 'Other';
  employmentStatus: 'Employed' | 'Unemployed';
  selected: boolean;
};

export type SubscribeStatusOptions = {
  title: 'Subscribed' | 'Not Subscribed' | 'Other';
  value: 'Subscribed' | 'Not Subscribed' | 'Other';
};
