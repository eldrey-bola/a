let tocar = false
let P1 = 0
let P2 = 0
input.onPinPressed(TouchPin.P0, function () {
    tocar = false
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.showString("bo")
    basic.pause(3000)
    basic.showIcon(IconNames.Asleep)
    basic.pause(500)
    basic.clearScreen()
})
input.onPinPressed(TouchPin.P2, function () {
    if (tocar == false) {
        tocar = true
        P1 += 1
        basic.showLeds(`
            . . . # #
            . . . # #
            . . . # #
            . . # # #
            . . # # #
            `)
    }
})
input.onPinPressed(TouchPin.P1, function () {
    if (tocar == true) {
        tocar = true
        P2 += 1
        basic.showLeds(`
            # # # . .
            # # # . .
            # # . . .
            # # . . .
            # # . . .
            `)
    }
})
basic.forever(function () {
	
})
