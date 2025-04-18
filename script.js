console.log("Welcome to Tic Tac Toe")

let turn = "X"
let gameover = false
let count = 0

const changeTurn = ()=> {
    if (turn === "X") {
        return "O"
    }
    else {
        return "X"
    }
}

const CheckWin = ()=> {
    let boxtext = document.getElementsByClassName("boxtext")
    let wins = [
        [0, 1, 2, 0, 5, 0], [3, 4, 5, 0, 15, 0], 
        [6, 7, 8, 0, 25, 0], [0, 3, 6, -10, 15, 90],
        [1, 4, 7, 0, 15, 90], [2, 5, 8, 10, 15, 90], 
        [0, 4, 8, 0, 15, 45], [2, 4, 6, 0, 15, 135]
    ]

    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== '')) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText +' Won'
            gameover = true

            document.querySelector('.imgbox img').style.display= "block"
            document.querySelector('.line').style.width = "30vw"
            document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
        }
    })
}

const ResetGame = ()=> {
    let boxtext = document.querySelectorAll(".boxtext")
    Array.from(boxtext).forEach(element => {
        element.innerText = ''
    })

    turn = "X"
    gameover = false
    count = 0

    document.querySelector('.imgbox img').style.display= "none"
    document.getElementsByClassName('info')[0].innerText = 'Turn for ' + turn
    document.querySelector('.line').style.width = "0"
}

let boxes = document.getElementsByClassName("box")
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector(".boxtext")
    element.addEventListener('click', ()=> {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn
            turn = changeTurn()
            CheckWin()
            count++

            if (!gameover) {
                document.getElementsByClassName('info')[0].innerText = 'Turn for '+turn
            }

            if (count === 9 && !gameover) {
                document.getElementsByClassName('info')[0].innerText = 'Game Drawn'
            }
        }
    })
})

reset.addEventListener('click', ()=> {
    ResetGame()
})