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
      stack: [["", 0], ["", 0]],
      lock: false,
      tempStepCount: 0
    };
    this.createPedometer();
    this.createCompass();
  }
  createCompass() {
    this.compass = new Compass( newDirection => {
      this.state.lock = true;
      if (newDirection === this.state.direction) {
        let updatedStack = [...this.state.stack];
        updatedStack[updatedStack.length-1][1] += this.state.stepCount ;
        this.setState({stack: updatedStack})
      }
      else {
        let updatedStack = [...this.state.stack, [newDirection, 0]];
        this.setState({ stepCount: 0,
                        direction: newDirection,
                        stack: updatedStack,
                      })
      }
      this.state.lock = false;
    });
  };

  createPedometer() {
    this.pedometer = new PedometerSensor( newSteps =>
                    {
                      if(!this.state.lock) {
                        this.setState({
                          stepCount: newSteps - this.state.stepCount +
                                            this.state.tempStepCount,
                        });
                        this.setState({tempStepCount: 0});
                      } else {
                        this.setState({tempStepCount: newSteps});
                      }
    });
  };

  componentWillUnmount() {
    this.pedometer._unsubscribe();
    this.compass._unsubscribe();
  }

  render() {
    return (

      <Fragment>
          <Tracker name={"Current"}
                   direction = {this.state.direction}
                   steps={this.state.stepCount}/>
          <Tracker name={"Previous"}
                   direction = {this.state.stack[this.state.stack.length-1][0]}
                   steps={this.state.stack[this.state.stack.length-1][1]}/>
        <Button title={"Stop tracking"}
                  onPress={() => this.props.navigation.navigate('Output',
                    {stack: this.state.stack.slice(2, this.state.stack.length)})}/>
      </Fragment>
    );
  }
}

export default MainScreen