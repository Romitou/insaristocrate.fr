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
    <div class="flex h-20 bg-red-logo w-full items-center px-10">
      <div class="flex w-1/3 h-20 items-center justify-end space-x-10 flex-row z-50">
        <a class="text-2xl font-della text-white">
          NOTRE LISTE
        </a>
      </div>
      <div class="flex w-1/3 h-36 justify-center translate-y-10 z-50">
        <div class="flex justify-center w-36 h-36">
          <img class="absolute w-36 h-36" src="~/assets/logo-insaristocrate.png" alt="Logo INS'Aristocrate" />
        </div>
      </div>
      <div class="flex w-1/3 h-20 items-center justify-start space-x-10 flex-row z-50">
        <div class="text-2xl font-della text-white">
          LE PROGRAMME
        </div>
      </div>
    </div>

<!--    CONTENT -->
    <div class="flex-grow flex-col h-full z-10">
      <div class="relative">
        <video class="w-full h-auto" autoplay muted loop preload="auto">
          <source src="https://media.insaristocrate.fr/insaristocrate-rap.mp4" type="video/mp4">
        </video>
        <div class="flex items-center justify-between text-white absolute inset-x-0 bottom-10 px-10">
          <div class="text-7xl font-della">
            RAP D'INTÉ
          </div>
        </div>
      </div>
    </div>

<!--    FOOTER -->
    <footer class="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
      <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights Reserved.
    </span>
        <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="#" class="hover:underline me-4 md:me-6">About</a>
          </li>
          <li>
            <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
          </li>
          <li>
            <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
          </li>
          <li>
            <a href="#" class="hover:underline">Contact</a>
          </li>
        </ul>
      </div>
    </footer>
  </div>
</template>
