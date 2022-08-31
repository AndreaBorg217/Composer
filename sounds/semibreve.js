/* eslint-disable prettier/prettier */
import Sound from 'react-native-sound';  

var c = new Sound('semibreve_c.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load semibreve c', error);
      return;
    }
});

var csharp = new Sound('semibreve_csharp.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load semibreve csharp', error);
      return;
    }
});

var d = new Sound('semibreve_d.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load semibreve d', error);
      return;
    }
});

var dsharp = new Sound('semibreve_dsharp.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load semibreve dsharp', error);
      return;
    }
});

var e = new Sound('semibreve_e.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load semibreve e', error);
      return;
    }
});

var f = new Sound('semibreve_f.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load semibreve f', error);
      return;
    }
});

var fsharp = new Sound('semibreve_fsharp.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load semibreve fsharp', error);
      return;
    }
});

var g = new Sound('semibreve_g.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load semibreve g', error);
      return;
    }
});

var gsharp = new Sound('semibreve_gsharp.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load semibreve gsharp', error);
      return;
    }
});

var a = new Sound('semibreve_a.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load semibreve a', error);
      return;
    }
});

var asharp = new Sound('semibreve_asharp.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load semibreve asharp', error);
      return;
    }
});

var b = new Sound('semibreve_b.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load semibreve b', error);
      return;
    }
});

var cva = new Sound('semibreve_cva.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load semibreve cva', error);
      return;
    }
});

export const semibreve = [
  {note: 'C', icon: '../assets/semibreve.png', sound: c, rest: '../assets/semibreve_rest.png'}, 
  {note: 'C#/Db', icon: '../assets/semibreve.png', sound: csharp, rest: '../assets/semibreve_rest.png'},
  {note: 'D', icon: '../assets/semibreve.png', sound: d, rest: '../assets/semibreve_rest.png'}, 
  {note: 'D#/Eb', icon: '../assets/semibreve.png', sound: dsharp, rest: '../assets/semibreve_rest.png'}, 
  {note: 'E', icon: '../assets/semibreve.png', sound: e, rest: '../assets/semibreve_rest.png'}, 
  {note: 'F', icon: '../assets/semibreve.png', sound: f, rest: '../assets/semibreve_rest.png'}, 
  {note: 'F#/Gb', icon: '../assets/semibreve.png', sound: fsharp, rest: '../assets/semibreve_rest.png'}, 
  {note: 'G', icon: '../assets/semibreve.png', sound: g, rest: '../assets/semibreve_rest.png'}, 
  {note: 'G#/Ab', icon: '../assets/semibreve.png', sound: gsharp, rest: '../assets/semibreve_rest.png'}, 
  {note: 'A', icon: '../assets/semibreve.png', sound: a, rest: '../assets/semibreve_rest.png'}, 
  {note: 'A#/Bb', icon: '../assets/semibreve.png', sound: asharp, rest: '../assets/semibreve_rest.png'}, 
  {note: 'B', icon: '../assets/semibreve.png', sound: b, rest: '../assets/semibreve_rest.png'}, 
  {note: 'C', icon: '../assets/semibreve.png', sound: cva, rest: '../assets/semibreve_rest.png'}
];