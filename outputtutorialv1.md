# Introduction to MakeCode

## Step 1: Introduction

We are going to learn different ways to use the micro:bit to display values. In your session you will be displaying soil moisture, temperature, and CO2 values.

## Step 2: Set a variable

On ``||basic:start||`` add a ``||variables:new variable||`` called "number" and set it to 5.

```blocks
let number = 0
number = 5
```

## Step 3: Display a number

Display ``||variables:number||`` on the micro:bit when ``||input:button A is pressed||`` using the ``||basic:show string||`` command.

```blocks
input.onButtonPressed(Button.A, function () {
    basic.showString("" + (number))
})
let number = 0
number = 5
```

## Step 4: Display an icon

Another way to display outputs is using the micro:bit's LEDs to show different icons. While ``||input:button B is pressed||``, have the ``||basic:show leds||`` command display a heart.

```blocks
input.onButtonPressed(Button.A, function () {
    basic.showString("" + (number))
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # . # .
        # . # . #
        # . . . #
        . # . # .
        . . # . .
        `)
})
let number = 0
number = 5
```
## Step 5: Display an icon

Finally, add ``||basic:show icon||`` while ``||input:button A+B is pressed||`` and choose an icon to display on the micro:bit.

```blocks
input.onButtonPressed(Button.A, function () {
    basic.showString("" + (number))
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # . # .
        # . # . #
        # . . . #
        . # . # .
        . . # . .
        `)
})
let number = 0
number = 5
```



