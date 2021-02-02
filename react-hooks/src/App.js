import { useState, memo } from 'react';
import './App.css';
import { TestUseMemo } from './components/useMemo';

function App() {
  const [ number, setNumber ] = useState(0);
  const [ test, setTest ] = useState({number:0});
  const ChildBProps = {
    test
  }
  return (
    <>
      <TestUseMemo
        count={number}
        onCountChange={(val) => {setNumber(val);}}/>
      <ChildB {...ChildBProps}/>
      <button onClick={() => { setTest({ now: number })}}>测试</button>
      <button onClick={() => { setNumber(0); }}>测试2</button>
    </>
  );
}

const ChildB = memo((props) => {
  const { test } = props;
  console.log('ChildB', test);
  return (
    <div>xxx</div>
  )
})

export default App;
