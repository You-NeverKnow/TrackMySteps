import React from "react";
import {View} from "react-native";
import {Button} from "react-native-elements";

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button title="Start tracking"
                onPress={() => this.props.navigation.navigate('Main')}/>
      </View>
    );
  }
}

export default HomeScreen;