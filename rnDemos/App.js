import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/Home';
// API的
import ApiScreen from './src/views/APIs'
import AccessibilityInfo from './src/views/APIs/AccessibilityInfo/index'
import Alert from './src/views/APIs/Alert/index'
import Animated from './src/views/APIs/Animated/index'
import Appearance from './src/views/APIs/Appearance/index'
import AppState from './src/views/APIs/AppState/index'
import DevSettings from './src/views/APIs/DevSettings/index'
import Dimensions from './src/views/APIs/Dimensions/index'
import Easing from './src/views/APIs/Easing/index'
import InteractionManager from './src/views/APIs/InteractionManager/index'
import Keyboard from './src/views/APIs/Keyboard/index'
import LayoutAnimation from './src/views/APIs/LayoutAnimation/index'
import LayoutAnimation2 from './src/views/APIs/LayoutAnimation/index2'
import LayoutAnimation3 from './src/views/APIs/LayoutAnimation/index3'
import Linking from './src/views/APIs/Linking/index'
import PanResponder from './src/views/APIs/PanResponder/index'
import PixelRatio from './src/views/APIs/PixelRatio/index'
import Platform from './src/views/APIs/Platform/index'
import PlatformColor from './src/views/APIs/PlatformColor/index'
// import Appearance from './src/views/APIs/Appearance/index'
// import Appearance from './src/views/APIs/Appearance/index'
// import Appearance from './src/views/APIs/Appearance/index'

// 组件的
import ComScreen from './src/views/Coms'

// 文档相关的
import DocScreen from './src/views/Docs'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      {/* 更改initialRouteName需要重新加载 */}
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />

        <Stack.Screen name="Api" component={ApiScreen} />
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

        <Stack.Screen name="Com" component={ComScreen} />

        <Stack.Screen name="Doc" component={DocScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;