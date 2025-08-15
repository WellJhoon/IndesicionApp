<template>
  <div ref="msgRef" class="flex-1 overflow-y-auto p-4">
    <div class="flex flex-col space-y-2">
      <!-- Messages go here -->
      <ChatBouble v-for="message in messages" :key="message.Id" v-bind="message" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ChatMessage } from '@/interfaces/chat-message.interface'
import ChatBouble from './chatBouble.vue'
import { ref, watch, nextTick } from 'vue'

interface Props {
  messages: ChatMessage[]
}

const { messages } = defineProps<Props>()

const msgRef = ref<HTMLDivElement | null>(null)

watch(
  () => messages,
  async () => {
    await nextTick()
    msgRef.value?.scrollTo({
      top: msgRef.value.scrollHeight,
      behavior: 'smooth',
    })
  },
  { deep: true },
)
</script>
