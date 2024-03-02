<template>
  <div class="flex flex-col sm:flex-row space-x-0 sm:space-x-6 space-y-3 sm:space-y-0 p-3 sm:p-4 lg:p-5 xl:p-6">
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-4 w-full">
      <template v-for="[day, eventDay] in Object.entries(upcomingEvents())">
        <div class="flex flex-col w-full bg-zinc-800 rounded-lg overflow-hidden">
          <div class="flex flex-col justify-center items-center p-5">
            <h1 class="flex flex-row text-2xl xl:text-3xl font-della text-white items-center mt-3 mb-1">
              <time :datetime="day" class="capitalize ml-2">{{new Date(day).toLocaleString('fr-FR', { dateStyle: 'full' })}}</time>
            </h1>
            <img class="w-2/3 mt-1" src="~/assets/underline.png">
            <ol class="w-full">
              <li v-for="event in eventDay" class="group flex items-center space-x-4 rounded-xl py-2 px-4">
                <img :src="`https://media.insaristocrate.fr/events/${event.id}.jpg`" alt="" class="h-12 w-12 flex-none rounded-full" />
                <div class="flex-auto">
                  <p :class="`${event.id === 'food' ? 'text-gray-300' : 'text-white font-semibold'} font-della`">{{ event.name }}</p>
                  <p :class="`flex flex-row items-center mt-0.5 ${event.id === 'food' ? 'text-gray-400' : 'text-gray-200'} font-della`">
                    <ClockIcon class="h-5 mr-1" />
                    <time :datetime="event.start">{{ new Date(event.start).toLocaleString('fr-FR', { hour: 'numeric', minute: 'numeric' }) }}</time>
                    <template v-if="event.end">
                      -
                      <time :datetime="event.end">{{ new Date(event.end).toLocaleString('fr-FR', { hour: 'numeric', minute: 'numeric' }) }}</time>
                    </template>
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHead, useSeoMeta } from 'unhead';

useHead({
  title: 'Événements | INS\'Aristocrate 2024',
  meta: [
    { name: 'description', content: 'Consultez toutes les informations relatives organisées par INS\'Aristocrate dans le cadre de notre campagne d\'intégration. Retrouvez toutes les dates et horaires clés pour venir vivre avec nous la meilleure semaine d\'intégration !' }
  ],
})

useSeoMeta({
  title: 'Accueil | INS\'Aristocrate 2024',
  ogTitle: 'Accueil | INS\'Aristocrate 2024',
  description: 'Consultez toutes les informations relatives organisées par INS\'Aristocrate dans le cadre de notre campagne d\'intégration. Retrouvez toutes les dates et horaires clés pour venir vivre avec nous la meilleure semaine d\'intégration !',
  ogDescription: 'Consultez toutes les informations relatives organisées par INS\'Aristocrate dans le cadre de notre campagne d\'intégration. Retrouvez toutes les dates et horaires clés pour venir vivre avec nous la meilleure semaine d\'intégration !',
  ogImage: 'https://insaristocrate.fr/insaristocrate-banner.jpg',
  twitterCard: 'summary_large_image',
})

const { data: events } = await useFetch('/api/events');

import { ClockIcon } from '@heroicons/vue/24/outline';

const upcomingEvents = () => {
  let upcomingEvents = [];
  for (const event of events.value) {
    if (Date.now() > Date.parse(event.end)) {
      continue;
    }
    if (!upcomingEvents[event.day]) {
      upcomingEvents[event.day] = [];
    }
    upcomingEvents[event.day].push(event);
  }
  return upcomingEvents;
}
</script>
