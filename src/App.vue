<template>
  <v-app>
    <v-navigation-drawer fixed
      dark
      temporary
      v-model = "sideNav">
  <v-list>
    <v-list-item-group>
      <v-list-item 
        v-for="item in menuItems"
        :key="item.title"
        router :to="item.link"
        text>
        <v-list-item-content>
          <v-list-item-title ><v-icon left>{{item.icon}}</v-icon>{{item.title}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</v-navigation-drawer>
    <v-app-bar app dark color="primary">
      <v-app-bar-nav-icon 
      @click="sideNav = !sideNav"
      class="hidden-sm-and-up">
    </v-app-bar-nav-icon >

      <v-toolbar-title class="headline">
          <router-link to = "/" tag ="span" style = "cursor:pointer">{{title}}</router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>    
      
      <v-btn
        v-for="item in menuItems"
        :key="item.title"
        router :to="item.link"
        text
        class="hidden-xs-only">
        <v-icon left>{{item.icon}}</v-icon>
        {{item.title}}</v-btn>
        
        <v-btn 
        v-if="userIsAuthenticated" 
        text 
        class = "hidden-xs-only"
        @click ="onLogout"
        router to ="/">
        Logout
        </v-btn>
    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    sideNav: false,
    title: "Time Card App",
    userIsAuthenticated: false,  // TODO: Manage with Vuex store after configuring firebase
  }),

  computed: { 
    menuItems: () => 
          [{ icon: 'mdi-home', title: 'Home', link: '/'},
          { icon: 'mdi-account', title: 'Register', link: '/register'},
          { icon: 'mdi-lock-open', title:'Login', link:'/login'}]
  }
        
};
</script>
