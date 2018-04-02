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

    return `${scores[this.player1Points]}-${scores[this.player2Points]}`
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

  _scoreForAdvantage() {
    const gameEnded = Math.abs(this.player1Points - this.player2Points) >= 2;

    return gameEnded ? winFor(this._winnerPlayer) : advantageFor(this._winnerPlayer)
  }

  get _winnerPlayer() {
    return this.player1Points > this.player2Points ? this.player1Name : this.player2Name;
  }
};

if (typeof window === "undefined") {
  module.exports = TennisGame1;
}
