## rn_demos

### 目录结构

```
rnDemos
	Cli
		newKnow  				// 自动创建新的路由与组件
	src
		components
			DescText.js			// 描述组件，插槽进描述的值
		views
			APIs				// API相关
			Coms				// 组件知识相关
			Docs				// 官网文档相关
			
```



### 配置react-nativation

react-nativation 6.x

https://blog.csdn.net/wxl1390/article/details/126020277

```js
yarn add @react-navigation/native
yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
按文档来修改文件。。。，重启
```

### 搞Cli工具

#### newKnow: 快速创建新的路由与组件

##### newKnow    cli的使用：

1. 更改config里newKnow里面的内容，dir为views直属文件夹，items里为小文件夹

   ```
   const newKnow = [
       {
           dir: 'AAA',  // string
           items: ['a', 'b', 'c']
       },
       {
           dir: 'Apis',
           items: ["Alert", "RootTag", "Share", "StyleSheet"]
       }
   ]
   
   module.exports = {
       newKnow
   }
   ```

2. 在Cli目录下：

   ```
   node newKnow.js
   ```

3. 重新npm run android



##### 新建路由以及组件的流程梳理:

App.js里

```
import Appearance from './src/views/APIs/Appearance/index'

<Stack.Screen name="Appearance" component={Appearance} />
```

这里需要加个参数：（directoryName, apiName）  // views下大文件夹名称， 对应里面需要新建的路由文件夹以及index.js文件，以及后面配置的apiName.

- 如果之前没有direatoryName, 就新建这个文件夹，并且新建index.js文件以及data.js, index.js里放入下面代码，能改就改下function组件名ApiScreen，以及title

  ```jsx
  import React from 'react';
  import { SectionList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
  
  // 外部引入，方便cli工具
  import {data} from './data.js'
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 22
    },
    sectionHeader: {
      paddingTop: 2,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 2,
      fontSize: 14,
      fontWeight: 'bold',
      backgroundColor: '#00fa9a',
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  })
  
  const ApiScreen = ({ navigation }) => {
    // console.log(data);
    return (
      <View style={styles.container}>
        {/* 长列表 */}
        <SectionList
          sections={[
            { title: 'API', data}
          ]}
          renderItem={({ item }) => <TouchableOpacity onPress={() => pushPage(navigation, item)}><Text style={styles.item}>{item}</Text></TouchableOpacity>}
          renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
  
  function pushPage(navigation, path) {
    console.log(path);
    navigation.push(path);
  }
  
  export default ApiScreen;
  ```

  data-放入

  ```
  const data = ['AccessibilityInfo', 'Alert', 'Animated', 'Appearance', 'AppState', 'DevSettings',
      'Dimensions', 'Easing', 'InteractionManager', 'Keyboard', 'LayoutAnimation', 'LayoutAnimation2',
      'LayoutAnimation3']
  
  
  export {
      data
  };
  ```

- 如果有了directoryName，就进行apiName的创建；注意动态替换里面需要替换的弹窗， APP(做不做都可)

  ```
  import React, { useState } from "react";
  import { View, StyleSheet, Button, Alert, Text } from "react-native";
  import DescTextCom from '../../../components/DescText'
  const App = () => {
      return (
          <View>
              <DescTextCom>弹窗</DescTextCom>
          </View>
      );
  }
  
  export default App;
  ```

  

view - APIs - data.js里

```
// data新增一项
```



















### 差异点

1. 默认布局flex， 默认方向column。
2. border等复合属性，需要分开写。
3. 文字必须包裹在Text标签里面
4. css样式小驼峰形式，backgroundColor...

### 可能的疑问？

- 为什么要有这个仓库
  - 熟悉官网组件， API，以及解决过程中的问题，总结出差异点，同时在注释中加入自己的思考。
  - 锻炼技能：例如Cli工具的编写
  
- newKnow    cli里没用handlebars 或者 art-template的原因:

  只是做了H&API&H简单的字符串的替换，str.replaceAll方法可以直接解决。



### 优化点：

- Interactionmanager 可以将一些耗时较长的工作安排到所有互动或动画完成之后再进行。这样可以保证 JavaScript 动画的流畅运行。
- 长列表：SectionList。。。本组件继承自`PureComponent`而非通常的`Component`，这意味着如果其`props`在`浅比较`中是相等的，则不会重新渲染。
- 根据图像素密度获得指定大小的图片：getPixelSizeForLayoutSize
- 

### next pages:

##### RN 基于Metro 拆包实战

https://juejin.cn/post/7106028240438820871#heading-1

##### expo-constants

https://docs.expo.dev/versions/latest/sdk/constants/





### err

1. TypeError: cli.init is not a function for react native

   https://stackoverflow.com/questions/72768245/typeerror-cli-init-is-not-a-function-for-react-native

   ```
   npm uninstall -g react-native
   npm uninstall -g react-native-cli
   
   npm install -g react-native
   npm install -g react-native-cli
   
   npm -g list
   yarn global list
   
   yarn global remove react-native
   yarn global remove react-native-cli
   
   yarn global add react-native
   yarn global add react-native-cli
   ```

2. Cannot find module '@babel/parser', Cannot find module 'metro/src/shared/output/bundle'

   ```
   删掉package.lock.json, node_modules
   npm i
   ```

3. `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`

   https://github.com/facebook/react-native/issues/28558

   `useNativeDriver`这有助于提高性能并修复在不传递强制属性的情况下使用动画时出现的大量警告。

   