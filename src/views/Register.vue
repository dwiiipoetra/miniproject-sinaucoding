<script>
import axios from "axios";

export default {
    data() {
        return {
            username: "",
            profileName: "",
            password: "",
            isSuccess: false
        }
    },
    methods: {
        onRegisterUser() {
            axios.post("auth/register",
                {
                    username: this.username,
                    profileName: this.profileName,
                    password: this.password
                }).then(response => {
                    this.isSuccess = true
                    // console.log(response.data)
                })
        },
    }
}
</script>

<template>
    <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col col-xl-10">
                <div class="card" style="border-radius:1rem;">
                    <div class=" row g-0">
                        <div class="col-md-6 col-lg-5 d-none d-md-block">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                                alt="login form" class="img-fluid" style="border-radius: 1rem 0 0 1rem;" />
                        </div>
                        <div class="col-md-6 col-lg-7 d-flex align-items-center">
                            <div class="card-body p-4 p-lg-5 text-black">
                                <div class="alert alert-success" v-if="isSuccess">Register User Succesfully</div>
                                <form @submit.prevent="onRegisterUser">

                                    <div class="d-flex align-items-center mb-3">
                                        <img src="../assets/logo.png" alt="logo" />
                                        <!-- <div class=" fs-2"><i class="bi bi-boxes" style="color: #ff6219;"></i></div> -->
                                        <!-- <span class=" h3 fw-bold mb-0">&nbsp;Marketplace</span> -->
                                    </div>

                                    <h5 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px;">Sign up your account
                                    </h5>

                                    <div class="form-outline mb-4">
                                        <label class="form-label" for="username">Username</label>
                                        <input v-model="username" type="text" id="username" class="form-control border"
                                            required />
                                    </div>

                                    <div class="form-outline mb-4">
                                        <label class="form-label" for="profileName">Profile Name</label>
                                        <input v-model="profileName" type="text" id="profileName"
                                            class="form-control border" required />
                                    </div>

                                    <div class="form-outline mb-4">
                                        <label class="form-label" for="password">Password</label>
                                        <input v-model="password" type="password" id="password"
                                            class="form-control border" required />
                                    </div>

                                    <div class="pt-1 mb-4">
                                        <button class="btn btn-dark btn-lg btn-block" type="submit">Register</button>
                                    </div>

                                    <a class="small text-muted" href="#">Forgot password?</a>
                                    <p class="mb-5 pb-lg-2" style="color: #393f81;">Already have an account?
                                        <router-link to="/login" style="color: #393f81;">Login here</router-link>
                                    </p>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>

</style>
