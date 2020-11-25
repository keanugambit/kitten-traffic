let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    4 4 4 . . . . 4 4 4 . . . . . . 
    4 3 4 4 4 4 4 4 3 4 . . . . . . 
    4 3 4 7 4 4 7 4 3 4 . . . . . . 
    4 4 4 7 4 4 7 4 4 e . . . . . . 
    4 4 4 4 4 4 4 4 4 e 4 4 e 4 . . 
    4 4 4 4 3 4 4 4 4 e 4 4 e 4 4 . 
    4 4 d d f d d 4 4 e 4 4 e 4 4 e 
    4 4 4 f f f 4 4 4 e 4 4 e 4 4 e 
    . 4 4 4 4 4 4 4 4 e 4 4 e 4 4 e 
    . . 4 4 4 4 4 4 4 e 4 4 . . 4 4 
    . . . . e e . . . . e e . . e e 
    . . . . 4 4 . . . . 4 4 . . 4 4 
    . . . . 4 4 . . . . 4 4 . . 4 4 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
tiles.setTilemap(tilemap`level1`)
controller.player1.moveSprite(mySprite)
for (let value of tiles.getTilesByType(sprites.dungeon.floorLight2)) {
    tiles.setWallAt(value, true)
}
tiles.placeOnTile(mySprite, tiles.getTileLocation(8, 8))
scene.cameraFollowSprite(mySprite)
