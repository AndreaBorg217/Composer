/* eslint-disable prettier/prettier */
import Sound from 'react-native-sound';  

var c = new Sound('crotchet_c.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load crotchet c', error);
      return;
    }
});

var csharp = new Sound('crotchet_csharp.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load crotchet csharp', error);
      return;
    }
});

var d = new Sound('crotchet_d.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load crotchet d', error);
      return;
    }
});

var dsharp = new Sound('crotchet_dsharp.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load crotchet dsharp', error);
      return;
    }
});

var e = new Sound('crotchet_e.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load crotchet e', error);
      return;
    }
});

var f = new Sound('crotchet_f.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load crotchet f', error);
      return;
    }
});

var fsharp = new Sound('crotchet_fsharp.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load crotchet fsharp', error);
      return;
    }
});

var g = new Sound('crotchet_g.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load crotchet g', error);
      return;
    }
});

var gsharp = new Sound('crotchet_gsharp.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load crotchet gsharp', error);
      return;
    }
});

var a = new Sound('crotchet_a.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load crotchet a', error);
      return;
    }
});

var asharp = new Sound('crotchet_asharp.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load crotchet asharp', error);
      return;
    }
});

var b = new Sound('crotchet_b.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load crotchet b', error);
      return;
    }
});

var cva = new Sound('crotchet_cva.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Failed to load crotchet cva', error);
      return;
    }
});

export const crotchet = [
  {note: 'C', icon: require('../assets/crotchet.png'), sound: c, rest: require('../assets/crotchet_rest.png')}, 
  {note: 'C#/Db', icon: require('../assets/crotchet.png'), sound: csharp, rest: require('../assets/crotchet_rest.png')},
  {note: 'D', icon: require('../assets/crotchet.png'), sound: d, rest: require('../assets/crotchet_rest.png')}, 
  {note: 'D#/Eb', icon: require('../assets/crotchet.png'), sound: dsharp, rest: require('../assets/crotchet_rest.png')}, 
  {note: 'E', icon: require('../assets/crotchet.png'), sound: e, rest: require('../assets/crotchet_rest.png')}, 
  {note: 'F', icon: require('../assets/crotchet.png'), sound: f, rest: require('../assets/crotchet_rest.png')}, 
  {note: 'F#/Gb', icon: require('../assets/crotchet.png'), sound: fsharp, rest: require('../assets/crotchet_rest.png')}, 
  {note: 'G', icon: require('../assets/crotchet.png'), sound: g, rest: require('../assets/crotchet_rest.png')}, 
  {note: 'G#/Ab', icon: require('../assets/crotchet.png'), sound: gsharp, rest: require('../assets/crotchet_rest.png')}, 
  {note: 'A', icon: require('../assets/crotchet.png'), sound: a, rest: require('../assets/crotchet_rest.png')}, 
  {note: 'A#/Bb', icon: require('../assets/crotchet.png'), sound: asharp, rest: require('../assets/crotchet_rest.png')}, 
  {note: 'B', icon: require('../assets/crotchet.png'), sound: b, rest: require('../assets/crotchet_rest.png')}, 
  {note: 'C', icon: require('../assets/crotchet.png'), sound: cva, rest: require('../assets/crotchet_rest.png')}
];