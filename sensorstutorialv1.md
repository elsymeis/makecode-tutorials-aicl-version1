# Introduction to gator:bit sensors

## Step 1: Introduction

We are going to learn how to use a micro:bit and gator:bit soil moisture and environmental sensors to display soil moisture, temperature, and CO2 values. Start by plugging the plant-watering system into the computer.

## Step 2: Display the temperature

To ``||basic:start||``, ``||gatorEnvironment:initialize||`` the environmental sensor to activate it when the program starts. Use the ``||basic:show number||`` and ``||gatorEnvironment:get value||`` commands to show the temperature on the micro:bit while ``||input:button A is pressed||``. ``||math:Round||`` the temperature so it is easier to read. 

```blocks
input.onButtonPressed(Button.A, function () {
    basic.showNumber(Math.round(gatorEnvironment.getMeasurement(measurementType.degreesF)))
})
gatorEnvironment.beginEnvironment()
```

## Step 3: Display the CO2 levels

Display the CO2 levels measured by the environmental sensor using the ``||gatorEnvironment:get value||`` command while ``||input:button B is pressed||``.

```blocks
input.onButtonPressed(Button.A, function () {
    basic.showNumber(Math.round(gatorEnvironment.getMeasurement(measurementType.degreesF)))
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(gatorEnvironment.getMeasurement(measurementType.eCO2))
})
gatorEnvironment.beginEnvironment()
```

## Step 4: Display the soil moisture values

Display the ``||gatorSoil:get moisture||`` value while ``||input:button A+B is pressed||`` using the soil moisture sensor. ``||math:Round||`` the value if necessary. You should have the signal come from pin P0 and the power from pin P1. When you check the soil moisture, water the plant by setting ``||pins:digital write||`` pin on pin 2 to 1. This will turn on the water pump. ``||basic:Pause||`` for 5 seconds then set the pin back to 0.

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
})
gatorEnvironment.beginEnvironment()
```