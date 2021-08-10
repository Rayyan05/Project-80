import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,ImageBackground, ImageEditor, FlatList } from 'react-native';
import axios from 'axios';






export default class SpacecraftScreen extends React.Component{
    

constructor(){
    super()
    this.state = {
        aircraft:{}
    }
}

getData = ()=>{
    axios.get("https://ll.thespacedevs.com/2.0.0/config/spacecraft/")
    .then(response=>{
        this.setState({
            aircarft:response.data.results
        })

        .catch(error=>{
            console.log(error.message)
        })

        
    })
}


renderItem = ({ item }) => {
   <View>
<Image source = {{uri:item.agency.image_url}} style = {{width:50,height:50}}>
        
      
        </Image>
        <Text>{item.name}</Text>
        <Text> {item.agency.name}</Text>
        <Text>DESCRIPTION</Text>
        <Text>{item.agency.description}</Text>
   </View>
        
}

keyExtractor = (item, index) => index.toString();
    render(){
        return(
            <View style = {{flex:1}}>
                <FlatList>
                <FlatList
                        keyExtractor={this.keyExtractor}
                        data={this.state.aircraft}
                        renderItem={this.renderItem}
                        horizontal={true}
                    />
                </FlatList>
            </View>
        )
    }
}