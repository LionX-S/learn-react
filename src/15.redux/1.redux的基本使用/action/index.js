export const addAction = (num) => {
  return {
    type: "ADD_NUM",
    payload: num
  }
}

export const decreAction = (num) => {
  return {
    type: 'INCRE_NUM',
    payload: num
  }
}