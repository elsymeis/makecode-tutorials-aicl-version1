# Introduction to MakeCode

## Step 1: Introduction

We are going to learn how to use the buttons on the micro:bit to input different commands. For this tutorial, we will input sound commands that will be useful to you in your session. 

## Step 2: Button presses

To start, pull out the ``||input:on button A pressed||`` input and ``||music:start the melody||`` "dadadum" when the button is pressed. Have the melody repeat once, then ``||basic:pause||`` for 5 seconds and play it once more.

```blocks
input.onButtonPressed(Button.A, function () {
    music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
    basic.pause(5000)
    music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
})
```

## Step 3: More button presses

``||input:On button B pressed||``, ``||music:play a custom melody||`` at 120 bpm. Play another ``||input:on button A+B pressed||``.

```blocks
input.onButtonPressed(Button.A, function () {
    music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
    basic.pause(5000)
    music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
})
input.onButtonPressed(Button.AB, function () {
    music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Once)
})
input.onButtonPressed(Button.B, function () {
    music.playMelody("E B C5 A B G A F ", 120)
})
```
