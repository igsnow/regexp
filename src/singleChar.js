let str = "These are some phone numbers 917-555-1234. Also, you can call me at 646.555.1234 and " +
    "of course I'm always reachable at (212)867-5309.";

// 匹配单个字符
{
    let re = /\w/g;      // 将匹配所有word，()除外
    // console.log(str.match(re));
    // console.log(re.test(str));
}

{
    let re = /\w\w\w/g;   // 匹配一个连续串的规则 (连续3个字母或者数字)
    // console.log(str.match(re));
}

{
    let re = /\s\s/g;    // 匹配连续两个空格
    // console.log(str.match(re));
}
