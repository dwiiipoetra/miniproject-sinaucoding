<script>
export default {

}
</script>

<template>
    <aside class="sidebar">
        <div class="sidebar-start">
            <div class="sidebar-head">
                <a href="/" class="logo-wrapper" title="Home">
                    <span class="sr-only">Home</span>
                    <span class="icon logo" aria-hidden="true"></span>
                    <div class="logo-text">
                        <span class="logo-title">Elegant</span>
                        <span class="logo-subtitle">Dashboard</span>
                    </div>

                </a>
                <button class="sidebar-toggle transparent-btn" title="Menu" type="button">
                    <span class="sr-only">Toggle menu</span>
                    <span class="icon menu-toggle" aria-hidden="true"></span>
                </button>
            </div>
            <div class="sidebar-body">
                <ul class="sidebar-body-menu">
                    <li>
                        <a class="active" href="/"><span class="icon home" aria-hidden="true"></span>Dashboard</a>
                    </li>
                    <li>
                        <a class="show-cat-btn" href="##">
                            <span class="icon document" aria-hidden="true"></span>Products
                            <span class="category__btn transparent-btn" title="Open list">
                                <span class="sr-only">Open list</span>
                                <span class="icon arrow-down" aria-hidden="true"></span>
                            </span>
                        </a>
                        <ul class="cat-sub-menu">
                            <li>
                                <router-link to="/products">Show Products</router-link>
                            </li>
                            <li>
                                <router-link to="/add-product">Add Product</router-link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a class="show-cat-btn" href="##">
                            <span class="icon image" aria-hidden="true"></span>Suppliers
                            <span class="category__btn transparent-btn" title="Open list">
                                <span class="sr-only">Open list</span>
                                <span class="icon arrow-down" aria-hidden="true"></span>
                            </span>
                        </a>
                        <ul class="cat-sub-menu">
                            <li>
                                <router-link to="/suppliers">Show Suppliers</router-link>
                            </li>
                            <li>
                                <router-link to="/add-supplier">Add Supplier</router-link>
                            </li>
                        </ul>
                    </li>
                    <!-- class="icon folder" -->
                    <!-- class="icon image" -->
                    <!-- class="icon paper" -->
                    <!-- class="icon category" -->
                    <!-- <li>
              <a href="comments.html">
                <span class="icon message" aria-hidden="true"></span>
                Comments
              </a>
              <span class="msg-counter">7</span>
            </li> -->
                </ul>
                <span class="system-menu__title">system</span>
                <ul class="sidebar-body-menu">
                    <li>
                        <a class="show-cat-btn" href="##">
                            <span class="icon user-3" aria-hidden="true"></span>Users
                            <span class="category__btn transparent-btn" title="Open list">
                                <span class="sr-only">Open list</span>
                                <span class="icon arrow-down" aria-hidden="true"></span>
                            </span>
                        </a>
                        <ul class="cat-sub-menu">
                            <li>
                                <a href="users-01.html">Online (10)</a>
                            </li>
                        </ul>
                    </li>
                    <!-- <li>
              <a href="appearance.html"><span class="icon edit" aria-hidden="true"></span>Appearance</a>
            </li> -->
                    <!-- <li>
              <a href="##"><span class="icon setting" aria-hidden="true"></span>Settings</a>
            </li> -->
                </ul>
            </div>
        </div>
        <div class="sidebar-footer">
            <a href="##" class="sidebar-user">
                <span class="sidebar-user-img">
                    <picture>
                        <source srcset="../assets/elegant/img/avatar/avatar-illustrated-02.webp" type="image/webp"><img
                            src="../assets/elegant/img/avatar/avatar-illustrated-02.png" alt="User name">
                    </picture>
                </span>
                <div class="sidebar-user-info">
                    <span class="sidebar-user__title">Dwi Putra</span>
                    <span class="sidebar-user__subtitle">Admin</span>
                </div>
            </a>
        </div>
    </aside>
</template>
