<template>
    <div class="container-fluid text-center bg-dark text-white p-0">
        <ul class="navbar-nav d-flex flex-row justify-content-center pt-2 pb-1">
            <li class="nav-item">
                <router-link to="/home" class="nav-link rounded mx-1 px-3">Home</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/katten" class="nav-link rounded mx-1 px-3">Katten</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/honden" class="nav-link rounded mx-1 px-3">Honden</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/konijnen" class="nav-link rounded mx-1 px-3">Konijnen</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/seo" class="nav-link rounded mx-1 px-3">SEO</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/sitemap" class="nav-link rounded mx-1 px-3">Sitemap</router-link>
            </li>
        </ul>
        <p class="m-0 pt-1 pb-2">&copy; 2023 - Xandor Sportel</p>
    </div>
</template>