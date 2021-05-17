# Introduction to MakeCode

## Step 1: Introduction

We are going to learn how to use the micro:bit to display different values. In your session you will be using the micro:bit to display soil moisture values

## Step 2: Display any number

To start, use the ``||basic:show number||`` command to display any number ``||input:on button A pressed||``    

```blocks
input.onButtonPressed(Button.A, function () {
    basic.showNumber(0)
})
```

## Step 3: Display mathematical values

Now change the value of ``||basic:show number||`` to be a ``||math:square root||`` solution. In your session you will use the soil moisture sensor to gather data to display on the micro:bit.

Test out different values on the micro:bit!

```blocks
input.onButtonPressed(Button.A, function () {
    basic.showNumber(Math.sqrt(25))
})
```

## Step 4: Display with a bar graph

Repeat steps 2 and 3 using ``||led:plot bar graph||`` and ``||input:on button B pressed||`` instead of ``||basic:show number||`` and ``||input:on button A pressed||``. Experiment with different ways of displaying values.

```blocks
input.onButtonPressed(Button.A, function () {
    basic.showNumber(Math.sqrt(25))
})
input.onButtonPressed(Button.B, function () {
    led.plotBarGraph(
    Math.sqrt(25),
    25
    )
})
```