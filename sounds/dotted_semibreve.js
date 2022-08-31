/* eslint-disable prettier/prettier */
import Sound from 'react-native-sound';  

var c = new Sound('dotted_semibreve_c.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load dotted_semibreve c', error);
      return;
    }
});

var csharp = new Sound('dotted_semibreve_csharp.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load dotted_semibreve csharp', error);
      return;
    }
});

var d = new Sound('dotted_semibreve_d.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load dotted_semibreve d', error);
      return;
    }
});

var dsharp = new Sound('dotted_semibreve_dsharp.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load dotted_semibreve dsharp', error);
      return;
    }
});

var e = new Sound('dotted_semibreve_e.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load dotted_semibreve e', error);
      return;
    }
});

var f = new Sound('dotted_semibreve_f.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load dotted_semibreve f', error);
      return;
    }
});

var fsharp = new Sound('dotted_semibreve_fsharp.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load dotted_semibreve fsharp', error);
      return;
    }
});

var g = new Sound('dotted_semibreve_g.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load dotted_semibreve g', error);
      return;
    }
});

var gsharp = new Sound('dotted_semibreve_gsharp.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load dotted_semibreve gsharp', error);
      return;
    }
});

var a = new Sound('dotted_semibreve_a.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load dotted_semibreve a', error);
      return;
    }
});

var asharp = new Sound('dotted_semibreve_asharp.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load dotted_semibreve asharp', error);
      return;
    }
});

var b = new Sound('dotted_semibreve_b.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load dotted_semibreve b', error);
      return;
    }
});

var cva = new Sound('dotted_semibreve_cva.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load dotted_semibreve cva', error);
      return;
    }
});

export const dotted_semibreve = [
  {note: 'C', icon: '../assets/dotted_semibreve.png', sound: c, rest: '../assets/dotted_semibreve_rest.png'}, 
  {note: 'C#/Db', icon: '../assets/dotted_semibreve.png', sound: csharp, rest: '../assets/dotted_semibreve_rest.png'},
  {note: 'D', icon: '../assets/dotted_semibreve.png', sound: d, rest: '../assets/dotted_semibreve_rest.png'}, 
  {note: 'D#/Eb', icon: '../assets/dotted_semibreve.png', sound: dsharp, rest: '../assets/dotted_semibreve_rest.png'}, 
  {note: 'E', icon: '../assets/dotted_semibreve.png', sound: e, rest: '../assets/dotted_semibreve_rest.png'}, 
  {note: 'F', icon: '../assets/dotted_semibreve.png', sound: f, rest: '../assets/dotted_semibreve_rest.png'}, 
  {note: 'F#/Gb', icon: '../assets/dotted_semibreve.png', sound: fsharp, rest: '../assets/dotted_semibreve_rest.png'}, 
  {note: 'G', icon: '../assets/dotted_semibreve.png', sound: g, rest: '../assets/dotted_semibreve_rest.png'}, 
  {note: 'G#/Ab', icon: '../assets/dotted_semibreve.png', sound: gsharp, rest: '../assets/dotted_semibreve_rest.png'}, 
  {note: 'A', icon: '../assets/dotted_semibreve.png', sound: a, rest: '../assets/dotted_semibreve_rest.png'}, 
  {note: 'A#/Bb', icon: '../assets/dotted_semibreve.png', sound: asharp, rest: '../assets/dotted_semibreve_rest.png'}, 
  {note: 'B', icon: '../assets/dotted_semibreve.png', sound: b, rest: '../assets/dotted_semibreve_rest.png'}, 
  {note: 'C', icon: '../assets/dotted_semibreve.png', sound: cva, rest: '../assets/dotted_semibreve_rest.png'}
];