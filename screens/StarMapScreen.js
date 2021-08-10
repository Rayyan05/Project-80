import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';
import {WebView} from 'react-native-webview'




export default class SpacecraftScreen extends React.Component{
    constructor(){
        super()
        this.state = {
            latitude:'',
            longitude:''
        }
    }
    
  
   
   render(){
        return(

            <View>

          <TextInput
          style = {{height:40,borderColor:'grey',borderWidth:1}}
          placeholder = {"Enter your latitude here"}
          onChangeText={(text)=>{
            this.setState({
              latitude:text
            })
          }}

          />

<TextInput
          style = {{height:40,borderColor:'grey',borderWidth:1}}
          placeholder = {"Enter your longitude here"}
          onChangeText={(text)=>{
            this.setState({
              longitude: text
            })
          }}

          />

         
           
       <View style={{flex:1}}>
     <WebView
   source={{uri: 'https://virtualsky.lco.global/embed/index.html?longitude=77.102493&latitude=28.704060&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true'}}
 
   scalesPageToFit={true} />
    </View>
                     
                      </View>
                      
                 
            
        )
    }
}