import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Box1 = () => {
    return(
        <View style={styles.container}>
            <Text style={{textAlign:"center"}}>Yellow Box</Text>
        </View>
)};

export default Box1;

const styles = StyleSheet.create({
    container: {
        width:100,
        height:50,            
        borderRadius:20,
        backgroundColor:"yellow",
        alignItems:"center",
        justifyContent:"center"
    }
    });