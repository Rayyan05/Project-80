import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,SafeAreaView,Platform, ImageBackground,TouchableOpacity,Image } from 'react-native';



export default class HomeScreen extends React.Component{
    render(){
        return(
            <View style = {{flex:0.5}}>
                <SafeAreaView style = {styles.droidSafeArea}/>
                <ImageBackground source = {require('../assets/space.gif')}style = {styles.backgroundImage}>
                <View style = {styles.titleBar}> <Image source = {require('../assets/main-icon.png')} source = {{  position:"absolute",
        height:200,
        width:200,
        resizeMode:"contain",
        right:20,
        top:-80}}></Image> <Text style = {styles.titleText}>Stellar App</Text></View>
                <TouchableOpacity style = {styles.routeCard }
                
               
                  onPress={()=>{
                      this.props.navigation.navigate("Daily")
                  }}>

                      <Text style = {styles.routeText}>Daily Pic Screen</Text>
                  </TouchableOpacity>

<TouchableOpacity style = {styles.routeCard }
               
               onPress={()=>{
                   this.props.navigation.navigate("SpacecraftScreen")
               }}>

<Text style = {styles.routeText}>Space Craft Screen</Text>
               </TouchableOpacity>


<TouchableOpacity style = {styles.routeCard }
               
               onPress={()=>{
                   this.props.navigation.navigate("StarMapScreen")
               }}>

<Text style = {styles.routeText}>Star Map Screen</Text>
               </TouchableOpacity>
               
              

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