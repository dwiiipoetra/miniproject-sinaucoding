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
            productName: "",
            price: "",
            stock: "",
            isSuccess: false,
            suppliers: [],
            supplier: [],
            id: ""
        };
    },
    mounted() {
        axios.get("supplier/find-all", { params: { offset: 0, limit: 500 } }).then((response) => {
            let data = response.data.data;
            // show v-select
            data.forEach((item) => {
                this.suppliers.push({
                    label: item.namaSupplier,
                    code: item.id,
                });
            });
            // console.log(this.suppliers);
            // data.forEach((dataSupplier) => {
            //     this.supplier.push({
            //         id: dataSupplier.id,
            //         namaSupplier: dataSupplier.namaSupplier,
            //         alamat: dataSupplier.alamat,
            //         noTelp: dataSupplier.noTelp,
            //     });
            // });
        });
    },
    methods: {
        onAddProduct() {
            const objProduct = {
                namaBarang: this.productName,
                harga: this.price,
                stok: this.stock,
                supplier: this.supplier
            }
            console.log(objProduct);
            // axios.post(`barang/create`, {
            //     namaBarang: this.productName,
            //     harga: this.price,
            //     stok: this.stock,
            //     supplier: this.supplier
            // }).then(response => {
            //     this.isSuccess = true
            //     console.log(response.data)
            // }).catch(error => {
            //     console.log(error)
            // })
        },
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
                    <h2 class="main-title">Add Product</h2>

                    <div class="row">
                        <div class="col-lg-12 px-5 my-2">
                            <div class="alert alert-success" v-if="isSuccess">Product Succesfully Added</div>
                            <form id="productsForm" @submit.prevent="onAddProduct">
                                <div class="mb-3">
                                    <label class="form-label" for="productName">Product Name</label>
                                    <input v-model="productName" class="form-control" id="productName" type="text"
                                        placeholder="Product Name" required />
                                </div>
                                <div class="mb-3">
                                    <label class="form-label" for="price">Price</label>
                                    <input v-model="price" class="form-control" id="price" type="text"
                                        placeholder="Price" required />
                                </div>
                                <div class="mb-3">
                                    <label class="form-label" for="stock">Stock</label>
                                    <input v-model="stock" class="form-control" id="stock" type="text"
                                        placeholder="Stock" required />
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Supplier</label>
                                    <v-select :options="suppliers" :reduce="(label) => label.code" label="label"
                                        v-model="id"></v-select>
                                    <p>data yang dipilih adalah {{ id }}</p>
                                </div>
                                <div class="d-grid">
                                    <button class="btn btn-primary btn-lg" id="submitButton"
                                        type="submit">Submit</button>
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