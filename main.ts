input.onButtonPressed(Button.A, function () {
    p1 = randint(0, 10)
    basic.showNumber(p1)
})
input.onButtonPressed(Button.B, function () {
    p2 = randint(0, 10)
    basic.showNumber(p2)
    if (p1 > p2) {
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            # # # # #
            # . . . #
            `)
    } else if (p1 < p2) {
        basic.showLeds(`
            # # # # .
            # . . . #
            # # # # .
            # . . . #
            # # # # .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            # # # # #
            . . . . .
            # # # # #
            . . . . .
            `)
    }
})
let p1 = 0
let p2 = 0
p2 = 0
p1 = 0
basic.forever(function () {
	
})
