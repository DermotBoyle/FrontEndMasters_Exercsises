const game = {
    'suspects' : [
        {   name : "Rusty",
             color: "Orange"
    },
        {
            name: "Miss Scarlet",
            color: "Red"
        }
    ]
}

function foo () {
    for ( i = 0; i < game.suspects.length; i++) {
            console.log(game.suspects[i]);
    }
}

foo()

