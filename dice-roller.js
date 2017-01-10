function rollDice(num_of_dice) {
  if(Number(num_of_dice)) {
    var output = [];

    for(let i = 0; i < num_of_dice; i++) {
      output.push(Math.ceil(Math.random() * 6));
    }
    return "Rolled " + num_of_dice + " dice: " + output.join(", ")
  }
}

console.log(rollDice(process.argv[2]))