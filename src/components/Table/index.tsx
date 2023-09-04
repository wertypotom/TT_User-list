import React from 'react';
import styles from './index.module.css';
import { useUser } from '@/hooks/useUser';
import { User } from '@/types/User.type';
import { ColumnFields } from '@/types/Table.type';
import { TableRow } from '@/UI';
import { useTheme } from '@/hooks/useTheme';

const Table = () => {
  const { users, TABLE_COLUMNS, handleSelectUser } = useUser();
  const { theme } = useTheme();

  return (
    <div className={`${styles.container} ${theme === 'light' && styles.light}`}>
      <table>
        <thead>
          <TableRow<Partial<ColumnFields>>
            data={TABLE_COLUMNS}
            filled
            centerText
          />
        </thead>

        <tbody>
          {users.map((user) => (
            <TableRow<User>
              key={user.id}
              data={user}
              onRowClick={handleSelectUser}
              selected={user.selected}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
