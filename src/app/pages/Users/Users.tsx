import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import useSelector from './store/user.selectors';
import { addUser, deleteUser } from './store/users.actions';

const Users: React.FC = () => {
  const dispatch = useDispatch();
  const { users } = useSelector();
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  return (
    <div>
      {users.map((user) => (
        <div
          role="button"
          tabIndex={0}
          key={user.id}
          onClick={() => dispatch(deleteUser(user))}
          onKeyDown={() => {}}
        >
          {user.name}
          {' '}
          {user.lastName}
        </div>
      ))}
      <input value={name} onChange={(e) => { setName(e.target.value); }} />
      <input value={lastName} onChange={(e) => { setLastName(e.target.value); }} />
      <button
        type="button"
        onClick={() => {
          dispatch(addUser({
            name,
            lastName,
            age: 1,
            id: name + lastName,
          }));
        }}
      >
        Add

      </button>
    </div>
  );
};

export default Users;
