let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 4 f f 4 . . . . . . 
    . . . . . 4 4 4 4 4 4 . . . . . 
    . . . . 4 4 7 4 4 7 4 4 . . . . 
    . . . 4 3 4 7 4 4 7 4 3 4 . . . 
    . . . 4 3 f f f f f f 3 4 . . . 
    . . . 4 4 f 4 4 4 4 f 4 4 . . . 
    . . . . . 4 4 4 4 4 4 . . . . . 
    . . . . . 4 4 4 4 4 4 . . . . . 
    . . . . . 4 4 4 4 4 4 . . . . . 
    . . . . . 4 4 4 4 4 4 . . . . . 
    . . . . . 4 4 . . 4 4 . . . . . 
    . . . . . 4 4 . . 4 4 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
tiles.setTilemap(tilemap`level1`)
controller.player2.moveSprite(mySprite)
for (let value of tiles.getTilesByType(sprites.dungeon.floorLight2)) {
    tiles.setWallAt(value, true)
}
