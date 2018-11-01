import React, {Fragment} from "react";
import {Button} from "react-native-elements";
import Tracker from "../Components/Tracker";
import Compass from "../Components/MagnetometerSensor";
import { Pedometer } from "expo";

class MainScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stack: [["", 0], ["", 0]],
      lastElement: ["", 0],
      lastDate: new Date()
    };
    this.createCompass();
  }

  pedometerRecentCountCallback = (steps, newDirection, currentDate) => {
    console.log("Last date: " + this.state.lastDate);
    console.log("Current date: " + currentDate);
    console.log("Steps: " + steps);
    this.setState({lastDate: currentDate});
    if (newDirection === this.state.lastElement[0]) {
        let updatedStack = [...this.state.stack];
        let newLastElement = [newDirection, this.state.lastElement[1] + steps];
        updatedStack[updatedStack.length-1] = [newDirection, this.state.lastElement[1] + steps];

        this.setState({stack: updatedStack,
                      lastElement: newLastElement})
      }
    else {
      let newLastElement = [newDirection, 0];
      let updatedStack = [...this.state.stack, newLastElement];
      updatedStack[updatedStack.length-2][1] =
                                  this.state.lastElement[1] + steps;
      this.setState({ stack: updatedStack,
                      lastElement: newLastElement
                    })
    }
  };

  compassCallback =  newDirection => {
    let currentDate = new Date();
    Pedometer.getStepCountAsync(this.state.lastDate, currentDate)
      .then(({steps}) =>
        this.pedometerRecentCountCallback(steps, newDirection, currentDate));
  };

  createCompass() {
    this.compass = new Compass(this.compassCallback);
  };

  render() {
    return (

      <Fragment>
          <Tracker name={"Current"}
                   direction = {this.state.lastElement[0]}
                   steps={this.state.lastElement[1]}/>
          <Tracker name={"Previous"}
                   direction = {this.state.stack[this.state.stack.length - 2][0]}
                   steps={this.state.stack[this.state.stack.length - 2][1]}/>
        <Button title={"Stop tracking"}
                  onPress={() => {
                    this.compass._unsubscribe();
                    this.props.navigation.navigate('Output',
                    {stack: this.state.stack.filter(x => x[1]!==0)})
                  }}/>
      </Fragment>
    );
  }
}

export default MainScreen