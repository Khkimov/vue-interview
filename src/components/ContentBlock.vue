<template>
  <v-container>
    <v-row
        align="center"
        justify="center"
        class="ma-4"
    >
      <v-col cols="12">
        <v-img
            :src="require('../assets/logo.svg')"
            class="my-3"
            contain
            height="200"
        />
      </v-col>

      <v-col
          cols="12"
          md="4"
      >
        <base-filter name="country" />
        <base-filter name="score" />
      </v-col>

      <v-col
          cols="12"
          md="4"
      >
        <users-list />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import UsersList from '@/components/UsersList.vue'
import BaseFilter from '@/components/BaseFilter.vue'

export default {
  name: 'ContentBlock',
  components: {BaseFilter, UsersList}
}
</script>