import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const Events = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>No upcoming events yet...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: 'flex-start',
    alignItems: 'left',
  },
  title: {
    fontSize: 20,
  },
});

export default Events;
