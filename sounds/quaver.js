/* eslint-disable prettier/prettier */
import Sound from 'react-native-sound';  

var c = new Sound('quaver_c.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load quaver c', error);
      return;
    }
});

var csharp = new Sound('quaver_csharp.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load quaver csharp', error);
      return;
    }
});

var d = new Sound('quaver_d.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load quaver d', error);
      return;
    }
});

var dsharp = new Sound('quaver_dsharp.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load quaver dsharp', error);
      return;
    }
});

var e = new Sound('quaver_e.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load quaver e', error);
      return;
    }
});

var f = new Sound('quaver_f.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load quaver f', error);
      return;
    }
});

var fsharp = new Sound('quaver_fsharp.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load quaver fsharp', error);
      return;
    }
});

var g = new Sound('quaver_g.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load quaver g', error);
      return;
    }
});

var gsharp = new Sound('quaver_gsharp.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load quaver gsharp', error);
      return;
    }
});

var a = new Sound('quaver_a.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load quaver a', error);
      return;
    }
});

var asharp = new Sound('quaver_asharp.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load quaver asharp', error);
      return;
    }
});

var b = new Sound('quaver_b.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load quaver b', error);
      return;
    }
});

var cva = new Sound('quaver_cva.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load quaver cva', error);
      return;
    }
});

export const quaver = [
  {note: 'C', icon: require('../assets/quaver.png'), sound: c, rest: require('../assets/quaver_rest.png')}, 
  {note: 'C#/Db', icon: require('../assets/quaver.png'), sound: csharp, rest: require('../assets/quaver_rest.png')},
  {note: 'D', icon: require('../assets/quaver.png'), sound: d, rest: require('../assets/quaver_rest.png')}, 
  {note: 'D#/Eb', icon: require('../assets/quaver.png'), sound: dsharp, rest: require('../assets/quaver_rest.png')}, 
  {note: 'E', icon: require('../assets/quaver.png'), sound: e, rest: require('../assets/quaver_rest.png')}, 
  {note: 'F', icon: require('../assets/quaver.png'), sound: f, rest: require('../assets/quaver_rest.png')}, 
  {note: 'F#/Gb', icon: require('../assets/quaver.png'), sound: fsharp, rest: require('../assets/quaver_rest.png')}, 
  {note: 'G', icon: require('../assets/quaver.png'), sound: g, rest: require('../assets/quaver_rest.png')}, 
  {note: 'G#/Ab', icon: require('../assets/quaver.png'), sound: gsharp, rest: require('../assets/quaver_rest.png')}, 
  {note: 'A', icon: require('../assets/quaver.png'), sound: a, rest: require('../assets/quaver_rest.png')}, 
  {note: 'A#/Bb', icon: require('../assets/quaver.png'), sound: asharp, rest: require('../assets/quaver_rest.png')}, 
  {note: 'B', icon: require('../assets/quaver.png'), sound: b, rest: require('../assets/quaver_rest.png')}, 
  {note: 'C', icon: require('../assets/quaver.png'), sound: cva, rest: require('../assets/quaver_rest.png')}
];