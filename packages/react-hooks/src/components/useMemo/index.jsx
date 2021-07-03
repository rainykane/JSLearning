import React from 'react';

export function TestUseMemo (props) {
  const { count, onCountChange } = props;

  console.log('TestUseMemo');
  return (
    <>
      <div>{count}</div>
      <button onClick={() => (onCountChange(count + 1))}>按钮A</button>
    </>
  )
}