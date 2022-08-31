/* eslint-disable prettier/prettier */
import Sound from 'react-native-sound';  

var c = new Sound('minim_c.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load minim c', error);
      return;
    }
});

var csharp = new Sound('minim_csharp.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load minim csharp', error);
      return;
    }
});

var d = new Sound('minim_d.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load minim d', error);
      return;
    }
});

var dsharp = new Sound('minim_dsharp.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load minim dsharp', error);
      return;
    }
});

var e = new Sound('minim_e.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load minim e', error);
      return;
    }
});

var f = new Sound('minim_f.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load minim f', error);
      return;
    }
});

var fsharp = new Sound('minim_fsharp.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load minim fsharp', error);
      return;
    }
});

var g = new Sound('minim_g.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load minim g', error);
      return;
    }
});

var gsharp = new Sound('minim_gsharp.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load minim gsharp', error);
      return;
    }
});

var a = new Sound('minim_a.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load minim a', error);
      return;
    }
});

var asharp = new Sound('minim_asharp.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load minim asharp', error);
      return;
    }
});

var b = new Sound('minim_b.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load minim b', error);
      return;
    }
});

var cva = new Sound('minim_cva.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load minim cva', error);
      return;
    }
});

export const minim = [
  {note: 'C', icon: '../assets/minim.png', sound: c, rest: '../assets/minim_rest.png'}, 
  {note: 'C#/Db', icon: '../assets/minim.png', sound: csharp, rest: '../assets/minim_rest.png'},
  {note: 'D', icon: '../assets/minim.png', sound: d, rest: '../assets/minim_rest.png'}, 
  {note: 'D#/Eb', icon: '../assets/minim.png', sound: dsharp, rest: '../assets/minim_rest.png'}, 
  {note: 'E', icon: '../assets/minim.png', sound: e, rest: '../assets/minim_rest.png'}, 
  {note: 'F', icon: '../assets/minim.png', sound: f, rest: '../assets/minim_rest.png'}, 
  {note: 'F#/Gb', icon: '../assets/minim.png', sound: fsharp, rest: '../assets/minim_rest.png'}, 
  {note: 'G', icon: '../assets/minim.png', sound: g, rest: '../assets/minim_rest.png'}, 
  {note: 'G#/Ab', icon: '../assets/minim.png', sound: gsharp, rest: '../assets/minim_rest.png'}, 
  {note: 'A', icon: '../assets/minim.png', sound: a, rest: '../assets/minim_rest.png'}, 
  {note: 'A#/Bb', icon: '../assets/minim.png', sound: asharp, rest: '../assets/minim_rest.png'}, 
  {note: 'B', icon: '../assets/minim.png', sound: b, rest: '../assets/minim_rest.png'}, 
  {note: 'C', icon: '../assets/minim.png', sound: cva, rest: '../assets/minim_rest.png'}
];