import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, ImageBackground, Linking, SafeAreaView, StyleSheet, Text, TouchableOpacity, View,Platform } from 'react-native';
import axios from 'axios'



export default class Daily extends React.Component{
    constructor(){
        super()
        this.state = {
            apod:{}
        }
    }

    getAPOD = ()=>{
        axios
        .get("https://api.nasa.gov/planetary/apod?api_key=xHvcIJahkACh1NJHhZKgbqocYPwWXaObQz0vjemX")
        .then(response=>{
            this.setState({
                apod:response.data
            })
            

           
        })


    }


    componentDidMount(){
        this.getAPOD()
    }


    render(){
        return(
            <View style = {{flex:1}}>
               <SafeAreaView style = {styles.droidSafeArea}/>
               <ImageBackground
                   source = {require('../assets/space.gif')}style ={styles.backgroundImage}>
                   <Text style = {styles.routeText}>Astronomy picture of the Day</Text>
                   <Text style = {styles.routeText}>{this.state.apod.title}</Text>
                  
                       <View>
                           <TouchableOpacity onPress={()=>{
                               Linking.openURL(this.state.apod.url)
                           }}>
                           <Image source = {require("../assets/play-video.png")} style = {{
                               width:100,
                               height:100,
                               alignItems:"center"
                           }}></Image>
                            </TouchableOpacity>


                      
                           <Text>{this.state.apod.explanation}
                           </Text>
                       </View>
                  

               </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    
    titleText:{
        fontSize:40,
        fontWeight:"bold",
       
        
    },
    droidSafeArea:{
        marginTop:Platform.OS==="android"?StatusBar.currentHeight:0
  
    },

    
    titleBar:{
        flex:0.15,
        justifyContent:"center",
        alignItems:"center"
    },

    backgroundImage:{
       flex:1,
       resizeMode:'cover',
        
    },

    routeCard:{
        flex:0.25,
        marginLeft:50,
        marginRight:50,
        marginTop:50,
        borderRadius:30,
        backgroundColor:"white"

    },

    routeText:{
        fontSize:35,
        fontWeight:"bold",
        color:"black",
        marginTop:5,
        paddingLeft:30
    },
})