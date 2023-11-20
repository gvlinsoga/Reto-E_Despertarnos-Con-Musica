input.onButtonPressed(Button.A, function () {
    if (input.lightLevel() < 200) {
        music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.UntilDone)
    } else if (input.lightLevel() < 50) {
        music.play(music.stringPlayable("E D G F B A C5 B ", 120), music.PlaybackMode.UntilDone)
    } else {
    	
    }
})
