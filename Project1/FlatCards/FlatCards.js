import React from "react"
import {StyleSheet, Text,View} from "react-native"
import Box from "../components/Box"

const FlatCards=()=>{
    return(
        <View>
            <Text style={styles.text}>Flat Cards</Text>
            <View style={{flexDirection:"row"}}>
                <Box color="red">Red</Box>
                <Box color="green">Green</Box>
                <Box color="blue">Blue</Box>
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    text:{
        fontSize:25,
        fontWeight:"bold",
    }
})
export default FlatCards