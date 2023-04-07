import userEvent from "@testing-library/user-event";
import React, { useState } from "react";

export default function App() {
	const [age, setAge] = useState(18);
	const [count, setCount] = useState(0);
	const [friends, setFriends] = useState(["kebi", "jordan"]);
	const [students, setStudents] = useState([
		{
			name: "李磊",
			age: 18
		},
		{
			name: "韩梅梅",
			age: 18
		}
	]);

	function incermentAge(index) {
		const newArr = [...students];
		newArr[index].age += 1;
		setStudents(newArr);
	}

	return (
		<div>
			<h2>{age}</h2>
			<h2>{count}</h2>
			{/* 复杂数据展示 */}
			<ul>
				{friends.map((item, index) => {
					return <li>{item}</li>;
				})}
			</ul>
			<button onClick={(e) => setFriends([...friends, "derzon"])}>
				添加朋友
			</button>

			{/* 复杂数据更改 */}
			<ul>
				{students.map((item, index) => {
					return (
						<li>
							<span>
								姓名：{item.name}
								年龄：{item.age}
								<button onClick={(e) => incermentAge(index)}>+1</button>
							</span>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
