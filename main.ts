input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # . # # #
        # . # . .
        # . # # #
        # . . . #
        # . # # #
        `)
    basic.pause(1000)
    basic.showLeds(`
        # . # . #
        # . # . #
        # . # # #
        # . . . #
        # . . . #
        `)
    basic.pause(1000)
    basic.showLeds(`
        # . # # .
        # . . . #
        # . # # #
        # . . . #
        # . # # .
        `)
    basic.pause(1000)
    basic.showLeds(`
        # . # # .
        # . . . #
        # . . # .
        # . # . .
        # . # # #
        `)
    basic.pause(1000)
    basic.showLeds(`
        # . # . .
        # . # . .
        # . # . .
        # . # . .
        # . # . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        # . # # .
        # # . . #
        # # . . #
        # # . . #
        # . # # .
        `)
    basic.pause(1000)
    basic.showNumber(9)
    basic.pause(1000)
    basic.showNumber(8)
    basic.pause(1000)
    basic.showNumber(7)
    basic.pause(1000)
    basic.showNumber(6)
    basic.pause(1000)
    basic.showNumber(5)
    basic.pause(1000)
    basic.showNumber(4)
    basic.pause(1000)
    basic.showNumber(3)
    basic.pause(1000)
    basic.showNumber(2)
    basic.pause(1000)
    basic.showNumber(1)
    basic.pause(1000)
    music.playTone(262, music.beat(BeatFraction.Breve))
})
input.onGesture(Gesture.ScreenUp, function () {
	
})
input.onButtonPressed(Button.AB, function () {
    music.playMelody("B A G A G F A C5 ", 120)
    music.playMelody("G B A G C5 B A B ", 120)
})
input.onButtonPressed(Button.B, function () {
    music.setVolume(255)
    music.playMelody("C - - C - - C - ", 120)
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
