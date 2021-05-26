import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { FriendsContext } from './FriendsContext';
import APIScreen from './APIScreen';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>You have { this.context.currentFriends.length } friends.</Text>

        <Button
          title="Add some friends"
          onPress={() =>
            this.props.navigation.navigate('Friends')
          }
        />

<Text>Project 3 fetcAPI (Networking).</Text>

        <Button
          title="Lets see data"
          onPress={() =>
            this.props.navigation.navigate('Data from API')
          }
        />
      </View>
    );
  }
}
HomeScreen.contextType = FriendsContext;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;