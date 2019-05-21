import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TextInput,FlatList, TouchableOpacity, Alert, ListView} from 'react-native';
import realm from './RealmData';

export default class ShowData extends Component {
    
  static navigationOptions =
  {
     title: 'ShowData',
  };

  constructor(props) {
    super(props);
    this.state = {datasource: []};
  }

  GoToThirdActivity = (item) => {
    this.props.navigation.navigate('EditData', {
      ID : item.student_id,
      NAME : item.student_name,
      CLASS : item.student_class,
      SUBJECT : item.student_subject,
    });
  }

  componentWillMount() {
    var data = realm.objects('Info');
    //console.warn('data',data);
    this.setState({datasource:data});
  }

  GetClickedItem(student_name) {
    alert.alert(student_name);
  }
    
  FlatListItemSeparator = () => {
      return(
        <View style={{ height: .5, width: "100%", backgroundColor: "#000",}}/>
      );
  }

  render(){
      return(
        <View style={styles.MainContainer}>
        <FlatList
                data={this.state.datasource}
                ItemSeparatorComponent={this.FlatListItemSeparator}
                renderItem={({item}) => 
                <TouchableOpacity onPress = {() => this.GoToThirdActivity(item)}>
                  <View>
                    <Text style={styles.textViewContainer}>{'id = ' + item.student_id}</Text>
                    <Text style={styles.textViewContainer}>{'Name = ' + item.student_name}</Text>
                    <Text style={styles.textViewContainer}>{'Class = ' + item.student_class}</Text>
                    <Text style={styles.textViewContainer}>{'Subject = ' + item.student_subject}</Text>
                  </View>
                </TouchableOpacity>
                }
        />
        </View>
      );
    } 
}

const styles = StyleSheet.create({
    MainContainer :{
    
     flex:1,
     justifyContent: 'center',
     paddingTop: (Platform.OS) === 'android' ? 20 : 0,
     margin: 10
       
    },
    
    TextInputStyle:{
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
    },
   
    textViewContainer: {
    
        textAlignVertical:'center', 
        padding:10,
        fontSize: 20,
        color: '#000',
    }
});
