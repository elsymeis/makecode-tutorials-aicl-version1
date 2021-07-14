# Introduction to gator:bit sensors

## Step 1: Introduction

We are going to learn how to use a micro:bit to control a gator:bit's LED outputs, soil moisture sensor, and environmental sensor. Start by plugging the plant-watering system into the computer. 

## Step 2: Display the temperature

To ``||basic:start||``, ``||gatorEnvironment:initialize||`` the environmental sensor to activate it when the program starts. Use the ``||basic:show number||`` and ``||gatorEnvironment:get value||`` commands to show the temperature on the micro:bit while ``||input:button A is pressed||``. ``||math:Round||`` the temperature so it is easier to read. 

```blocks
input.onButtonPressed(Button.A, function () {
    basic.showNumber(Math.round(gatorEnvironment.getMeasurement(measurementType.degreesF)))
})
gatorEnvironment.beginEnvironment()
```

## Step 3: Display the CO2 levels

The environmental sensor can also be used to detect air quality. on ``||input:button B is pressed||``, display the air's CO2 levels using the ``||basic:show number||`` and ``||gatorEnvironment:get value||`` commands.

While displaying the CO2 levels, light up the gator:bit's built-in LED strip by setting the ``||neopixel:strip||`` to ``||neopixel:Neopixel at pin P12||`` in RGB color format. Pin P12 is the gator:bit's built in pin. Then, set the ``||neopixel:strip||`` to ``||neopixel:show color||`` of your choice. 

```blocks
input.onButtonPressed(Button.A, function () {
    basic.showNumber(Math.round(gatorEnvironment.getMeasurement(measurementType.degreesF)))
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(gatorEnvironment.getMeasurement(measurementType.eCO2))
    strip = neopixel.create(DigitalPin.P2, 24, NeoPixelMode.RGB)
    strip.showColor(neopixel.colors(NeoPixelColors.Orange))    
})
let strip: neopixel.Strip = null
gatorEnvironment.beginEnvironment()
```

## Step 4: Display the soil moisture values and water the fig plant

We are now going to use the soil moisture sensor to detect the moisture of the soil, as the fig gets watered by the pump in the plant-watering system. 

Display the ``||gatorSoil:get moisture||`` value while ``||input:button A+B is pressed||``. ``||math:Round||`` the value if necessary. You should have the signal come from pin P0 and the power from pin P1 as set up on the gator:bit. 

Turn on the water pump by setting ``||pins:digital write||`` pin on pin 2 to 1. ``||basic:Pause||`` for 2 seconds then set the pin back to 0.

```blocks
input.onButtonPressed(Button.A, function () {
    basic.showNumber(Math.round(gatorEnvironment.getMeasurement(measurementType.degreesF)))
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(Math.round(gatorSoil.moisture(AnalogPin.P0, GatorSoilType.Moisture, DigitalPin.P1)))
    pins.digitalWritePin(DigitalPin.P2, 1)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P2, 0)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(gatorEnvironment.getMeasurement(measurementType.eCO2))
    strip = neopixel.create(DigitalPin.P2, 24, NeoPixelMode.RGB)
    strip.showColor(neopixel.colors(NeoPixelColors.Orange))  
})
let strip: neopixel.Strip = null
gatorEnvironment.beginEnvironment()
```