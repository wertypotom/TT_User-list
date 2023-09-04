import { DEFAULT_USER_INFO, TABLE_COLUMNS } from '@/consts';
import useLocalStorage from '@/hooks/useLocalStorage';
import { ColumnFields } from '@/types/Table.type';
import { User } from '@/types/User.type';
import {
  Dispatch,
  SetStateAction,
  createContext,
  useMemo,
  useState,
} from 'react';

type TypeSetState<T> = Dispatch<SetStateAction<T>>;

type UserProviderProps = {
  children: React.ReactNode;
};

type UserContextProviderProps = {
  userInfo: User;
  setUserInfo: TypeSetState<User>;
  users: User[];
  setUsers: TypeSetState<User[]>;
  TABLE_COLUMNS: Partial<ColumnFields>;
};

export const UserContext = createContext<UserContextProviderProps>({
  userInfo: DEFAULT_USER_INFO,
  setUserInfo: () => {},
  users: [],
  setUsers: () => {},
  TABLE_COLUMNS,
});

export const UserProvider = ({ children }: UserProviderProps) => {
  const { getFromLocalStorage } = useLocalStorage();
  const [userInfo, setUserInfo] = useState<User>(DEFAULT_USER_INFO);
  const [users, setUsers] = useState<User[]>(
    getFromLocalStorage<User[]>('users') || []
  );

  const value = useMemo(
    () => ({ userInfo, setUserInfo, users, setUsers, TABLE_COLUMNS }),
    [users, userInfo]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
