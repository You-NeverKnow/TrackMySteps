// import Compass from "./MagnetometerSensor";
//
// createCompass() {
//     this.compass = new Compass( newDirection => {
//       if (newDirection === this.state.stack[this.state.stack.length-1][0]) {
//         let updatedStack = [...this.state.stack];
//         updatedStack[updatedStack.length-1][1] =
//                 this.state.stepCount - updatedStack[updatedStack.length-1][1];
//         this.setState({stack: updatedStack})
//       }
//       else {
//         let updatedStack = [...this.state.stack, [newDirection, 0]];
//         this.setState({ direction: newDirection,
//                         stack: updatedStack,
//                       })
//       }
//     });
//   };
