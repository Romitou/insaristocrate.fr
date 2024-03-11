<template>
  <div class="w-full items-center justify-center flex">
    <div>
      <ClientOnly>
        <ConfettiExplosion :duration="5000" v-if="visible" />
      </ClientOnly>
    </div>
  </div>
  <div class="flex flex-col sm:flex-row space-x-0 sm:space-x-6 space-y-3 sm:space-y-0 p-3 sm:p-4 lg:p-5 xl:p-6">
    <div v-for="video in videos">
      <a :href="video.youtube">
        <div class="relative rounded-lg overflow-hidden">
          <video :key="video.cdnLink" class="w-full h-auto" autoplay muted loop preload="auto" playsinline>
            <source :src="video.cdnLink" type="video/mp4">
          </video>
          <div class="flex items-center justify-between text-white absolute inset-x-0 bottom-0 px-3 py-3 sm:px-5 sm:py-5 backdrop-blur-xl">
            <div class="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-della">
              {{ video.name }}
            </div>
            <div v-if="video.youtube" class="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-della">
              <ChevronDoubleRightIcon class="block h-8 md:h-10 xl:h-12" />
            </div>
            <div v-else>
              <ClientOnly>
                <VueCountdown @end="countdownEnd()" class="text-xl sm:text-xl md:text-2xl lg:text-3xl font-della flex flex-row items-center" :time="video.showDate - Date.now()" v-slot="{ days, hours, minutes, seconds }">
                  <div v-if="days !== 0">{{ days }}j:</div><div v-if="hours !== 0">{{ hours }}h:</div><div v-if="minutes !== 0">{{ minutes }}min:</div>{{ seconds }}s
                </VueCountdown>
              </ClientOnly>
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
  <div class="flex flex-col lg:flex-row space-x-0 lg:space-x-6 space-y-3 lg:space-y-0 px-3 sm:px-4 lg:px-5 xl:px-6">
    <div class="flex flex-col w-full lg:w-3/5">
      <div class="flex flex-col justify-center bg-zinc-800 items-center p-5 rounded-t-lg">
        <h1 class="flex text-2xl xl:text-3xl font-della text-white text-center" v-if="latestPost()">
          {{ latestPost().title }}
        </h1>
        <h1 class="flex text-2xl xl:text-3xl font-della text-white text-center" v-else>
          Aucune actualité :(
        </h1>
        <img class="w-2/3 max-w-xs mt-1" src="~/assets/underline.png">
        <div class="w-full mt-3 justify-start" v-if="latestPost()">
          <ClientOnly>
            <p v-html="latestPost().content" class="mt-3 text-base text-gray-300 font-della" />
          </ClientOnly>
          <div class="mt-6 flex items-center">
            <div class="flex space-x-1 text-sm text-gray-400 font-della">
              <time :datetime="latestPost().createdAt">
                Publié le {{ new Date(latestPost().createdAt).toLocaleString('fr-FR', { dateStyle: 'full' }) }}
              </time>
            </div>
          </div>
        </div>
      </div>
      <NuxtLink to="/news" class="flex rounded-b-lg items-center justify-between text-white bg-gradient-to-r hover:bg-gradient-to-l hover:from-zinc-600 hover:to-gray-600 from-zinc-700 to-gray-700 inset-x-0 bottom-0 px-3 py-3 sm:px-5 sm:py-5">
        <div class="text-2xl font-della">
          Toutes nos actualités
        </div>
        <div>
          <ChevronDoubleRightIcon class="block h-8" />
        </div>
      </NuxtLink>
    </div>
    <div class="flex flex-col w-full lg:w-2/5 rounded-lg overflow-hidden">
      <div class="flex flex-col justify-center bg-purple-logo items-center p-5 rounded-t-lg">
        <h1 class="flex text-2xl xl:text-3xl font-della text-white text-center">
          Nos prochains événements
        </h1>
        <img class="w-2/3 max-w-xs mt-1" src="~/assets/underline.png">
        <ol class="w-full">
          <template v-for="[day, eventDay] in Object.entries(upcomingEvents())">
            <h2 class="flex flex-row font-della text-white items-center mt-3 mb-1">
              <CalendarDaysIcon class="h-8" />
              <time :datetime="day" class="capitalize ml-2">{{new Date(day).toLocaleString('fr-FR', { dateStyle: 'full' })}}</time>
            </h2>
            <li v-for="event in eventDay" class="group flex items-center space-x-4 rounded-xl py-2">
              <img :src="`https://media.insaristocrate.fr/events/${event.id}.jpg`" alt="" class="h-12 w-12 flex-none rounded-full" />
              <div class="flex-auto">
                <p class="text-white font-della">{{ event.name }}</p>
                <p class="flex flex-row items-center mt-0.5 text-gray-200 font-della">
                  <ClockIcon class="h-5 mr-1" />
                  <time :datetime="event.start">{{ new Date(event.start).toLocaleString('fr-FR', { hour: 'numeric', minute: 'numeric' }) }}</time>
                  <template v-if="event.end">
                    -
                    <time :datetime="event.end">{{ new Date(event.end).toLocaleString('fr-FR', { hour: 'numeric', minute: 'numeric' }) }}</time>
                  </template>
                </p>
              </div>
            </li>
          </template>
        </ol>
      </div>
      <NuxtLink to="/events" class="flex rounded-b-lg items-center justify-between text-white bg-gradient-to-r hover:bg-gradient-to-l hover:from-violet-600 hover:to-indigo-600 from-violet-700 to-indigo-700 inset-x-0 bottom-0 px-3 py-3 sm:px-5 sm:py-5">
        <div class="text-2xl font-della">
          Tous nos événements
        </div>
        <div>
          <ChevronDoubleRightIcon class="block h-8" />
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import ConfettiExplosion from "vue-confetti-explosion";
import { ChevronDoubleRightIcon, CalendarDaysIcon, ClockIcon } from '@heroicons/vue/24/outline';
import VueCountdown from '@chenfengyuan/vue-countdown';
import { useHead, useSeoMeta } from 'unhead';
import { nextTick } from 'vue';

useHead({
  title: 'Accueil | INS\'Aristocrate 2024',
  meta: [
    { name: 'description', content: 'Bienvenue sur le site de la liste INS\'Aristocrate, candidate pour l\'intégration des premières années à l\'INSA Rouen Normandie. Découvrez nos vidéos, nos événements et toutes nos actualités.' }
  ],
})

useSeoMeta({
  title: 'Accueil | INS\'Aristocrate 2024',
  ogTitle: 'Accueil | INS\'Aristocrate 2024',
  description: 'Bienvenue sur le site de la liste INS\'Aristocrate, candidate pour l\'intégration des premières années à l\'INSA Rouen Normandie. Découvrez nos vidéos, nos événements et toutes nos actualités.',
  ogDescription: 'Bienvenue sur le site de la liste INS\'Aristocrate, candidate pour l\'intégration des premières années à l\'INSA Rouen Normandie. Découvrez nos vidéos, nos événements et toutes nos actualités.',
  ogImage: 'https://insaristocrate.fr/insaristocrate-banner.jpg',
  twitterCard: 'summary_large_image',
})

const { data: videos, refresh: refreshVideos } = await useFetch('/api/videos');
const { data: posts } = await useFetch('/api/news');
const { data: events } = await useFetch('/api/events');

const upcomingEvents = () => {
  let upcomingEvents = [];
  let i = 0;
  for (const event of events.value) {
    if (Date.now() > Date.parse(event.end)) {
      continue;
    }
    if (!upcomingEvents[event.day]) {
      upcomingEvents[event.day] = [];
    }
    upcomingEvents[event.day].push(event);
    i++;
    if (i >= 3) {
      break;
    }
  }
  return upcomingEvents;
}

const countdownEnd = async () => {
  void explode();
  await refreshVideos();
}

const latestPost = () => {
  if (posts.value.length > 0)
    return posts.value[0];
  return null;
}

const visible = ref(false);
const explode = async () => {
  visible.value = false;
  await nextTick();
  visible.value = true;
};
</script>
