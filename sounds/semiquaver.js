/* eslint-disable prettier/prettier */
import Sound from 'react-native-sound';  

var c = new Sound('semiquaver_c.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load semiquaver c', error);
      return;
    }
});

var csharp = new Sound('semiquaver_csharp.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load semiquaver csharp', error);
      return;
    }
});

var d = new Sound('semiquaver_d.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load semiquaver d', error);
      return;
    }
});

var dsharp = new Sound('semiquaver_dsharp.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load semiquaver dsharp', error);
      return;
    }
});

var e = new Sound('semiquaver_e.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load semiquaver e', error);
      return;
    }
});

var f = new Sound('semiquaver_f.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load semiquaver f', error);
      return;
    }
});

var fsharp = new Sound('semiquaver_fsharp.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load semiquaver fsharp', error);
      return;
    }
});

var g = new Sound('semiquaver_g.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load semiquaver g', error);
      return;
    }
});

var gsharp = new Sound('semiquaver_gsharp.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load semiquaver gsharp', error);
      return;
    }
});

var a = new Sound('semiquaver_a.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load semiquaver a', error);
      return;
    }
});

var asharp = new Sound('semiquaver_asharp.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load semiquaver asharp', error);
      return;
    }
});

var b = new Sound('semiquaver_b.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load semiquaver b', error);
      return;
    }
});

var cva = new Sound('semiquaver_cva.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load semiquaver cva', error);
      return;
    }
});

export const semiquaver = [
  {note: 'C', icon: require('../assets/semiquaver.png'), sound: c, rest: require('../assets/semiquaver_rest.png')}, 
  {note: 'C#/Db', icon: require('../assets/semiquaver.png'), sound: csharp, rest: require('../assets/semiquaver_rest.png')},
  {note: 'D', icon: require('../assets/semiquaver.png'), sound: d, rest: require('../assets/semiquaver_rest.png')}, 
  {note: 'D#/Eb', icon: require('../assets/semiquaver.png'), sound: dsharp, rest: require('../assets/semiquaver_rest.png')}, 
  {note: 'E', icon: require('../assets/semiquaver.png'), sound: e, rest: require('../assets/semiquaver_rest.png')}, 
  {note: 'F', icon: require('../assets/semiquaver.png'), sound: f, rest: require('../assets/semiquaver_rest.png')}, 
  {note: 'F#/Gb', icon: require('../assets/semiquaver.png'), sound: fsharp, rest: require('../assets/semiquaver_rest.png')}, 
  {note: 'G', icon: require('../assets/semiquaver.png'), sound: g, rest: require('../assets/semiquaver_rest.png')}, 
  {note: 'G#/Ab', icon: require('../assets/semiquaver.png'), sound: gsharp, rest: require('../assets/semiquaver_rest.png')}, 
  {note: 'A', icon: require('../assets/semiquaver.png'), sound: a, rest: require('../assets/semiquaver_rest.png')}, 
  {note: 'A#/Bb', icon: require('../assets/semiquaver.png'), sound: asharp, rest: require('../assets/semiquaver_rest.png')}, 
  {note: 'B', icon: require('../assets/semiquaver.png'), sound: b, rest: require('../assets/semiquaver_rest.png')}, 
  {note: 'C', icon: require('../assets/semiquaver.png'), sound: cva, rest: require('../assets/semiquaver_rest.png')}
];