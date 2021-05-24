# Introduction to MakeCode

## Step 1: Introduction

We are going to learn how to use the micro:bit to input different muscial notes to play a song. In your session you will be using the micro:bit to send tasks to the soil moisture and environmental sensors.

## Step 2: Display any number

To start, use the ``||basic:show string||`` command to display "hello" ``||basic:on start||``    

```blocks
basic.showString("hello")
})
```

## Step 3: Display mathematical values

You want your music to maintain a consistent tempo, so you should ``||music:set tempo||`` in the ``||basic:forever||`` function to whatever you want it to be.

```blocks
basic.forever(function() {
    music.setTempo(120)
})
```

## Step 4: Display with a bar graph

Repeat steps 2 and 3 using ``||led:plot bar graph||`` and ``||input:on button B pressed||`` instead of ``||basic:show number||`` and ``||input:on button A pressed||``. Experiment with different ways of displaying values.

Now we want to set our inputs as musical notes. ``||music:play tone||`` Middle A# ``||input:on button A pressed||`` for 1 beat, Middle G# ``||input:on button B pressed||``, and Middle F# ``||input:on button A+B pressed||``. Play around and make some music! Change your notes, beat count, and tempo to hear different sounds.

```blocks
input.onButtonPressed(Button.A, function () {
    music.playTone(466,1)
})
input.onButtonPressed(Button.B, function () {
    music.playTone(415,1)
})
input.onButtonPressed(Button.AB, function () {
    music.playTone(370,1)
})
```
