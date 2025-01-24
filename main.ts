function start (bool: boolean, Do_you_want_to_go_into_3D_mode_right_now: string) {
    if (dimension = true) {
        Render.setViewMode(ViewMode.raycastingView)
        Render.moveWithController(2, 3, 0)
    } else {
        Render.setViewMode(ViewMode.tilemapView)
        Render.moveWithController(0, 0, 0)
    }
}
start(true, "")
tiles.setCurrentTilemap(tilemap`level2`)
Render.moveWithController(2, 3, 0)
let fish = sprites.create(img`
    . . . . . . . . c c c c . . . . 
    . . . . . . c c d d d d c . . . 
    . . . . . c c c c c c d c . . . 
    . . . . c c 4 4 4 4 d c c . c c 
    . . . c 4 d 4 4 4 4 4 1 c c 4 c 
    . . c 4 4 4 1 4 4 4 4 d 1 c 4 f 
    . c 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
    f 4 4 4 4 4 1 1 c f 4 4 1 f 4 f 
    f 4 4 4 f 4 1 c 4 f 4 4 1 f 4 f 
    f 4 4 4 4 4 1 4 4 f 4 4 d f f f 
    . f 4 4 4 4 1 c c 4 4 d f f . . 
    . . f f 4 d 4 4 4 4 4 c f . . . 
    . . . . f f 4 4 4 4 c d b c . . 
    . . . . . . f f f f d d d c . . 
    . . . . . . . . . . c c c . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(fish)
let shark = sprites.create(assets.image`myImage1`, SpriteKind.Enemy)
controller.moveSprite(fish, 100, 100)
tiles.placeOnTile(shark, tiles.getTileLocation(0, 1))
game.onUpdateInterval(500, function () {
    scene.followPath(shark, scene.aStar(shark.tilemapLocation(), fish.tilemapLocation()), 100)
})
