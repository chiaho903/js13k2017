// create the audio context
var ac = typeof AudioContext !== 'undefined' ? new AudioContext : new webkitAudioContext,
  // set the tempo
  tempo = 90,
  // initialize some vars
  sequence1,
  sequence2,
  sequence3,
  sequence4,
  sequence5,
  sequence6,
  // create an array of "note strings" that can be passed to a sequence
  lead = [
    'Ab4 s',
    'Db5 s',
    'E5 s',

    'Ab4 s',
    'Db5 s',
    'E5 s',

    'Ab4 s',
    'Db5 s',
    'E5 s',

    'Ab4 s',
    'Db5 s',
    'E5 s',

    'Ab4 s',
    'Db5 s',
    'E5 s',

    'Ab4 s',
    'Db5 s',
    'E5 s',

    'Ab4 s',
    'Db5 s',
    'E5 s',

    'Ab4 s',
    'Db5 s',
    'E5 s',

    'A4 s',
    'Db5 s',
    'E5 s',

    'A4 s',
    'Db5 s',
    'E5 s',

    'A4 s',
    'D5 s',
    'Gb5 s',

    'A4 s',
    'D5 s',
    'Gb5 s',

    'Ab4 s',
    'C5 s',
    'Gb5 s',

    'Ab4 s',
    'Db5 s',
    'Gb5 s',

    'Ab4 s',
    'Db5 s',
    'Eb5 s',

    'Gb4 s',
    'B5 s',
    'Eb5 s',
  ],

  harmony = [
      'Db3 h',
      '- q',

      'B2 h',
      '- q',

      'A2 q',
      '- e',
      'Gb2 q',
      '- e',

      'Ab2 q',
      '- e',
      'Ab2 q',
      '- e',

  ],

  space = [
   'B3 s',
   'Cb5 e',
 ],

 hurt = [
   'Ab2 s',
   'Gb2 s',
 ],

 eat = [
    // 'B5 e',
    'C4 s',
    'C5 e',
 ],

 dead  = [
   'Ab2 s',
    'Gb2 s',
    'C2 e',
 ]
 ;

  // create 3 new sequences (one for lead, one for harmony, one for bass)
sequence1 = new TinyMusic.Sequence( ac, tempo, lead );
sequence2 = new TinyMusic.Sequence( ac, tempo, harmony );
sequence3 = new TinyMusic.Sequence( ac, tempo, space );
sequence4 = new TinyMusic.Sequence( ac, tempo, hurt );
sequence5 = new TinyMusic.Sequence( ac, tempo, eat );
sequence6 = new TinyMusic.Sequence( ac, tempo, dead );

var sequences = [];
// //cloase the loop play
sequence3.loop = false;
sequence4.loop = false;
sequence5.loop = false;
sequence6.loop = false;

// set staccato and smoothing values for maximum coolness
sequence1.staccato = 0.55;
sequence2.staccato = 0.55;
sequence3.staccato = 0.55;
sequence4.staccato = 0.55;
sequence5.staccato = 0.55;
sequence6.staccato = 0.55;

// adjust the levels so the bass and harmony aren't too loud
sequence1.gain.gain.value = 0.1;
sequence2.gain.gain.value = 0.1;
sequence3.gain.gain.value = 0.2;
sequence4.gain.gain.value = 0.2;
sequence5.gain.gain.value = 0.2;
sequence6.gain.gain.value = 0.2;

// apply EQ settings
sequence1.mid.frequency.value = 1000;
sequence1.mid.gain.value = 3;
sequence2.mid.frequency.value = 1000;
sequence3.mid.frequency.value = 1000;
sequence4.mid.frequency.value = 1000;
sequence5.mid.frequency.value = 1000;
sequence6.mid.frequency.value = 1000;


sequences.push(sequence3);
sequences.push(sequence4);
sequences.push(sequence5);
sequences.push(sequence6);

function bgAudio(){
  if (!mute){
    sequence1.play();
    sequence2.play();
  }else {
    sequence1.stop();
    sequence2.stop();
  }

}

function spaceAudio(){
  if (!mute){
    for(var i in sequences){
      sequences[i].stop();
    }
    sequence3.play();
  }
}

function hitAudio(){
  if (!mute){
    for(var i in sequences){
      sequences[i].stop();
    }
    sequence4.play();
  }
}

function eatAudio(){
  if (!mute){
    for(var i in sequences){
      sequences[i].stop();
    }
    sequence5.play();
  }
}

function deadAudio(){
  if (!mute){
    for(var i in sequences){
      sequences[i].stop();
    }
    sequence6.play();
  }
}
