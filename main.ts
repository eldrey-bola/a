input.onPinPressed(TouchPin.P0, function () {
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
    basic.showLeds(`
        . . . # #
        . . . # #
        . . . # #
        . . # # #
        . . # # #
        `)
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showLeds(`
        # # # . .
        # # # . .
        # # # . .
        # # . . .
        # # . . .
        `)
})
basic.forever(function () {
	
})
