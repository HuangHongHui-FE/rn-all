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