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


> Open this page at [https://elsymeis.github.io/makecode-tutorials-aicl-version1/](https://elsymeis.github.io/makecode-tutorials-aicl-version1/)

## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/elsymeis/makecode-tutorials-aicl-version1** and import

## Edit this project ![Build status badge](https://github.com/elsymeis/makecode-tutorials-aicl-version1/workflows/MakeCode/badge.svg)

To edit this repository in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/elsymeis/makecode-tutorials-aicl-version1** and click import

## Blocks preview

This image shows the blocks code from the last commit in master.
This image may take a few minutes to refresh.

![A rendered view of the blocks](https://github.com/elsymeis/makecode-tutorials-aicl-version1/raw/master/.github/makecode/blocks.png)

#### Metadata (used for search, rendering)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
