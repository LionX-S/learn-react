import React,{useState,useEffect} from 'react';

export default function App() {
  const [counter, setCounter] = useState(0);
  // didMount与update都会调用这个
  useEffect(() => {
    document.title = counter
  })
  return (
    <div>
      <h2>当前计数：{counter}</h2>
      <button onClick={e => setCounter(counter + 1)}>+1</button>
    </div>
  )
}
