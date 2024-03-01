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
    <Disclosure as="nav" class="bg-red-logo shadow" v-slot="{ open }">
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
            <div class="flex-shrink-0 flex items-center font-della text-white text-xl">
<!--              <img class="block lg:hidden h-14 w-auto" src="~/assets/logo-insaristocrate.png" alt="Workflow" />-->
<!--              <img class="hidden lg:block h-14 w-auto" src="~/assets/logo-insaristocrate.png" alt="Workflow" />-->
              INS'Aristocrate
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
    <div class="flex-grow flex-col h-full z-10">
      <div class="flex flex-col sm:flex-row space-x-0 sm:space-x-6 space-y-3 sm:space-y-0 p-3 sm:p-4 lg:p-5 xl:p-6">
        <div>
          <a href="https://www.youtube.com/watch?v=Fpn1imb9qZg">
            <div class="relative rounded-lg overflow-hidden">
              <video class="w-full h-auto" autoplay muted loop preload="auto">
                <source src="https://media.insaristocrate.fr/insaristocrate-rap.mp4" type="video/mp4">
              </video>
              <div class="flex items-center justify-between text-white absolute inset-x-0 bottom-0 px-3 py-3 sm:px-5 sm:py-5">
                <div class="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-della">
                  Trailer
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
              <div class="flex items-center justify-between text-white absolute inset-x-0 bottom-0 px-3 py-3 sm:px-5 sm:py-5">
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
    </div>

<!--    FOOTER -->
    <footer class="rounded-lg shadow m-4 bg-zinc-800">
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
</template>

<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';
import { ChevronDoubleRightIcon, Bars4Icon, XMarkIcon } from '@heroicons/vue/24/outline';
import { getAppManifest } from 'nuxt/app';

const buildId = useAppConfig().nuxt?.buildId
</script>
