// Character cluster（字符簇），把所有的元音字符放到一个方括号里
let s = 'zhangZhiyongHangzhouzzzz'
const r = /[a-g]/
console.log(s.match(r));  // [ 'h', index: 1, input: 'zhangZY', groups: undefined ]

const r1 = /[z]/gi       // 忽略大小写且全文查找  或者ig
console.log(s.match(r1));