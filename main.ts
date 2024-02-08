input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
})
input.calibrateCompass()
basic.showIcon(IconNames.Square)
basic.showIcon(IconNames.Diamond)
basic.showIcon(IconNames.SmallDiamond)
basic.showIcon(IconNames.Square)
basic.showIcon(IconNames.Diamond)
basic.showIcon(IconNames.SmallDiamond)
basic.showIcon(IconNames.Square)
basic.showIcon(IconNames.Diamond)
basic.showIcon(IconNames.SmallDiamond)
basic.clearScreen()
basic.forever(function () {
    if (input.compassHeading() < 10 || input.compassHeading() > 350) {
        basic.showArrow(ArrowNames.North)
    } else if (input.compassHeading() < 100 && input.compassHeading() > 80) {
        basic.showArrow(ArrowNames.East)
    } else if (input.compassHeading() < 190 && input.compassHeading() > 170) {
        basic.showArrow(ArrowNames.South)
    } else if (input.compassHeading() < 280 && input.compassHeading() > 260) {
        basic.showArrow(ArrowNames.West)
    } else {
        basic.showIcon(IconNames.SmallDiamond)
    }
})
