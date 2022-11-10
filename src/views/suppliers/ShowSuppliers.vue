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
            showSuppliers: []
        }
    }, mounted() {
        this.getshowSuppliers()
    }, methods: {
        getshowSuppliers() {
            axios.get("supplier/find-all", { params: { offset: 0, limit: 20 } })
                .then(response => this.formatshowSuppliers(response.data))
                .catch(err => console.log(err.response))
        },
        formatshowSuppliers(suppliers) {
            for (let key in suppliers) {
                this.showSuppliers.push({ ...suppliers[key], id: key })
            }
            // console.log(this.showSuppliers)
        },
        iterateIndex: function (index) {
            return Number(index) + 1
        },
        // deleteSupplier() {
        //     axios.delete("supplier/delete/id", {})
        //         .then(response => console.log(response.data))
        //         .catch(err => console.log(err.response))
        // }
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
                    <h2 class="main-title">Suppliers</h2>

                    <div class="row">
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
                                        <tr v-for="(supplier, i) in showSuppliers[0]" :key="supplier.id">
                                            <td>{{ iterateIndex(i) }}</td>
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
                                                            <!-- <router-link :to="`/delete-supplier/${product.id}`">Delete
                                                            </router-link> -->
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