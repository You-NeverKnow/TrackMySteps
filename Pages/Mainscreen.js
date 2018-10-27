import React, {Fragment} from "react";
import {Button} from "react-native-elements";
import Tracker from "../Components/Tracker";
import PedometerSensor from "../Components/PedometerSensor";
import Compass from "../Components/MagnetometerSensor";

class MainScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      direction: 'N',
      stepCount : 0,
      stack: [["Some", "value"], ["North", 50]],
    };
    this.createPedometer();
    this.createCompass();
  }
  createCompass() {
    this.compass = new Compass(
                  newDirection => this.setState({direction: newDirection}));
  };

  createPedometer() {
    this.pedometer = new PedometerSensor(
                  newSteps => this.setState({stepCount: newSteps}));
  };

  componentWillUnmount() {
    this.pedometer._unsubscribe();
    this.compass._unsubscribe();
  }

  render() {
    return (

      <Fragment>
          <Tracker name={"Current"}
                   steps = {this.state.stepCount}
                   direction = {this.state.direction}/>
          {/*<Tracker name={"Previous"} direction = 'S' steps='10'/>*/}
          <Button title={"Stop tracking"}
                  onPress={() => this.props.navigation.navigate('Output',
                    {stack: this.state.stack})}/>
      </Fragment>
    );
  }
}

export default MainScreen