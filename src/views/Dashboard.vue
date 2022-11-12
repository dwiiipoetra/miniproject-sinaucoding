<script>
import Sidebar from "../components/Sidebar.vue"
import MainNav from "../components/MainNav.vue"
import Footer from "../components/Footer.vue";
import axios from "axios";

export default {
    components: {
        Sidebar, MainNav, Footer
    },
    data() {
        return {
            showProducts: [],
            showSuppliers: []
        }
    }, mounted() {
        this.getShowProducts()
        this.getshowSuppliers()
    }, methods: {
        async getShowProducts() {
            await axios.get("barang/find-all", { params: { offset: 0, limit: 10 } })
                .then(response => { this.showProducts = response.data.data })
                .catch(err => console.log(err.response))
        },
        async getshowSuppliers() {
            await axios.get("supplier/find-all", { params: { offset: 0, limit: 10 } })
                .then(response => { this.showSuppliers = response.data.data })
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
                    <h2 class="main-title">Dashboard</h2>

                    <div class="row mb-5">
                        <div class="col-lg-12">
                            <p class="lead fw-normal ms-1">List Products</p>
                            <div class="users-table table-wrapper">
                                <table class="posts-table">
                                    <thead>
                                        <tr class="users-table-info">
                                            <th>No</th>
                                            <th>Product Name</th>
                                            <th>Stock</th>
                                            <th>Price</th>
                                            <th>Supplier Name</th>
                                            <th>Supplier Address</th>
                                            <th>Supplier Phone</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(product, i) in showProducts" :key="product.id">
                                            <td>{{ i += 1 }}
                                            </td>
                                            <td>{{ product.namaBarang }}</td>
                                            <td>{{ product.stok }} pcs</td>
                                            <td>{{ product.harga }}</td>
                                            <td>{{ product.supplier.namaSupplier }}</td>
                                            <td> {{ product.supplier.alamat }}</td>
                                            <td> {{ product.supplier.noTelp }}</td>
                                            <td>
                                                <span class="p-relative">
                                                    <button class="dropdown-btn transparent-btn" type="button"
                                                        title="More info">
                                                        <div class="sr-only">More info</div>
                                                        <i data-feather="more-horizontal" aria-hidden="true"></i>
                                                    </button>
                                                    <!-- <ul class="users-item-dropdown dropdown"> -->
                                                    <ul>
                                                        <!-- <li><a href="##">Edit</a></li> -->
                                                        <!-- <li><a href="##">Quick edit</a></li> -->
                                                        <!-- <li><a href="##">Delete</a></li> -->
                                                    </ul>
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-12">
                            <p class="lead fw-normal ms-1">List Suppliers</p>
                            <div class="users-table table-wrapper">
                                <table class="posts-table">
                                    <thead>
                                        <tr class="users-table-info">
                                            <th>No</th>
                                            <th>Supplier Name</th>
                                            <th>Supplier Address</th>
                                            <th>Supplier Phone</th>
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