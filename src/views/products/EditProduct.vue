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
            newProductName: "",
            newPrice: "",
            newStock: "",
            suppliers: [],
            suppliersObject: [],
            selectedID: "",
            selectedSupplier: {},
            isSuccess: false,
        };
    },
    created() {
        this.id = this.$route.params.id
        axios.get(`barang/find-by-id/${this.id}`).then(response => {
            // console.log(response.data.data.supplier)
            this.newProductName = response.data.data.namaBarang;
            this.newPrice = response.data.data.harga;
            this.newStock = response.data.data.stok;
        })
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
        onEditProduct() {
            const objProduct = {
                harga: this.newPrice,
                id: this.id,
                namaBarang: this.newProductName,
                stok: this.newStock,
                supplier: this.selectedSupplier
            }
            // console.log(objProduct);
            this.id = this.$route.params.id
            axios.put(`barang/update/${this.id}`, objProduct).then(response => {
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
                    <h2 class="main-title">Edit Product</h2>

                    <div class="row">
                        <div class="col-lg-12 px-5 my-2">
                            <div class="alert alert-success" v-if="isSuccess">Product Succesfully Updated</div>
                            <form id="productsForm" @submit.prevent="onEditProduct">
                                <div class="mb-3">
                                    <label class="form-label" for="productName">Product Name</label>
                                    <input v-model="newProductName" class="form-control" id="productName" type="text"
                                        placeholder="Product Name" required />
                                </div>
                                <div class="mb-3">
                                    <label class="form-label" for="price">Price</label>
                                    <div class="input-group mb-3">
                                        <span class="input-group-text">IDR</span>
                                        <input v-model="newPrice" class="form-control" id="price" type="text"
                                            placeholder="Price" required />
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label" for="stock">Stock</label>
                                    <div class="input-group mb-3">
                                        <input v-model="newStock" class="form-control" id="stock" type="text"
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