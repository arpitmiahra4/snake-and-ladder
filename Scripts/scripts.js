let tog = 1
let rollingSound = new Audio('../assets/roll.mp3')
let winSound = new Audio('../assets/winner.mp3')
let p1sum = 0
let p2sum = 0
function play(player, psum, correction, num) {
    let sum
    if (psum == 'p1sum') {
        p1sum = p1sum + num
        if (p1sum > 100) {
            p1sum = p1sum - num
        }
        if (p1sum == 4) {
            p1sum = 56
        }
        if (p1sum == 12) {
            p1sum = 50
        }
        if (p1sum == 14) {
            p1sum = 55
        }
        if (p1sum == 22) {
            p1sum = 58
        }
        if (p1sum == 28) {
            p1sum = 10
        }
        if (p1sum == 37) {
            p1sum = 3
        }
        if (p1sum == 47) {
            p1sum = 16
        }
        if (p1sum == 41) {
            p1sum = 79
        }
        if (p1sum == 54) {
            p1sum = 88
        }
        if (p1sum == 75) {
            p1sum = 32
        }
        if (p1sum == 94) {
            p1sum = 71
        }
        if (p1sum == 96) {
            p1sum = 42
        }

        sum = p1sum



    }

    if (psum == 'p2sum') {

        p2sum = p2sum + num

        if (p2sum > 100) {
            p2sum = p2sum - num
        }
        if (p2sum == 4) {
            p2sum = 56
        }
        if (p2sum == 12) {
            p2sum = 50
        }
        if (p2sum == 14) {
            p2sum = 55
        }
        if (p2sum == 22) {
            p2sum = 58
        }
        if (p2sum == 28) {
            p2sum = 10
        }
        if (p1sum == 37) {
            p1sum = 3
        }
        if (p2sum == 47) {
            p2sum = 16
        }
        if (p2sum == 41) {
            p2sum = 79
        }
        if (p2sum == 54) {
            p2sum = 88
        }
        if (p2sum == 75) {
            p2sum = 32
        }
        if (p2sum == 94) {
            p2sum = 71
        }
        if (p2sum == 96) {
            p2sum = 42
        }
        sum = p2sum
    }


    document.getElementById(`${player}`)

    if (sum < 10) {
        document.getElementById(`${player}`).style.left = `${(sum - 1) * 62}px`
        document.getElementById(`${player}`).style.top = `${-0 * 62 - correction}px`
    }

    else if (sum == 100) {
        winSound.play()
        if (player == 'p1') {
            alert("Red Won !!")
        }
        else if (player == 'p2') {
            alert("Blue Won !!")
        }
        location.reload()
    }

    else {
        numarr = Array.from(String(sum))
        n1 = eval(numarr.shift())
        n2 = eval(numarr.pop())
        if (n1 % 2 != 0) {
            if (n2 == 0) {
                document.getElementById(`${player}`).style.left = `${(9) * 62}px`
                document.getElementById(`${player}`).style.top = `${(-n1 + 1) * 62 - correction}px`
            }
            else {
                document.getElementById(`${player}`).style.left = `${(9 - (n2 - 1)) * 62}px`
                document.getElementById(`${player}`).style.top = `${-n1 * 62 - correction}px`
            }
        }
        else if (n1 % 2 == 0) {
            if (n2 == 0) {
                document.getElementById(`${player}`).style.left = `${(0) * 62}px`
                document.getElementById(`${player}`).style.top = `${(-n1 + 1) * 62 - correction}px`
            }
            else {
                document.getElementById(`${player}`).style.left = `${(n2 - 1) * 62}px`
                document.getElementById(`${player}`).style.top = `${-n1 * 62 - correction}px`
            }
        }
    }
}
document.getElementById("diceBtn").addEventListener("click", function () {
    rollingSound.play()
    num = Math.floor(Math.random() * (6 - 1 + 1) + 1)
    document.getElementById("dice").innerText = `Dice No :- ${num}`
    document.getElementById("dice").style.color ="teal"
    if (tog % 2 != 0) {
        document.getElementById('tog').innerText = "Blue's Turn"
        document.getElementById('tog').style.color="blue"
        play('p1', 'p1sum', 0, num)
    }
    else if (tog % 2 == 0) {
        document.getElementById('tog').innerText = "Red's Turn"
        document.getElementById('tog').style.color="red"
        play('p2', 'p2sum', 55, num)
    }
    tog = tog + 1
})