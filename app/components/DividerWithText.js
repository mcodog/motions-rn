import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Divider } from 'react-native-paper';

const DividerWithText = ({ text }) => {
  return (
    <View style={styles.container}>
      <Divider style={styles.line} />
        <Text style={styles.text}>{text}</Text>
      <Divider style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'gray',
  },
  text: {
    marginHorizontal: 10,
    fontSize: 16,
    color: 'gray',
  },
});

export default DividerWithText;
