import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Circle from "./Circle";
import Box1 from "./Box1";

const OutBox = () => {
    return(
        <View style={styles.container}>
            <Circle/>
            <Box1/>
        </View>
)};

export default OutBox;

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:"row",
        margin: 30,             
        borderRadius:7,
        backgroundColor:"gray",
        alignItems:"center",
        justifyContent: "space-around",
    }
    });