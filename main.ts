namespace SpriteKind {
    export const Projectile2 = SpriteKind.create()
    export const Projectile3 = SpriteKind.create()
    export const Projectile4 = SpriteKind.create()
}
function First_Verse () {
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(494, music.beat(BeatFraction.Double))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(587, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Double))
}
function Animation () {
    Gift = sprites.create(img`
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
    animation.runImageAnimation(
    Gift,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        f f f f f f f f f f f f f f f f 
        f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
        f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
        f f f f f f f f f f f f f f f f 
        . f 2 2 2 2 2 5 5 2 2 2 2 2 f . 
        . f 2 2 2 2 2 5 5 2 2 2 2 2 f . 
        . f 2 2 2 2 2 5 5 2 2 2 2 2 f . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        . f 2 2 2 2 2 5 5 2 2 2 2 2 f . 
        . f 2 2 2 2 2 5 5 2 2 2 2 2 f . 
        . f 2 2 2 2 2 5 5 2 2 2 2 2 f . 
        . f 2 2 2 2 2 5 5 2 2 2 2 2 f . 
        . f f f f f f f f f f f f f f . 
        `,img`
        . . . . . . . . . . . f f f f f 
        . . . . . f f f f f f 2 2 2 2 f 
        f f f f f 2 2 2 2 2 2 2 2 2 2 f 
        f 2 2 2 2 2 2 2 2 2 2 f f f f f 
        f 2 2 2 2 f f f f f f . . . . . 
        f f f f f . . . . . . . . . . . 
        . f 2 2 2 2 2 5 5 2 2 2 2 2 f . 
        . f 2 2 2 2 2 5 5 2 2 2 2 2 f . 
        . f 2 2 2 2 2 5 5 2 2 2 2 2 f . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        . f 2 2 2 2 2 5 5 2 2 2 2 2 f . 
        . f 2 2 2 2 2 5 5 2 2 2 2 2 f . 
        . f 2 2 2 2 2 5 5 2 2 2 2 2 f . 
        . f 2 2 2 2 2 5 5 2 2 2 2 2 f . 
        . f f f f f f f f f f f f f f . 
        `,img`
        . . . . . f f f f f f 2 2 2 2 f 
        . . . . . 2 2 2 2 2 2 f f f f f 
        f f f f f 2 2 2 2 2 2 . . . . . 
        f 2 2 2 2 f f f f f f . . . . . 
        f 2 2 2 2 . . . . . . . . . . . 
        f f f f f . . . . . . . . . . . 
        . f 2 2 2 2 2 5 5 2 2 2 2 2 f . 
        . f 2 2 2 2 2 5 5 2 2 2 2 2 f . 
        . f 2 2 2 2 2 5 5 2 2 2 2 2 f . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        . f 2 2 2 2 2 5 5 2 2 2 2 2 f . 
        . f 2 2 2 2 2 5 5 2 2 2 2 2 f . 
        . f 2 2 2 2 2 5 5 2 2 2 2 2 f . 
        . f 2 2 2 2 2 5 5 2 2 2 2 2 f . 
        . f f f f f f f f f f f f f f . 
        `,img`
        f 2 2 f . . . . . . . . . . . . 
        f 2 2 f . . . . . . . . . . . . 
        f 2 2 f . . . . . . . . . . . . 
        f 2 2 f . . . . . . . . . . . . 
        f 2 2 f . . . . . . . . . . . . 
        f f f f . . . . . . . . . . . . 
        . f 2 2 2 2 2 5 5 2 2 2 2 2 f . 
        . f 2 2 2 2 2 5 5 2 2 2 2 2 f . 
        . f 2 2 2 2 2 5 5 2 2 2 2 2 f . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        . f 2 2 2 2 2 5 5 2 2 2 2 2 f . 
        . f 2 2 2 2 2 5 5 2 2 2 2 2 f . 
        . f 2 2 2 2 2 5 5 2 2 2 2 2 f . 
        . f 2 2 2 2 2 5 5 2 2 2 2 2 f . 
        . f f f f f f f f f f f f f f . 
        `],
    200,
    false
    )
    pause(800)
    Gift.say("Birthay Game!", 2000)
    pause(2000)
    Gift.setImage(img`
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
        `)
    Start = true
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Start) {
        Cat.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            3 3 3 . . . . 3 3 3 . . . . . . 
            3 c 3 3 3 3 3 3 c 3 . . . . . . 
            3 c 3 9 3 3 9 3 c 3 . . . . . . 
            3 3 3 9 3 3 9 3 3 3 . . . . . . 
            3 3 3 3 3 3 3 3 3 a 3 3 a 3 . . 
            3 3 3 3 a 3 3 3 3 a 3 3 a 3 3 . 
            3 3 d d f d d 3 3 a 3 3 a 3 3 a 
            3 3 3 f f f 3 3 3 a 3 3 a 3 3 a 
            . 3 3 3 3 3 3 3 3 a 3 3 a 3 3 a 
            . . 3 3 3 3 3 3 3 a 3 3 . . 3 3 
            . . . . a a . . . . a a . . a a 
            . . . . 3 3 . . . . 3 3 . . 3 3 
            . . . . 3 3 . . . . 3 3 . . 3 3 
            . . . . . . . . . . . . . . . . 
            `)
    }
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Food, function (sprite, otherSprite) {
    game.splash("The mouse beat you to it!")
    game.over(false)
})
function SetUpPlayers () {
    tiles.placeOnTile(Cat, tiles.getTileLocation(1, 1))
    scene.cameraFollowSprite(Cat)
    Mousie = sprites.create(img`
        . 3 . . 
        f c c c 
        c c c c 
        f c c c 
        . 3 . . 
        `, SpriteKind.Enemy)
    tiles.placeOnTile(Mousie, tiles.getTileLocation(13, 13))
    Cat_food = sprites.create(img`
        . . . . . c c c c c c . . . . . 
        . . . c c e e e e e e c c . . . 
        . . c c c c e e e e c c c c . . 
        . c c c c c c c c c c c c c c . 
        c c c c c c c c c c c c c c c c 
        `, SpriteKind.Food)
    tiles.placeOnTile(Cat_food, tiles.getTileLocation(8, 8))
    BaseLocation = tiles.getTilesByType(assets.tile`tile4`)[0]
    SpawnLocation = tiles.getTilesByType(assets.tile`tile1`)[0]
    path = scene.aStar(SpawnLocation, BaseLocation)
    scene.followPath(Mousie, path, 25)
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Start) {
        Cat.setImage(right)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy()
    if (Math.percentChance(25)) {
        game.showLongText("You're getting warmer!", DialogLayout.Bottom)
    } else if (Math.percentChance(25)) {
        game.showLongText("Keep going!", DialogLayout.Bottom)
    } else if (Math.percentChance(25)) {
        game.showLongText("You're doing great!", DialogLayout.Bottom)
    } else {
        game.showLongText("The food is near!", DialogLayout.Bottom)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    for (let value of sprites.allOfKind(SpriteKind.Projectile)) {
        value.destroy()
    }
    music.setVolume(50)
    tiles.setTilemap(tilemap`level2`)
    mySprite = sprites.create(img`
        .................f.f.fff...f...f..f.f...f...f.....f...f.....f...f...fff..f...f..
        ff...............f.f.f....f.f..ff.f.f...f...f....f.f..ff...ff..f.f..f..f.f...f..
        f................ff..fff.f...f.f.ff.f...f.fffff.f...f.f.f.f.f.f...f.f..f.f...f..
        ff.ff.ff.fffff...f.f.f...fffff.f..f.f...f...f...fffff.f..f..f.fffff.fff..f...f..
        f..f..ff.f.f.f...f.f.fff.f...f.f..f..fff....f...f...f.f.....f.f...f.f..f..fff..f
        `, SpriteKind.Player)
    mySprite.setPosition(78, 120)
    scene.setBackgroundImage(img`
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd555ddddd555ddddd555ddddd555ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd545d555d545d555d545d555d545d555ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1dd545dd1dd545dd1dd545dd1dd545ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1ddd1ddd1ddd1ddd1ddd1ddd1ddd1dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1ddd1ddd1ddd1ddd1ddd1ddd1ddd1dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1ddd1ddd1ddd1ddd1ddd1ddd1ddd1dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1ddd1ddd1ddd1ddd1ddd1ddd1ddd1dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1ddd1ddd1ddd1ddd1ddd1ddd1ddd1dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1ddd1ddd1ddd1ddd1ddd1ddd1ddd1dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddd3331333133313331333133313331333133333ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddd3331333133313331333133313331333133333ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddd3331333133313331333133313331333133333ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddd3333333133313331333133313331333133333ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddd3333333133333331333333313333333133333ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddd3333333333333333333333333333333333333ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddd333333333333333333333333333333333333eddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee3ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddd3333333333333333333333333333333333333ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddd3333333333333333333333333333333333333ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111112221111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111112221111111111111112221111111111111111111111111111111122211111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111112221111111111111112221111111111111111111111111111111122211111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111112221111111111111111111111111111111122211111111111111111111111111111111
        1111111222111111111111111111111111111111111122211111111111111111111111111111111111111111111111111111111112221111111111111111111111111111111111222111111111111111
        1111111222111111111111111111111111111111111122211111111111122211111111111111111111111111111111111111111112221111111111111111111111111111111111222111111111111111
        1111111222111111111222111111111111111111111122211111111111122211111111111111111111111111111111111111111112221111111111111111111111111111111111222111111111111111
        1111111111111111111222111111111111111111111111111111111111122211111111111111111122211111111111111111111111111111111111222111111111111111111111111111111111111111
        1111111111111111111222111111112221111111111111111111111111111111111111111111111122211111111111111111111111111111111111222111111111111111111111111111111111111111
        1111111111111111111111111111112221111111111111111111111111111111111111111111111122211111111111111111111111111111111111222111111112221111111111111111111111111111
        1111111111111111111111111111112221111111111111111111111111111112221111111111111111111111111111111111111111111111111111111111111112221111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111112221111111111111111111111111111111111111111111111111111111111111112221111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111112221111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111222111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111222111111111111111222111111111111111222111111111222111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111222111111111111111222111111111111111222111111111222111111111111111111111111111111111111111111111111111111
        1111111222111111111111111111111111111122211111111111111222111111111111111222111111111111111111111111111222111111111111111111111111111111111111111122211111111111
        1111111222111111111111111111111111111122211111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111122211111111111
        1111111222111111111111122211111111111122211111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111122211111111111
        1111111111111111111111122211111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111122211111111111111111111111111111111111
        1111111111111111111111122211111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111122211111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111122211111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        dddddd1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        ddddddddd111111111111111111111111111111111111111111111111111111111dddddddddddddddddddddddd1111111111111111111111111111111111111111111111111111111111111111111111
        ddddddddddd11111111111111111111111111111111111111111111111111ddddddddddddddddddddddddddddddddddd1111111111111111111111111111111111111111111111111111111111111111
        dddddddddddd11111111111111111111111111111111111111111111111ddddddddddddddddddddddddddddddddddddddddd1111111111111111111111111111111111111111111111111ddddddddddd
        dddddddddddddd1111111111111111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeedddddddddddddddddddddddddddd
        ddddddddddddddd1111111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeedddddddddddddddddddddddddddd
        dddddddddddddddd111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeedddddddddddddddddddddddddddd
        ddddddddddddddddddddddeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeedddddddddddddddddddddddddddd
        ddddddddddddddddddddddeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeedddddddddddddddddddddddddddd
        ddddddddddddddddddddddeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeedddddddddddddddddddddddddddd
        ddddddddddddddddddddddeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeedddddddddddddddddddddddddddd
        ddddddddddddddddddddddeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeedddddddddddddddddddddddddddd
        ddddddddddddddddddddddeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeedddddddddddddddddddddddddddd
        ddddddddddddddddddddddeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeedddddddddddddddddddddddddddd
        ddddddddddddddddddddddeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeedddddddddddddddddddddddddddd
        `)
    tiles.placeOnTile(Cat, tiles.getTileLocation(5, 4))
    Cat.destroy()
    Mousie.destroy()
    First_Verse()
    Second_Verse()
    game.splash("Happy Birthday Sophie!")
    game.reset()
})
function Trail () {
    trail = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . e . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . e . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . e . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Projectile)
    tiles.placeOnTile(trail, tiles.getTileLocation(3, 1))
    trail2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . e . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . e . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . e . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Projectile)
    tiles.placeOnTile(trail2, tiles.getTileLocation(5, 5))
    trail3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . e . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . e . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . e . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Projectile)
    tiles.placeOnTile(trail3, tiles.getTileLocation(7, 1))
    trail4 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . e . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . e . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . e . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Projectile)
    tiles.placeOnTile(trail4, tiles.getTileLocation(8, 5))
}
function Second_Verse () {
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(1046.50, music.beat(BeatFraction.Whole))
    music.playTone(659, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Double))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(698, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(698, music.beat(BeatFraction.Half))
    music.playTone(659, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(587, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Breve))
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    tiles.placeOnTile(Mousie, SpawnLocation)
})
let trail4: Sprite = null
let trail3: Sprite = null
let trail2: Sprite = null
let trail: Sprite = null
let mySprite: Sprite = null
let path: tiles.Location[] = []
let SpawnLocation: tiles.Location = null
let BaseLocation: tiles.Location = null
let Cat_food: Sprite = null
let Mousie: Sprite = null
let Gift: Sprite = null
let right: Image = null
let left: Image = null
let Cat: Sprite = null
let Name = ""
let Start = false
Start = false
Animation()
if (Start) {
    Name = "Ophelia"
    game.showLongText("" + Name + " the cat is hungry.  Can you help her get to food before the mouse does?  Use the arrow keys to move.", DialogLayout.Bottom)
    Cat = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        3 3 3 . . . . 3 3 3 . . . . . . 
        3 c 3 3 3 3 3 3 c 3 . . . . . . 
        3 c 3 9 3 3 9 3 c 3 . . . . . . 
        3 3 3 9 3 3 9 3 3 3 . . . . . . 
        3 3 3 3 3 3 3 3 3 a 3 3 a 3 . . 
        3 3 3 3 a 3 3 3 3 a 3 3 a 3 3 . 
        3 3 d d f d d 3 3 a 3 3 a 3 3 a 
        3 3 3 f f f 3 3 3 a 3 3 a 3 3 a 
        . 3 3 3 3 3 3 3 3 a 3 3 a 3 3 a 
        . . 3 3 3 3 3 3 3 a 3 3 . . 3 3 
        . . . . a a . . . . a a . . a a 
        . . . . 3 3 . . . . 3 3 . . 3 3 
        . . . . 3 3 . . . . 3 3 . . 3 3 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    Cat.z = 2
    left = Cat.image
    Cat.image.flipX()
    right = Cat.image
    controller.player1.moveSprite(Cat)
    tiles.setTilemap(tilemap`level1`)
    for (let value of tiles.getTilesByType(sprites.dungeon.floorLight2)) {
        tiles.setWallAt(value, true)
    }
    SetUpPlayers()
    Trail()
}
forever(function () {
    if (Start) {
        if (Mousie.vx < 0) {
            Mousie.setImage(img`
                . 3 . . 
                f c c c 
                c c c c 
                f c c c 
                . 3 . . 
                `)
        }
        if (Mousie.vx > 0) {
            Mousie.setImage(img`
                . . 3 . 
                c c c f 
                c c c c 
                c c c f 
                . . 3 . 
                `)
        }
    }
})
