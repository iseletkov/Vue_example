<template>
   <v-btn
      color="blue-grey"
      prepend-icon="mdi-cloud-upload"
      @click="load(123)"
    >
      Upload
    </v-btn>
  <v-alert
    border="top"
    color="green"
    dismissible
    dark
    v-model="alert_visible"
    icon="mdi-vuetify"
    closable
   >
    {{alert_message}}
  </v-alert>

  <v-table>
    <thead>
      <tr>
        <th class="text-left">
          Name
        </th>
        <th class="text-left">
          Calories
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in desserts"
        :key="item.name"
      >
        <td>{{ item.name }}</td>
        <td>{{ item.calories }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  const alert_visible = ref(false)
  const alert_message = ref("ajdnalwdmnalwd")
  function load(i)
  {
    alert_visible.value = true
    alert_message.value = i
  }

  const desserts = [
    {
      name: 'Frozen Yogurt',
      calories: 159,
    },
    {
      name: 'Ice cream sandwich',
      calories: 237,
    },
    {
      name: 'Eclair',
      calories: 262,
    },
    {
      name: 'Cupcake',
      calories: 305,
    },
    {
      name: 'Gingerbread',
      calories: 356,
    },
    {
      name: 'Jelly bean',
      calories: 375,
    },
    {
      name: 'Lollipop',
      calories: 392,
    },
    {
      name: 'Honeycomb',
      calories: 408,
    },
    {
      name: 'Donut',
      calories: 452,
    },
    {
      name: 'KitKat',
      calories: 518,
    },
  ]
</script>
