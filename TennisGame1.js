const scores = {
  0: "Love",
  1: "Fifteen",
  2: "Thirty",
  3: "Forty"
}

const winFor = player => `Win for ${player}`;
const advantageFor = player => `Advantage ${player}`;

class TennisGame1 {
  constructor (player1Name, player2Name) {
    this.player1Points = 0;
    this.player2Points = 0;
    this.player1Name = player1Name;
    this.player2Name = player2Name;
  };

  wonPoint (playerName) {
    playerName === this.player1Name ? this.player1Points++ : this.player2Points++;
  };

  getScore () {
    if (this._isSameScore) return this._scoreForEvenPoints();
    if (this._isAdvantage) return this._scoreForAdvantage();

    let score = "";
    let tempScore = 0;
    for (var i = 1; i < 3; i++) {
      if (i === 1) tempScore = this.player1Points;
      else {
        score += "-";
        tempScore = this.player2Points;
      }
      score += scores[tempScore]
    }
    return score;
  };

  get _isSameScore() {
    return this.player1Points === this.player2Points;
  }

  _scoreForEvenPoints() {
    if (this.player1Points < 3) {
      return scores[this.player1Points] + '-All'
    }
    return "Deuce"
  }

  get _isAdvantage() {
    return this.player1Points >= 4 || this.player2Points >= 4
  }

  get _isPlayer1Winning() {
    return this.player1Points > this.player2Points
  }

  _scoreForAdvantage() {
    const difference = Math.abs(this.player1Points - this.player2Points);
    const gameEnded = difference >= 2

    if (gameEnded) {
      if (this._isPlayer1Winning) return winFor(this.player1Name);
      return winFor(this.player2Name);
    }
    if (this._isPlayer1Winning) return advantageFor(this.player1Name);
    return advantageFor(this.player2Name);
  }
};

if (typeof window === "undefined") {
  module.exports = TennisGame1;
}
