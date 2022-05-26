import ReactDOM from 'react-dom';
import EventComponents from './events/EventComponent';
import { UserSearch } from './refs/UserSearch';

const App = () => {
  const users = [
    { name: 'Sarah', age: 20 },
    { name: 'Alex', age: 20 },
    { name: 'Michael', age: 20 },
    { name: 'Yohanes', age: 20 },
  ];
  return (
    <div>
      {/* <EventComponents /> */}
      {/* <UserSearch users={users} /> */}
      <UserSearch />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
