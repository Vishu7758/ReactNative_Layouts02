import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Assignment() {
  return (
    <View>
      <Text style={styles.headingText}>Store</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 25,
    paddingHorizontal: 8,
    fontWeight: 'bold',
    color: 'black',
  },
});
