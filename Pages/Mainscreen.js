import React, {Fragment} from "react";
import {Button} from "react-native-elements";
import Tracker from "../Components/Tracker";
import PedometerSensor from "../Components/PedometerSensor";

class MainScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      direction: 'N',
      stack: [["Some", "value"], ["North", 50]],
    };

    // this.createPedometer();
  }

  // createPedometer() {
  //   this.pedometer = new PedometerSensor();
  // };

  getDirection = () => {
    return 'North';
  };


  render() {
    return (

      <Fragment>
          <Tracker name={"Current"}
                   direction = {this.getDirection()}
                   // pedometer = {this.pedometer}
            />
          {/*<Tracker name={"Previous"} direction = 'S' steps='10'/>*/}
          <Button title={"Stop tracking"}
                  onPress={() => this.props.navigation.navigate('Output',
                    {stack: this.state.stack})}/>
      </Fragment>
    );
  }
}

export default MainScreen