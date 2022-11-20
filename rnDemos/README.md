## rn_demos

### 目录结构

### 配置react-nativation

react-nativation 6.x

https://blog.csdn.net/wxl1390/article/details/126020277

```js
yarn add @react-navigation/native
yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
按文档来修改文件。。。，重启
```

























### next pages:

##### RN 基于Metro 拆包实战

https://juejin.cn/post/7106028240438820871#heading-1





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

   