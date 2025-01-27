sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.gameOver(false)
})
let time = ""
let fish: Sprite = null
let shark: Sprite = null
game.splash("press space a lil")
let play = game.ask("Do you want to play?")
if (play = true) {
    controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    Render.toggleViewMode()
    
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    game.setGameOverMessage(false, "GAME OVER!")
})
game.splash("Hi, welcome to our game. You will use the arrow keys to try to escape from the ALDI monster.")
    game.splash("Use \"ENTER\" to switch between 3D and 2D modes.")
    time = game.askForString("Do you want to have a countdown?", 3)
    if (time == "yes") {
        info.startCountdown(30)
    } else {
        game.splash("Have fun!")
    }
    tiles.setCurrentTilemap(tilemap`level2`)
    Render.setViewMode(ViewMode.tilemapView)
    Render.moveWithController(2, 3, 0)
    fish = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    fish = Render.getRenderSpriteVariable()
    scene.cameraFollowSprite(fish)
    shark = sprites.create(assets.image`myImage1`, SpriteKind.Enemy)
    tiles.placeOnTile(shark, tiles.getTileLocation(0, 1))
    game.onUpdateInterval(750, function () {
    scene.followPath(shark, scene.aStar(shark.tilemapLocation(), fish.tilemapLocation()), 34)
})
} else {
    game.splash("cmon")
}
