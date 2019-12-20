<template>
  <div class="home">
    
    <h1> Goodbye World</h1>
   <v-text-field v-model="newToDo" placeholder="Enter A New To Do"/>
   <v-btn @click="submitToDo">Submit</v-btn>
   <br/><br/>
  <div :key="todo" v-for="todo in todos">
    <v-checkbox @change="completeToDo(todo)" :label="todo.name"/> 
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { db } from '../firebase';
export default {
  data(){
    return {
      newToDo: null,
    }
  },
  firestore(){
    return {
      todos: db.collection('todos')
    }
  },
  methods:{
    submitToDo(){
      this.$firestore.todos.add({name: this.newToDo, complete: false})
      this.newToDo = null

    },
    completeToDo(todo){
      this.$firestore.todos.doc('')

    }
  }
}
</script>
