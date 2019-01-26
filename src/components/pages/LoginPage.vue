<template>
    <div class="">
        <div class="row">
            <div class="col-md-8 offset-2">
                <div class="row">
                    <div class="col-md-5 m-0 p-0 background-color">
                        <img class="image" src="../../assets/login_cover4.jpg"/>
                    </div>
                    <div class="col-md-7 m-0 p-0 background-color">
                        <div class="row align-items-center">
                            <div class="col">
                                <div class="row justify-content-center">
                                    <div class="col-auto mt-5 font-weight-bold h6 text-info">
                                        <router-link to="/" tag="div" class="cp">
                                            <span>HOME</span>
                                        </router-link>
                                    </div>
                                </div>
                                <div class="row justify-content-center">
                                    <div class="col-auto my-5 font-weight-bold">
                                        <span class="cp font-weight-bold"
                                              :class="[selectedTab == 'Login' ? 'text-info h1' : 'text-muted h6']"
                                              @click="selectTab('Login')"
                                              v-text="'Login'"></span>
                                        <span class="h6 font-weight-bold text-muted">/</span>
                                        <span class="cp font-weight-bold"
                                              :class="[selectedTab == 'Signup' ? 'text-info h1' : 'text-muted h6']"
                                              @click="selectTab('Signup')"
                                              v-text="'Signup'"></span>
                                    </div>
                                </div>
                                <div class="row justify-content-center">
                                    <div class="col-4 px-3 py-2 mb-2 input-background">
                                        <input class="input" placeholder="Username" v-model="usernameText"/>
                                    </div>
                                </div>
                                <div v-if="selectedTab == 'Signup'" class="row justify-content-center">
                                    <div class="col-4 px-3 py-2 mb-2 input-background">
                                        <input class="input" placeholder="Email" v-model="emailText"/>
                                    </div>
                                </div>
                                <div class="row justify-content-center">
                                    <div class="col-4 px-3 py-2 input-background">
                                        <input class="input" placeholder="Password" v-model="passwordText"/>
                                    </div>
                                </div>
                                <div v-if="selectedTab == 'Login'" class="row justify-content-center">
                                    <div class="col-auto px-3 py-2 mt-2 text-info forgot">
                                        <span class="cp">forgot password? click here.</span>
                                    </div>
                                </div>
                                <div class="row justify-content-center text-center">
                                    <div class="col-4 p-2 my-5 button-background cp" @click="postData()">
                                        <span class="h6 button">Login</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import RegisterService from "../../webservices/RegisterService";

    export default {
        name: 'LoginPage',

        components: {},

        data() {
            return {
                selectedTab: 'Login',
                usernameText: '',
                emailText: '',
                passwordText: '',
            }
        },

        methods: {
            getHomePageData: function () {
                axios.get("/api/test").then((response) => console.log(response.data))
            },

            selectTab: function (tab) {
                this.selectedTab = tab;
            },

            postData: function () {
                if (this.selectedTab == 'Login') {
                    new RegisterService().login(this.usernameText, this.passwordText).then((response) => {
                        if (response.hasOwnProperty('user')) {
                            localStorage.login = true;
                            localStorage.username = this.usernameText;
                            localStorage.password = this.passwordText;
                            this.$parent.onLogin()
                            this.$router.push({path: '/'})
                        } else {
                            alert(response.error)
                        }
                    });
                } else {
                    new RegisterService().signup(this.usernameText, this.emailText, this.passwordText).then((response) => {
                        if (response.hasOwnProperty('activationUrl')) {
                            alert("Please Confirm Your Signup By Clicking On This Link: " + response.activationUrl)
                            this.selectedTab = 'Login'
                        } else {
                            alert(response.error)
                        }
                    });
                }
            },

            updateData() {
                this.getHomePageData();
            },
        },

        created: function () {
            this.updateData();
        },

        watch: {
            '$route'() {
                this.updateData();
            }
        },
    }
</script>

<style>
    .background-color {
        background-color: #ffffff;
        -webkit-box-shadow: 0px 3px 28px -2px rgba(0, 0, 0, 0.23);
        -moz-box-shadow: 0px 3px 28px -2px rgba(0, 0, 0, 0.23);
        box-shadow: 0px 3px 28px -2px rgba(0, 0, 0, 0.23);
    }

    .input-background {
        background-color: #f1f1f1;
        border-radius: 50px;
    }

    .button-background {
        background-color: #2b7ef1;
        border-radius: 50px;
    }

    .button {
        color: white;
        text-align: center;
        font-size: 15px;
    }

    .input {
        background: #f1f1f1;
        border: #f1f1f1;
    }

    .forgot {
        font-size: 12px;
    }

    .image {
        height: 500px;
        width: 100%;
        object-fit: cover;
    }
</style>
