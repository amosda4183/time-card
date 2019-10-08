<template> 
<v-container
    class="text-xs-center secondary--text" 
    fill-height>

    <v-layout
    justify-center
    align-center>
      <v-flex class="text-center">
      <h4 class="display-3 mt-5 pt-5">{{welcome}}</h4>
      <span class="subheading">{{description}}</span>
      <v-divider class="my-3 mx-2" color="secondary"></v-divider>    
      
      <div v-if="userIsAuthenticated">
        <v-btn 
        color = "primary"
        router to="/profile" 
        rounded large class="my-3" dark>
        View Profile 
        </v-btn>
        <v-btn 
          color = "primary"
          router to="/newDay"
          rounded large class="mx-3" dark>
          New Day 
        </v-btn>
        </div>

        <div v-else>
        <v-btn 
        color = "primary"
        router to="/register" 
        rounded large class="my-3" dark>
        Register 
        </v-btn>
        <v-btn 
          color = "primary"
          router to="/login"
          rounded large class="mx-3" dark>
          Login
        </v-btn>
        </div>

    </v-flex>
    </v-layout>            
  </v-container>
</template>

<script>
export default {
  data: () => ({
    welcome:'JKC Couriers Time Card',
    description:'Hit a button below to get started!',
    userIsAuthenticated: false, //Manage with Vuex store later - computed properties
    }),
};
</script>