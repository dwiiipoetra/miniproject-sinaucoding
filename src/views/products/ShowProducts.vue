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
                    <h2 class="main-title">Products</h2>

                    <div class="row">
                        <div class="col-lg-12">
                            <div class="users-table table-wrapper">
                                <table class="posts-table">
                                    <thead>
                                        <tr class="users-table-info">
                                            <th>
                                                <label class="users-table__checkbox ms-20">
                                                    <input type="checkbox" class="check-all">Thumbnail
                                                </label>
                                            </th>
                                            <th>Title</th>
                                            <th>Author</th>
                                            <th>Status</th>
                                            <th>Date</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <label class="users-table__checkbox">
                                                    <input type="checkbox" class="check">
                                                    <div class="categories-table-img">
                                                        <picture>
                                                            <source srcset="../../assets/img/categories/01.webp"
                                                                type="image/webp"><img
                                                                src="../../assets/img/categories/01.jpg" alt="category">
                                                        </picture>
                                                    </div>
                                                </label>
                                            </td>
                                            <td>
                                                Starting your traveling blog with Vasco
                                            </td>
                                            <td>
                                                <div class="pages-table-img">
                                                    <picture>
                                                        <source srcset="../../assets/img/avatar/avatar-face-04.webp"
                                                            type="image/webp"><img
                                                            src="../../assets/img/avatar/avatar-face-04.png"
                                                            alt="User Name">
                                                    </picture>
                                                    Jenny Wilson
                                                </div>
                                            </td>
                                            <td><span class="badge-pending">Pending</span></td>
                                            <td>17.04.2021</td>
                                            <td>
                                                <span class="p-relative">
                                                    <button class="dropdown-btn transparent-btn" type="button"
                                                        title="More info">
                                                        <div class="sr-only">More info</div>
                                                        <i data-feather="more-horizontal" aria-hidden="true"></i>
                                                    </button>
                                                    <!-- <ul class="users-item-dropdown dropdown"> -->
                                                    <ul>
                                                        <li><a href="##">Edit</a></li>
                                                        <!-- <li><a href="##">Quick edit</a></li> -->
                                                        <li><a href="##">Trash</a></li>
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