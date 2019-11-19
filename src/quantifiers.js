{
    let str = 'The Colors of the rainbow have many colours and the rainbow does not  have a single colour.';
    let re = /colou?rs?/ig;
    console.log(str.match(re));    // 找出所有的颜色
}

{
    let str = "These are some phone numbers 917-555-1234. Also, you can call me at 646.555.1234 and " +
        "of course I'm always reachable at (212)867-5309.";
    // 想找出5个字母组成的单词
    let re = /\b\w{5}\b/g;
    console.log(str.match(re));
}

{
    let str = 'The lynk is quite a link don\'t you think? l nk l(nk'
    let re = /l[yi (]nk/g;
    console.log(str.match(re));
}
