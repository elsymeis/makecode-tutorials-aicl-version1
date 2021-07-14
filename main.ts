let strip: neopixel.Strip = null
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (gatorEnvironment.getMeasurement(measurementType.eCO2)))
    strip = neopixel.create(DigitalPin.P12, 24, NeoPixelMode.RGB)
    strip.showColor(neopixel.colors(NeoPixelColors.Blue))
})
