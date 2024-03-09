<template>
  <div class="bg-zinc-900 px-3 sm:px-4 lg:px-6 mb-3">
    <div class="mx-auto">
      <div class="mt-6 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
        <div v-for="post in posts" :key="post.slug" class="flex flex-col">
          <div class="flex-shrink-0" v-if="post.imageUrl">
            <img class="h-48 w-full object-cover" :src="post.imageUrl" alt="" />
          </div>
          <div class="flex bg-zinc-800 p-6 flex-col justify-between rounded-lg shadow-lg overflow-hidden">
            <h1 class="flex text-xl font-semibold text-gray-100 items-center">
              <img class="h-6 w-6 mr-2" src="~/assets/fleur-lys.png">
              {{ post.title }}
            </h1>
            <NuxtClientFallback>
            <p v-html="post.content" class="mt-3 text-base text-gray-300" />
            </NuxtClientFallback>
            <div class="mt-6 flex items-center">
              <div class="flex space-x-1 text-sm text-gray-400">
                <time :datetime="post.createdAt">
                  Publié le {{ new Date(post.createdAt).toLocaleString('fr-FR', { dateStyle: 'full' }) }}
                </time>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHead, useSeoMeta } from 'unhead';

useHead({
  title: 'Actualités | INS\'Aristocrate 2024',
  meta: [
    { name: 'description', content: 'Retrouvez toutes les actualités et toutes les informations en temps réel à propos de notre liste sur notre section dédiée du site INS\'Aristocrate.' }
  ],
})

useSeoMeta({
  title: 'Actualités | INS\'Aristocrate 2024',
  ogTitle: 'Actualités | INS\'Aristocrate 2024',
  description: 'Retrouvez toutes les actualités et toutes les informations en temps réel à propos de notre liste sur notre section dédiée du site INS\'Aristocrate.',
  ogDescription: 'Retrouvez toutes les actualités et toutes les informations en temps réel à propos de notre liste sur notre section dédiée du site INS\'Aristocrate.',
  ogImage: 'https://insaristocrate.fr/insaristocrate-banner.jpg',
  twitterCard: 'summary_large_image',
})

const { data: posts } = await useFetch('/api/news');
</script>
