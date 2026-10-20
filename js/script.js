const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');

menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

// Project category filter.
const filterButtons = document.querySelectorAll('.filter');
const projectCards = document.querySelectorAll('.work-card');
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;
    projectCards.forEach(card => {
      card.classList.toggle('hidden', filter !== 'all' && card.dataset.category !== filter);
    });
  });
});

// Short camera-shutter style click sound, generated locally (no sound file needed).
// Audio starts only after the visitor's first interaction, as browsers require.
let audioContext;
function shutterSound() {
  try {
    audioContext ||= new (window.AudioContext || window.webkitAudioContext)();
    if (audioContext.state === 'suspended') audioContext.resume();
    const now = audioContext.currentTime;
    const noiseBuffer = audioContext.createBuffer(1, Math.floor(audioContext.sampleRate * 0.055), audioContext.sampleRate);
    const channel = noiseBuffer.getChannelData(0);
    for (let i = 0; i < channel.length; i++) channel[i] = (Math.random() * 2 - 1) * (1 - i / channel.length);
    const noise = audioContext.createBufferSource();
    noise.buffer = noiseBuffer;
    const filter = audioContext.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.setValueAtTime(1300, now);
    const noiseGain = audioContext.createGain();
    noiseGain.gain.setValueAtTime(0.0001, now);
    noiseGain.gain.exponentialRampToValueAtTime(0.12, now + 0.004);
    noiseGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.045);
    noise.connect(filter).connect(noiseGain).connect(audioContext.destination);
    noise.start(now);
    noise.stop(now + 0.05);

    const body = audioContext.createOscillator();
    const bodyGain = audioContext.createGain();
    body.type = 'triangle';
    body.frequency.setValueAtTime(1050, now);
    body.frequency.exponentialRampToValueAtTime(180, now + 0.035);
    bodyGain.gain.setValueAtTime(0.0001, now);
    bodyGain.gain.exponentialRampToValueAtTime(0.13, now + 0.003);
    bodyGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.045);
    body.connect(bodyGain).connect(audioContext.destination);
    body.start(now);
    body.stop(now + 0.05);
  } catch (_) {
    // Sound is decorative; keep navigation working if audio is unavailable.
  }
}

let soundEnabled = true;
document.addEventListener('click', event => {
  const target = event.target.closest('a, button');
  if (!target || target.dataset.silentSound === 'true') return;
  if (soundEnabled) shutterSound();
});

// Keep mobile page snapping gentle and don't trap touch scrolling.
if (window.matchMedia('(max-width: 760px)').matches) {
  document.documentElement.style.scrollSnapType = 'y proximity';
}
const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');

menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

// Project category filter.
const filterButtons = document.querySelectorAll('.filter');
const projectCards = document.querySelectorAll('.work-card');
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;
    projectCards.forEach(card => {
      card.classList.toggle('hidden', filter !== 'all' && card.dataset.category !== filter);
    });
  });
});

// Short camera-shutter style click sound, generated locally (no sound file needed).
// Audio starts only after the visitor's first interaction, as browsers require.
let audioContext;
function shutterSound() {
  try {
    audioContext ||= new (window.AudioContext || window.webkitAudioContext)();
    if (audioContext.state === 'suspended') audioContext.resume();
    const now = audioContext.currentTime;
    const noiseBuffer = audioContext.createBuffer(1, Math.floor(audioContext.sampleRate * 0.055), audioContext.sampleRate);
    const channel = noiseBuffer.getChannelData(0);
    for (let i = 0; i < channel.length; i++) channel[i] = (Math.random() * 2 - 1) * (1 - i / channel.length);
    const noise = audioContext.createBufferSource();
    noise.buffer = noiseBuffer;
    const filter = audioContext.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.setValueAtTime(1300, now);
    const noiseGain = audioContext.createGain();
    noiseGain.gain.setValueAtTime(0.0001, now);
    noiseGain.gain.exponentialRampToValueAtTime(0.12, now + 0.004);
    noiseGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.045);
    noise.connect(filter).connect(noiseGain).connect(audioContext.destination);
    noise.start(now);
    noise.stop(now + 0.05);

    const body = audioContext.createOscillator();
    const bodyGain = audioContext.createGain();
    body.type = 'triangle';
    body.frequency.setValueAtTime(1050, now);
    body.frequency.exponentialRampToValueAtTime(180, now + 0.035);
    bodyGain.gain.setValueAtTime(0.0001, now);
    bodyGain.gain.exponentialRampToValueAtTime(0.13, now + 0.003);
    bodyGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.045);
    body.connect(bodyGain).connect(audioContext.destination);
    body.start(now);
    body.stop(now + 0.05);
  } catch (_) {
    // Sound is decorative; keep navigation working if audio is unavailable.
  }
}

let soundEnabled = true;
document.addEventListener('click', event => {
  const target = event.target.closest('a, button');
  if (!target || target.dataset.silentSound === 'true') return;
  if (soundEnabled) shutterSound();
});

// Keep mobile page snapping gentle and don't trap touch scrolling.
if (window.matchMedia('(max-width: 760px)').matches) {
  document.documentElement.style.scrollSnapType = 'y proximity';
}
 
