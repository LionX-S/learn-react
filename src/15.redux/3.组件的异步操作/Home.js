import axios from "axios";
import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { bannerData, recommandData } from "./actions";

class Home extends PureComponent {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    axios({
      url: "http://123.207.32.32:8000/home/multidata",
    }).then((res) => {
      console.log(res);
      const data = res.data.data;
      this.props.getBannerData(data.banner.list);
      this.props.getRecommandData(data.recommend.list);
    });
  }
  render() {
    return (
      <div>
        <ul>
          {this.props.banner.map((item) => {
            return <li>{item.title}</li>
          })}
        </ul>
        <ul>
          {this.props.command.map((item) => {
            return <li>{item.title}</li>
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    banner: state.banner,
    command: state.command,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getBannerData: (data) => {
      dispatch(bannerData(data));
    },
    getRecommandData: (data) => {
      dispatch(recommandData(data));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
