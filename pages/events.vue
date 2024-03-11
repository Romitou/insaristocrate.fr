<template>
  <div class="flex flex-col p-3 sm:p-4 lg:p-5 xl:p-6">
    <div class="p-5 mt-3 w-full bg-zinc-800 rounded-lg text-gray-200">

      <h1 class="flex text-xl font-semibold font-della text-gray-100 items-center">
        <img class="h-6 w-6 mr-2" src="~/assets/fleur-lys.png">
        Information :
      </h1>
      <div class="font-della text-gray-200">
        Pour obtenir plus d'informations et d'explications sur nos événements, cliquez sur l'événement en question pour faire apparaître son descriptif.
      </div>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-4 w-full mt-5">
      <template v-for="[day, eventDay] in Object.entries(upcomingEvents())">
        <div class="flex flex-col w-full bg-zinc-800 rounded-lg overflow-hidden">
          <div class="flex flex-col justify-center items-center p-5">
            <h1 class="flex flex-row text-2xl xl:text-3xl font-della text-white items-center mt-3 mb-1">
              <time :datetime="day" class="capitalize ml-2">{{new Date(day).toLocaleString('fr-FR', { dateStyle: 'full' })}}</time>
            </h1>
            <img class="w-2/3 mt-1" src="~/assets/underline.png">
            <ol class="w-full">
              <button @click="setEventId(event.id);" v-for="event in eventDay" class="group flex items-center text-start space-x-4 rounded-xl py-2 px-4">
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
              </button>
            </ol>
          </div>
        </div>
      </template>
    </div>
  </div>
  <TransitionRoot as="template" :show="selectedEventId !== null">
    <Dialog as="div" class="relative z-10" @close="setEventId(null)">
      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-zinc-800 bg-opacity-75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            <DialogPanel class="relative transform overflow-hidden rounded-lg bg-zinc-800 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div class="bg-zinc-800 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div class="sm:flex sm:items-start">
                  <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full sm:mx-0 sm:h-10 sm:w-10">
                    <img v-if="selectedEvent()" :src="`https://media.insaristocrate.fr/events/${selectedEventId}.jpg`" alt="" class="h-12 w-12 flex-none rounded-full" />
                  </div>
                  <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <DialogTitle as="h3" class="text-base font-semibold leading-6 text-gray-200" v-if="selectedEvent()">{{ selectedEvent().name }}</DialogTitle>
                    <div class="mt-2">
                      <p class="text-sm text-gray-300" v-if="selectedEvent()">{{selectedEvent().content}}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="bg-zinc-800 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-purple-logo px-3 py-2 text-sm font-semibold text-gray-200 shadow-sm ring-1 ring-inset ring-purple-700 hover:bg-purple-second sm:mt-0 sm:w-auto" @click="setEventId(null)">Fermer</button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import { useHead, useSeoMeta } from 'unhead';
import { ClockIcon } from '@heroicons/vue/24/outline';
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue';

useHead({
  title: 'Événements | INS\'Aristocrate 2024',
  meta: [
    { name: 'description', content: 'Consultez toutes les informations relatives aux événements organisés par INS\'Aristocrate dans le cadre de notre campagne d\'intégration. Retrouvez toutes les dates et horaires clés pour venir vivre avec nous la meilleure semaine d\'intégration !' }
  ],
})

useSeoMeta({
  title: 'Événements | INS\'Aristocrate 2024',
  ogTitle: 'Événements | INS\'Aristocrate 2024',
  description: 'Consultez toutes les informations relatives aux événements organisés par INS\'Aristocrate dans le cadre de notre campagne d\'intégration. Retrouvez toutes les dates et horaires clés pour venir vivre avec nous la meilleure semaine d\'intégration !',
  ogDescription: 'Consultez toutes les informations relatives aux événements organisés par INS\'Aristocrate dans le cadre de notre campagne d\'intégration. Retrouvez toutes les dates et horaires clés pour venir vivre avec nous la meilleure semaine d\'intégration !',
  ogImage: 'https://insaristocrate.fr/insaristocrate-banner.jpg',
  twitterCard: 'summary_large_image',
})

const selectedEventId = ref(null);

const selectedEvent = () => {
  return events.value.find(e => e.id === selectedEventId.value);
};

const setEventId = (id: string) => {
  selectedEventId.value = id;
}

const { data: events } = await useFetch('/api/events');

const upcomingEvents = () => {
  let upcomingEvents = [];
  for (const event of events.value) {
    if (!upcomingEvents[event.day]) {
      upcomingEvents[event.day] = [];
    }
    upcomingEvents[event.day].push(event);
  }
  return upcomingEvents;
}
</script>
