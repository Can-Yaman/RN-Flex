import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Box1 = () => {
    return(
        <View style={styles.container}>
            <Text style={{color:"white", transform: [{ rotate: "-90deg" }]}}>{"Brown"+"\n"+"Box"}</Text>
        </View>
)};

export default Box1;

const styles = StyleSheet.create({
    container: {
        width: 70,
        height: 350,        
        borderRadius:35,
        backgroundColor:"brown",
        alignItems:"center",
        justifyContent:"center"
    }
    });