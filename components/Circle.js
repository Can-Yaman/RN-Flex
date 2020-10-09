import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const Circle = (probs) => {
    return(
        
            <View style={styles.circle}>
                <Text style={{fontWeight:"bold"}}>Orange Circle</Text>
            </View>
      
)};

export default Circle;

const styles = StyleSheet.create({
    circle: {
        height:100,
        width:100,
        borderRadius:1000,
        backgroundColor:"orange",
        alignItems:"center",
        justifyContent:"center",
    },
    
        });