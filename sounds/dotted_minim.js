/* eslint-disable prettier/prettier */
import Sound from 'react-native-sound';  

var c = new Sound('dotted_minim_c.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load dotted_minim c', error);
      return;
    }
});

var csharp = new Sound('dotted_minim_csharp.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load dotted_minim csharp', error);
      return;
    }
});

var d = new Sound('dotted_minim_d.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load dotted_minim d', error);
      return;
    }
});

var dsharp = new Sound('dotted_minim_dsharp.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load dotted_minim dsharp', error);
      return;
    }
});

var e = new Sound('dotted_minim_e.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load dotted_minim e', error);
      return;
    }
});

var f = new Sound('dotted_minim_f.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load dotted_minim f', error);
      return;
    }
});

var fsharp = new Sound('dotted_minim_fsharp.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load dotted_minim fsharp', error);
      return;
    }
});

var g = new Sound('dotted_minim_g.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load dotted_minim g', error);
      return;
    }
});

var gsharp = new Sound('dotted_minim_gsharp.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load dotted_minim gsharp', error);
      return;
    }
});

var a = new Sound('dotted_minim_a.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load dotted_minim a', error);
      return;
    }
});

var asharp = new Sound('dotted_minim_asharp.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load dotted_minim asharp', error);
      return;
    }
});

var b = new Sound('dotted_minim_b.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load dotted_minim b', error);
      return;
    }
});

var cva = new Sound('dotted_minim_cva.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load dotted_minim cva', error);
      return;
    }
});

export const dotted_minim = [
  {note: 'C', icon: '../assets/dotted_minim.png', sound: c, rest: '../assets/dotted_minim_rest.png'}, 
  {note: 'C#/Db', icon: '../assets/dotted_minim.png', sound: csharp, rest: '../assets/dotted_minim_rest.png'}, 
  {note: 'D', icon: '../assets/dotted_minim.png', sound: d, rest: '../assets/dotted_minim_rest.png'}, 
  {note: 'D#/Eb', icon: '../assets/dotted_minim.png', sound: dsharp, rest: '../assets/dotted_minim_rest.png'}, 
  {note: 'E', icon: '../assets/dotted_minim.png', sound: e, rest: '../assets/dotted_minim_rest.png'}, 
  {note: 'F', icon: '../assets/dotted_minim.png', sound: f, rest: '../assets/dotted_minim_rest.png'}, 
  {note: 'F#/Gb', icon: '../assets/dotted_minim.png', sound: fsharp, rest: '../assets/dotted_minim_rest.png'}, 
  {note: 'G', icon: '../assets/dotted_minim.png', sound: g, rest: '../assets/dotted_minim_rest.png'}, 
  {note: 'G#/Ab', icon: '../assets/dotted_minim.png', sound: gsharp, rest: '../assets/dotted_minim_rest.png'}, 
  {note: 'A', icon: '../assets/dotted_minim.png', sound: a, rest: '../assets/dotted_minim_rest.png'}, 
  {note: 'A#/Bb', icon: '../assets/dotted_minim.png', sound: asharp, rest: '../assets/dotted_minim_rest.png'}, 
  {note: 'B', icon: '../assets/dotted_minim.png', sound: b, rest: '../assets/dotted_minim_rest.png'}, 
  {note: 'C', icon: '../assets/dotted_minim.png', sound: cva, rest: '../assets/dotted_minim_rest.png'}
];