<template>
  <div class="flex-1 overflow-y-auto p-4">
    <div class="flex flex-col space-y-2">
      <!-- Messages go here -->
      <ChatBouble v-for="message in messages" :key="message.Id" v-bind="message" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ChatMessage } from '@/interfaces/chat-message.interface'
import ChatBouble from './chatBouble.vue'

interface Props {
  messages: ChatMessage[]
}

defineProps<Props>()
</script>
