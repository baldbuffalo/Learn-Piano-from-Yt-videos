# PianoTutor — Learn Piano from YouTube

A lightweight, single-page piano practice tool. Paste a YouTube video URL, slow it down, loop a difficult passage, and practise notes using the on-screen keyboard or a connected MIDI keyboard.

## Features

- Embedded YouTube playback with speed controls and ±5-second seeking
- A/B looping for repeating difficult sections
- On-screen piano keyboard covering MIDI notes 36–96
- Optional tab-audio capture with basic pitch detection and a falling-note visualizer
- Experimental visual detection for coloured falling-note bars in Synthesia-style videos, with adjustable low/high pitch range
- Web MIDI input plus selectable MIDI output for sending detected notes to a connected synthesizer or virtual instrument
- Key highlighting and a simple pause-and-practise mode
- Keyboard shortcuts: `Space` play/pause, `←` / `→` seek 5 seconds, `A` set loop start, `B` set loop end
- Responsive layout for desktop, tablet, and mobile screens

## Run it

Open [index.html](./index.html) in a modern browser, or serve this folder from a local/static web server. No package installation or backend is required.

For audio capture and Web MIDI, use a browser that supports the relevant APIs and serve the page from **HTTPS or localhost**. When capturing audio, explicitly choose the browser tab and enable its tab-audio sharing option. Browser and operating-system support varies.

## Limitations

- The app uses YouTube's embedded player, so private, unavailable, age-restricted, or embedding-restricted videos may not play.
- Visual falling-note recognition is experimental and heuristic-based. It works best with clearly visible, brightly coloured note bars; it can misread video UI, unusual palettes, perspective, or lane layouts. The low/high pitch settings approximate the range across the video width and may need adjustment. It is not guaranteed to identify every note correctly.
- Visual recognition uses the captured tab's video frames and needs browser screen/tab-capture permission. Some browsers or operating systems may not expose usable frames or tab audio.
- Audio detection estimates a dominant pitch from captured audio. It works best with clear, isolated notes; chords, dense arrangements, drums, and other instruments can confuse it.
- MIDI input/output requires browser Web MIDI support, permission, and compatible connected devices. Selecting MIDI output sends note events to that device; MIDI output does not itself guarantee audible sound unless the device or a software synthesizer produces it.
- Practice mode compares key presses with detected notes; it does not know the intended score or guarantee a musically correct transcription.

## Privacy

Audio capture starts only after you click the capture control and approve the browser's sharing prompt. The page processes the captured stream locally in the browser and does not upload it to a project backend.

## Project

The app is implemented in a standalone `index.html` file with inline CSS and JavaScript. There is no build step.
