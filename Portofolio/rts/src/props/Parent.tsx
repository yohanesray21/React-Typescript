import { ChildFC } from './Child';

const Parent = () => {
  return (
    <ChildFC color="red" onClick={() => console.log('clicked')}>
      asdasdasdas
    </ChildFC>
  );
};

export default Parent;
