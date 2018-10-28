import React, {Fragment} from "react";
import {ScrollView, Text, View} from "react-native";
import {Button} from "react-native-elements";
import {Row, Rows, Table} from "react-native-table-component";

class OutputScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    const stack = navigation.getParam('stack');
    return (
      <Fragment>
        <Text>Results</Text>
        <Table>
          <Row data={["Direction", "Steps"]} />
        </Table>
        <ScrollView>
          <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
            <Rows data={stack}/>
          </Table>
        </ScrollView>
        <Button title={"Back to home screen"}
                onPress={() => this.props.navigation.popToTop()}/>
      </Fragment>
    );
  }
}

export default OutputScreen