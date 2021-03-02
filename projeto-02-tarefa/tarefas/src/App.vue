<template>
  <div id="app">
    <h1>Tarefas</h1>
    <NewTask :tasks="tasks" @addTask="addTasks" />
    <TaskGrid @taskDeleted="taskDeleted" :tasks="tasks" />
  </div>
</template>

<script>
import TaskGrid from "@/components/TaskGrid";
import NewTask from "@/components/NewTask";

export default {
  name: "App",
  components: {
    TaskGrid,
    NewTask,
  },
  methods: {
    addTasks($event) {
      const exists = this.tasks.find((data) => data.name == $event.name);
      !exists &&  this.tasks.push($event);
    },
    taskDeleted(i){
      this.tasks.splice(i,1)
    }
  },
  data: () => ({
    tasks: [
      { name: "Lavar louça", pending: false },
      { name: "comprar blusas", pending: true },
    ],
  }),
};
</script>

<style>
body {
  font-family: "Lato", sans-serif;
  background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
  color: #fff;
}

#app {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

#app h1 {
  margin-bottom: 5px;
  font-weight: 300;
  font-size: 3rem;
}
</style>