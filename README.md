# PianoTutor — Learn Piano from YouTube

A lightweight, single-page piano practice tool. Paste a YouTube video URL, slow it down, loop a difficult passage, and practise notes using the on-screen keyboard or a connected MIDI keyboard.

## Features

- Embedded YouTube playback with speed controls and ±5-second seeking
- A/B looping for repeating difficult sections
- On-screen piano keyboard covering MIDI notes 36–96
- Optional tab-audio capture with basic pitch detection and a falling-note visualizer
- Web MIDI input, key highlighting, and a simple pause-and-practise mode
- Keyboard shortcuts: `Space` play/pause, `←` / `→` seek 5 seconds, `A` set loop start, `B` set loop end
- Responsive layout for desktop, tablet, and mobile screens

## Run it

Open [index.html](./index.html) in a modern browser, or serve this folder from a local/static web server. No package installation or backend is required.

For audio capture and Web MIDI, use a browser that supports the relevant APIs and serve the page from **HTTPS or localhost**. When capturing audio, explicitly choose the browser tab and enable its tab-audio sharing option. Browser and operating-system support varies.

## Limitations

- The app uses YouTube's embedded player, so private, unavailable, age-restricted, or embedding-restricted videos may not play.
- Audio detection estimates pitch from the captured audio. It works best with clear, isolated notes; full chords, dense arrangements, drums, and other instruments can confuse the detector. It is a practice aid, not a reliable audio-to-MIDI transcription system.
- MIDI input requires a compatible device and browser permission. Some mobile browsers do not support Web MIDI.
- The practice mode compares MIDI key presses with notes detected from the audio; it does not know the intended score or guarantee that a performance is musically correct.

## Privacy

Audio capture starts only after you click the capture control and approve the browser's sharing prompt. The page processes the captured stream locally in the browser and does not upload it to a project backend.

## Project

The app is implemented in a standalone `index.html` file with inline CSS and JavaScript. There is no build step.
