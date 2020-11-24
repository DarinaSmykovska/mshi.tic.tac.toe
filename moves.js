const getRandomAvailablePosition = (board) => {
  const available = [];

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] == "") {
        available.push({ i, j });
      }
    }
  }

  return random(available);
};
const getBestPositionDueAB = (board, currentPlayer) => {
  let bestScore = -Infinity;
  let move;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] == "") {
        board[i][j] = players[currentPlayer];
        let score = calculateBestScoreDueAB(
          board,
          0,
          -Infinity,
          Infinity,
          false,
          currentPlayer
        );
        board[i][j] = "";
        if (score > bestScore) {
          bestScore = score;
          move = { i, j };
        }
      }
    }
  }
  board[move.i][move.j] = players[currentPlayer];
  return move;
};
const getBestPositionDueMinimax = (board, currentPlayer) => {
  let bestScore = -Infinity;
  let move;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      // Check spot availability
      if (board[i][j] == "") {
        board[i][j] = players[currentPlayer];
        let score = calculateBestScoreDueMinimax(
          board,
          0,
          false,
          currentPlayer
        );
        board[i][j] = "";
        if (score > bestScore) {
          bestScore = score;
          move = { i, j };
        }
      }
    }
  }
  return move;
};
