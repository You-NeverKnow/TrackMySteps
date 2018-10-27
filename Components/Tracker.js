import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import {observer} from "mobx-react";
import PedometerSensor from "./PedometerSensor";
import Compass from "./MagnetometerSensor";

@observer
export default class Tracker extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row data={[this.props.name]} style={styles.head} textStyle={styles.text}/>
          <Rows data={[
                      ['direction', this.props.direction],
                      ['steps', this.props.steps]
                    ]}
                textStyle={styles.text}/>
        </Table>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 }
});