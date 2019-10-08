<template>
    <v-container>
        <v-row class="ma-3">
            <v-flex xs12 sm6 offset-sm3 >
                <v-card>
                    <v-card-text class="text-xs-center">
                        <v-container fluid>
                            <h2 class="mb-6">Sign In To Your Account:</h2>
                            <form >
                                <v-layout row>
                                    <v-flex xs12>
                                        <v-text-field
                                        name ="email"
                                        label ="Email"
                                        id="email"
                                        v-model ="email"
                                        type="email"
                                        :rules="emailRules"
                                        autofocus                                        
                                        filled>
                                        </v-text-field>
                                    </v-flex>
                                </v-layout>
                                <v-layout row>
                                    <v-flex xs12>
                                        <v-text-field
                                        name ="password"
                                        label ="Password"
                                        id="password"
                                        v-model ="password"
                                        type="password"
                                        :rules="passwordRules"
                                        filled>
                                        </v-text-field>
                                    </v-flex>
                                </v-layout>
                            </form>
                        </v-container>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-row>
    </v-container>
</template>


<script>
export default {
    data () {
        return {
            email: '',
            password: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+/.test(v) || 'E-mail must be valid',
            ],
            passwordRules: [
                v => !!v || 'Password is required',
            v => v.length >= 8 || 'Password must be at least 8 characters',],
        }
    },
}
</script>
