// generator 生成器
function* fun() {
  // 返回用yield
  yield 'hello'
}

// 迭代器
const log = fun();
log.next();

console.log(log);