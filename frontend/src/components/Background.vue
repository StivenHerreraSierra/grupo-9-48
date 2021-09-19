<template>
  <div class="body">
    <div class="contenido pa-10">
        <slot></slot>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.body {
    background-image: url("../assets/image/background.jpg");
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: center;
    background-attachment: fixed;
    height: 100%;
    overflow-y: hidden;
}

.contenido {
    background-color: rgba(0, 0, 0, 0.555);
    z-index: 2;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
}
</style>