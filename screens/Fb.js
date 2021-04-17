import React from 'react'
import {View,Text} from 'react-native'

export default class Fb extends React.Component{
    render(){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:"lightgreen"}}>
                <Text style={{backgroundColor:"lightgreen",color:"red"}}>Facebook</Text>
            </View>
        )
    }
}