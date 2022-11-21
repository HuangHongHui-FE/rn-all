import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import * as React from 'react';

import styles from './style';
function HomeScreen({ navigation }) {

  return (
    <View style={styles.container}>
      <FlatList
        data={[
          { key: 'Apis', path: 'Apis' },
          { key: 'Components', path: 'Coms' },
          { key: 'Docs', path: 'Docs' }
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