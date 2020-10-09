import React from "react";
import { SafeAreaView, View, StyleSheet } from "react-native";
import OutBox from "./components/OutBox";
import Box2 from "./components/Box2";
import Box3 from "./components/Box3";


const App = () => {
  return(
    <SafeAreaView style={{flex:1}}>
      <View style={styles.containerUp}>
        <OutBox/>
      </View>
      <View style={styles.containerDown}>
        <Box2/>
        <Box3/>
      </View>
    </SafeAreaView>
);};

export default App;


const styles = StyleSheet.create({
  containerUp: {
    flex:0.4,
    backgroundColor:"red",
  },
  containerDown: {
    flex:0.6,
    backgroundColor:"#ffc0ca",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-around",
  }
})