<template>
    <div class="tasks-progress">
      <div class="progress-value">{{ progress }}%</div>
      <div class="progress-bar" :style="{ width: progress + '%' }"></div>
    </div>
</template>

<script>
export default {
  props: {
    progress: { type: Number, default: 0 },
  },
};
</script>

<style>
.tasks-progress {
  width: 80%;
  position: relative;
  border: 1px solid #fff;
  color:#fff;
  border-radius:8px;
  margin-bottom:15px;
  display:flex;
  flex-direction:column;
  align-items:center
}
.progress-bar{
  position:absolute;
  border-radius:8px;
  height:100%;
  background-color:#4CAF50;
  align-self:flex-start;
  z-index:0
}
.progress-value{
  z-index:1
}
</style>