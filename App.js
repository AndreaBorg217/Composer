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

 import React, {useRef, useState} from 'react';
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

  const [restFlag, setRest] = useState(false)
  const [dottedFlag, setDotted] = useState(false)
  const [currentNotes, setCurrent] = useState(crotchet)
  const [melody, setMelody] = useState([])


  const whiteKeys = [
    currentNotes[0],
    currentNotes[2],
    currentNotes[4],
    currentNotes[5],
    currentNotes[7],
    currentNotes[9],
    currentNotes[11],
    currentNotes[12],
]

const pianoPress = (note) =>{
  let temp = [...melody]
  let tempObj = {...note}
  if(restFlag){
    temp.push({note: '-', icon: note.rest, sound: tempObj.sound.setVolume(0)})
  }
  else{
    temp.push({note: note.note, icon: note.icon, sound: tempObj.sound.setVolume(1)})
  }
  setMelody(prev => [...temp])
}

let index = 0;

  const playMelody = () => {
    if(index != melody.length){
    const currentToBePLayed = melody[index].sound;
      if(currentToBePLayed){
        currentToBePLayed.play(success => onplaybackComplete())
      }
      else{
        index = 0;
      }
  }
  }

  const onplaybackComplete  = () => {
    index++
    playMelody()
  }

const Note = ({note, icon})=>{
  return(
  <View style = {styles.card}>
    <Image style = {styles.value} source={icon}/>
    <Text style = {styles.note}>{note}</Text>
  </View>
  )
}

const WhiteKey = ({note}) => {
  return(
    <TouchableOpacity style = {styles.whiteKey} onPress = {() => pianoPress(note)}/>
  )
}

const BlackKey = ({note, position}) => {
    return(
      <TouchableOpacity style = {[styles.blackKey, {transform: [{translateY: 150}, {translateX: position}]}]} onPress = {() => pianoPress(note)}/>
    )
}




   return (
     <View style={styles.container}>


      <View style = {styles.buttonContainer}>

        <TouchableOpacity style = {[styles.button, {backgroundColor: currentNotes == semiquaver || currentNotes == dotted_semiquaver? 'teal' : 'transparent'}]} onPress = {()=> 
        {
          if(dottedFlag){
            setCurrent(dotted_semiquaver)
          }
          else{
           setCurrent(semiquaver)
          }
        }
        }>
        <Image style={styles.icon} source={require('./assets/semiquaver.png')}/>
        </TouchableOpacity>


        <TouchableOpacity style = {[styles.button, {backgroundColor: currentNotes == quaver || currentNotes == dotted_quaver? 'teal' : 'transparent'}]} onPress = {()=> 
        {
          if(dottedFlag){
            setCurrent(dotted_quaver)
          }
          else{
            setCurrent(quaver)
          }
        }
        }>
        <Image style={styles.icon} source={require('./assets/quaver.png')}/>
        </TouchableOpacity>


        <TouchableOpacity style = {[styles.button, {backgroundColor: currentNotes == crotchet || currentNotes == dotted_crotchet? 'teal' : 'transparent'}]} onPress = {()=> 
        {
          if(dottedFlag){
            setCurrent(dotted_crotchet)
          }
          else{
            setCurrent(crotchet)
          }
        }
        }>
        <Image style={styles.icon} source={require('./assets/crotchet.png')}/>
        </TouchableOpacity>

        
        <TouchableOpacity style = {[styles.button, {backgroundColor: currentNotes == minim || currentNotes == dotted_minim? 'teal' : 'transparent'}]} onPress = {()=> 
        {
          if(dottedFlag){
            setCurrent(dotted_minim)
          }
          else{
            setCurrent(minim)
          }
        }
        }>
        <Image style={styles.icon} source={require('./assets/minim.png')}/>
        </TouchableOpacity>


        <TouchableOpacity style = {[styles.button, {backgroundColor: currentNotes == semibreve || currentNotes == dotted_semibreve? 'teal' : 'transparent'}]} onPress = {()=> 
        {
          if(dottedFlag){
            setCurrent(dotted_semibreve)
          }
          else{
            setCurrent(semibreve)
          }
        }
        }>
        <Image style={styles.icon} source={require('./assets/semibreve.png')}/>
        </TouchableOpacity> 

        <View style = {styles.spacer}/>

        <TouchableOpacity style = {[styles.button, {backgroundColor: restFlag ? 'teal' : 'transparent'}]} onPress = {()=> {setRest(!restFlag)}}>
        <Image style={styles.icon} source={require('./assets/crotchet_rest.png')}/>
        </TouchableOpacity>

        <TouchableOpacity style = {[styles.button, {backgroundColor: dottedFlag ? 'teal' : 'transparent'}]} onPress = {()=> {setDotted(!dottedFlag)}}>
          <Text style = {styles.dot}>.</Text>
        </TouchableOpacity>      
      
      </View>

      <View style = {styles.playbackspace}>
        <TouchableOpacity onPress = {()=> playMelody()}>
          <Image style={styles.play} source={require('./assets/play.png')}/>
        </TouchableOpacity>

        <View style = {styles.spacer}/>

        <TouchableOpacity onPress = {()=> 
        {
          let temp = [...melody]
          temp.pop()
          setMelody(prev => [...temp])
        }}>
          <Image style={styles.play} source={require('./assets/backspace.png')}/>
        </TouchableOpacity>
      </View>

      <View style = {styles.melody}>
      <FlatList
        data={melody}
        renderItem={({item}) => <Note note = {item.note} icon = {(item.icon)}/>}
        keyExtractor={(item, index) => index}
        numColumns = {5}
      />
      </View>


      <View style = {styles.keyboard}>

        <View style = {styles.blackkeys}>
          <BlackKey note = {currentNotes[1]} position = {30}/>
          <BlackKey note = {currentNotes[3]} position = {42}/>
          <BlackKey note = {currentNotes[6]} position = {102}/>
          <BlackKey note = {currentNotes[8]} position = {114}/>
          <BlackKey note = {currentNotes[10]} position = {125}/>
        </View> 


        <FlatList
          data={whiteKeys}
          renderItem={({item}) => <WhiteKey note = {item}/>}
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
    transform: [{translateY: 180}],
    position: 'absolute',
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
    position: 'absolute',
    transform: [{translateX: 5}, {translateY: -320}]
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
   play:{
    width: 25,
    height: 25
   },
   dot:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20, 
   },
   melody:{
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 10,
    width: '90%',
    height: 330,
    paddingTop: 40,
    transform: [{translateY: -90}],
   },
   card:{
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    marginBottom: 15,
   },
   note:{
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
   },
   value:{
    width: 30,
    height: 30
   },
   playbackspace:{
    flexDirection: 'row',
    position: 'absolute',
    transform: [{translateY: -250}],
    backgroundColor: '#123',
    zIndex: 100,
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 10,
    padding: 15
   },
 });
 
 export default App;
 