<template>
  <v-layout column wrap class="my-5" align-center>
    <v-flex xs12 sm4 class="my-3">
      <div class="text-xs-center">
        <h2 class="headline">The most popular leagues all in one platform</h2>
        <span class="subheading">
          Powerful yet flexible API
        </span>
      </div>
    </v-flex>
    <v-flex xs12>
      <v-container grid-list-xl>
        <v-layout row wrap align-center>
          <v-flex xs12 md4>
            <v-card class="elevation-0 transparent">
              <v-card-text class="text-xs-center">
                <v-icon x-large class="blue--text text--lighten-2">color_lens</v-icon>
              </v-card-text>
              <v-card-title primary-title class="layout justify-center">
                <div class="headline text-xs-center">Soccer</div>
              </v-card-title>
              <v-card-text>
                Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. Pellentesque habitant morbi tristique senectus
                et netus et malesuada fames ac turpis egestas. Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum
                tincidunt. Suspendisse potenti.
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 md4>
            <v-card class="elevation-0 transparent">
              <v-card-text class="text-xs-center">
                <v-icon x-large class="blue--text text--lighten-2">flash_on</v-icon>
              </v-card-text>
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">Cricket</div>
              </v-card-title>
              <v-card-text>
                Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. Pellentesque habitant morbi tristique senectus
                et netus et malesuada fames ac turpis egestas. Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum
                tincidunt. Suspendisse potenti.
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 md4>
            <v-card class="elevation-0 transparent">
              <v-card-text class="text-xs-center">
                <v-icon x-large class="blue--text text--lighten-2">build</v-icon>
              </v-card-text>
              <v-card-title primary-title class="layout justify-center">
                <div class="headline text-xs-center">Basketball</div>
              </v-card-title>
              <v-card-text>
                Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. Pellentesque habitant morbi tristique senectus
                et netus et malesuada fames ac turpis egestas. Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum
                tincidunt. Suspendisse potenti.
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
  </v-layout>
</template>
<script>
  export default {
    name: 'Bookies'
  }
</script>
