/* eslint-disable prettier/prettier */
import Sound from 'react-native-sound';  

var c = new Sound('dotted_crotchet_c.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load dotted_crotchet c', error);
      return;
    }
});

var csharp = new Sound('dotted_crotchet_csharp.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load dotted_crotchet csharp', error);
      return;
    }
});

var d = new Sound('dotted_crotchet_d.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load dotted_crotchet d', error);
      return;
    }
});

var dsharp = new Sound('dotted_crotchet_dsharp.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load dotted_crotchet dsharp', error);
      return;
    }
});

var e = new Sound('dotted_crotchet_e.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load dotted_crotchet e', error);
      return;
    }
});

var f = new Sound('dotted_crotchet_f.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load dotted_crotchet f', error);
      return;
    }
});

var fsharp = new Sound('dotted_crotchet_fsharp.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load dotted_crotchet fsharp', error);
      return;
    }
});

var g = new Sound('dotted_crotchet_g.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load dotted_crotchet g', error);
      return;
    }
});

var gsharp = new Sound('dotted_crotchet_gsharp.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load dotted_crotchet gsharp', error);
      return;
    }
});

var a = new Sound('dotted_crotchet_a.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load dotted_crotchet a', error);
      return;
    }
});

var asharp = new Sound('dotted_crotchet_asharp.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load dotted_crotchet asharp', error);
      return;
    }
});

var b = new Sound('dotted_crotchet_b.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load dotted_crotchet b', error);
      return;
    }
});

var cva = new Sound('dotted_crotchet_cva.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load dotted_crotchet cva', error);
      return;
    }
});

export const dotted_crotchet = [
  {note: 'C', icon: '../assets/dotted_crotchet.png', sound: c, rest: '../assets/dotted_crotchet_rest.png'}, 
  {note: 'C#/Db', icon: '../assets/dotted_crotchet.png', sound: csharp, rest: '../assets/dotted_crotchet_rest.png'},
  {note: 'D', icon: '../assets/dotted_crotchet.png', sound: d, rest: '../assets/dotted_crotchet_rest.png'}, 
  {note: 'D#/Eb', icon: '../assets/dotted_crotchet.png', sound: dsharp, rest: '../assets/dotted_crotchet_rest.png'}, 
  {note: 'E', icon: '../assets/dotted_crotchet.png', sound: e, rest: '../assets/dotted_crotchet_rest.png'}, 
  {note: 'F', icon: '../assets/dotted_crotchet.png', sound: f, rest: '../assets/dotted_crotchet_rest.png'}, 
  {note: 'F#/Gb', icon: '../assets/dotted_crotchet.png', sound: fsharp, rest: '../assets/dotted_crotchet_rest.png'}, 
  {note: 'G', icon: '../assets/dotted_crotchet.png', sound: g, rest: '../assets/dotted_crotchet_rest.png'}, 
  {note: 'G#/Ab', icon: '../assets/dotted_crotchet.png', sound: gsharp, rest: '../assets/dotted_crotchet_rest.png'}, 
  {note: 'A', icon: '../assets/dotted_crotchet.png', sound: a, rest: '../assets/dotted_crotchet_rest.png'}, 
  {note: 'A#/Bb', icon: '../assets/dotted_crotchet.png', sound: asharp, rest: '../assets/dotted_crotchet_rest.png'}, 
  {note: 'B', icon: '../assets/dotted_crotchet.png', sound: b, rest: '../assets/dotted_crotchet_rest.png'}, 
  {note: 'C', icon: '../assets/dotted_crotchet.png', sound: cva, rest: '../assets/dotted_crotchet_rest.png'}
];