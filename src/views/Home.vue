<script>
import Sidebar from "../components/Sidebar.vue"
import MainNav from "../components/MainNav.vue"
import Dashboard from "../views/Dashboard.vue";
import Footer from "../components/Footer.vue";

export default {
    components: {
        Sidebar, MainNav, Footer, Dashboard
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
            <Dashboard />
            <!-- ! Footer -->
            <Footer />
        </div>
    </div>
</template>