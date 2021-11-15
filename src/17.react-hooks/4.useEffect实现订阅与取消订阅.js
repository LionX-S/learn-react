import React,{useEffect}from 'react'

export default function App() {
  // 传入第二个参数[],会进行优化，如果不传入，则当前组件重新渲染一次，useEffect则也会重新执行一次
  // 第二个参数为数组，元素为依赖的数据，只有依赖的数据更新时才会重新执行。
  useEffect(() => {
    console.log('订阅消息');
    // 返回一个函数，则会在组件卸载时执行,
    // 这个返回的函数类似于unmout卸载周期函数
    return () => {
      console.log('取消订阅');
    }
  },[]);
  return (
    <div>
      
    </div>
  )
}
