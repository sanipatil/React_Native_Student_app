import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TextInput,FlatList, TouchableOpacity, Alert, ListView} from 'react-native';
import realm from './RealmData';


export default class Coordinates extends Component {
    static navigationOptions = {
        title: 'Coordinates',
    };

    constructor() {
        super();
        this.state = {
            latitude: null,
            longitude: null,
        };
    }

    componentWillMount(){
        navigator.geolocation.getCurrentPosition(
            (position) => {
              let longitude = position.coords.longitude;
              let latitude = position.coords.latitude;
              this.setState({'latitude':latitude, 'longitude':longitude});
              console.warn(position)
            },
            (error) => {
              let longitude = 0;
              let latitude = 0;
              console.warn('error in getting latlng',error);
              this.setState({'latitude':latitude, 'longitude':longitude});
            },
            {enableHighAccuracy: false, timeout: 15000, maximumAge: 100}
          );

    }   

    render() {
        return (
            <View style={styles.container}>
                <Image source={{ uri: 'https://png.icons8.com/dusk/100/000000/compass.png' }}
                       style={{ width: 100, height: 100 }}
                />
                <Text style={styles.boldText}>You are Here</Text> 
                <Text style={{ justifyContent: 'center',
                                alignItems: 'center',
                                marginTop: 16,
                            }}
                >Latitude: {this.state.latitude}</Text>
                <Text style={{ justifyContent: 'center',
                                alignItems: 'center',
                                marginTop: 16,
                            }}
                >Longitude: {this.state.longitude}</Text>
            </View>
        );
    }
    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#F5FCFF"
    },
    boldText: {
        fontSize: 30,
        color: 'red',
    }
});