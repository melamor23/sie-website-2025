<script setup>
  import { ref } from 'vue'
  import { Dialog, DialogPanel, Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
  import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
  import {
    ArrowPathIcon,
    CloudArrowUpIcon,
    Cog6ToothIcon,
    FingerPrintIcon,
    LockClosedIcon,
    ServerIcon,
  } from '@heroicons/vue/20/solid'
  
  const navigation = [
    { name: 'SIE', href: '/index' },
    { name: 'About', href: '/about' },
    { name: 'Sustainability', href: '/sustainability' },
    { name: 'Contact', href: '/contact' },
  ]

  const features = [
    {
      name: 'Push to deploy.',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.',
      icon: CloudArrowUpIcon,
    },
    {
      name: 'SSL certificates.',
      description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
      icon: LockClosedIcon,
    },
    {
      name: 'Simple queues.',
      description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.',
      icon: ArrowPathIcon,
    },
    {
      name: 'Advanced security.',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.',
      icon: FingerPrintIcon,
    },
    {
      name: 'Powerful API.',
      description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
      icon: Cog6ToothIcon,
    },
    {
      name: 'Database backups.',
      description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. ',
      icon: ServerIcon,
    },
  ]
  const tiers = [
    {
      name: 'Hobby',
      id: 'tier-hobby',
      href: '#',
      priceMonthly: '$19',
      description: "The perfect plan if you're just getting started with our product.",
      features: ['25 products', 'Up to 10,000 subscribers', 'Advanced analytics', '24-hour support response time'],
      featured: false,
    },
    {
      name: 'Enterprise',
      id: 'tier-enterprise',
      href: '#',
      priceMonthly: '$49',
      description: 'Dedicated support and infrastructure for your company.',
      features: [
        'Unlimited products',
        'Unlimited subscribers',
        'Advanced analytics',
        'Dedicated support representative',
        'Marketing automations',
        'Custom integrations',
      ],
      featured: true,
    },
  ]
  const faqs = [
    {
      question: "What's the best thing about Switzerland?",
      answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    // More questions...
  ]
  const footerNavigation = {
    solutions: [
      { name: 'Marketing', href: '#' },
      { name: 'Analytics', href: '#' },
      { name: 'Automation', href: '#' },
      { name: 'Commerce', href: '#' },
      { name: 'Insights', href: '#' },
    ],
    support: [
      { name: 'Submit ticket', href: '#' },
      { name: 'Documentation', href: '#' },
      { name: 'Guides', href: '#' },
    ],
    company: [
      { name: 'About', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Jobs', href: '#' },
      { name: 'Press', href: '#' },
    ],
    legal: [
      { name: 'Terms of service', href: '#' },
      { name: 'Privacy policy', href: '#' },
      { name: 'License', href: '#' },
    ],
  }
  
  const mobileMenuOpen = ref(false)
  </script>

<template>
    <div :class="[$route.name !== 'index' ? 'bg-black' : 'bg-white']">
      <!-- Header -->
      <header :class="[$route.name === 'index' ? 'absolute' : '', 'inset-x-0 top-0 z-50']">
        <nav class="flex items-center justify-between p-6 lg:px-10 text-black" aria-label="Global">
          <div class="flex lg:flex-1">
            <NuxtLink :to="'/'" class="-m-1.5 p-1.5">
              <span class="sr-only">SIE</span>
              <img class="h-11 w-auto" src="../assets/img/logo.png" alt="logo" />
            </NuxtLink>
          </div>
          <div class="flex lg:hidden">
            <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white" @click="mobileMenuOpen = true">
              <span class="sr-only">Open main menu</span>
              <Bars3Icon class="size-6" aria-hidden="true" />
            </button>
          </div>
          <div class="hidden lg:flex lg:gap-x-20">
            <NuxtLink v-for="item in navigation" :key="item.name" :to="item.href" :style="{ color: 'rgb(25,24,96)' }" class="text-sm/6 font-semibold">
              {{ item.name }}
            </NuxtLink>
          </div>
          <div class="hidden lg:flex lg:flex-1">
          </div>
        </nav>
        <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
          <div class="fixed inset-0 z-50" />
          <DialogPanel class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
            <div class="flex items-center justify-between">
              <NuxtLink :to="'/'" class="-m-1.5 p-1.5">
                <span class="sr-only">Your Company</span>
                <img class="h-8 w-auto" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500" alt="" />
              </NuxtLink>
              <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-400" @click="mobileMenuOpen = false">
                <span class="sr-only">Close menu</span>
                <XMarkIcon class="size-6" aria-hidden="true" />
              </button>
            </div>
            <div class="mt-6 flow-root">
              <div class="-my-6 divide-y divide-gray-500/25">
                <div class="space-y-2 py-6">
                  <a v-for="item in navigation" :key="item.name" :href="item.href" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-gray-800">{{ item.name }}</a>
                </div>
                <div class="py-6">
                  <a href="#" class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-gray-800">Log in</a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
  
      <NuxtPage />
  
      <!-- Footer -->
      <footer class="mt-32 bg-gray-900 sm:mt-56">
        <div class="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
          <div class="xl:grid xl:grid-cols-3 xl:gap-8">
            <img class="h-9" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500" alt="Company name" />
            <div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div class="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 class="text-sm/6 font-semibold text-white">Solutions</h3>
                  <ul role="list" class="mt-6 space-y-4">
                    <li v-for="item in footerNavigation.solutions" :key="item.name">
                      <a :href="item.href" class="text-sm/6 text-gray-400 hover:text-white">{{ item.name }}</a>
                    </li>
                  </ul>
                </div>
                <div class="mt-10 md:mt-0">
                  <h3 class="text-sm/6 font-semibold text-white">Support</h3>
                  <ul role="list" class="mt-6 space-y-4">
                    <li v-for="item in footerNavigation.support" :key="item.name">
                      <a :href="item.href" class="text-sm/6 text-gray-400 hover:text-white">{{ item.name }}</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 class="text-sm/6 font-semibold text-white">Company</h3>
                  <ul role="list" class="mt-6 space-y-4">
                    <li v-for="item in footerNavigation.company" :key="item.name">
                      <a :href="item.href" class="text-sm/6 text-gray-400 hover:text-white">{{ item.name }}</a>
                    </li>
                  </ul>
                </div>
                <div class="mt-10 md:mt-0">
                  <h3 class="text-sm/6 font-semibold text-white">Legal</h3>
                  <ul role="list" class="mt-6 space-y-4">
                    <li v-for="item in footerNavigation.legal" :key="item.name">
                      <a :href="item.href" class="text-sm/6 text-gray-400 hover:text-white">{{ item.name }}</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </template>
  