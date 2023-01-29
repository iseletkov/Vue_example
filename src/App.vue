<template>
  <v-app id="inspire">
    <v-app-bar app>

      <v-app-bar-nav-icon @click="onDrawerIconClick">
      </v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer app
          v-model="drawer_visible"
        >
          <v-list
            nav
          >
            <v-list-item
              v-for="(item, i) in navigation_items"
              :key="i"
              :value="item"
              active-color="primary"
              :to="item.path"
            >
              <template v-slot:prepend>
                <v-icon :icon="item.icon"></v-icon>
              </template>

              <v-list-item-title
                v-text="item.title"

              >
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>

    <v-main>

      <router-view></router-view>
    </v-main>
  </v-app>
</template>


<script setup lang="ts">
  import HelloWorld from '@/components/HelloWorld.vue'
  import CComponentTableProcess from '@/components/CComponentTableProcesses'
  import { ref } from 'vue'
  const drawer_visible = ref(false)

  function onDrawerIconClick()
  {
    drawer_visible.value = !drawer_visible.value
  }
  let navigation_items = [
    {
        title: 'Домашняя',
        value: 'home',
        icon: "mdi-home-outline",
        path: "/"
    },
    {
        title: 'Процессы',
        value: 'processes',
        icon: "mdi-fast-forward",
        path: "/processes"
    },
    {
        title: 'Hello world!',
        value: 'hello_world',
        icon: "mdi-earth",
        path: "/hello_world"
    }
  ]

</script>
