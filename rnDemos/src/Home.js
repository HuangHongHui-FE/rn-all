import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import * as React from 'react';

import styles from './style';
function HomeScreen({ navigation }) {

  return (
    <View style={styles.container}>
      <FlatList
        data={[
          { key: 'Apis', path: 'Api' },
          { key: 'Components', path: 'Com' },
          { key: 'Docs', path: 'Doc' }
        ]}
        renderItem={({ item }) => <TouchableOpacity onPress={() => pushPage(navigation, item.path)}>
          <Text style={styles.item}>{item.key}</Text>
        </TouchableOpacity>}
      />
    </View>
  );
}
function pushPage(navigation, path) {
  console.log(path);
  navigation.push(path)
}


export default HomeScreen;