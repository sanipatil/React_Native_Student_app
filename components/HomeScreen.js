import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert} from 'react-native';
import realm from './RealmData';


export default class HomeScreen extends Component {
    static navigationOptions =
    {
       title: 'HomeScreen',
    };
   
    GoToSecondActivity = () =>
    {
       this.props.navigation.navigate('ShowData');
    }

    GoToFourthActivity = () => {
      this.props.navigation.navigate('Coordinates');
    }  
    

  constructor(props){
    super(props);
    this.state = {
      Student_Name: '',
      Student_Class: '',
      Student_Subject: ''
    }
  }

  add_student=()=>{  
    try{
      realm.write(() => {
        var ID = realm.objects('Info').length + 1;
        realm.create('Info', {
          student_id: ID,
          student_name: this.state.Student_Name,
          student_class: this.state.Student_Class,
          student_subject: this.state.Student_Subject
        });
      });
    } catch(e){console.log('error');}
    Alert.alert("Details added successfully");
  }

  

  render() {
    
    return (
      <View style={styles.MainContainer}>
        <TextInput 
          placeholder="Enter Student Name"
          style = { styles.TextInputStyle } 
          underlineColorAndroid = "transparent" 
          onChangeText = {(text) => { this.setState({ Student_Name: text })}} 
        />
 
        <TextInput  
          placeholder="Enter Student Class"
          style = { styles.TextInputStyle } 
          underlineColorAndroid = "transparent" 
          onChangeText = { ( text ) => { this.setState({ Student_Class: text })} } 
        />
 
        <TextInput 
          placeholder="Enter Student Subject"
          style = { styles.TextInputStyle } 
          underlineColorAndroid = "transparent" 
          onChangeText = { ( text ) => { this.setState({ Student_Subject: text })} } 
        />
        <TouchableOpacity onPress={()=>this.add_student()} activeOpacity={0.7} style={styles.button} >
            <Text style={styles.TextStyle}> ADD STUDENT DETAILS </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.GoToSecondActivity} activeOpacity={0.7} style={styles.button} >
            <Text style={styles.TextStyle}> DISPLAY ADDED DATA </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.GoToFourthActivity} activeOpacity={0.7} style={styles.button} >
            <Text style={styles.TextStyle}> GET COORDINATES </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer :{
 
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: (Platform.OS) === 'android' ? 20 : 0,
    margin: 10
      
    },
   
    TextInputStyle:
      {
        borderWidth: 1,
        borderColor: '#009688',
        width: '100%',
        height: 40,
        borderRadius: 10,
        marginBottom: 10,
        textAlign: 'center',
      },
   
    button: {
      
        width: '100%',
        height: 40,
        padding: 10,
        backgroundColor: '#4CAF50',
        borderRadius:7,
        marginTop: 12
      },
       
    TextStyle:{
        color:'#fff',
        textAlign:'center',
      }
      
});