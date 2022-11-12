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
            suppliers: [],
            suppliersObject: [],
            selectedID: "",
            selectedSupplier: {},
            isSuccess: false,
        };
    },
    mounted() {
        axios.get("supplier/find-all", { params: { offset: 0, limit: 500 } }).then((response) => {
            let datas = response.data.data;
            // show v-select
            datas.forEach((item) => {
                this.suppliers.push({
                    label: item.namaSupplier,
                    code: item.id,
                });
            });
            // console.log(this.suppliers);
            // add to suppliersObject
            datas.forEach((dataSuppliers) => {
                this.suppliersObject.push({
                    id: dataSuppliers.id,
                    namaSupplier: dataSuppliers.namaSupplier,
                    alamat: dataSuppliers.alamat,
                    noTelp: dataSuppliers.noTelp,
                });
            });
            // console.log(this.suppliersObject);
        });
    },
    methods: {
        onAddProduct() {
            const objProduct = {
                harga: this.price,
                namaBarang: this.productName,
                stok: this.stock,
                supplier: this.selectedSupplier
            }
            // console.log(objProduct);
            axios.post(`barang/create`, objProduct).then(response => {
                this.isSuccess = true
                console.log(response.data)
            }).catch(error => {
                console.log(error)
            })
        },
    },
    watch: {
        selectedID(value) {
            let datas = this.suppliersObject;
            // get data object from selected id
            this.selectedSupplier = datas.find(data => data.id === value)
            // console.log(this.selectedSupplier)
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
                                    <div class="input-group mb-3">
                                        <span class="input-group-text">IDR</span>
                                        <input v-model="price" class="form-control" id="price" type="text"
                                            placeholder="Price" required />
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label" for="stock">Stock</label>
                                    <div class="input-group mb-3">
                                        <input v-model="stock" class="form-control" id="stock" type="text"
                                            placeholder="Stock" required />
                                        <span class="input-group-text">pcs</span>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Supplier</label>
                                    <v-select :options="suppliers" :reduce="(label) => label.code" label="label"
                                        v-model="selectedID"></v-select>
                                    <!-- <p>Data yang dipilih adalah {{ selectedID }}</p> -->
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