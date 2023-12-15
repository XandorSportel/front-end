<script setup>
    import Header from '@/components/Header.vue';
    import Footer from '@/components/Footer.vue';
    import Navbar from '@/components/Navbar.vue';
    import SidebarLeft from '@/components/SidebarLeft.vue';
    import SidebarRight from '@/components/SidebarRight.vue';
</script>

<template>
    <Header />
    <Navbar />
    <!-- ! Desktop Version -->
    <div v-if="!isMobile" class="container-fluid p-0">
        <div class="container-fluid d-flex p-0">
            <div class="w-15" style="height: 100vh;">
                <SidebarLeft />
            </div>
            <div class="w-70" style="height: 100vh;">
                <div class="container-fluid p-2">
                    <RouterView />
                </div>
            </div>
            <div class="w-15" style="height: 100vh;">
                <SidebarRight />
            </div>
        </div>
        <Footer style="position: fixed; bottom: 0;"></Footer>
    </div>

    <!-- ! Mobile Version -->
    <div v-if="isMobile" class="container-fluid p-0">
        <RouterView />
        <Footer style="font-size: 80%;"></Footer>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                isMobile: false,
            };
        }, 
        mounted() {
            this.isMobile = window.innerWidth < 768;
            window.addEventListener('resize', this.handleResize);
            console.log(this.isMobile);
            console.log(window.innerWidth);
        },
        methods: {
            handleResize() {
                this.isMobile = window.innerWidth < 768;
            }
        },
        beforeDestroy() {
            window.removeEventListener('resize', this.handleResize);
        }
    }

</script>