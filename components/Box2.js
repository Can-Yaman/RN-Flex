import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Box2 = () => {
    return(
        <View style={styles.container}>
            <Text style={{textAlign:"center", color:"white"}}>Black Box</Text>
        </View>
)};

export default Box2;

const styles = StyleSheet.create({
    container: {
        width:190,
        height:350,
        borderRadius:20,
        backgroundColor:"black",
        alignItems:"center",
        justifyContent:"center"
    }
    });