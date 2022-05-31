import { bugAdded, bugResolved } from './actions';
import store from './store';

store.subscribe(() => {
  console.log('store changed!', store.getState());
});

store.dispatch(bugAdded('Bug 1100'));
store.dispatch(bugResolved(1));

// unsubscribe();

// store.dispatch({
//   type: actions.BUG_REMOVE,
//   payload: {
//     id: 1,
//   },
// });

console.log(store.getState());
