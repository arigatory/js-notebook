import { ChildAsFC } from './Child';

const Parent = () => {
  return <ChildAsFC color="red blue green"
    onClick={() => console.log('hi')}>
    <h1>hihi</h1>
  </ChildAsFC>;
};

export default Parent;
