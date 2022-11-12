<script>
import Sidebar from "../../components/Sidebar.vue"
import MainNav from "../../components/MainNav.vue"
import Footer from "../../components/Footer.vue";
import axios from "axios";

export default {
    components: {
        Sidebar, MainNav, Footer
    },
    data() {
        return {
            id: "",
            newSupplierName: "",
            newAddress: "",
            newPhone: "",
            isSuccess: false
        }
    }, created() {
        this.id = this.$route.params.id
        axios.get(`supplier/find-by-id/${this.id}`).then(response => {
            // console.log(response.data.data.namaSupplier)
            this.newSupplierName = response.data.data.namaSupplier;
            this.newAddress = response.data.data.alamat;
            this.newPhone = response.data.data.noTelp;
        })
    }, methods: {
        onEditSupplier() {
            this.id = this.$route.params.id
            axios.put(`supplier/update/${this.id}`, {
                namaSupplier: this.newSupplierName,
                alamat: this.newAddress,
                noTelp: this.newPhone,
            }).then(response => {
                this.isSuccess = true
                this.$router.push("/suppliers")
                // console.log(response.data)
            }).catch(error => {
                console.log(error)
            })
        }
    }
}
</script>

<template>
    <div class="layer"></div>
    <!-- ! Body -->
    <a class="skip-link sr-only" href="#skip-target">Skip to content</a>
    <div class="page-flex">
        <!-- ! Sidebar -->
        <Sidebar />
        <div class="main-wrapper">
            <!-- ! Main nav -->
            <MainNav />
            <!-- ! Main -->
            <main class="main users chart-page" id="skip-target">
                <div class="container">
                    <h2 class="main-title">Edit Supplier</h2>

                    <div class="row">
                        <div class="col-lg-12 px-5 my-2">
                            <div class="alert alert-success" v-if="isSuccess">Supplier Succesfully Updated</div>
                            <form id="suppliersForm" @submit.prevent="onEditSupplier">
                                <div class="mb-3">
                                    <label class="form-label" for="supplierName">Supplier Name</label>
                                    <input v-model="newSupplierName" class="form-control" id="supplierName" type="text"
                                        placeholder="Supplier Name" required />

                                </div>
                                <div class="mb-3">
                                    <label class="form-label" for="address">Address</label>
                                    <input v-model="newAddress" class="form-control" id="address" type="text"
                                        placeholder="Address" required />

                                </div>
                                <div class="mb-3">
                                    <label class="form-label" for="phone">Phone</label>
                                    <input v-model="newPhone" class="form-control" id="phone" type="text"
                                        placeholder="Phone" required />
                                </div>
                                <div class="d-grid">
                                    <button class="btn btn-primary btn-lg" id="submitButton" type="submit"
                                        @click="onEditSupplier">Edit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
            <!-- ! Footer -->
            <Footer />
        </div>
    </div>
</template>