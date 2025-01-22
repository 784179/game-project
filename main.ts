tiles.setCurrentTilemap(tilemap`level2`)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . c c c c . . . 
    . . . . . . . c c d d d d c . . 
    . . . . . c c c c c c d d c . . 
    . . . c c c 4 4 4 4 d c c c c c 
    . . c 4 4 1 4 4 4 4 4 1 c c 4 f 
    . c 4 4 4 4 1 4 4 4 4 d 1 f 4 f 
    f 4 4 4 4 4 1 4 4 4 4 4 1 f 4 f 
    f 4 4 f 4 4 1 4 c f 4 4 1 4 4 f 
    f 4 4 4 4 4 1 c 4 f 4 4 1 f f f 
    . f 4 4 4 4 1 4 4 f 4 4 d f . . 
    . . f 4 4 1 4 c c 4 4 d f . . . 
    . . . f d 4 4 4 4 4 4 c f . . . 
    . . . . f f 4 4 4 4 c d b c . . 
    . . . . . . f f f f d d d c . . 
    . . . . . . . . . . c c c . . . 
    `, SpriteKind.Player)
let mySprite2 = sprites.create(img`
    .............ccfff..............
    ...........ccddbcf..............
    ..........ccddbbf...............
    ..........fccbbcf...............
    .....fffffccccccff.........ccc..
    ...ffbbbbbbbcbbbbcfff....ccbbc..
    ..fbbbbbbbbcbcbbbbcccff.cdbbc...
    ffbbbbbbffbbcbcbbbcccccfcdbbf...
    fbcbbb11ff1bcbbbbbcccccffbbf....
    fbbb11111111bbbbbcccccccbbcf....
    .fb11133cc11bbbbcccccccccccf....
    ..fccc31c111bbbcccccbdbffbbcf...
    ...fc13c111cbbbfcddddcc..fbbf...
    ....fccc111fbdbbccdcc.....fbbf..
    ........ccccfcdbbcc........fff..
    .............fffff..............
    `, SpriteKind.Player)
let mySprite3 = sprites.create(img`
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
