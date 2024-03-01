<template>
<!--  <div>-->
<!--    <div class="absolute z-40 flex justify-between">-->
<!--      <div class="w-2/12 -translate-y-3 -translate-x-3">-->
<!--        <img class="w-full h-auto" src="~/assets/border-left.png">-->
<!--      </div>-->
<!--      <div class="w-2/12 -translate-y-3 translate-x-3">-->
<!--        <img class="w-full h-auto" src="~/assets/border-right.png">-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
  <div class="flex flex-col h-screen bg-zinc-900">

<!--    NAVBAR -->
    <Disclosure as="nav" class="bg-gradient-to-r from-red-logo to-red-second shadow" v-slot="{ open }">
      <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div class="relative flex justify-between h-16">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <!-- Mobile menu button -->
            <DisclosureButton class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-400 hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-700">
              <span class="sr-only">Open main menu</span>
              <Bars4Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
          <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div class="flex-shrink-0 flex items-center ">
              <img class="h-16 w-auto" src="~/assets/logo-character.png" alt="Workflow" />
              <div class="ml-3 font-della text-white text-xl">
                INS'Aristocrate
              </div>
            </div>
            <div class="hidden sm:ml-10 sm:flex sm:space-x-8">
              <!-- Current: "border-red-700 text-gray-900", Default: "border-transparent text-gray-400 hover:border-gray-300 hover:text-gray-700" -->
              <a href="#" class="font-della border-red-700 text-gray-100 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"> Accueil </a>
              <a href="#" class="font-della border-transparent text-gray-400 hover:border-red-700 hover:text-gray-100 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"> Événements </a>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel class="sm:hidden">
        <div class="pt-2 pb-4 space-y-1">
          <!-- Current: "bg-red-70 border-red-700 text-red-700", Default: "border-transparent text-gray-400 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" -->
          <DisclosureButton as="a" href="#" class="font-della text-xl bg-red-900 border-red-700 text-gray-100 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Accueil</DisclosureButton>
          <DisclosureButton as="a" href="#" class="font-della text-xl border-transparent text-gray-400 hover:bg-red-900 hover:border-red-700 hover:text-gray-100 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Événements</DisclosureButton>
        </div>
      </DisclosurePanel>
    </Disclosure>
<!--    <div class="flex h-20 bg-red-logo w-full items-center px-10">-->
<!--      <div class="flex w-1/3 h-20 items-center justify-end space-x-10 flex-row z-50">-->
<!--        <a class="text-2xl font-della text-white">-->
<!--          NOTRE LISTE-->
<!--        </a>-->
<!--      </div>-->
<!--      <div class="flex w-1/3 h-36 justify-center translate-y-10 z-50">-->
<!--        <div class="flex justify-center w-36 h-36">-->
<!--          <img class="absolute w-24 h-24 sm:w-36 sm:h-36" src="~/assets/logo-insaristocrate.png" alt="Logo INS'Aristocrate" />-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="flex w-1/3 h-20 items-center justify-start space-x-10 flex-row z-50">-->
<!--        <div class="text-2xl font-della text-white">-->
<!--          LE PROGRAMME-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->

<!--    CONTENT -->
    <div class="bg-zinc-900">

<!--      videos -->
      <div class="flex flex-col sm:flex-row space-x-0 sm:space-x-6 space-y-3 sm:space-y-0 p-3 sm:p-4 lg:p-5 xl:p-6">
        <div>
          <a href="https://www.youtube.com/watch?v=Fpn1imb9qZg">
            <div class="relative rounded-lg overflow-hidden">
              <video class="w-full h-auto" autoplay muted loop preload="auto">
                <source src="https://media.insaristocrate.fr/insaristocrate-rap.mp4" type="video/mp4">
              </video>
              <div class="flex items-center justify-between text-white absolute inset-x-0 bottom-0 px-3 py-3 sm:px-5 sm:py-5 backdrop-blur-xl">
                <div class="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-della">
                  Teaser
                </div>
                <div class="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-della">
                  <ChevronDoubleRightIcon class="block h-8 md:h-10 xl:h-12" />
                </div>
              </div>
            </div>
          </a>
        </div>
        <div>
          <a href="https://www.youtube.com/watch?v=Fpn1imb9qZg">
            <div class="relative rounded-lg overflow-hidden">
              <video class="w-full h-auto" autoplay muted loop preload="auto">
                <source src="https://media.insaristocrate.fr/insaristocrate-rap.mp4" type="video/mp4">
              </video>
              <div class="flex items-center justify-between text-white absolute inset-x-0 bottom-0 px-3 py-3 sm:px-5 sm:py-5 backdrop-blur-xl">
                <div class="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-della">
                  Rap d'inté
                </div>
                <div class="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-della">
                  <ChevronDoubleRightIcon class="block h-8 md:h-10 xl:h-12" />
                </div>
              </div>
            </div>
          </a>
        </div>

      </div>
      <div class="flex flex-col sm:flex-row space-x-0 sm:space-x-6 space-y-3 sm:space-y-0 px-3 sm:px-4 lg:px-5 xl:px-6">
        <div class="flex flex-col w-full sm:w-1/5 bg-purple-logo rounded-lg  overflow-hidden">
          <div class="flex flex-col justify-center items-center p-5">
            <h1 class="flex text-2xl xl:text-3xl font-della text-white">
              Nos événements
            </h1>
            <img class="w-2/3 mt-1" src="~/assets/underline.png">
            <ol class="w-full">
              <template v-for="[day, eventDay] in Object.entries(upcomingEvents())">
                <h2 class="flex flex-row font-della text-white items-center mt-3 mb-1">
                  <CalendarDaysIcon class="h-8" />
                  <time :datetime="day" class="capitalize ml-2">{{new Date(day).toLocaleString('fr-FR', { dateStyle: 'full' })}}</time>
                </h2>
                <li v-for="event in eventDay" class="group flex items-center space-x-4 rounded-xl py-2 px-4">
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
          <a href="#" class="flex items-center justify-between text-white bg-gradient-to-r hover:bg-gradient-to-l hover:from-violet-600 hover:to-indigo-600 from-violet-700 to-indigo-700 inset-x-0 bottom-0 px-3 py-3 sm:px-5 sm:py-5">
            <div class="text-2xl font-della">
              Tous nos événements
            </div>
            <div>
              <ChevronDoubleRightIcon class="block h-8" />
            </div>
          </a>
        </div>
        <div class="flex w-4/5 bg-green-500">
          test
        </div>
      </div>
    </div>

    <div class="bg-zinc-900">
      <footer class="rounded-lg shadow m-6 bg-zinc-800">
        <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-gray-400 sm:text-center dark:text-gray-400">INS'Aristocrate 2024 - version n°{{buildId}}
    </span>
          <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-400 dark:text-gray-400 sm:mt-0">
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">Crédits</a>
            </li>
            <li>
              <a href="#" class="hover:underline">Contact</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
<!--    FOOTER -->

  </div>
</template>

<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import { ChevronDoubleRightIcon, Bars4Icon, XMarkIcon, CalendarDaysIcon, ClockIcon } from '@heroicons/vue/24/outline';

const buildId = useAppConfig().nuxt?.buildId

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
</script>
