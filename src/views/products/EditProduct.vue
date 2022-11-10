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
            newProductName: "",
            newPrice: "",
            newStock: "",
            newSupplier: "",
        }
    },
    methods: {
        onAddProducts() {
            axios.post(`barang/create`, {
                productName: this.productName,
                price: this.price,
                stock: this.stock,
                supplier: this.supplier
            })
        },
        getSuppliers() {
            axios.get("supplier/find-all", { params: { offset: 0, limit: 500 } })
                .then(response => console.log(response.data))
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
                    <h2 class="main-title">Edit Product</h2>

                    <div class="row">
                        <div class="col-lg-12 px-5 my-2">
                            <form id="productsForm" @submit.prevent="onAddProducts()">
                                <div class="mb-3">
                                    <label class="form-label" for="productName">Product Name</label>
                                    <input v-model="newProductName" class="form-control" id="productName" type="text"
                                        placeholder="Product Name" required />
                                </div>
                                <div class="mb-3">
                                    <label class="form-label" for="price">Price</label>
                                    <input v-model="newPrice" class="form-control" id="price" type="text"
                                        placeholder="Price" required />
                                </div>
                                <div class="mb-3">
                                    <label class="form-label" for="stock">Stock</label>
                                    <input v-model="newStock" class="form-control" id="stock" type="text"
                                        placeholder="Stock" required />
                                </div>
                                <div class="mb-3">
                                    <label class="form-label" for="supplier">Supplier</label>
                                    <input v-model="newSupplier" class="form-control" id="supplier" type="text"
                                        placeholder="Supplier" required />
                                </div>
                                <div class="d-grid">
                                    <button class="btn btn-primary btn-lg" id="submitButton" type="submit">Edit</button>
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