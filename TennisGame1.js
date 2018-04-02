const scores = {
  0: "Love",
  1: "Fifteen",
  2: "Thirty",
  3: "Forty"
}

class Scores {
  static win (player) {
    return `Win for ${player.name}`;
  }

  static advantage (player) {
    return `Advantage ${player.name}`;
  }

  static points (player1, player2) {
    return `${scores[player1.points]}-${scores[player2.points]}`
  }

  static tie(player1, player2) {
    return (player1.isThirtyOrLess) ? scores[player1.points] + '-All' : "Deuce"
  }
}

class Player {
  constructor(name) {
    this.name = name
    this.points = 0
  }

  addPoint() {
    this.points++
  }

  get isFinalPoint() {
    return this.points > 3
  }

  get isThirtyOrLess() {
    return this.points < 3;
  }

  isTied(player) {
    return this.points == player.points
  }
}

const DIFFERENCE_POINTS_THRESHOLD = 2

class TennisGame1 {

  constructor (player1Name, player2Name) {
    this.player1 = new Player(player1Name)
    this.player2 = new Player(player2Name)
  };

  wonPoint (playerName) {
    this._playerWithName(playerName).addPoint();
  };

  _playerWithName(playerName) {
    return playerName === this.player1.name ? this.player1 : this.player2;
  }

  get _winningPlayer() {
    return this.player1.points > this.player2.points ? this.player1: this.player2;
  }

  getScore () {
    if (this.player1.isTied(this.player2)) return Scores.tie(this.player1, this.player2)
    if (this._isGameEnded) return Scores.win(this._winningPlayer)
    if (this._isFinalPoint) return Scores.advantage(this._winningPlayer)

    return Scores.points(this.player1, this.player2)
  };

  get _isFinalPoint() {
    return this.player1.isFinalPoint || this.player2.isFinalPoint
  }

  get _isGameEnded() {
    return this._isFinalPoint && Math.abs(this.player1.points - this.player2.points) >= DIFFERENCE_POINTS_THRESHOLD;
  }
};

if (typeof window === "undefined") {
  module.exports = TennisGame1;
}
