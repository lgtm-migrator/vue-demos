<script setup lang="ts">
interface Message {
  id: number;
  user: string;
  text: string;
}
const messages = $ref<Message[]>([
  {
    id: 1,
    user: "John",
    text: "Hello",
  },
  {
    id: 2,
    user: "John",
    text: "Hi",
  },
  {
    id: 3,
    user: "Me",
    text: "How are you?",
  },
  {
    id: 4,
    user: "John",
    text: "Fine",
  },
]);

let newMessage = $ref("");

const elem = $ref<HTMLElement>();

function isMe(message: Message) {
  return message.user === "Me";
}

function addMessage() {
  messages.push({
    id: messages.length + 1,
    user: "Me",
    text: newMessage,
  });
  newMessage = "";
  elem.scrollTop = elem.scrollHeight;
}
</script>

<template>
  <div flex="~" flex-col items-center justify-center>
    <div
      ref="elem"
      container
      h-120
      w-100
      border
      flex
      flex-col
      space-y-2
      p-b-20
      p-x-2
      overflow-y-scroll
    >
      <div
        v-for="message in messages"
        :key="message.id"
        :class="[isMe(message) ? 'right message' : 'left message']"
      >
        {{ message.text }}
      </div>
    </div>
    <div flex flex-row w-100 class="inputbox">
      <input type="text" v-model="newMessage" />
      <button btn @click="addMessage()">enter</button>
    </div>
  </div>
</template>

<style>
.right {
  align-self: flex-end;
  background: rebeccapurple;
}
.left {
  align-self: flex-start;
  background: blue;
}
.message {
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #ccc;
}
.inputbox > input {
  width: 100%;
  color: aqua;
  padding-left: 10px;
}
</style>