namespace SpriteKind {
    export const life = SpriteKind.create()
    export const lock = SpriteKind.create()
}
mp.onButtonEvent(mp.MultiplayerButton.A, ControllerButtonEvent.Pressed, function (player2) {
    if (round1 == 0) {
        if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.One), mp.MultiplayerButton.A)) {
            mySprite2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 5 . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 50, 50)
            if (mySprite2.overlapsWith(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)))) {
                sprites.destroy(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)), effects.spray, 500)
                sprites.destroy(mySprite2, effects.none, 500)
                mp.changePlayerStateBy(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.score, 1)
            } else if (mySprite2.overlapsWith(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)))) {
                sprites.destroy(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)), effects.spray, 500)
                sprites.destroy(mySprite2, effects.none, 500)
                mp.changePlayerStateBy(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.score, 1)
            } else if (mySprite2.overlapsWith(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)))) {
                sprites.destroy(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)), effects.spray, 500)
                sprites.destroy(mySprite2, effects.none, 500)
                mp.changePlayerStateBy(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.score, 1)
            } else {
                sprites.destroy(mySprite2, effects.none, 500)
            }
        }
    }
})
mp.onScore(3, function (player2) {
    round1 = 1
    story.printDialog("As you wander around you see a radio tower, when you reach it's door it's locked.Find the key,and don't let the zombies touch you.", 80, 90, 50, 150)
    sprites.destroy(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)))
    mySprite3 = sprites.create(assets.image`myImage6`, SpriteKind.lock)
    mySprite3.setPosition(66, 12)
    mySprite4 = sprites.create(assets.image`myImage7`, SpriteKind.lock)
    mySprite4.setPosition(145, 102)
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(assets.image`myImage5`, SpriteKind.Player))
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three), sprites.create(assets.image`myImage1`, SpriteKind.Player))
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(assets.image`myImage4`, SpriteKind.Player))
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four), sprites.create(assets.image`myImage2`, SpriteKind.Player))
    sprites.destroy(mySprite)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setPosition(8, 2)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)).setPosition(11, 31)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)).setPosition(13, 55)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setPosition(50, 30)
    scene.setBackgroundImage(img`
        ddddddddddddddddddddddddddddddddddddddddd2221111111111111111111111111111111111111111111111222ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddddd2222222222222222222222222222222222222222222222222222ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddd222222222222222222222222222222222222222222222222222222dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddd2222222222222222222222222222222222222222222222222222222ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddddddddd22221111111111111111111111111111111111111111111111112222ddddddddddddddddddddddddddddddddddddddddddddddddddeeedddddeeedddd
        ddddddddddddddddddddddddddddddddddddddd222211111111111111111111111111111111111111111111111112222dddddddddddddddddddddddddddddddddddddddddddddddddeeeddddeeeedddd
        dddddddddddddddddddddddddddddddddddddd2222111111111111111111111111222222222222222222222222222222dddddddddddddddddddddddddddddddddddddddddddddddddeeeeddeeeeedddd
        dddddddddddddddddddddddddddddddddddddd22222222222222222222222222222222222222222222222222222222222dddddddddddddddddddddddddddddddddddddddddddeedddeeeedeeeeeddddd
        ddddddddddddddddddddddddddddddddddddd222222222222222222222222222222222222222222222222222222222222dddddddddddddddddddddddddddddddddddddddddddeeeeddeeedeeeedddddd
        ddddddddddddddddddddddddddddddddddddd2222222222222222222222222222222bbbbbbbbbbbbbbbbbbbbbbbbbb2222ddddddddddddddddddddddddddddddddddddddddddeeeeedeeeeeeeddddddd
        dddddddddddddddddddddddddddddddddddd2222bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb22222dddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeddeeedd
        dddddddddddddddddddddddddddddddddddd222bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb222dddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeedeeeedd
        dddddddddddddddddddddddddddddddddddd222bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb222ddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeedd
        dddddddddddddddddddddddddddddddddddd222bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb222ddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeddd
        dddddddddddddbbbbbbbbbbbbbbbbbbbbbb222bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb222bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddeeeeeeeeeeedddd
        dddddddddddddbbbbbbbbbbbbbbbbbbbbbb222bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddeeeeeeeeeeeeeeddddd
        dddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddeeeeeeeeeeeeddddddd
        dddddddddddddb55555555555555555555555bbbbbbbbbbb55555555555555555555555bbbbbbb55555555555555555555555bbbbbbbb55555555555555555555555bbbbdddddeeeeeeeeeeeeddddddd
        dddddddddddddb55555555555555555555555bbbbbbbbbbb55555555555555555555555bbbbbbb55555555555555555555555bbbbbbbb55555555555555555555555bbbbdddddddeeeeeeeeeeddddddd
        eeedddddeeeddb55555555555555555555555bbbbbbbbbbb55555555555555555555555bbbbbbb55555555555555555555555bbbbbbbb55555555555555555555555bbbbdddddddddeeeeeeeeeeedddd
        eeeddddeeeeddb555bbbbbbbbbbbbbbbbb555bbbbbbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbbb555bbbbbbbbbbbbbbbbb555bbbbdddddddddeeeeeeeeeeedddd
        eeeeddeeeeeddb555bbbbbbbbbbbbbbbbb555bbbbbbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbbb555bbbbbbbbbbbbbbbbb555bbbbdddddddddeeeeeeeeeeedddd
        eeeedeeeeedddb555bbbbbbbbbbbbbbbbb555bbbbbbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbbb555bbbbbbbbbbbbbbbbb555bbbbdddddddddeeeeeeeeeeddddd
        deeedeeeeddddb555bbbbbbbbbbbbbbbbb555bbbbbbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbbb555bbbbbbbbbbbbbbbbb555bbbbdddddddddeeeeeeeeddddddd
        deeeeeeedddddb555bbbbbbbbbbbbbbbbb555bbbbbbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbbb555bbbbbbbbbbbbbbbbb555bbbbdddddddddeeeeeeeeddddddd
        eeeeeeeeddeeeb555bbbbbbbbbbbbbbbbb555bbbbbbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbbb555bbbbbbbbbbbbbbbbb555bbbbdddddddddeeeeeeeeddddddd
        eeeeeeeedeeeeb555bbbbbbbbbbbbbbbbb555bbbbbbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbbb555bbbbbbbbbbbbbbbbb555bbbbdddddddddeeeeeeeeddddddd
        eeeeeeeeeeeeeb555bbbbbbbbbbbbbbbbb555bbbbbbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbbb555bbbbbbbbbbbbbbbbb555bbbbdddddddddeeeeeeeeddddddd
        eeeeeeeeeeeedb555bbbbbbbbbbbbbbbbb555bbbbbbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbbb555bbbbbbbbbbbbbbbbb555bbbbdddddddddeeeeeeeeddddddd
        eeeeeeeeeeeddb555bbbbbbbbbbbbbbbbb555bbbbbbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbbb555bbbbbbbbbbbbbbbbb555bbbbdddddddddeeeeeeeeddddddd
        eeeeeeeeeedddb555bbbbbbbbbbbbbbbbb555bbbbbbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbbb555bbbbbbbbbbbbbbbbb555bbbbdddddddddeeeeeeeeddddddd
        eeeeeeeedddddb555bbbbbbbbbbbbbbbbb555bbbbbbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbbb555bbbbbbbbbbbbbbbbb555bbbbdddddddddeeeeeeeeddddddd
        eeeeeeeedddddb555bbbbbbbbbbbbbbbbb555bbbbbbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbbb555bbbbbbbbbbbbbbbbb555bbbbddddddddeeeeeeeeeddddddd
        eeeeeeeedddddb555bbbbbbbbbbbbbbbbb555bbbbbbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbbb555bbbbbbbbbbbbbbbbb555bbbbddddddddeeeeeeeeeedddddd
        eeeeeeeeeeeddb555bbbbbbbbbbbbbbbbb555bbbbbbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbbb555bbbbbbbbbbbbbbbbb555bbbbddddddddeeedeeeeeeeedddd
        eeeeeeeeeeeddb555bbbbbbbbbbbbbbbbb555bbbbbbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbbb555bbbbbbbbbbbbbbbbb555bbbbdddddddddeeeeeeeeeeedddd
        eeeeeeeeeeeddb555bbbbbbbbbbbbbbbbb555bbbbbbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbbb555bbbbbbbbbbbbbbbbb555bbbbdddddddddeeedddddeeedddd
        eeeeeeeeeedddb555bbbbbbbbbbbbbbbbb555bbbbbbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbbb555bbbbbbbbbbbbbbbbb555bbbbdddddddddeeedddddddddddd
        eeeeeeeedddddb555bbbbbbbbbbbbbbbbb555bbbbbbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbbb555bbbbbbbbbbbbbbbbb555bbbbdddddddddddddddddddddddd
        eeeeeeeedddddb555bbbbbbbbbbbbbbbbb555bbbbbbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbbb555bbbbbbbbbbbbbbbbb555bbbbdddddddddddddddddddddddd
        eeeeeeeedddddb555bbbbbbbbbbbbbbbbb555bbbbbbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbbb555bbbbbbbbbbbbbbbbb555bbbbdddddddddddddddddddddddd
        eeeeeeeedddddb555bbbbbbbbbbbbbbbbb555bbbbbbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbbb555bbbbbbbbbbbbbbbbb555bbbbdddddddddddddddddddddddd
        eeeeeeeedddddb555bbbbbbbbbbbbbbbbb555bbbbbbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbbb555bbbbbbbbbbbbbbbbb555bbbbdddddddddddddddddddddddd
        eeeeeeeedddddb555bbbbbbbbbbbbbbbbb555bbbbbbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbbb555bbbbbbbbbbbbbbbbb555bbbbdddddddddddddddddddddddd
        eeeeeeeedddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddddddd
        eeeeeeeedddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddddddd
        eeeeeeeedddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddddddd
        eeeeeeeedddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddddddd
        eeeeeeeeeddddbb55555555555555555555555bbbbbbbbbbb55555555555555555555555bbbbbbb55555555555555555555555bbbbbbbb55555555555555555555555bbbdddddddddddddddddddddddd
        eedeeeeeeeeddbb55555555555555555555555bbbbbbbbbbb55555555555555555555555bbbbbbb55555555555555555555555bbbbbbbb55555555555555555555555bbbddddddddddeeeddddddddddd
        eeeeeeeeeeeddbb55555555555555555555555bbbbbbbbbbb55555555555555555555555bbbbbbb55555555555555555555555bbbbbbbb55555555555555555555555bbbddddddddddeeedddddeeeddd
        eeedddddeeeddbb555bbbbbbbbbbbbbbbbb555bbbbbbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbbb555bbbbbbbbbbbbbbbbb555bbbddddddddddeeeddddeeeeddd
        eeeddddddddddbb555bbbbbbbbbbbbbbbbb555bbbbbbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbbb555bbbbbbbbbbbbbbbbb555bbbddddddddddeeeeddeeeeeddd
        dddddddddddddbb555bbbbbbbbbbbbbbbbb555bbbbbbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbbb555bbbbbbbbbbbbbbbbb555bbbddddeeedddeeeedeeeeedddd
        dddddddddddddbb555bbbbbbbbbbbbbbbbb555bbbbbbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbbb555bbbbbbbbbbbbbbbbb555bbbddddeeeeeddeeedeeeeddddd
        dddddddddddddbb555bbbbbbbbbbbbbbbbb555bbbbbbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbbb555bbbbbbbbbbbbbbbbb555bbbddddeeeeeedeeeeeeedddddd
        dddddddddddddbb555bbbbbbbbbbbbbbbbb555bbbbbbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbbb555bbbbbbbbbbbbbbbbb555bbbdddddeeeeeeeeeeeeeddeeed
        dddddddddddddbb555bbbbbbbbbbbbbbbbb555bbbbbbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbbb555bbbbbbbbbbbbbbbbb555bbbdddddddeeeeeeeeeeedeeeed
        dddddddddddddbb555bbbbbbbbbbbbbbbbb555bbbbbbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbbb555bbbbbbbbbbbbbbbbb555bbbddddddddeeeeeeeeeeeeeeed
        dddddddddddddbb555bbbbbbbbbbbbbbbbb555bbbbbbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbbb555bbbbbbbbbbbbbbbbb555bbbddddddddddeeeeeeeeeeeedd
        dddddddddddddbb555bbbbbbbbbbbbbbbbb555bbbbbbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbbb555bbbbbbbbbbbbbbbbb555bbbddddddddddeeeeeeeeeeeddd
        dddddddddddddbb555bbbbbbbbbbbbbbbbb555bbbbbbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbbb555bbbbbbbbbbbbbbbbb555bbbddddddeeeeeeeeeeeeeedddd
        dddddddddddddbb555bbbbbbbbbbbbbbbbb555bbbbbbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbbb555bbbbbbbbbbbbbbbbb555bbbddddddeeeeeeeeeeeedddddd
        dddddddddddddbb555bbbbbbbbbbbbbbbbb555bbbbbbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbbb555bbbbbbbbbbbbbbbbb555bbbddddddeeeeeeeeeeeedddddd
        dddddddddddddbb555bbbbbbbbbbbbbbbbb555bbbbbbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbbb555bbbbbbbbbbbbbbbbb555bbbddddddddeeeeeeeeeedddddd
        dddddddddddddbb555bbbbbbbbbbbbbbbbb555bbbbbbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbbb555bbbbbbbbbbbbbbbbb555bbbddddddddddeeeeeeeeeeeddd
        dddddddddddddbb555bbbbbbbbbbbbbbbbb555bbbbbbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbbb555bbbbbbbbbbbbbbbbb555bbbddddddddddeeeeeeeeeeeddd
        dddddddddddddbb555bbbbbbbbbbbbbbbbb555bbbbbbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbbb555bbbbbbbbbbbbbbbbb555bbbddddddddddeeeeeeeeeeeddd
        dddddddddddddbb555bbbbbbbbbbbbbbbbb555bbbbbbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbbb555bbbbbbbbbbbbbbbbb555bbbddddddddddeeeeeeeeeedddd
        dddddddddddddbb555bbbbbbbbbbbbbbbbb555bbbbbbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbbb555bbbbbbbbbbbbbbbbb555bbbddddddddddeeeeeeeedddddd
        dddddddddddddbb555bbbbbbbbbbbbbbbbb555bbbbbbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbbb555bbbbbbbbbbbbbbbbb555bbbddddddddddeeeeeeeedddddd
        dddddddddddddbb555bbbbbbbbbbbbbbbbb555bbbbbbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbbb555bbbbbbbbbbbbbbbbb555bbbddddddddddeeeeeeeedddddd
        dddddddddddddbb555bbbbbbbbbbbbbbbbb555bbbbbbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbbb555bbbbbbbbbbbbbbbbb555bbbddddddddddeeeeeeeedddddd
        dddddddddddddbb555bbbbbbbbbbbbbbbbb555bbbbbbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbbb555bbbbbbbbbbbbbbbbb555bbbddddddddddeeeeeeeedddddd
        dddddddddddddbb555bbbbbbbbbbbbbbbbb555bbbbbbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbbb555bbbbbbbbbbbbbbbbb555bbbddddddddddeeeeeeeedddddd
        dddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddeeeeeeeedddddd
        dddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddeeeeeeeedddddd
        dddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddeeeeeeeedddddd
        dddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddeeeeeeeeedddddd
        dddddddddddddbb55555555555555555555555bbbbbbbbbbb55555555555555555555555bbbbbbb55555555555555555555555bbbbbbbb55555555555555555555555bbbdddddddddeeeeeeeeeeddddd
        dddddddddddddbb55555555555555555555555bbbbbbbbbbb55555555555555555555555bbbbbbb55555555555555555555555bbbbbbbb55555555555555555555555bbbdddddddddeeedeeeeeeeeddd
        dddddddddddddbb55555555555555555555555bbbbbbbbbbb55555555555555555555555bbbbbbb55555555555555555555555bbbbbbbb55555555555555555555555bbbddddddddddeeeeeeeeeeeddd
        edddddeeeddddbb555bbbbbbbbbbbbbbbbb555bbbbbbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbbb555bbbbbbbbbbbbbbbbb555bbbddddddddddeeedddddeeeddd
        eddddeeeeddddbb555bbbbbbbbbbbbbbbbb555bbbbbbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbbb555bbbbbbbbbbbbbbbbb555bbbddddddddddeeeddddddddddd
        eeddeeeeeddddbb555bbbbbbbbbbbbbbbbb555bbbbbbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbbb555bbbbbbbbbbbbbbbbb555bbbdddddddddddddddddddddddd
        eedeeeeedddddbb555bbbbbbbbbbbbbbbbb555bbbbbbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbbb555bbbbbbbbbbbbbbbbb555bbbdddddddddddddddddddddddd
        eedeeeeddddddbb555bbbbbbbbbbbbbbbbb555bbbbbbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbbb555bbbbbbbbbbbbbbbbb555bbbdddddddddddddddddddddddd
        eeeeeedddddddbb555bbbbbbbbbbbbbbbbb555bbbbbbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbbb555bbbbbbbbbbbbbbbbb555bbbdddddddddddddddddddddddd
        eeeeeeddeeeddbb555bbbbbbbbbbbbbbbbb555bbbbbbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbbb555bbbbbbbbbbbbbbbbb555bbbdddddddddddddddddddddddd
        eeeeeedeeeeddbb555bbbbbbbbbbbbbbbbb555bbbbbbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbbb555bbbbbbbbbbbbbbbbb555bbbdddddddddddddddddddddddd
        eeeeeeeeeeeddbb555bbbbbbbbbbbbbbbbb555bbbbbbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbbb555bbbbbbbbbbbbbbbbb555bbbdddddddddddddddddddddddd
        eeeeeeeeeedddbb555bbbbbbbbbbbbbbbbb555bbbbbbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbbb555bbbbbbbbbbbbbbbbb555bbbdddddddddddddddddddddddd
        eeeeeeeeeddddbb555bbbbbbbbbbbbbbbbb555bbbbbbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbbb555bbbbbbbbbbbbbbbbb555bbbdddddddddddddddddddddddd
        eeeeeeeedddddbb555bbbbbbbbbbbbbbbbb555bbbbbbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbbb555bbbbbbbbbbbbbbbbb555bbbdddddddddddddddddddddddd
        eeeeeedddddddbb555bbbbbbbbbbbbbbbbb555bbbbbbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbbb555bbbbbbbbbbbbbbbbb555bbbdddddddddddddddddddddddd
        eeeeeedddddddbb555bbbbbbbbbbbbbbbbb555bbbbbbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbbb555bbbbbbbbbbbbbbbbb555bbbdddddddddddddddddddddddd
        eeeeeedddddddbb555bbbbbbbbbbbbbbbbb555bbbbbbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbbb555bbbbbbbbbbbbbbbbb555bbbdddddddddddddddddddddddd
        eeeeeeeeeddddbb555bbbbbbbbbbbbbbbbb555bbbbbbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbbb555bbbbbbbbbbbbbbbbb555bbbdddddddddddddddddddddddd
        eeeeeeeeeddddbb555bbbbbbbbbbbbbbbbb555bbbbbbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbbb555bbbbbbbbbbbbbbbbb555bbbdddddddddddddddddddddddd
        eeeeeeeeeddddbb555bbbbbbbbbbbbbbbbb555bbbbbbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbbb555bbbbbbbbbbbbbbbbb555bbbdddddddddddddddddddddddd
        eeeeeeeedddddbb555bbbbbbbbbbbbbbbbb555bbbbbbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbbb555bbbbbbbbbbbbbbbbb555bbbdddddddddddddddddddddddd
        eeeeeedddddddbb555bbbbbbbbbbbbbbbbb555bbbbbbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbbb555bbbbbbbbbbbbbbbbb555bbbdddddddddddddddddddddddd
        eeeeeedddddddbb555bbbbbbbbbbbbbbbbb555bbbbbbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbbb555bbbbbbbbbbbbbbbbb555bbbdddddddddddddddddddddddd
        eeeeeedddddddbb555bbbbbbbbbbbbbbbbb555bbbbbbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbbb555bbbbbbbbbbbbbbbbb555bbbdddddddddddddddddddddddd
        eeeeeedddddddbb555bbbbbbbbbbbbbbbbb555bbbbbbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbbb555bbbbbbbbbbbbbbbbb555bbbdddddddddddddddddddddddd
        eeeeeedddddddbb555bbbbbbbbbbbbbbbbb555bbbbbbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbb555bbbbbbbbbbbbbbbbb555bbbbbbbb555bbbbbbbbbbbbbbbbb555bbbdddddddddddddddddddddddd
        eeeeeedddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddddddd
        eeeeeedddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddddddd
        eeeeeedddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddddddd
        eeeeeedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        eeeeeedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        eeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        deeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        eeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        edddddeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        eddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        `)
    if (mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)).overlapsWith(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)))) {
        mp.gameOverPlayerWin(mp.playerSelector(mp.PlayerNumber.Four))
    } else if (mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)).overlapsWith(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)))) {
        mp.gameOverPlayerWin(mp.playerSelector(mp.PlayerNumber.Three))
    } else if (mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).overlapsWith(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)))) {
        mp.gameOverPlayerWin(mp.playerSelector(mp.PlayerNumber.Two))
    } else if (mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).overlapsWith(mySprite4)) {
        sprites.destroy(mySprite4)
        round1 = 2
    } else if (round1 == 2 && mySprite3.overlapsWith(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)))) {
    	
    }
})
mp.onButtonEvent(mp.MultiplayerButton.Up, ControllerButtonEvent.Repeated, function (player2) {
    if (round1 == 0) {
        if (controller.player2.isPressed(ControllerButton.Up)) {
            scaling.scaleByPixels(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)), -10, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        } else if (controller.player3.isPressed(ControllerButton.Up)) {
            scaling.scaleByPixels(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)), -10, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        } else if (controller.player4.isPressed(ControllerButton.Up)) {
            scaling.scaleByPixels(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)), -10, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        }
    }
})
mp.onButtonEvent(mp.MultiplayerButton.Down, ControllerButtonEvent.Repeated, function (player2) {
    if (round1 == 0) {
        if (controller.player2.isPressed(ControllerButton.Down)) {
            scaling.scaleByPixels(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)), 10, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        } else if (controller.player3.isPressed(ControllerButton.Down)) {
            scaling.scaleByPixels(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)), 10, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        } else if (controller.player4.isPressed(ControllerButton.Down)) {
            scaling.scaleByPixels(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)), 10, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        }
        if (mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)).overlapsWith(mySprite)) {
            mp.gameOverPlayerWin(mp.playerSelector(mp.PlayerNumber.Four))
        } else if (mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)).overlapsWith(mySprite)) {
            mp.gameOverPlayerWin(mp.playerSelector(mp.PlayerNumber.Three))
        } else if (mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).overlapsWith(mySprite)) {
            mp.gameOverPlayerWin(mp.playerSelector(mp.PlayerNumber.Two))
        }
    }
})
sprites.onDestroyed(SpriteKind.Player, function (sprite) {
    music.play(music.createSoundEffect(WaveShape.Noise, 3065, 0, 255, 255, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
})
let mySprite4: Sprite = null
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
let round1 = 0
story.startCutscene(function () {
    round1 = 0
    story.printDialog("The world is full of zombies now, to survive don't let them touch your heart.", 80, 90, 50, 150)
    story.cancelCurrentCutscene()
    scene.setBackgroundImage(img`
        dddddddddddddddddddddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddfffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddfffffffffffffffffffffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddfffffffffffffffffffffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddddfffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddfffffffffffffffffffffffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddfffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddfffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddddfffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddfffffffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddddddddd
        ddddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddd
        dddddddddddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddd
        dddddddddddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddd
        dddddddddddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddddddd
        ddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddddddd
        ddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddd
        ddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddd
        ddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddd
        dddddddddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddddd
        dddddddddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddddd
        dddddddddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddd
        ddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddd
        ddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddd
        ddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddd
        ddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddd
        ddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddd
        ddddddddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddd
        ddddddddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddd
        ddddddddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddd
        ddddddddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddd
        ddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddd
        ddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddd
        dddddddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddd
        dddddddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddd
        dddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddd
        dddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddd
        dddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddd
        ddddddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddd
        ddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddd
        ddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddd
        ddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddd
        ddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddd
        ddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddd
        dddddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddd
        dddddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddd
        dddddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddd
        dddddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddd
        dddddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddd
        dddddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddd
        dddddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddd
        ddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddd
        ddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddd
        ddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddd
        ddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddd
        ddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddd
        ddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddd
        dddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddd
        dddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddd
        dddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddd
        dddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddd
        dddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddd
        dddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddd
        dddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddd
        ddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddd
        ddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddd
        ddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddd
        ddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddd
        ddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddd
        ddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddd
        ddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddd
        ddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddd
        ddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddd
        ddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddd
        dddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddd
        dddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddd
        dddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddd
        dddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddd
        dddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddd
        dddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddd
        dddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddd
        dddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddd
        ddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddd
        ddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddd
        ddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddd
        ddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddd
        ddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddd
        ddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddd
        ddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddd
        ddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddd
        ddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddd
        dddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddd
        dddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddd
        dddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddd
        dddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddd
        dddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddd
        dddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddd
        dddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddd
        `)
})
if (round1 == 0) {
    mySprite = sprites.create(assets.image`myImage3`, SpriteKind.life)
    mySprite.setPosition(78, 112)
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three), sprites.create(assets.image`myImage1`, SpriteKind.Player))
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four), sprites.create(assets.image`myImage2`, SpriteKind.Player))
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(assets.image`myImage4`, SpriteKind.Player))
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(assets.image`myImage`, SpriteKind.Player))
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One))
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two))
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Three))
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Four))
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setStayInScreen(true)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setStayInScreen(true)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)).setStayInScreen(true)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)).setStayInScreen(true)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setPosition(72, 74)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setPosition(7, -5)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)).setPosition(75, -3)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)).setPosition(142, -4)
}
