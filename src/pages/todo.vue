<script setup lang="ts">
interface Item {
  id: number
  text: string
  done: boolean
} let todos: Item[] = $ref([
  { id: 1, text: 'Learn Vue', done: true },
  { id: 2, text: 'Learn Nuxt', done: false },
  { id: 3, text: 'Learn TypeScript', done: false },
])

const newItem = $ref({
  id: 0,
  text: '',
  done: false,
})

function addNewTodo() {
  if (newItem.text === '')
    return
  todos.push({ ...newItem })
  newItem.text = ''
}

function removeTodo(id: number) {
  todos = todos.filter((todo: Item) => todo.id !== id)
}

function removeDone() {
  todos = todos.filter((todo: Item) => !todo.done)
}

</script>

<template>
  <div space-y-2>
    <div v-for="todo in todos" :key="todo.id">
      <div space-x-2 flex justify-center self-center>
        <input v-model="todo.done" text-lg type="checkbox">
        <span :class="todo.done ? 'done' : ''">{{ todo.text }}</span>
        <button btn @click="removeTodo(todo.id)">
          X
        </button>
      </div>
    </div>
    <div space-x-2>
      <input v-model="newItem.text" shadow appearance-none border rounded py-2 px-3 text-blue font-bold mb-3 leading-tight focus:outline-none type="text">
      <button btn @click="addNewTodo">
        Add
      </button>
    </div>
    <button btn @click="removeDone">
      Delete All Done
    </button>
  </div>
</template>

<style>
.done {
  text-decoration: line-through;
}
span {
  font-size: x-large;
}
</style>
