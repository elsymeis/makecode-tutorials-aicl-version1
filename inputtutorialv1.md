# Introduction to MakeCode

## Step 1: Introduction

We are going to learn how to use the micro:bit to input different button presses to display different LED colors. In your session you will display LEDs based on the findings of the soil moisture and environmental sensors to guide your decisions. 

## Step 2: Button presses
  
To start, set a ``||neopixel:strip||`` to one of the pins on your digital micro:bit (0, 1, or 2) in RGB format ``||input:on button A pressed||``. In your session, you will want to set the strip to pin 12 becasue the LEDs will be displayed on the gator:bit.

```blocks
input.onButtonPressed(Button.A, function () {
    strip = neopixel.create(DigitalPin.P2, 24, NeoPixelMode.RGB)
})
```

## Step 3: More button presses

Set the same strip for inputs ``||input:on button B pressed||`` and ``||input:on button A+B pressed||``.

```blocks
input.onButtonPressed(Button.A, function () {
    strip = neopixel.create(DigitalPin.P2, 24, NeoPixelMode.RGB)
})
input.onButtonPressed(Button.AB, function () {
    strip = neopixel.create(DigitalPin.P2, 24, NeoPixelMode.RGB)
})
input.onButtonPressed(Button.B, function () {
    strip = neopixel.create(DigitalPin.P2, 24, NeoPixelMode.RGB)
})
```

## Step 4: Display different colors

Finally, add ``||neopixel:show LED color||`` to button A pressed and button B pressed and display red and green. On button A+B pressed ``||neopixel:show a rainbow||``.

```blocks
input.onButtonPressed(Button.A, function () {
    strip = neopixel.create(DigitalPin.P2, 24, NeoPixelMode.RGB)
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
})
input.onButtonPressed(Button.AB, function () {
    strip = neopixel.create(DigitalPin.P2, 24, NeoPixelMode.RGB)
    strip.showRainbow(1, 260)
})
input.onButtonPressed(Button.B, function () {
    strip = neopixel.create(DigitalPin.P2, 24, NeoPixelMode.RGB)
    strip.showColor(neopixel.colors(NeoPixelColors.Orange))
})
```

