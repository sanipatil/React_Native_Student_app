import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TextInput,FlatList, TouchableOpacity, Alert, ListView} from 'react-native';
import realm from './RealmData';

export default class EditData extends Component {
    static navigationOptions =
    {
        title: 'EditData',
    };
    constructor(props) {
        super(props);
        this.state = {
            Student_ID: '',
            Student_Name: '',
            Student_Class: '',
            Student_Subject: ''
        };
    }

    componentDidMount() { 
        this.setState ({ 
          Student_Id : this.props.navigation.state.params.ID,
          Student_Name: this.props.navigation.state.params.NAME,
          Student_Class: this.props.navigation.state.params.CLASS,
          Student_Subject: this.props.navigation.state.params.SUBJECT
        })
    }

    Update_Student = () => {
        realm.write(() => {
            var ID = this.state.Student_Id - 1;
            var obj = realm.objects('Info');
            obj[ID].student_name = this.state.Student_Name;
            obj[ID].student_class = this.state.Student_Class;
            obj[ID].student_subject = this.state.Student_Subject;
        });
        Alert.alert("Student Details Updated Successfully.")
    }

    Delete_Student = () => {
        realm.write(() => {
            var ID = this.state.Student_Id - 1;
            realm.delete(realm.objects('Info')[ID]);
        });
        Alert.alert("Record Deleted Successfully.")
        this.props.navigation.navigate('HomeScreen');
    }

    render() {
        return (
            <View style={styles.MainContainer}>
                <TextInput value={this.state.Student_Name}
                            style = { styles.TextInputStyle } 
                            underlineColorAndroid = "transparent" 
                            onChangeText = { ( text ) => { this.setState({ Student_Name: text })} } 
                />
 
                <TextInput  value={this.state.Student_Class}
                            style = { styles.TextInputStyle } 
                            underlineColorAndroid = "transparent" 
                            onChangeText = { ( text ) => { this.setState({ Student_Class: text })} } 
                />
 
                <TextInput value={this.state.Student_Subject}
                            style = { styles.TextInputStyle } 
                            underlineColorAndroid = "transparent" 
                            onChangeText = { ( text ) => { this.setState({ Student_Subject: text })} } 
                />
                <TouchableOpacity onPress={this.Update_Student} activeOpacity={0.7} style={styles.button}>
                    <Text style={styles.TextStyle}> UPDATE STUDENT DETAILS </Text>
                </TouchableOpacity>
                <TouchableOpacity  activeOpacity={0.7} style={styles.button} onPress={this.Delete_Student} >
                    <Text style={styles.TextStyle}> DELETE CURRENT RECORD </Text>
                </TouchableOpacity>    
            </View>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {
    
        flex:1,
        justifyContent: 'center',
        paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
        margin: 10
    },
    
    TextInputStyle: {
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
