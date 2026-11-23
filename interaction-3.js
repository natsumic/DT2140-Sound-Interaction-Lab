
 //==========================================================================================
 // AUDIO SETUP
 //------------------------------------------------------------------------------------------
 //
 //------------------------------------------------------------------------------------------
 // Edit just where you're asked to!
 //------------------------------------------------------------------------------------------
 //
 //==========================================================================================
 let dspNode = null;
 let dspNodeParams = null;
 let jsonParams = null;

 const oscillator = audioContext.createOscillator();
 const volumeOscillator = audioContext.createOscillator();
 const gainNode = audioContext.createGain();
 const volumeDepth = audioContext.createGain();

 oscillator.type = "sine";
 oscillator.frequency.value = 1200;

 volumeOscillator.type = "sine";
 volumeOscillator.frequency.value = 1;

 gainNode.gain.value = 0.1;
 volumeDepth.gain.value = 0.1;

 oscillator.connect(gainNode);
 volumeOscillator.connect(volumeDepth);
 volumeDepth.connect(gainNode.gain);
 gainNode.connect(audioContext.destination);

 oscillator.start();
 volumeOscillator.start();


 //==========================================================================================
 // INTERACTIONS
 //------------------------------------------------------------------------------------------
 //
 //------------------------------------------------------------------------------------------
 // Edit the next functions to create interactions
 // Decide which parameters you're using and then use playAudio to play the Audio
 //------------------------------------------------------------------------------------------
 //
 //==========================================================================================

 function accelerationChange(accx, accy, accz) {
     // playAudio()
 }

 let targetAngle = 45;

 function rotationChange(rotx, roty, rotz) {
     let distance = Math.abs(rotz - targetAngle) % 360;
     distance = Math.min(distance, 360 - distance);

     let beepSpeed = 1 + (1 - distance / 180) * 7;

     volumeOscillator.frequency.value = beepSpeed;
 }

 function mousePressed() {
     playAudio();
     // Use this for debugging from the desktop!
 }

 function deviceMoved() {
     movetimer = millis();
     statusLabels[2].style("color", "pink");
 }

 function deviceTurned() {
     threshVals[1] = turnAxis;
 }

 function deviceShaken() {
     shaketimer = millis();
     statusLabels[0].style("color", "pink");
 }

 function getMinMaxParam(address) {
     const exampleMinMaxParam = findByAddress(dspNodeParams, address);
     // ALWAYS PAY ATTENTION TO MIN AND MAX, ELSE YOU MAY GET REALLY HIGH VOLUMES FROM YOUR SPEAKERS
     const [exampleMinValue, exampleMaxValue] = getParamMinMax(exampleMinMaxParam);
     console.log('Min value:', exampleMinValue, 'Max value:', exampleMaxValue);
     return [exampleMinValue, exampleMaxValue]
 }

 //==========================================================================================
 // AUDIO INTERACTION
 //------------------------------------------------------------------------------------------
 //
 //------------------------------------------------------------------------------------------
 // Edit here to define your audio controls
 //------------------------------------------------------------------------------------------
 //
 //==========================================================================================

 function playAudio() {
     audioContext.resume();
 }

 //==========================================================================================
 // END
 //==========================================================================================
