<template>
  <div>
    <v-progress-linear
        v-if="loading"
        model-value="10"
        color="light-blue"
        height="10"
        striped
        class="mb-5"
    ></v-progress-linear>
    <v-card
        max-width="450"
        class="mx-auto"
    >
      <v-list three-line>
        <template v-for="(item, index) in getFilterUsers">
          <v-subheader
              v-if="item.header"
              :key="index"
              v-text="item.header"
          ></v-subheader>

          <v-divider
              v-else-if="item.divider"
              :key="index"
              :inset="item.inset"
          ></v-divider>

          <v-list-item
              v-else
              :key="index"
          >
            <v-list-item-avatar @click="item.showAddress = !item.showAddress">
              <v-img :src="item.avatar"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>
                {{ item.title }} <span class="grey--text text--lighten-1">{{ item.score }}</span>
              </v-list-item-title>
              <v-list-item-subtitle>
                <span class="text--primary">{{ item.to }}&mdash; </span>
                {{ item.subtitle }}
              </v-list-item-subtitle>
              <v-list-item-action-text>Country: {{ item.country }}</v-list-item-action-text>
              <v-list-item-action-text v-if="item.showAddress">
                <div>
                  Address:
                </div>
                <span>City: {{ item.address.city }}</span>
                <span> Street: {{ item.address.street }}</span>
              </v-list-item-action-text>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-card>
  </div>
</template>
<script>
import {mapActions, mapGetters, mapState} from 'vuex'

export default {
  name: 'users-list',
  mounted() {
    console.log(this.loading)
    this.getUsersAction()
  },
  methods: mapActions(['getUsersAction']),
  computed:{
    ...mapState({
      header: state => state.users.header,
      loading: state => state.users.loading
    }),
    ...mapGetters({
      getFilterUsers: 'getFilterUsers',
    })
  }
}
</script>