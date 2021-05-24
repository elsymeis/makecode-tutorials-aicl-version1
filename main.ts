input.onButtonPressed(Button.A, function () {
    music.playTone(466, music.beat(BeatFraction.Whole))
})
input.onButtonPressed(Button.AB, function () {
    music.playTone(370, music.beat(BeatFraction.Whole))
})
input.onButtonPressed(Button.B, function () {
    music.playTone(415, music.beat(BeatFraction.Whole))
})
basic.showString("Hello!")
basic.forever(function () {
    music.setTempo(120)
})
