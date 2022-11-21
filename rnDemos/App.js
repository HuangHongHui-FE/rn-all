import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/Home';
// API的
import ApisScreen from './src/views/Apis'
import AccessibilityInfo from './src/views/Apis/AccessibilityInfo/index'
import Alert from './src/views/Apis/Alert/index'  
import Animated from './src/views/Apis/Animated/index'
import Appearance from './src/views/Apis/Appearance/index'
import AppState from './src/views/Apis/AppState/index'
import DevSettings from './src/views/Apis/DevSettings/index'
import Dimensions from './src/views/Apis/Dimensions/index'
import Easing from './src/views/Apis/Easing/index'
import InteractionManager from './src/views/Apis/InteractionManager/index'
import Keyboard from './src/views/Apis/Keyboard/index'
import LayoutAnimation from './src/views/Apis/LayoutAnimation/index'
import LayoutAnimation2 from './src/views/Apis/LayoutAnimation/index2'
import LayoutAnimation3 from './src/views/Apis/LayoutAnimation/index3'
import Linking from './src/views/Apis/Linking/index'
import PanResponder from './src/views/Apis/PanResponder/index'
import PixelRatio from './src/views/Apis/PixelRatio/index'
import Platform from './src/views/Apis/Platform/index'
import PlatformColor from './src/views/Apis/PlatformColor/index'
// import Appearance from './src/views/Apis/Appearance/index'
// import Appearance from './src/views/Apis/Appearance/index'
// import Appearance from './src/views/Apis/Appearance/index'

// 组件的
import ComsScreen from './src/views/Coms'

// 文档相关的
import DocsScreen from './src/views/Docs'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      {/* 更改initialRouteName需要重新加载 */}
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />

        <Stack.Screen name="Apis" component={ApisScreen} />
        <Stack.Screen name="AccessibilityInfo" component={AccessibilityInfo} />
        <Stack.Screen name="Alert" component={Alert} />
        <Stack.Screen name="Animated" component={Animated} />
        <Stack.Screen name="Appearance" component={Appearance} />
        <Stack.Screen name="AppState" component={AppState} />
        <Stack.Screen name="DevSettings" component={DevSettings} />
        <Stack.Screen name="Dimensions" component={Dimensions} />
        <Stack.Screen name="Easing" component={Easing} />
        <Stack.Screen name="InteractionManager" component={InteractionManager} />
        <Stack.Screen name="Keyboard" component={Keyboard} />
        <Stack.Screen name="LayoutAnimation" component={LayoutAnimation} />
        <Stack.Screen name="LayoutAnimation2" component={LayoutAnimation2} />
        <Stack.Screen name="LayoutAnimation3" component={LayoutAnimation3} />
        <Stack.Screen name="Linking" component={Linking} />
        <Stack.Screen name="PanResponder" component={PanResponder} />
        <Stack.Screen name="PixelRatio" component={PixelRatio} />
        <Stack.Screen name="Platform" component={Platform} />
        <Stack.Screen name="PlatformColor" component={PlatformColor} />
        {/* <Stack.Screen name="Animated" component={Animated} /> */}
        {/* <Stack.Screen name="Animated" component={Animated} /> */}
        {/* <Stack.Screen name="Animated" component={Animated} /> */}

        <Stack.Screen name="Coms" component={ComsScreen} />

        <Stack.Screen name="Docs" component={DocsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;