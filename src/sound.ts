export const audio = new window.AudioContext();

export function makeSound(audio: AudioContext, wave: PeriodicWave, frequency: number) {
  const osc = audio.createOscillator();
  osc.setPeriodicWave(wave);
  osc.frequency.value = frequency;
  osc.connect(audio.destination);
}

export function playSound(osc: OscillatorNode, start: number, stop: number) {
  osc.start(start);
  osc.stop(stop);
}

function makeSawtooth(audio: AudioContext) {
  var numCoeffs = 64; // The more coefficients you use, the better the approximation
  var realCoeffs = new Float32Array(numCoeffs);
  var imagCoeffs = new Float32Array(numCoeffs);
  realCoeffs[0] = 0.5;
  for (var i = 1; i < numCoeffs; i++) {
    // note i starts at 1
    imagCoeffs[i] = 1 / (i * Math.PI);
  }
  return audio.createPeriodicWave(realCoeffs, imagCoeffs);
}

function makeSine(audio: AudioContext) {
  return audio.createPeriodicWave(new Float32Array([0, 0]), new Float32Array([0, 1]));
}

export const sin = makeSine(audio);
export const saw = makeSawtooth(audio);
