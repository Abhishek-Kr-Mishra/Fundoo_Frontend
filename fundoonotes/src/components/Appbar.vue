<template>
  <div class="app-bar fixed-top">
    <v-app-bar
      color="white"
      elevate-on-scroll
    >
      <v-app-bar-nav-icon v-on:click="clickOpen"></v-app-bar-nav-icon>
        <div>
        <v-img src="@/assets/FundooNotesLogo.png" height=40 width=40 contain></v-img>
        </div>
      <v-toolbar-title>
        <div class="d-none d-sm-block">Fundoo Notes</div>
      </v-toolbar-title>
      <v-text-field label="Search..." solo dense filled class="search-bar ml-16 d-none d-sm-block" prepend-inner-icon="mdi-magnify">
      </v-text-field>
      <v-spacer></v-spacer>
      <v-btn
        icon
        large
        class="d-sm-none"
      >
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon x-large>mdi-account-circle</v-icon>
      </v-btn>
    </v-app-bar>
  <div class="drawer" v-if="open">
        <slider-bar />
  </div>
  </div>
</template>

<script>
import slider from './Slider.vue'
export default {
  components: {
    'slider-bar': slider
  },
  data() {
    return{
      open: false
    }
  },
  methods: {
    clickOpen: function(){
      if(this.open === false)
      {
        return this.open=true
      }
      else{
        return this.open=false
      } 
    }
  }
}
</script>

<style scoped>
.search-bar{
  max-width: 550px;
  max-height: 35px;
}
</style>