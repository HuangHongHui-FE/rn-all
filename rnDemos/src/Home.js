import { View, Text, FlatList } from 'react-native';
import * as React from 'react';

import styles from './style';
function HomeScreen({ navigation }) {

  return (
    <View style={styles.container}>
      <FlatList
        data={[
          { key: 'API', path: 'Api' },
          { key: 'Components', path: '' },
          { key: 'Docs' , path: ''}
        ]}
        renderItem={({ item }) => <Text style={styles.item} onPress={() => pushPage(navigation, item.path)}>{item.key}</Text>}
      />
    </View>
  );
}
function pushPage(navigation, path) {
  console.log(path);
  navigation.push(path)
}


export default HomeScreen;