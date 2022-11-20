import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/Home';
import ApiScreen from './src/views/APIs'


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      {/* 更改initialRouteName需要重新加载 */}
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Api" component={ApiScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;