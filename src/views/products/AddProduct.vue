<script>
import Sidebar from "../../components/Sidebar.vue"
import MainNav from "../../components/MainNav.vue"
import Footer from "../../components/Footer.vue";

export default {
    components: {
        Sidebar, MainNav, Footer
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
                            <form id="contactForm">
                                <div class="mb-3">
                                    <label class="form-label" for="productName">Product Name</label>
                                    <input class="form-control" id="productName" type="text" placeholder="Product Name"
                                        required />
                                </div>
                                <div class="mb-3">
                                    <label class="form-label" for="price">Price</label>
                                    <input class="form-control" id="price" type="text" placeholder="Price" required />
                                </div>
                                <div class="mb-3">
                                    <label class="form-label" for="stock">Stock</label>
                                    <input class="form-control" id="stock" type="text" placeholder="Stock" required />
                                </div>
                                <div class="mb-3">
                                    <label class="form-label" for="supplier">Supplier</label>
                                    <select class="form-select" id="supplier" aria-label="Supplier">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
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