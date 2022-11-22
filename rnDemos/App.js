import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/Home';
// API的
import ApisScreen from './src/views/Apis'
import AccessibilityInfo from './src/views/Apis/AccessibilityInfo/index'
import RootTag from './src/views/Apis/RootTag/index'
import Share from './src/views/Apis/Share/index'
import StyleSheet from './src/views/Apis/StyleSheet/index'
import Systrace from './src/views/Apis/Systrace/index'
import Transforms from './src/views/Apis/Transforms/index'
import Vibration from './src/views/Apis/Vibration/index'
import useColorScheme from './src/views/Apis/useColorScheme/index'
import useWindowDimensions from './src/views/Apis/useWindowDimensions/index'
import BackHandler from './src/views/Apis/BackHandler/index'
import PermissionsAndroid from './src/views/Apis/PermissionsAndroid/index'
import ToastAndroid from './src/views/Apis/ToastAndroid/index'
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
import ActivityIndicator from './src/views/Coms/ActivityIndicator/index'
import Button from './src/views/Coms/Button/index'
import FlatList from './src/views/Coms/FlatList/index'
import Image from './src/views/Coms/Image/index'
import ImageBackground from './src/views/Coms/ImageBackground/index'
import KeyboardAvoidingView from './src/views/Coms/KeyboardAvoidingView/index'
import Modal from './src/views/Coms/Modal/index'
import Pressable from './src/views/Coms/Pressable/index'
import RefreshControl from './src/views/Coms/RefreshControl/index'
import ScrollView from './src/views/Coms/ScrollView/index'
import SectionList from './src/views/Coms/SectionList/index'
import StatusBar from './src/views/Coms/StatusBar/index'
import Switch from './src/views/Coms/Switch/index'
import Text from './src/views/Coms/Text/index'
import TextInput from './src/views/Coms/TextInput/index'
import TouchableHighlight from './src/views/Coms/TouchableHighlight/index'
import TouchableOpacity from './src/views/Coms/TouchableOpacity/index'
import TouchableWithoutFeedback from './src/views/Coms/TouchableWithoutFeedback/index'
import View from './src/views/Coms/View/index'
import VirtualizedList from './src/views/Coms/VirtualizedList/index'
import DrawerLayoutAndroid from './src/views/Coms/DrawerLayoutAndroid/index'
import TouchableNativeFeedback from './src/views/Coms/TouchableNativeFeedback/index'

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
        <Stack.Screen name="RootTag" component={RootTag} />
        <Stack.Screen name="Share" component={Share} />
        <Stack.Screen name="StyleSheet" component={StyleSheet} />
        <Stack.Screen name="Systrace" component={Systrace} />
        <Stack.Screen name="Transforms" component={Transforms} />
        <Stack.Screen name="Vibration" component={Vibration} />
        <Stack.Screen name="useColorScheme" component={useColorScheme} />
        <Stack.Screen name="useWindowDimensions" component={useWindowDimensions} />
        <Stack.Screen name="BackHandler" component={BackHandler} />
        <Stack.Screen name="PermissionsAndroid" component={PermissionsAndroid} />
        <Stack.Screen name="ToastAndroid" component={ToastAndroid} />
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
        <Stack.Screen name="ActivityIndicator" component={ActivityIndicator} />
        <Stack.Screen name="Button" component={Button} />
        <Stack.Screen name="FlatList" component={FlatList} />
        <Stack.Screen name="Image" component={Image} />
        <Stack.Screen name="ImageBackground" component={ImageBackground} />
        <Stack.Screen name="KeyboardAvoidingView" component={KeyboardAvoidingView} />
        <Stack.Screen name="Modal" component={Modal} />
        <Stack.Screen name="Pressable" component={Pressable} />
        <Stack.Screen name="RefreshControl" component={RefreshControl} />
        <Stack.Screen name="ScrollView" component={ScrollView} />
        <Stack.Screen name="SectionList" component={SectionList} />
        <Stack.Screen name="StatusBar" component={StatusBar} />
        <Stack.Screen name="Switch" component={Switch} />
        <Stack.Screen name="Text" component={Text} />
        <Stack.Screen name="TextInput" component={TextInput} />
        <Stack.Screen name="TouchableHighlight" component={TouchableHighlight} />
        <Stack.Screen name="TouchableOpacity" component={TouchableOpacity} />
        <Stack.Screen name="TouchableWithoutFeedback" component={TouchableWithoutFeedback} />
        <Stack.Screen name="View" component={View} />
        <Stack.Screen name="VirtualizedList" component={VirtualizedList} />
        <Stack.Screen name="DrawerLayoutAndroid" component={DrawerLayoutAndroid} />
        <Stack.Screen name="TouchableNativeFeedback" component={TouchableNativeFeedback} />

        <Stack.Screen name="Docs" component={DocsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;