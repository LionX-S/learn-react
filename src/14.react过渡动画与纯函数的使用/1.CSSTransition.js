import React, { PureComponent } from "react";
import { CSSTransition } from "react-transition-group";
import { Card, Avatar } from "antd";
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import './1.CSSTransition.css';


const { Meta } = Card;

export default class App extends PureComponent {
  constructor(props){
    super(props);
    this.state ={
      isShow: true
    }
  }
  render() {
    return (
      <div>
        <button onClick={e => {this.setState({isShow:!this.state.isShow})}}>显示/隐藏</button>
        <CSSTransition in={this.state.isShow} classNames="card" timeout={300}>
          <Card
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title="Card title"
              description="This is the description"
            />
          </Card>
        </CSSTransition>
      </div>
    );
  }
}
