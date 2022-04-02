  function playNote(note) {

  // create a synth
  let synth = new Tone.Synth().toDestination();
  // play a note from that synth
  synth.triggerAttackRelease(note, "8n");
  }
