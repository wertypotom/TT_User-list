import { DEFAULT_USER_INFO } from '@/consts';
import { UserContext } from '@/context/UserProvider';
import { User } from '@/types/User.type';
import { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import useLocalStorage from './useLocalStorage';

export const useUser = () => {
  const { setUserInfo, setUsers, TABLE_COLUMNS, userInfo, users } =
    useContext(UserContext);

  const { setToLocalStorage } = useLocalStorage();

  const handleSelectUser = (user: User) => {
    const updatedUsers = users.map((u) =>
      u.id === user.id ? { ...u, selected: !u.selected } : u
    );

    setToLocalStorage('users', updatedUsers);
    setUsers(updatedUsers);
  };

  const handleDeleteUsers = () => {
    const updatedUsers = users.filter((u) => !u.selected);

    setToLocalStorage('users', updatedUsers);
    setUsers(updatedUsers);
  };

  const hanldeUserSubmit = () => {
    if (!userInfo.name) return;

    const user: User = { ...userInfo, id: uuidv4() };

    setToLocalStorage('users', [...users, user]);
    setUserInfo(DEFAULT_USER_INFO);
    setUsers((prev) => [...prev, user]);
  };

  const handleFormFieldsChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setUserInfo({
      ...userInfo,
      [event.target.name]: event.target.value,
    });
  };

  const handleCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setUserInfo({
      ...userInfo,
      employmentStatus:
        event.target.value === 'Employed' ? 'Unemployed' : 'Employed',
    });
  };

  const handleIncrementAge = () => {
    setUserInfo({
      ...userInfo,
      age: (userInfo.age += 1),
    });
  };

  const handleDecrementAge = () => {
    if (userInfo.age < 19) return;

    setUserInfo({
      ...userInfo,
      age: (userInfo.age -= 1),
    });
  };

  return {
    handleFormFieldsChange,
    handleCheckboxChange,
    handleIncrementAge,
    handleDecrementAge,
    hanldeUserSubmit,
    handleSelectUser,
    handleDeleteUsers,
    userInfo,
    users,
    TABLE_COLUMNS,
  };
};
