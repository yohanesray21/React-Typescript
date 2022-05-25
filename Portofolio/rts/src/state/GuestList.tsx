import { useState } from 'react';

export const GuestList: React.FC = () => {
  const [name, setName] = useState('');
  const [guest, setGuest] = useState<string[]>([]);

  const onClick = () => {
    setName('');

    setGuest([...guest, name]);
  };

  return (
    <div>
      <h1>Guest Name</h1>
      <h3>
        {guest.map((guest) => (
          <li key={guest}>{guest}</li>
        ))}{' '}
      </h3>

      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Add Guest</button>
    </div>
  );
};
