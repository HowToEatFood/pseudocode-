input.onButtonPressed(Button.A, function () {
    basic.showString("y=mx+b")
})
input.onButtonPressed(Button.AB, function () {
    music.playMelody("B A G A G F A C5 ", 120)
    music.playMelody("G B A G C5 B A B ", 120)
})
input.onButtonPressed(Button.B, function () {
    music.setVolume(255)
    music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showNumber(6)
})
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
