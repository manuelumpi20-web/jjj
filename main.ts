input.onButtonPressed(Button.A, function () {
    servos.P0.setAngle(90)
    basic.pause(2000)
    servos.P0.setAngle(180)
})
input.onButtonPressed(Button.AB, function () {
    record.playAudio(record.BlockingState.Blocking)
})
input.onButtonPressed(Button.B, function () {
    record.startRecording(record.BlockingState.Blocking)
})
basic.forever(function () {
	
})
