<template>
  <Message ref="alert" />
  <div class="wrapper clearfix">
    <PlayErs v-bind:isWinner="isWinner" v-bind:scoresPlayer="scoresPlayer" v-bind:currentScore="currentScore"
      v-bind:activePlayer="activePlayer" />
    <ConTroller v-bind:isPlaying="isPlaying" v-bind:isAnimateShakeY="isAnimateShakeY" v-bind:finalScore="finalScore"
      v-on:handleChangeFinalScore="handleChangeFinalScore" v-on:handleNewgame="handleNewgame"
      v-on:handleRollDice="handleRollDice" v-on:handleHold="handleHold" />
    <DiCes v-bind:dices="dices" />
    <PopupRuler v-bind:isOpenPopup="isOpenPopup" v-on:handleConfrim="handleConfrim" />
  </div>
  <Firework ref="show" />
</template>

<script>
import ConTroller from "./components/Controller.vue";
import PlayErs from "./components/Players.vue";
import DiCes from "./components/Dices.vue";
import PopupRuler from "./components/PopupRuler.vue";
import Message from "./components/Mess.vue";
import Firework from "./components/Firework.vue";
export default {
  name: "app",
  data() {
    return {
      isAnimateShakeY: false,
      isPlaying: false,
      isOpenPopup: false,
      activePlayer: 0,
      scoresPlayer: [0, 0],
      dices: [6, 6],
      currentScore: 0,
      finalScore: 100,
    };
  },
  components: {
    ConTroller,
    PlayErs,
    DiCes,
    PopupRuler,
    Message,
    Firework,
  },
  computed: {
    isWinner() {
      let { scoresPlayer, finalScore } = this;
      if (
        (scoresPlayer[0] >= finalScore && finalScore != "") ||
        (scoresPlayer[1] >= finalScore && finalScore != "")
      ) {
        this.isPlaying = false;
        this.$refs.show.showFirework(true);
        return true;
      }
      return false;
    },
  },
  methods: {
    nextPlayer() {
      this.activePlayer = this.activePlayer === 0 ? 1 : 0;
      this.currentScore = 0;
    },
    handleConfrim() {
      this.isOpenPopup = false;
      this.isPlaying = true;
      this.activePlayer = 0;
      this.scoresPlayer = [0, 0];
      this.dices = [1, 1];
      this.currentScore = 0;
    },
    handleNewgame() {
      this.isAnimateShakeY = false;
      this.isOpenPopup = true;
      this.$refs.show.showFirework(false);
    },
    handleRollDice() {
      if (this.isPlaying) {
        let dice1 = Math.floor(Math.random() * 6) + 1;
        let dice2 = Math.floor(Math.random() * 6) + 1;

        this.dices = [dice1, dice2];

        if (dice1 === 1 || dice2 === 1) {
          setTimeout(() => {
            this.$refs.alert.showMessage(
              "ti-face-sad",
              "Rất tiếc bạn đã quay trúng số 1"
            );
          }, 100);

          this.nextPlayer();
        } else {
          this.currentScore = this.currentScore + dice1 + dice2;
        }
      } else {
        this.isAnimateShakeY = true;
        setTimeout(() => {
          this.isAnimateShakeY = false;
        }, 2000);
        this.$refs.alert.showMessage(
          "ti-info-alt",
          "Hãy chọn New Game Để Bắt đầu"
        );
      }
    },
    handleHold() {
      if (this.isPlaying) {
        let { scoresPlayer, activePlayer, currentScore } = this;
        let scoreOld = scoresPlayer[activePlayer];
        this.scoresPlayer[activePlayer] = scoreOld + currentScore;

        if (!this.isWinner) {
          this.nextPlayer();
        }
      } else {
        this.isAnimateShakeY = true;
        setTimeout(() => {
          this.isAnimateShakeY = false;
        }, 2000);
        this.$refs.alert.showMessage(
          "ti-info-alt",
          "Hãy chọn New Game Để Bắt đầu"
        );
      }
    },
    handleChangeFinalScore(e) {
      let number = parseInt(e.target.value);
      if (isNaN(number)) {
        this.finalScore = "";
      } else {
        this.finalScore = number;
      }
    },
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.clearfix::after {
  content: "";
  display: table;
  clear: both;
}

body {
  overflow: hidden;
  background-image: linear-gradient(rgba(62, 20, 20, 0.4),
      rgba(62, 20, 20, 0.4)),
    url("assets/back.jpg");
  background-size: cover;
  background-position: center;
  font-family: Lato;
  font-weight: 600;
  position: relative;
  height: 100vh;
  color: #555;
}

.wrapper {
  width: 1000px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.3);
  overflow: hidden;
}
</style>
