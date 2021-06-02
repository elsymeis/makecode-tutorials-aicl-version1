# Introduction to MakeCode

## Step 1: Introduction

We are going to learn different ways the micro:bit can automate code by creating rules using conditional statements. In your session you will write code that interprets soil moisture sensor and environmental sensor readings in a way that most benefits the system you build.

## Step 2: If, else statements
   
Under forever, place the ``||logic:if, else||`` conditional statement with the ``||input:button A is pressed||`` block.

```blocks
basic.forever(function() {
    if (input.buttonIsPressed(Button.A)) {

    } else {

    }
})
```

## Step 3: Add a condition

Add an if statement by clicking the plus in the corner of the conditional statement and add the ``||input:button B is pressed||`` condition.

```blocks
basic.forever(function() {
    if (input.buttonIsPressed(Button.A)) {

    } else if (input.buttonIsPressed(Button.B)) {

    } else {
    
    }
})
```

## Step 4: Display icons

``||basic:show icon||`` straight face whenever no buttons are being pressed, smiley face when button A is being pressed, and frowny face when button B is being pressed. Experiement with different conditions and display options!

```blocks
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.Happy)
    } else if (input.buttonIsPressed(Button.B)) {
        basic.showIcon(IconNames.Sad)
    } else {
        basic.showIcon(IconNames.Asleep)
    }
})
```