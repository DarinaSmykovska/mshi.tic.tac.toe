const bootstrap = () => {
  available = [];

  for (let j = 0; j < 3; j++) {
    for (let i = 0; i < 3; i++) {
      available.push([i, j]);
    }
  }

  board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  winner = null;
  currentPlayer = 0;
};
