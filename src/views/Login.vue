<script>
import axios from 'axios';
import setAuthHeader from "../utils/setAuthHeader"

export default {
  data() {
    return {
      username: "",
      password: "",
      isSuccess: false
    }
  }, methods: {
    onLoginUser() {
      axios.post("auth/login",
        {
          username: this.username,
          password: this.password
        }).then(response => {
          this.isSuccess = true
          localStorage.setItem("userToken", response.data.data.token);
          // set token as default header
          setAuthHeader(response.data.data.token);
          this.$router.push("/")
        }).catch((err) => console.log(err))
    }
  }
}

</script>

<template>
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-xl-10">
        <div class="card" style="border-radius:1rem;">
          <div class="row g-0">
            <div class="col-md-6 col-lg-5 d-none d-md-block">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                alt="login form" class="img-fluid" style="border-radius: 1rem 0 0 1rem;" />
            </div>
            <div class="col-md-6 col-lg-7 d-flex align-items-center">
              <div class="card-body p-4 p-lg-5 text-black">

                <div class="alert alert-success" v-if="isSuccess">Login User Succesfully</div>
                <form @submit.prevent="onLoginUser">

                  <div class="d-flex align-items-center mb-3">
                    <img src="../assets/logo.png" alt="logo" />
                  </div>

                  <h5 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px;">Sign into your account</h5>

                  <div class="form-outline mb-4">
                    <label class="form-label" for="username">Username</label>
                    <input v-model="username" type="text" id="username" class="form-control border" required />
                  </div>

                  <div class="form-outline mb-4">
                    <label class="form-label" for="password">Password</label>
                    <input v-model="password" type="password" id="password" class="form-control border" required />
                  </div>

                  <div class="pt-1 mb-4">
                    <button class="btn btn-dark btn-lg btn-block" type="submit">Login</button>
                  </div>

                  <a class="small text-muted" href="#">Forgot password?</a>
                  <p class="mb-5 pb-lg-2" style="color: #393f81;">Don't have an account?
                    <router-link to="/register" style="color: #393f81;">Register here</router-link>
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
