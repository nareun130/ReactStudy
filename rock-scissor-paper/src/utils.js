const HANDS = ["rock", "scissor", "paper"];

const WINS = {
  rock: "scissor",
  scissor: "paper",
  paper: "rock",
};

function random(n) {
  return Math.floor(Math.random() * n);
}

export function generateRandomHand() {
  const idx = random(HANDS.length);
  return HANDS[idx];
}

export function compareHand(me, other) {
  //me : 나, other : 상대방
  console.log(me, "VS", other);
  if (WINS[me] === other) return 1;
  if (me === WINS[other]) return -1;
  return 0; //(me === WINS[other])
}
