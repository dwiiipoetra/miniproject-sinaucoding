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
            showSuppliers: [],
            isSuccess: false
        }
    }, mounted() {
        this.getShowSuppliers()
    }, methods: {
        async getShowSuppliers() {
            await axios.get("supplier/find-all", { params: { offset: 0, limit: 20 } })
                .then(response => { this.showSuppliers = response.data.data })
                .catch(err => console.log(err.response))
        },
        deleteSupplier(id) {
            axios.delete(`supplier/delete/${id}`)
                .then(response => {
                    this.isSuccess = true
                    this.$router.push('/suppliers')
                    this.getShowSuppliers()
                    // console.log(response.data)
                })
                .catch(err => console.log(err.response))
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
                    <div class="d-flex justify-content-between align-items-center mb-4">
                        <h2 class="main-title" style="margin-bottom:0">Suppliers Data</h2>
                        <input type="text" class="form-control" placeholder="Search Suppliers ..." style="width:400px;">
                    </div>

                    <div class="row">
                        <div class="col-lg-3">
                            <div class="alert alert-success" v-if="isSuccess">Supplier Succesfully Deleted</div>
                        </div>
                        <div class="col-lg-12">
                            <div class="users-table table-wrapper">
                                <table class="posts-table">
                                    <thead>
                                        <tr class="users-table-info">
                                            <th>No</th>
                                            <th>Supplier Name</th>
                                            <th>Address</th>
                                            <th>Phone</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(supplier, i) in showSuppliers" :key="supplier.id">
                                            <td>{{ i += 1 }}</td>
                                            <td>{{ supplier.namaSupplier }}</td>
                                            <td>{{ supplier.alamat }}</td>
                                            <td>{{ supplier.noTelp }}</td>
                                            <td>
                                                <span class="p-relative">
                                                    <button class="dropdown-btn transparent-btn" type="button"
                                                        title="More info">
                                                        <div class="sr-only">More info</div>
                                                        <i data-feather="more-horizontal" aria-hidden="true"></i>
                                                    </button>
                                                    <!-- <ul class="users-item-dropdown dropdown"> -->
                                                    <ul>
                                                        <li>
                                                            <router-link :to="`/supplier/${supplier.id}`">Edit
                                                            </router-link>
                                                        </li>
                                                        <!-- <li><a href="##">Quick edit</a></li> -->
                                                        <li>
                                                            <a href="#" @click="deleteSupplier(supplier.id)">Delete
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <!-- ! Footer -->
            <Footer />
        </div>
    </div>
</template>