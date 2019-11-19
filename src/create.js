// 可以用正则表达式字面量和RegExp的构造函数构建正则
{
    let re = /ab*c/;                                // *前面字符出现0次或多次
    let re2 = new RegExp('ab+c');           // +前面字符至少出现一次

    let str = 'acdefg';
    console.log(str.match(re));
}


