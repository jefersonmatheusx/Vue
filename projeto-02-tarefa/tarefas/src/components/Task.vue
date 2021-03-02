<template>
  <div class="task" :class="stateClass">
    <span @click="$emit('taskDeleted',task)" class="close">x</span>
    <p>{{ task.name }}</p>
  </div>
</template>

<script>
export default {
  props: {
    task: { type: Object, required: true },
  },
  computed:{
    stateClass(){
      return {
        pending: this.task.pending,
        done: !this.task.pending
      }
    }
  }
};
</script>

<style>
  .task{
    position:relative;
    box-sizing: border-box;
    width:350px;
    height:150px;
    padding:10px;
    border-radius:8px;
    font-size:2rem;
    font-weight:300;
    cursor:pointer;
    user-select:none;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .pending{
    border-left: 14px solid #B73229;
    background-color:#F44336
  }
  .done{
    color: #DDD;
    border-left: 14px solid #0A8f08;
    background-color:#4caf50 ;
    text-decoration:line-through;
  }
  .pending .close{
    background:#B73229;
  }
  .done .close{
   background: #0A8f08;
   }
   
   .close{     
    border-radius: 10px;
    width: 20px;
    height: 20px;
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 0.9rem;
    font-weight: 600;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    justify-content: center;
  }
</style>