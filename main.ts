tiles.setCurrentTilemap(tilemap`level2`)
let fish = Render.getRenderSpriteInstance()
let shark = sprites.create(assets.image`myImage1`, SpriteKind.Enemy)
controller.moveSprite(fish, 100, 100)
Render.setViewMode(ViewMode.raycastingView)
tiles.placeOnTile(shark, tiles.getTileLocation(0, 1))
game.onUpdateInterval(500, function () {
    scene.followPath(shark, scene.aStar(shark.tilemapLocation(), Render.getRenderSpriteInstance().tilemapLocation()), 100)
})
