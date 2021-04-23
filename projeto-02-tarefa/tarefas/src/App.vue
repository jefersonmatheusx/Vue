<template>
  <div id="app">
    <h1>Tarefas</h1>
    <TaksProgress :progress="progress" />
    <NewTask :tasks="tasks" @addTask="addTasks" />
    <TaskGrid
      :tasks="tasks"
      @taskDeleted="taskDeleted"
      @taskStateChanged="toogleTaskState"
    />
  </div>
</template>

<script>
import TaskGrid from "@/components/TaskGrid";
import NewTask from "@/components/NewTask";
import TaksProgress from "@/components/TasksProgress";

export default {
  name: "App",
  components: {
    TaskGrid,
    NewTask,
    TaksProgress,
  },
  computed: {
    progress() {
      const total = this.tasks.length;
      const done = this.tasks.filter(({ pending }) => !pending).length;

      return Math.round((done / total) * 100) || 0;
    },
  },
  watch: {
    tasks: {
      deep: true,
      handler(){
        localStorage.setItem("tasks", JSON.stringify(this.tasks))
      }
    },
  },
  methods: {
    addTasks($event) {
      const exists = this.tasks.find((data) => data.name == $event.name);
      !exists && this.tasks.push($event);
    },
    taskDeleted(i) {
      this.tasks.splice(i, 1);
    },
    toogleTaskState(i) {
      this.tasks[i].pending = !this.tasks[i].pending;
    },
  },
  data: () => ({
    tasks: [
      // { name: "Lavar louça", pending: false },
      // { name: "comprar blusas", pending: true },
    ],
  }),
  created(){
    const json = localStorage.getItem('tasks')
    const array = JSON.parse(json) 
    this.tasks = []
    if(Array.isArray(array)) {
      this.tasks = array
    }
  }
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