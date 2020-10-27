# SpinWrap

### author: 王权 ; email: quan.wang@weimob.com

### 引用方式

```javascript
 import React from 'react';
 import { SpinWrap } from 'components';

    // ES7写法
    @SpinWrap()

    // ES5、ES6写法
    SpinWrap()(Component)

    class Demo extends React.Components {
        handleChange = () => {
            const { fetchAction, startSpin, stopSpin } = this.props;
            startSpin();
            await fetchAction();
            stopSpin();
        }
    }

```

### 配置参数

|       属性        |    说明     |   类型    |  必填   |  默认值  |
| :-------------: | :-------: | :-----: | :---: | :---: |
|   spinning  |  是否为加载中状态 | boolean  | false  |   false   |
|   size    |  组件大小，可选值为 `small` `default` `large`   | string  | false  |   'large'   |

### API文档说明

**具体API方法**

 - startSpin
   - 执行loading方法
- stopSpin
   - 关闭loading方法
- isSpin
  - loading状态


