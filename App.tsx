/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {FC, useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

const App: FC = () => {
  const [users, setUsers] = useState<any>([]);
  const [posts, setPosts] = useState<any[]>([]);

  useEffect((): void => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(res => res.json())
      .then(res => {
        setUsers(res);
      });
  }, []);

  const getPosts = async () => {
    await fetch('https://jsonplaceholder.typicode.com/posts/')
      .then(res => res.json())
      .then(res => setPosts(res));
  };

  return (
    <SafeAreaView>
      <Text style={styles.red}>Hello</Text>
      <ScrollView style={styles.scrollBlock}>
        {!!users.info &&
          users.results.map((item: any) => {
            return (
              <View key={item.id}>
                <Text>
                  {item.id} --- {item.name}
                </Text>
              </View>
            );
          })}
      </ScrollView>
      <TouchableHighlight style={styles.button} onPress={getPosts}>
        <Text>Get posts</Text>
      </TouchableHighlight>
      {!!posts.length && (
        <FlatList
          data={posts}
          renderItem={({item}) => (
            <View>
              <Text>
                {item.id} ---- {item.title}
              </Text>
            </View>
          )}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  red: {
    color: 'red',
    margin: 20,
    fontSize: 30,
  },
  scrollBlock: {
    height: 100,
    flexDirection: 'column',
    gap: 20,
  },
  button: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: 'aquamarine',
    borderRadius: 20,
  },
});

export default App;
