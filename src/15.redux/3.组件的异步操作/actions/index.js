import axios from "axios"

export const bannerData = (data) => {
  return {
    type:'BANNER',
    data
  }
}

export const recommandData = (data) => {
  return {
    type:'RECOMMAND',
    data
  }
}

// redux-thunk： 一般传入的函数定义在action中

export const getBannerData = (dispatch,getState) => {
  axios({
    url: "http://123.207.32.32:8000/home/multidata",
  }).then((res) => {
    console.log(res);
    const data = res.data.data;
    // 这里发送action，传递数据到reducer中
    dispatch(bannerData(data.banner.list));
  });
}