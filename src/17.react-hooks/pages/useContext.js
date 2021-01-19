import React,{useContext} from 'react';
import {User} from '../6.useContext的使用';

export default function useContextUse() {
  const {name,age,gender} = useContext(User);
  return (
    <div>
      <span>姓名:{name},年龄:{age},性别:{gender}</span>
    </div>
  )
}
