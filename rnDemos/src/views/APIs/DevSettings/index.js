import React from 'react';
import { Text, View, Button, DevSettings } from 'react-native';
import DescTextCom from '../../../components/DescText'
DevSettings.addMenuItem('Show Secret Dev Screen', () => {
  Alert.alert('Showing secret dev screen!');
});

const ApiScreen = () => {
  return (
    <View>
        <DescTextCom>对开发者菜单进行一些自定义。</DescTextCom>
        <Button title="Reload" onPress={() => DevSettings.reload()} />
    </View>
  )
}


export default ApiScreen;