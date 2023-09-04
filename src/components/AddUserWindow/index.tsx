import React from 'react';
import { useUser } from '@/hooks/useUser';
import styles from './index.module.css';
import { Button, Input, Select, Checkbox, Switch } from '@/UI';
import { SubscribeStatusOptions } from '@/types/User.type';
import { useTheme } from '@/hooks/useTheme';

const AddUserWindow = () => {
  const {
    handleCheckboxChange,
    handleDecrementAge,
    handleFormFieldsChange,
    handleIncrementAge,
    hanldeUserSubmit,
    handleDeleteUsers,
    userInfo,
  } = useUser();
  const { theme, handleChangeTheme } = useTheme();

  return (
    <div className={`${styles.container} ${theme === 'light' && styles.light}`}>
      <span className={styles.label}>Insert Row</span>
      <Input
        name='name'
        type='text'
        value={userInfo.name}
        onChange={handleFormFieldsChange}
      />
      <Input
        type='number'
        name='age'
        value={userInfo.age}
        onChange={() => {}}
        decrementBtnClick={handleDecrementAge}
        incrementBtnClick={handleIncrementAge}
      />
      <Select<SubscribeStatusOptions>
        onChange={handleFormFieldsChange}
        options={[
          { title: 'Not Subscribed', value: 'Not Subscribed' },
          { title: 'Subscribed', value: 'Subscribed' },
          { title: 'Other', value: 'Other' },
        ]}
        value={userInfo.subscribedStatus}
        name='subscribedStatus'
      />
      <Checkbox
        title='Employed'
        type='checkbox'
        name='employmentStatus'
        checked={userInfo.employmentStatus === 'Employed'}
        value={userInfo.employmentStatus}
        onChange={handleCheckboxChange}
      />
      <Button title='Insert' onClick={hanldeUserSubmit} />
      <hr className={styles['devision-line']} />
      <Switch label='Mode' value={theme} onChange={handleChangeTheme} />
      <Button title='Delete' onClick={handleDeleteUsers} />
    </div>
  );
};

export default AddUserWindow;
