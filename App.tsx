/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {FC, useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';

const App: FC = () => {
  const [users, setUsers] = useState<any[]>([]);

  useEffect((): void => {
    fetch('https://jsonplaceholder.typicode.com/users/')
      .then(res => res.json())
      .then(res => {
        setUsers(res);
      });
  }, []);

  // console.log(users);

  return (
    <SafeAreaView>
      <ScrollView>
        {users.map(item => {
          return (
            <View key={item.id}>
              <Text>
                {item.id} --- {item.name}
              </Text>
            </View>
          );
        })}
      </ScrollView>
      <Text style={styles.red}>Hello</Text>
      <Text style={styles.red}>{users[0] && users[0].name}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  red: {
    color: 'red',
    margin: 20,
    fontSize: 30,
  },
});

export default App;
