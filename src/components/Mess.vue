<template>
  <div class="wrap_mess" v-if="showMess">
    <div
      class="mess animate__animated animate__bounceIn"
      v-bind:class="{ show: showMess }"
    >
      <i v-bind:class="icon"></i>
      <h4>{{ message }}</h4>
    </div>
  </div>
</template>
<script>
export default {
  name: "Message",
  props: {},
  data() {
    return {
      showMess: false,
      message: "",
      icon: "",
    };
  },
  methods: {
    showMessage(icon, message) {
      this.showMess = true;
      this.message = message;
      this.icon = icon;
      setTimeout(() => {
        this.showMess = false;
      }, 3000);
    },
  },
};
</script>
<style>
.wrap_mess {
  position: fixed;
  z-index: 999;
  display: flex;
  margin: 0 auto;
  top: 20px;
  left: 0;
  right: 0;
  transition: all linear 0.3s;
}
.mess {
  opacity: 0;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  border-radius: 4px;
  padding: 0 38px;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
  background-color: #fff;
  margin: 0 auto;
  min-height: 80px;
  display: flex;
  animation: fade-in 0.35s ease-in-out forwards;
}
.mess > i {
  margin-right: 12px;
  font-size: 28px;
  color: #ffdd4c;
}
.mess > h4 {
  font-size: 14px;
  color: #333;
}
.mess.show {
  opacity: 1;
}

@keyframes fade-in {
  from {
    transform: translateY(-135%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
