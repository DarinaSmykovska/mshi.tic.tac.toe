let players = ["X", "O"];
let currentPlayer;
let available = [];
let xSelectionButton;
let oSelectionButton;
let xLabel;
let yLabel;
function setup() {
  createCanvas(400, 400);
  frameRate(20);

  xLabel = createP("");
  xLabel
    .style("color", "black")
    .style("position", "absolute")
    .style("top", "115px")
    .style("left", "25%");
  xLabel.html("X Алгоритм:");
  xSelectionButton = createRadio("AI1").style("color", "#000");
  xSelectionButton.option("Random");
  xSelectionButton.option("Minimax");
  xSelectionButton.option("AlphaBeta");
  xSelectionButton
    .style("width", "90px")
    .style("checked", "0")
    .style("position", "absolute")
    .style("top", "150px")
    .style("left", "25%");
  xSelectionButton.selected("Random");

  yLabel = createP("");
  yLabel
    .style("color", "black")
    .style("position", "absolute")
    .style("top", "115px")
    .style("right", "25%");
  yLabel.html("O Алгоритм:");
  oSelectionButton = createRadio("AI2").style("color", "#000");
  oSelectionButton.option("Random");
  oSelectionButton.option("Minimax");
  oSelectionButton.option("AlphaBeta");
  oSelectionButton
    .style("width", "90px")
    .style("checked", "0")
    .style("position", "absolute")
    .style("top", "150px")
    .style("right", "25%");
  oSelectionButton.selected("Random");

  let nextTurnButton = createButton("Наступний Хід")
    .style("position", "absolute")
    .style("left", "50%")
    .style("transform", "translateX(-50%)")
    .style("top", "228px");
  nextTurnButton.mousePressed(function () {
    const algo =
      currentPlayer === 0 ? xSelectionButton.value() : oSelectionButton.value();
    getNextTurn(algo, currentPlayer);
  });

  bootstrap();
}

function draw() {
  let nextTurnButton = createButton("Грати знову")
    .style("position", "absolute")
    .style("left", "50%")
    .style("transform", "translateX(-50%)")
    .style("top", "258px");

  background(255);
  let w = width / 3;
  let h = height / 3;
  strokeWeight(6);
  stroke(0);
  line(w, 0, w, height);
  line(w * 2, 0, w * 2, height);
  line(0, h, width, h);
  line(0, h * 2, width, h * 2);

  for (let j = 0; j < 3; j++) {
    for (let i = 0; i < 3; i++) {
      let x = w * i + w / 2;
      let y = h * j + h / 2;
      let spot = board[i][j];
      textSize(32);
      let r = w / 4;
      if (spot == players[1]) {
        noFill();
        stroke(0, 0, 0);
        ellipse(x, y, r * 2);
      } else if (spot == players[0]) {
        stroke(0, 0, 0);
        line(x - r, y - r, x + r, y + r);
        line(x + r, y - r, x - r, y + r);
      }
    }
  }

  let result = checkWinner(board);

  nextTurnButton.mousePressed(function () {
    bootstrap();
    loop();
  });

  if (result != null) {
    noLoop();
    let resultP = createP("");
    resultP
      .style("color", "#000")
      .style("margin-left", "50%")
      .style("font-size", "28px");
    if (result == "tie") {
      resultP.html("Tie!");
    } else {
      resultP.html(`${result} wins!`);
    }
  }
}
