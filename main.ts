let counter = 0
basic.showLeds(`
    . . # . .
    . . # . .
    . . # . .
    . . . . .
    . . # . .
    `)
for (let index = 0; index < 4; index++) {
    counter += 1
    basic.showNumber(counter)
}
basic.forever(function () {
	
})
