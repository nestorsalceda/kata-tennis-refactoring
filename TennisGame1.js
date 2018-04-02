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
    if (this._isTied) return this._scoreForTied();
    if (this._isGameEnded) return winFor(this._winnerPlayer)
    if (this._isFinalPoint) return advantageFor(this._winnerPlayer)

    return `${scores[this.player1Points]}-${scores[this.player2Points]}`
  };

  get _isTied() {
    return this.player1Points === this.player2Points;
  }

  get _isFinalPoint() {
    return this.player1Points >= 4 || this.player2Points >= 4
  }

  _scoreForTied() {
    return (this.player1Points < 3) ? scores[this.player1Points] + '-All' : "Deuce"
  }

  get _isGameEnded() {
    return this._isFinalPoint && Math.abs(this.player1Points - this.player2Points) >= 2;
  }

  get _winnerPlayer() {
    return this.player1Points > this.player2Points ? this.player1Name : this.player2Name;
  }
};

if (typeof window === "undefined") {
  module.exports = TennisGame1;
}
