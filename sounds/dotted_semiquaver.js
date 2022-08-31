/* eslint-disable prettier/prettier */
import Sound from 'react-native-sound';  

var c = new Sound('dotted_quaver_c.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load dotted_quaver c', error);
      return;
    }
});

var csharp = new Sound('dotted_quaver_csharp.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load dotted_quaver csharp', error);
      return;
    }
});

var d = new Sound('dotted_quaver_d.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load dotted_quaver d', error);
      return;
    }
});

var dsharp = new Sound('dotted_quaver_dsharp.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load dotted_quaver dsharp', error);
      return;
    }
});

var e = new Sound('dotted_quaver_e.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load dotted_quaver e', error);
      return;
    }
});

var f = new Sound('dotted_quaver_f.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load dotted_quaver f', error);
      return;
    }
});

var fsharp = new Sound('dotted_quaver_fsharp.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load dotted_quaver fsharp', error);
      return;
    }
});

var g = new Sound('dotted_quaver_g.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load dotted_quaver g', error);
      return;
    }
});

var gsharp = new Sound('dotted_quaver_gsharp.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load dotted_quaver gsharp', error);
      return;
    }
});

var a = new Sound('dotted_quaver_a.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load dotted_quaver a', error);
      return;
    }
});

var asharp = new Sound('dotted_quaver_asharp.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load dotted_quaver asharp', error);
      return;
    }
});

var b = new Sound('dotted_quaver_b.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load dotted_quaver b', error);
      return;
    }
});

var cva = new Sound('dotted_quaver_cva.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load dotted_quaver cva', error);
      return;
    }
});

export const dotted_quaver = [
  {note: 'C', icon: '../assets/dotted_semiquaver.png', sound: c, rest: '../assets/dotted_semiquaver_rest.png'}, 
  {note: 'C#/Db', icon: '../assets/dotted_semiquaver.png', sound: csharp, rest: '../assets/dotted_semiquaver_rest.png'},
  {note: 'D', icon: '../assets/dotted_semiquaver.png', sound: d, rest: '../assets/dotted_semiquaver_rest.png'}, 
  {note: 'D#/Eb', icon: '../assets/dotted_semiquaver.png', sound: dsharp, rest: '../assets/dotted_semiquaver_rest.png'}, 
  {note: 'E', icon: '../assets/dotted_semiquaver.png', sound: e, rest: '../assets/dotted_semiquaver_rest.png'}, 
  {note: 'F', icon: '../assets/dotted_semiquaver.png', sound: f, rest: '../assets/dotted_semiquaver_rest.png'}, 
  {note: 'F#/Gb', icon: '../assets/dotted_semiquaver.png', sound: fsharp, rest: '../assets/dotted_semiquaver_rest.png'}, 
  {note: 'G', icon: '../assets/dotted_semiquaver.png', sound: g, rest: '../assets/dotted_semiquaver_rest.png'}, 
  {note: 'G#/Ab', icon: '../assets/dotted_semiquaver.png', sound: gsharp, rest: '../assets/dotted_semiquaver_rest.png'}, 
  {note: 'A', icon: '../assets/dotted_semiquaver.png', sound: a, rest: '../assets/dotted_semiquaver_rest.png'}, 
  {note: 'A#/Bb', icon: '../assets/dotted_semiquaver.png', sound: asharp, rest: '../assets/dotted_semiquaver_rest.png'}, 
  {note: 'B', icon: '../assets/dotted_semiquaver.png', sound: b, rest: '../assets/dotted_semiquaver_rest.png'}, 
  {note: 'C', icon: '../assets/dotted_semiquaver.png', sound: cva, rest: '../assets/dotted_semiquaver_rest.png'}
];