import React, { Component } from 'react'
import PropsTypes from 'prop-types'

export default class App extends Component {
  render() {
    return (
      <div>
        <ChildCpn name='fyy' age={18} height={180} names={['aa','bb']}/>
        <ChildCpn/>
      </div>
    )
  }
}

// function ChildCpn(props) {
//   const {name,age,height} = props;
//   const {names} = props;
//   return (
//     <div>
//         子组件展示数据：{name + ' ' + age + ' ' + height}
//         <ul>
//           {
//             names.map((item,index) => {
//               return <li>{item}</li>
//             })
//           }
//         </ul>
//     </div>
//   )
// }

// 类型限制
// ChildCpn.propTypes = {
//   name: PropsTypes.string,
//   age: PropsTypes.number,
//   height: PropsTypes.number,
//   names: PropsTypes.array
// }

// // 默认值
// ChildCpn.defaultProps = {
//   name: 'why',
//   age: 30,
//   height: 180,
//   names: ['aa','bb']
// }

// 也可写在类的静态属性中
class ChildCpn extends Component{
  constructor(props){
    super(props)
  }

  static propTypes = {
    name: PropsTypes.string,
    age: PropsTypes.number,
    height: PropsTypes.number,
    names: PropsTypes.array
  }

  static defaultProps = {
    name: 'why',
    age: 30,
    height: 180,
    names: ['aa','bb']
  }

  render() {
    const {name,age,height} = this.props;
    const {names} = this.props;
    return (
      <div>
          子组件展示数据：{name + ' ' + age + ' ' + height}
          <ul>
            {
              names.map((item,index) => {
                return <li>{item}</li>
              })
            }
          </ul>
      </div>
    )
  }
}