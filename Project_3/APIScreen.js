import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, ActivityIndicator } from 'react-native';

const movieURL = "https://reactnative.dev/movies.json";

const API = () =>  {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [title, setTitle] = useState([]);
  const [description, setDescription] = useState([]);

  useEffect(() => {
    fetch(movieURL)
    .then((response) => response.json())
    .then((json) => {
      setData(json.movies);
      setTitle(json.title);
      setDescription(json.description);
    })
    .catch((error) => alert(error))
    .finally(() => setLoading(false));
  }, []);


  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <ActivityIndicator/>
      ) : (
      <View>
        
        <Text style={styles.title}>{title}</Text>
      <View style = {{borderBottomWidth:1, marginBottom:12}}></View>

      <FlatList
        data={data}
        keyExtractor = {({ id }, index) => id}
        renderItem = {({ item }) => (
          <View style = {{paddingBottom: 10}}>
          <Text style = {styles.movieText}>
            {item.id}. {item.title}, {item.releaseYear}
          </Text>
          </View>
      )}
      />
      <Text style = {styles.description}>{description}</Text>
      </View>
    )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 48,
  },
  movieText: {
      fontSize: 26,
      fontWeight:"200",
    },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    },
  description: {
    textAlign: "center",
    marginBottom: 18,
    fontWeight: "200",
    color: "green",
  },
});

export default API;