# 正则表达式
#### 基本语法

  single char | quantifiers(数量) | position(位置)
  --- | --- | ---
  \d 匹配数字 | * 0个或者更多 | ^一行的开头
  \w 匹配word(数字、字母) | + 1个或更多，至少1个 | $一行的结尾
  \W 匹配非word(数字、字母) | ? 0个或1个,一个Optional | \b 单词"结界"(word bounds)
  \s 匹配white space(包括空格、tab等) | {min,max}出现次数在一个范围内	
  \S 匹配非white space(包括空格、tab等) | {n}匹配出现n次的 
  . 匹配任何，任何的字符 | 


#### 注意事项 
   ```
    /\w/i    忽略大小写  
    /\w/g    全局匹配   
    re.test(str)   =>  boolean  
    str.match(re)  =>  array  
   ```

#### 字符分类
   ```
     分类符[]
        [abc] => a 或 b 或 c
        [-.]  => 符号- 或 .
      (注意：.在[]里面表示符号，在外面表示通配符，可以用\.转义)      
   ```
