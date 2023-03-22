<template>
  <!-- The Modal -->
  <div id="myModal" class="modal" v-bind:class="getClassPopup">
    <!-- Modal content -->
    <div class="modal-content">
      <div class="modal-header">
        <h2>Luật chơi</h2>
      </div>
      <div class="modal-body">
        <p>
          Chọn số điểm chơi (nếu không chọn mặc định sẽ là '100' ).<br>
          Người chơi có thể quay xúc tùy ý số lần đến khi nhận điểm, số điểm quay được sẽ được lưu lại vào số điểm
          vào số điểm tạm thời, khi nhấn vào nút '<strong>HOLD</strong>' thì điểm sẽ được cộng vào điểm người chơi.<br>
          Nếu khi quay xúc xắc điểm mà nhận điểm số 1 thì người chơi sẽ mất điểm và lượt chơi
          sẽ chuyển sang người thứ 2.<br>
          Người chiến thắng là người giành được số điểm đã được đặt ra đầu tiên.
        </p>
      </div>
      <div class="modal-footer">
        <button v-on:click="confirm" class="cofrim">Đã hiểu</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PopupRuler',
  props: {
    isOpenPopup: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {}
  },
  methods: {
    confirm() {
      this.$emit('handleConfrim')
    }
  },
  computed: {
    getClassPopup() {
      return {
        open: this.isOpenPopup
      }
    }
  }
}
</script>
<style>
.cofrim {
  cursor: pointer;
  margin: 12px 0;
  background-color: #42b983; /* Green */
  border: none;
  color: white;
  padding: 9px 16px;
  border-radius: 6px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
  -webkit-animation-name: fadeIn; /* Fade in the background */
  -webkit-animation-duration: 0.4s;
  animation-name: fadeIn;
  animation-duration: 0.4s;
}
.open {
  display: flex;
}
/* Modal Content */
.modal-content {
  max-width: 600px;
  margin: auto;
  background-color: #fefefe;
  -webkit-animation-name: slideIn;
  -webkit-animation-duration: 0.4s;
  animation-name: slideIn;
  animation-duration: 0.4s;
}

/* The Close Button */

.modal-header {
  margin-top: 10px;
  padding: 2px 16px;
  color: white;
}
.modal-header > h2 {
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva,
    Verdana, sans-serif;
  font-weight: 400;
  color: #000;
}
.modal-body > p {
  font-size: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 400;
  color: #000;
}
.modal-body {
  padding: 2px 16px;
}

.modal-footer {
  padding: 2px 16px;
  color: white;
}

/* Add Animation */

@-webkit-keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
