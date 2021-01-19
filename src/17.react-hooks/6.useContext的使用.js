import React,{createContext} from 'react';
import UseContext from './pages/useContext';

export const User = createContext({name:'lili',age:18});
export default function App() {
  // 直接通过useContext()获取，参数是创建好的Context对象
  // 创建Context对象的方式没变，还是通过createContext
  
  return (
    <div>
      <User.Provider value={{name:'li',age:12,gender:'man'}}>
        <UseContext/>
      </User.Provider>
    </div>
  )
}
