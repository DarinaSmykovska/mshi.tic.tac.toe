const checkWinner = (board) => {
  let winner = null;

  for (let i = 0; i < 3; i++) {
    if (equals3(board[i][0], board[i][1], board[i][2])) {
      winner = board[i][0];
    }
  }

  for (let i = 0; i < 3; i++) {
    if (equals3(board[0][i], board[1][i], board[2][i])) {
      winner = board[0][i];
    }
  }

  if (equals3(board[0][0], board[1][1], board[2][2])) {
    winner = board[0][0];
  }
  if (equals3(board[2][0], board[1][1], board[0][2])) {
    winner = board[2][0];
  }

  if (winner == null && available.length == 0) {
    return "tie";
  } else {
    return winner;
  }
};
const equals3 = (a, b, c) => {
  return a == b && b == c && a != "";
};
const getNextTurn = (algo, player) => {
  let move;
  switch (algo) {
    case "Random":
      move = getRandomAvailablePosition(board);
      break;
    case "Minimax":
      move = getBestPositionDueMinimax(board, player);
      break;
    case "AlphaBeta":
      move = getBestPositionDueAB(board, player);
      break;
  }
  board[move.i][move.j] = players[player];
  currentPlayer = player === 1 ? 0 : 1;
};
