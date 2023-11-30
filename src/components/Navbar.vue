<template>
    <div class="container-fluid d-flex p-0">
        <div class="w-15 bg-dark"></div>
        <div class="w-70">
            <nav class="navbar navbar-expand-lg bg-dark">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar">
                        <i class="bi bi-list" style="color: white; font-size: 150%;"></i>
                    </button>
                    <div class="collapse navbar-collapse" id="navbar">
                        <ul class="navbar-nav">
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
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        <div class="w-15 bg-dark"></div>
    </div>
</template>