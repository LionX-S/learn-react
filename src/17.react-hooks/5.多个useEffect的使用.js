import React, {useEffect} from 'react'

export default function App() {
  // 多个useEffect按照顺序执行
  useEffect(() => {
    console.log('修改DOM');
  });
  useEffect(() => {
    console.log('订阅事件');
  },[]);
  useEffect(() => {
    console.log('网络请求');
  },[]);
  return (
    <div>
      
    </div>
  )
}
