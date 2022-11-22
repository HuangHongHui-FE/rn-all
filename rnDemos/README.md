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

### Docs

##### 静态资源的引入

```
有my-icon.ios.png和my-icon.android.png，Packager 就会根据平台而选择不同的文件。
你还可以使用@2x，@3x这样的文件名后缀，来为不同的屏幕精度提供图片。
	.
    ├── button.js
    └── img
        ├── check.png
        ├── check@2x.png
        └── check@3x.png
        
        

```

### android与ios指南？？？





### get

##### 搜索第三方库：

https://reactnative.directory/

##### 编译优化-android:

```
npm run android --active-arch-only
```

在本地构建 Android 应用程序时，默认情况下构建所有 4 个[应用程序二进制接口 (ABI](https://developer.android.com/ndk/guides/abis) ) ：`armeabi-v7a`、、& 。`arm64-v8a``x86``x86_64`

但是，如果您在本地构建并测试您的模拟器或在物理设备上，您可能不需要构建所有这些。





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

- 如果你的[`FlatList`](https://reactnative.cn/docs/flatlist)渲染得很慢, 请确保你使用了[`getItemLayout`](https://reactnative.cn/docs/flatlist#getitemlayout)，它通过跳过对items的处理来优化你的渲染速度。

- `shouldComponentUpdate`函数来指明在什么样的确切条件下，你希望这个组件得到重绘, 利用`PureComponent`

- 图片的：直接修改尺寸，更好的方案是使用`transform: [{scale}]`的样式属性来改变尺寸。比如当你点击一个图片，要将它放大到全屏的时候，就可以使用这个属性。

- Touchable系列组件：如果有一项操作与点击事件所带来的透明度改变或者高亮效果发生在同一帧中，那么有可能在`onPress`函数结束之前我们都看不到这些效果。比如在`onPress`执行了一个`setState`的操作，这个操作需要大量计算工作并且导致了掉帧。对此的一个解决方案是将`onPress`处理函数中的操作封装到`requestAnimationFrame`中：

  ```
  handleOnPress() {
    requestAnimationFrame(() => {
      this.doExpensiveAction();
    });
  }
  ```

- 列表优化：

  - 使用优化缓存的图片库[](https://reactnative.cn/docs/optimizing-flatlist-configuration#使用优化缓存的图片库)

    您可以使用社区包（例如来自[@DylanVann](https://github.com/DylanVann)[的 react-native-fast-image](https://github.com/DylanVann/react-native-fast-image)）来获得更高性能的图像。列表中的每个图像都是一个实例。它到达钩子的速度越快，您的 Javascript 线程再次释放的速度就越快。`new Image()``loaded`

  - React 的`PureComponent`实现[`shouldComponentUpdate`](https://zh-hans.reactjs.org/docs/react-component.html#shouldcomponentupdate)与浅比较；

  - 如果您所有的列表项组件都具有相同的高度（或宽度，对于水平列表），则提供[getItemLayout 属性](https://reactnative.cn/docs/flatlist#getitemlayout)可以消除您`FlatList`管理异步布局计算的需要。这是一种非常理想的优化技术。

  - 使用 keyExtractor 或 key[](https://reactnative.cn/docs/optimizing-flatlist-configuration#使用-keyextractor-或-key)

    您可以将 设置[`keyExtractor`](https://reactnative.cn/docs/flatlist#keyextractor)为您的`FlatList`组件。此道具用于缓存并作为 React`key`来跟踪项目重新排序。

  - 避免在 renderItem 中使用匿名函数[](https://reactnative.cn/docs/optimizing-flatlist-configuration#避免在-renderitem-中使用匿名函数)

    将函数移出`renderItem`到 render 函数的外部，这样它就不会在每次调用 render 函数时重新创建自己。

    ```js
    const renderItem = ({ item }) => (
       <View key={item.key}>
          <Text>{item.title}</Text>
       </View>
     );
    return (
      // ...
      <FlatList data={items} renderItem={renderItem} />;
      // ...
    );
    ```

- 务必在卸载组件前清除定时器！

- 使用新的 Hermes 引擎

### next pages:

##### RN 基于Metro 拆包实战

https://juejin.cn/post/7106028240438820871#heading-1

##### expo-constants

https://docs.expo.dev/versions/latest/sdk/constants/

##### React Native包体积优化之图片优化



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

   