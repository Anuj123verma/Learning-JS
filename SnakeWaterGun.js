let count=0
const match = () => {
  let a = prompt("How many times you want to play? ")
  while(a>0) {
    let b = prompt("Enter snake, water or gun")
    if(b!="snake" && b!="water" && b!="gun"){
      alert("Please provide the correct output.")
    }
    else{
      let c = Math.floor(Math.random() * 3)
      let d = ["snake", "water", "gun"][c]
      winlose(b,d)
      a--
    }
  }
  alert(`Finally your score is ${count}`)
}

const winlose = (b, d) => {
  if (b === d) {
    return alert("Nobody")
  }
  else if (b === "snake" && d === "water") {
    count++
    return alert("You win!")
  }
  else if (b == "snake" && d == "gun") {
    count--
    return alert("You lose!")
  }
  else if (b == "water" && d == "snake") {
    count--
    return alert("You loose!")
  }
  else if (b == "water" && d == "gun") {
    count++
    return alert("You win!")
  }
  else if (b == "gun" && d == "snake") {
    count++
    return alert("You win!")
  }
  else if (b == "gun" && d == "water") {
    count--
    return alert("You loose!")
  }
}


let askUser = confirm("Do you want to play?")
if(askUser==true){
  match()
}

while(true){
  count=0
  let askAgain = confirm("Do you want to play again?")
  if(askAgain==true){
    match()
  }
  else{
    break;
  }
}
