
[参考文章](https://www.jianshu.com/p/7c4572638f30)

[部分代码出处](https://medium.com/@bouab.nabil/javascript-intermediate-mvvm-vanilla-flavour-7f7cfbdf2da6)[对应文章](https://github.com/nabilbouab/simple-mvvm)

## mvvm
- v层负责视图和model的绑定
- m层负责管理数据
- mv层负责 视图(表单元素)与m层的交互 m层到v层的交互
- 各层的交互方式是通过event机制

## mvc
- m层负责管理数据
- v层负责渲染, 在这里注册回调函数并进行渲染, 并且发布v层的事件
- c层负责注册v层的回调, 在回调中进行m层交互(数据修改)
- 各层的交互方式是通过event机制 Т
