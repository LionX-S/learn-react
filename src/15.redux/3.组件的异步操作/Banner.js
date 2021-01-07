import React, { Component } from 'react'
import { connect } from 'react-redux';
import {getBannerData} from './actions/index';

class Banner extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.getBannerData();
  }
  render() {
    console.log(this.props.bannerList)
    return (
      <div>
        <ul>
          {this.props.bannerList.map((item,index) => {
            return <li>{item.title}</li>
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  bannerList: state.banner
})

const mapDispatchToProps = (dispatch) => {
  return {
    getBannerData: () => {
      dispatch(getBannerData);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Banner)
