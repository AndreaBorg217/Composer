/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {useState} from 'react';
 import {View, StyleSheet, Text, FlatList, TouchableOpacity, Image} from 'react-native';
 import Sound from 'react-native-sound';  
 import {semibreve} from './sounds/semibreve.js'
 import {minim} from './sounds/minim.js'; 
 import {crotchet} from './sounds/crotchet.js'; 
 import {quaver} from './sounds/quaver.js';
 import {semiquaver} from './sounds/semiquaver.js'
 import {dotted_semibreve} from './sounds/dotted_semibreve.js'
 import {dotted_minim} from './sounds/dotted_minim.js'; 
 import {dotted_crotchet} from './sounds/dotted_crotchet.js'; 
 import {dotted_quaver} from './sounds/dotted_quaver.js';
 import {dotted_semiquaver} from './sounds/dotted_semiquaver.js'


 Sound.setCategory('Playback');

 

 
const App = () => {
  const whiteKeys = [
    {note: 'C'},
    {note: 'D'},
    {note: 'E'},
    {note: 'F'},
    {note: 'G'},
    {note: 'A'},
    {note: 'B'},
    {note: 'C'},
  ]

  const blackKeys = [
    {note: 'Db\nC#', position: 30},
    {note: 'Eb\nD#', position: 42},
    {note: 'Gb\nF#', position: 100},    
    {note: 'Ab\nG#', position: 114},
    {note: 'Bb\nA#', position: 124},
  ]



  const WhiteKey = ({note, sound}) => {
  return(
    <TouchableOpacity style = {styles.whiteKey}/>

  )
}

  const BlackKey = ({note, sound, position}) => {
    return(
      <TouchableOpacity style = {[styles.blackKey, {transform: [{translateY: 150}, {translateX: position}]}]}/>
    )
  }

   return (
     <View style={styles.container}>



      <View style = {styles.buttonContainer}>

        <TouchableOpacity style = {styles.button}>
        <Image style={styles.icon} source={require('./assets/semiquaver.png')}/>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.button}>
        <Image style={styles.icon} source={require('./assets/quaver.png')}/>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.button}>
        <Image style={styles.icon} source={require('./assets/crotchet.png')}/>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.button}>
        <Image style={styles.icon} source={require('./assets/minim.png')}/>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.button}>
        <Image style={styles.icon} source={require('./assets/semibreve.png')}/>
        </TouchableOpacity> 

        <View style = {styles.spacer}/>

        <TouchableOpacity style = {styles.button}>
        <Image style={styles.rest} source={require('./assets/crotchet_rest.png')}/>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.button}>
          <Text style = {styles.dot}>.</Text>
        </TouchableOpacity>      
      
      </View>


      <View style = {styles.keyboard}>

        <View style = {styles.blackkeys}>
          <BlackKey note = {blackKeys[0].note} position = {30}/>
          <BlackKey note = {blackKeys[1].note} position = {42}/>
          <BlackKey note = {blackKeys[2].note} position = {102}/>
          <BlackKey note = {blackKeys[3].note} position = {114}/>
          <BlackKey note = {blackKeys[4].note} position = {124}/>
        </View> 


          <FlatList
            data={whiteKeys}
            renderItem={({item}) => <WhiteKey note = {item.note} sound = {item.sound} />}
            keyExtractor={(item, index) => index}
            scrollEnabled={false}
            numColumns = {8}
          />
      </View>


     </View>
   );
 };
 
 const styles = StyleSheet.create({
   container: {
     width: '100%',
     height: '100%',
     flex: 1,
     backgroundColor: '#123',
     alignItems: 'center',
     justifyContent: 'center'
   },
   keyboard: {
    transform: [{translateY: 340}]
   },
   whiteKey: {
    width:48,
    height: 200,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 15
   },
   blackKey: {
    width: 36,
    height: 150,
    backgroundColor: 'black',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 15,
   },
   blackkeys:{
    flexDirection: 'row'
   },
   whiteKeyText:{
    fontSize: 30,
    fontWeight: 'bold',
   },
   blackKeyText:{
    color: 'white',
    fontSize: 25,
    padding: 5,
    textAlign: 'center',
   },
   buttonContainer:{
    flexDirection: 'row',
    transform: [{translateX: 5}, {translateY: 50}]
   },
   button:{
    width: 45,
    height: 45,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 10,
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'center',
   },
   spacer:{
    width: 20
   },
   icon:{
    width: 25,
    height: 25
   },
   rest:{
    width: 35,
    height: 35
   },
   dot:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20, 
   }
 });
 
 export default App;
 