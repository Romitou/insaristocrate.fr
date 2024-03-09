<template>
  <div class="flex flex-col h-screen bg-zinc-900">
    <nav class="bg-gradient-to-r from-red-logo to-red-second shadow">
      <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div class="relative flex justify-between h-16">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button @click="open = !open;" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-400 hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-700">
              <span class="sr-only">Open main menu</span>
              <Bars4Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div class="flex-shrink-0 flex items-center ">
              <img class="h-16 w-auto" src="~/assets/logo-character.png" alt="Workflow" />
              <div class="ml-3 font-della text-white text-xl">
                INS'Aristocrate
              </div>
            </div>
            <div class="hidden sm:ml-10 sm:flex sm:space-x-8">
              <NuxtLink to="/" :class="getDesktopClass('index')">Accueil</NuxtLink>
              <NuxtLink to="/events" :class="getDesktopClass('events')">Événements</NuxtLink>
              <NuxtLink to="/news" :class="getDesktopClass('news')">Actualités</NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <div v-if="open" class="sm:hidden">
        <div class="pt-2 pb-4 space-y-1">
          <NuxtLink to="/" :class="getMobileClass('index')">Accueil</NuxtLink>
          <NuxtLink to="/events" :class="getMobileClass('events')">Événements</NuxtLink>
          <NuxtLink to="/news" :class="getMobileClass('news')">Actualités</NuxtLink>
        </div>
      </div>
    </nav>
    <main class="flex-grow bg-zinc-900">
      <slot />
    </main>

    <div class="bg-zinc-900">
      <footer class="rounded-lg shadow m-3 sm:m-4 lg:m-5 xl:m-6 bg-zinc-800">
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
  </div>
</template>

<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import { ChevronDoubleRightIcon, Bars4Icon, XMarkIcon, CalendarDaysIcon, ClockIcon } from '@heroicons/vue/24/outline';
import { useRoute, useAppConfig } from 'nuxt/app';

const open = ref(false);

const route = useRoute();
const buildId = useAppConfig().nuxt?.buildId;

const getDesktopClass = (routeName: string) => {
  if (route.name === routeName) {
    return 'font-della border-red-700 text-gray-100 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
  }
  return 'font-della border-transparent text-gray-400 hover:border-red-700 hover:text-gray-100 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
}
const getMobileClass = (routeName: string) => {
  if (route.name === routeName) {
    return 'font-della text-xl bg-red-900 border-red-700 text-gray-100 block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
  }
  return 'font-della text-xl border-transparent text-gray-400 hover:bg-red-900 hover:border-red-700 hover:text-gray-100 block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
}

watch(
    () => route.path,
    () => {
      console.log('switch')
      open.value = false;
    }
)
</script>
