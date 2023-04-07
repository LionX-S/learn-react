import React, { Component } from "react";

// 1.创建Context对象
const UserContext = React.createContext({
	nickname: "aaa",
	level: -1
});
function Profile() {
	return (
		<div>
			<ProfileHeader />
			<ProfileHeader2 />
			<ul>
				<li>1</li>
				<li>2</li>
				<li>3</li>
				<li>4</li>
			</ul>
		</div>
	);
}
// 获取数据的第二种方式 函数式组件
function ProfileHeader2() {
	return (
		<UserContext.Consumer>
			{(value) => {
				return (
					<div>
						<h2>用户昵称:{value.nickname}</h2>
						<h2>用户等级:{value.level}</h2>
					</div>
				);
			}}
		</UserContext.Consumer>
	);
}

class ProfileHeader extends Component {
	render() {
		return (
			<div>
				<h2>用户昵称:{this.context.name}</h2>
				<h2>用户等级:{this.context.level}</h2>
			</div>
		);
	}
}
// 3.获取 第一种方式 类组件获取
ProfileHeader.contextType = UserContext;

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "jkk",
			level: 8
		};
	}
	render() {
		return (
			<div>
				{/* 2.将创建出来的UserContext包裹组件 且要有一个value属性，等于要共享（传递）的值 */}
				<UserContext.Provider value={this.state}>
					<Profile />
				</UserContext.Provider>
			</div>
		);
	}
}
