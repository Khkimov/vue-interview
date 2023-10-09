<template>
  <div>
    <v-select
        v-model="variant"
        :items="items[name]"
        clearable
        :label="`Filter by ${name}`"
    ></v-select>
  </div>
</template>
<script>
import {mapMutations, mapState} from 'vuex'

export default {
  name: 'base-filter',
  props: {name: String},
  methods: mapMutations(['setVariant']),
  computed:{
    ...mapState({
      variantState: state => state.filter.variant,
      items: state => state.filter.items
    }),
    variant:{
      get(){
        return this.variantState[this.name]
      },
      set(val){
        this.setVariant({key: this.name, val})
      }
    }
  }
}
</script>