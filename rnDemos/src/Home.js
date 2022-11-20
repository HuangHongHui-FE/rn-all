import { View, Text, FlatList, SectionList } from 'react-native';
import * as React from 'react';

import styles from './style';
function HomeScreen() {
  return (
    <View style={styles.container}>
      <SectionList
        sections={[
          { title: 'API', data: ['Devin', 'Dan', 'Dominic'] },
          { title: '组件', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie'] },
        ]}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
}


export default HomeScreen;