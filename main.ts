controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        a a a . . . . a a a . . . . . . 
        a c a a a a a a c a . . . . . . 
        a c a 7 a a 7 a c a . . . . . . 
        a a a 7 a a 7 a a a . . . . . . 
        a a a a a a a a a 3 a a 3 a . . 
        a a a a 3 a a a a 3 a a 3 a a . 
        a a d d f d d a a 3 a a 3 a a 3 
        a a a f f f a a a 3 a a 3 a a 3 
        . a a a a a a a a 3 a a 3 a a 3 
        . . a a a a a a a 3 a a . . a a 
        . . . . 3 3 . . . . 3 3 . . 3 3 
        . . . . a a . . . . a a . . a a 
        . . . . a a . . . . a a . . a a 
        . . . . . . . . . . . . . . . . 
        `)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(right)
})
let right: Image = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    a a a . . . . a a a . . . . . . 
    a c a a a a a a c a . . . . . . 
    a c a 7 a a 7 a c a . . . . . . 
    a a a 7 a a 7 a a a . . . . . . 
    a a a a a a a a a 3 a a 3 a . . 
    a a a a 3 a a a a 3 a a 3 a a . 
    a a d d f d d a a 3 a a 3 a a 3 
    a a a f f f a a a 3 a a 3 a a 3 
    . a a a a a a a a 3 a a 3 a a 3 
    . . a a a a a a a 3 a a . . a a 
    . . . . 3 3 . . . . 3 3 . . 3 3 
    . . . . a a . . . . a a . . a a 
    . . . . a a . . . . a a . . a a 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let left = mySprite.image
mySprite.image.flipX()
right = mySprite.image
tiles.setTilemap(tilemap`level1`)
controller.player1.moveSprite(mySprite)
for (let value of tiles.getTilesByType(sprites.dungeon.floorLight2)) {
    tiles.setWallAt(value, true)
}
tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 1))
scene.cameraFollowSprite(mySprite)
let mySprite2 = sprites.create(img`
    . 3 . . 
    f c c c 
    c c c c 
    f c c c 
    . 3 . . 
    `, SpriteKind.Enemy)
tiles.placeOnTile(mySprite, tiles.getTileLocation(14, 14))
mySprite2.say("Sqeak")
let mySprite3 = sprites.create(img`
    . . . . . c c c c c c . . . . . 
    . . . c c e e e e e e c c . . . 
    . . c c c c e e e e c c c c . . 
    . c c c c c c c c c c c c c c . 
    c c c c c c c c c c c c c c c c 
    `, SpriteKind.Food)
forever(function () {
    if (mySprite2.vx < 0) {
        mySprite2.setImage(img`
            . 3 . . 
            f c c c 
            c c c c 
            f c c c 
            . 3 . . 
            `)
    }
    if (mySprite2.vx > 0) {
        mySprite2.setImage(img`
            . . 3 . 
            c c c f 
            c c c c 
            c c c f 
            . . 3 . 
            `)
    }
})
