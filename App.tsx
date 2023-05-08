import {View, Text, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import FancyCard from './components/FancyCard';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';
import Assignment from './components/Assignment';

const App = () => {
  return (
    <SafeAreaView style={styles.body}>
      <ScrollView>
        <FlatCards />
        <ElevatedCards />
        <ActionCard />
        <FancyCard />
        <ContactList />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#e1eded',
  },
});

export default App;
