input.onButtonPressed(Button.A, function () {
    basic.showString("y=mx+b")
})
input.onGesture(Gesture.TiltLeft, function () {
    for (let index = 0; index < 10; index++) {
        basic.showString("t",5)
basic.showString("m",5)
basic.showString("s",5)
    }
    letter = randint(1, 3)
    if (letter == 1) {
        basic.showString("m")
    } else if (letter == 2) {
        basic.showString("t")
    } else if (letter == 3) {
        basic.showString("s")
    }
})
input.onButtonPressed(Button.AB, function () {
    music.playMelody("B A G A G F A C5 ", 120)
    music.playMelody("G B A G C5 B A B ", 120)
})
input.onButtonPressed(Button.B, function () {
    music.setVolume(255)
    music.playMelody("C - - C - - C - ", 120)
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("DONT FORGET HOMEWORK")
})
input.onGesture(Gesture.TiltRight, function () {
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
    music.playTone(523, music.beat(BeatFraction.Breve))
})
let letter = 0
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
