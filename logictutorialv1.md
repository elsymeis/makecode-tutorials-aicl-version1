# Introduction to MakeCode

## Step 1: Introduction

We are going to learn different ways the micro:bit (digitally displayed on the left) can automate code by creating rules called conditional statements. In your session you will write code that interprets soil moisture sensor and environmental sensor readings in a way that most benefits the system you build. You will use what you learn here to do so!

## Step 2: If, else statements
   
Place the ``||logic:if, else||`` conditional statement under the forever block. This tells the micro:bit that if one thing happens, then to make another happen. And, if the first thing does not happen, to make something else happen. To start, make the conditional statement if ``||input:button A is pressed||``.

```blocks
basic.forever(function() {
    if (input.buttonIsPressed(Button.A)) {

    } else {

    }
})
```

## Step 3: Add a condition

To add a second condition, click the ``||logic:circled plus sign||`` and add ``||input:button B is pressed||``.

```blocks
basic.forever(function() {
    if (input.buttonIsPressed(Button.A)) {

    } else if (input.buttonIsPressed(Button.B)) {

    } else {
    
    }
})
```

## Step 4: Display icons

Now let's add our "then" statements to the conditions. If button A is pressed, then ``||input:show a smiley face icon||``. If button B is pressed, then ``||input:show a frowny face icon||``. Finally, ifi neither A nor B are pressed, ``||input:show a straight face icon||``. Test your code on the digital micro:bit!

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