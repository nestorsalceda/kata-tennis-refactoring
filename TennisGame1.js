const scores = {
  0: "Love",
  1: "Fifteen",
  2: "Thirty",
  3: "Forty"
}

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

    if (this._isAdvantage) {
      const difference = this.player1Points - this.player2Points;
      if (difference === 1) return "Advantage player1";
      if (difference === -1) return "Advantage player2";
      if (difference >= 2) return "Win for player1";
      return "Win for player2";
    }

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
    if (this.player1Points < 2) {
      return scores[this.player1Points] + '-All'
    }
    return "Deuce"
  }

  get _isAdvantage() {
    return this.player1Points >= 4 || this.player2Points >= 4
  }
};

if (typeof window === "undefined") {
  module.exports = TennisGame1;
}
