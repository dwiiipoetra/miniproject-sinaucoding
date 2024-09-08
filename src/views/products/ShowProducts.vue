<script>
import Sidebar from "../../components/Sidebar.vue"
import MainNav from "../../components/MainNav.vue"
import Footer from "../../components/Footer.vue";
import axios from "axios";
import productsData from "../../data.json"

export default {
    components: {
        Sidebar, MainNav, Footer
    },
    data() {
        return {
            showProducts: [],
            isSuccess: false
        }
    }, mounted() {
        this.getShowProducts()
    }, methods: {
        async getShowProducts() {
            // await axios.get("barang/find-all", { params: { offset: 0, limit: 10 } })
            //     .then(response => {
            //         this.showProducts = response.data.data
                    this.showProducts = productsData
            //         console.log(response.data)
            //     })
            //     .catch(err => console.log(err.response))
        },
        deleteProduct(id) {
            axios.delete(`barang/delete/${id}`)
                .then(response => {
                    this.isSuccess = true
                    this.$router.push('/products')
                    this.getShowProducts()
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
                        <h2 class="main-title" style="margin-bottom:0">Products Data</h2>
                        <input type="text" class="form-control" placeholder="Search Products ..." style="width:400px;">
                    </div>

                    <div class="row">
                        <div class="col-lg-3">
                            <div class="alert alert-success" v-if="isSuccess">Product Succesfully Deleted</div>
                        </div>
                        <div class="col-lg-12">
                            <div class="users-table table-wrapper">
                                <table class="posts-table">
                                    <thead>
                                        <tr class="users-table-info">
                                            <!-- <th>
                                                <label class="users-table__checkbox ms-20">
                                                    <input type="checkbox" class="check-all">Thumbnail
                                                </label>
                                            </th> -->
                                            <th>No</th>
                                            <th>Product Name</th>
                                            <th>Stock</th>
                                            <th>Price</th>
                                            <th>Supplier Name</th>
                                            <th>Supplier Address</th>
                                            <th>Supplier Phone</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(product, i) in showProducts" :key="product.id">
                                            <td>{{ i += 1 }}

                                                <!-- <label class="users-table__checkbox">
                                                    <input type="checkbox" class="check">
                                                    <div class="categories-table-img">
                                                        <picture>
                                                            <source srcset="../../assets/img/categories/01.webp"
                                                                type="image/webp"><img
                                                                src="../../assets/img/categories/01.jpg" alt="category">
                                                        </picture>
                                                    </div>
                                                </label> -->

                                                <!-- <div class="pages-table-img">
                                                    <picture>
                                                        <source srcset="../../assets/img/avatar/avatar-face-04.webp"
                                                            type="image/webp"><img
                                                            src="../../assets/img/avatar/avatar-face-04.png"
                                                            alt="User Name">
                                                    </picture>
                                                    Jenny Wilson
                                                </div> -->

                                                <!-- <span class="badge-pending">Pending</span> -->
                                            </td>
                                            <td>{{ product.namaBarang }}</td>
                                            <td>{{ product.stok }} pcs</td>
                                            <td>{{ product.harga }}</td>
                                            <!-- <td>{{ product.supplier.namaSupplier }}</td>
                                            <td>{{ product.supplier.alamat }}</td>
                                            <td>{{ product.supplier.noTelp }}</td> -->
                                            <td>{{ product.namaSupplier }}</td>
                                            <td>{{ product.alamatSupplier }}</td>
                                            <td>{{ product.telponSupplier }}</td>
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
                                                            <router-link :to="`/product/${product.id}`">Edit
                                                            </router-link>
                                                        </li>
                                                        <!-- <li><a href="##">Quick edit</a></li> -->
                                                        <li>
                                                            <a href="#" @click="deleteProduct(product.id)">Delete
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