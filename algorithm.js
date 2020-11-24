const calculateBestScoreDueAB = (
  board,
  depth,
  alpha,
  beta,
  isMaximizing,
  currentPlayer
) => {
  const winner = checkWinner(board);
  if (winner) {
    return winner === "tie" ? 0 : winner === currentPlayer ? 10 : -10;
  }

  if (isMaximizing) {
    let bestScore = -Infinity;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] == "") {
          board[i][j] = players[currentPlayer];
          let score = calculateBestScoreDueAB(
            board,
            depth + 1,
            alpha,
            beta,
            false,
            currentPlayer
          );
          board[i][j] = "";
          bestScore = max(score, bestScore);
          alpha = max(alpha, score);
          if (beta <= alpha) {
            break;
          }
        }
      }
    }
    return bestScore;
  } else {
    let bestScore = Infinity;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] == "") {
          board[i][j] = players[(currentPlayer + 1) % players.length];
          let score = calculateBestScoreDueAB(
            board,
            depth + 1,
            alpha,
            beta,
            true,
            currentPlayer
          );
          board[i][j] = "";
          bestScore = min(score, bestScore);
          beta = min(beta, score);
          if (beta <= alpha) {
            break;
          }
        }
      }
    }
    return bestScore;
  }
};
const calculateBestScoreDueMinimax = (
  board,
  depth,
  isMaximizing,
  currentPlayer
) => {
  const winner = checkWinner(board);
  if (winner) {
    return winner === "tie" ? 0 : winner === currentPlayer ? 10 : -10;
  }

  if (isMaximizing) {
    let bestScore = -Infinity;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] == "") {
          board[i][j] = players[currentPlayer];
          let score = calculateBestScoreDueMinimax(
            board,
            depth + 1,
            false,
            currentPlayer
          );
          board[i][j] = "";
          bestScore = max(score, bestScore);
        }
      }
    }
    return bestScore;
  } else {
    let bestScore = Infinity;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] == "") {
          board[i][j] = players[(currentPlayer + 1) % players.length];
          let score = calculateBestScoreDueMinimax(
            board,
            depth + 1,
            true,
            currentPlayer
          );
          board[i][j] = "";
          bestScore = min(score, bestScore);
        }
      }
    }
    return bestScore;
  }
};
