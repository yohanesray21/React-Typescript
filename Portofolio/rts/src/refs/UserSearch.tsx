import React, { useEffect, useRef, useState } from 'react';

const users = [
  { name: 'Sarah', age: 20 },
  { name: 'Sarah', age: 20 },
  { name: 'Sarah', age: 20 },
];

export const UserSearch: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();
  const [name, setName] = useState('');

  useEffect(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.focus();
  }, []);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onClick = () => {
    const findUser = users.find((user) => {
      return user.name === name;
    });

    setUser(findUser);
  };

  return (
    <div>
      User Search
      <div>
        <input ref={inputRef} value={name} onChange={onChange} />
        <button onClick={onClick}>Find Me!</button>
      </div>
      <h1>{user && user.name}</h1>
      <h1>{user && user.age}</h1>
    </div>
  );
};
