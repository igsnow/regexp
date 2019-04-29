{
    <!-- \d 可以匹配一个数字 -->
    let reg = new RegExp(/00\d/)
    console.log(reg.test('007'));

}

{
    <!-- \w 可以匹配一个字母或数字 -->
    let reg = new RegExp(/\w\w\d/)
    console.log(reg.test('py3'));
}

{
    <!-- . 可以匹配任意字符 -->
    let reg = new RegExp(/py./)
    console.log(reg.test('py!'));
}

{
    // 变长表达式中 * 可以匹配任意字符（含0个），
    //  + 表示至少一个字符，？表示0或1个字符，
    //  {n}表示n个字符，{n,m}表示n-m个字符

    let reg = new RegExp(/\d{3}\s+\d{3,8}/)
    console.log('ab123 456789'.match(reg));
}
