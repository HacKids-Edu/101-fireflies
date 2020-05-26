let coluna = 0
let linha = 0
let brilho = 0
basic.forever(function () {
    for (let índice = 0; índice <= 800; índice++) {
        coluna = randint(0, 4)
        linha = randint(0, 4)
        brilho = randint(10, 255)
        led.plotBrightness(coluna, linha, brilho)
        basic.pause(0.01 * 1000)
        basic.clearScreen()
    }
})
basic.forever(function () {
    music.startMelody(music.builtInMelody(Melodies.Funk), MelodyOptions.Forever)
    music.rest(music.beat(BeatFraction.Breve))
})
