const scores = {
  0: "Love",
  1: "Fifteen",
  2: "Thirty",
  3: "Forty"
}

class TennisGame1 {
  constructor (player1Name, player2Name) {
    this.m_score1 = 0;
    this.m_score2 = 0;
    this.player1Name = player1Name;
    this.player2Name = player2Name;
  };

  wonPoint (playerName) {
    if (playerName === this.player1Name)
      this.m_score1++;
    else
      this.m_score2++;
  };

  getScore () {
    if (this.m_score1 === this.m_score2) {
      if (this.m_score1 < 2) {
        return scores[this.m_score1] + '-All'
      }
      return "Deuce"
    }

    if (this.m_score1 >= 4 || this.m_score2 >= 4) {
      var minusResult = this.m_score1 - this.m_score2;
      if (minusResult === 1) return "Advantage player1";
      if (minusResult === -1) return "Advantage player2";
      if (minusResult >= 2) return "Win for player1";
      return "Win for player2";
    }

    let score = "";
    let tempScore = 0;
    for (var i = 1; i < 3; i++) {
      if (i === 1) tempScore = this.m_score1;
      else {
        score += "-";
        tempScore = this.m_score2;
      }
      score += scores[tempScore]
    }
    return score;
  };
};

if (typeof window === "undefined") {
  module.exports = TennisGame1;
}
