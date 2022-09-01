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
  {note: 'C', icon: require('../assets/dotted_minim.png'), sound: c, rest: require('../assets/dotted_minim_rest.png')}, 
  {note: 'C#/Db', icon: require('../assets/dotted_minim.png'), sound: csharp, rest: require('../assets/dotted_minim_rest.png')}, 
  {note: 'D', icon: require('../assets/dotted_minim.png'), sound: d, rest: require('../assets/dotted_minim_rest.png')}, 
  {note: 'D#/Eb', icon: require('../assets/dotted_minim.png'), sound: dsharp, rest: require('../assets/dotted_minim_rest.png')}, 
  {note: 'E', icon: require('../assets/dotted_minim.png'), sound: e, rest: require('../assets/dotted_minim_rest.png')}, 
  {note: 'F', icon: require('../assets/dotted_minim.png'), sound: f, rest: require('../assets/dotted_minim_rest.png')}, 
  {note: 'F#/Gb', icon: require('../assets/dotted_minim.png'), sound: fsharp, rest: require('../assets/dotted_minim_rest.png')}, 
  {note: 'G', icon: require('../assets/dotted_minim.png'), sound: g, rest: require('../assets/dotted_minim_rest.png')}, 
  {note: 'G#/Ab', icon: require('../assets/dotted_minim.png'), sound: gsharp, rest: require('../assets/dotted_minim_rest.png')}, 
  {note: 'A', icon: require('../assets/dotted_minim.png'), sound: a, rest: require('../assets/dotted_minim_rest.png')}, 
  {note: 'A#/Bb', icon: require('../assets/dotted_minim.png'), sound: asharp, rest: require('../assets/dotted_minim_rest.png')}, 
  {note: 'B', icon: require('../assets/dotted_minim.png'), sound: b, rest: require('../assets/dotted_minim_rest.png')}, 
  {note: 'C', icon: require('../assets/dotted_minim.png'), sound: cva, rest: require('../assets/dotted_minim_rest.png')}
];