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
                    <h2 class="main-title">Add Supplier</h2>

                    <div class="row">
                        <div class="col-lg-12 px-5 my-2">
                            <form id="contactForm">
                                <div class="mb-3">
                                    <label class="form-label" for="supplierName">Supplier Name</label>
                                    <input class="form-control" id="supplierName" type="text"
                                        placeholder="Supplier Name" required />

                                </div>
                                <div class="mb-3">
                                    <label class="form-label" for="address">Address</label>
                                    <input class="form-control" id="address" type="text" placeholder="Address"
                                        required />

                                </div>
                                <div class="mb-3">
                                    <label class="form-label" for="phone">Phone</label>
                                    <input class="form-control" id="phone" type="text" placeholder="Phone" required />
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