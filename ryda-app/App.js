import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

import { colors, parameters } from "./src/global/styles";
import Home from "./src/views/Home";

// Define constants
// const SCREEN_WIDTH = Dimensions.get("window").width;
// const SCREEN_HEIGHT = Dimensions.get("window").height;

const App = () => {
  return (
    <View style = {styles.container}>
      <Home />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container:{
      flex:1,
      backgroundColor:colors.white,
      paddingBottom:30,
      paddingTop:30
  },
});