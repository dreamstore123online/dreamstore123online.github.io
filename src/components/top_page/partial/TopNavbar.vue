<template>
    <header
        id="navbar"
        class="fixed top-0 left-0 w-full z-50 transition-colors duration-100"
    >
        <nav class="container mx-auto p-2 flex justify-between items-center navbar-bar">
            <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div class="relative flex items-center justify-between h-16">
                <!-- Left menu -->
                <div class="flex items-center">
                    <!-- Menu items -->
                    <div class="hidden md:flex space-x-4 ml-6">
                        <a href="#hero" class="text-gray-400 dark:text-gray-200 px-3 py-2 rounded-md text-sm font-medium">Hero</a>
                        <a href="#services" class="text-gray-400 dark:text-gray-200 px-3 py-2 rounded-md text-sm font-medium">Services</a>
                        <a href="#contact" class="text-gray-400 dark:text-gray-200 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                    </div>
                </div>
            </div>
            </div>
        </nav>
    </header>
</template>

<script setup>
    import { onMounted, onUnmounted } from 'vue';
    const handleScroll = () => {
        const navbar = document.getElementById('navbar');
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add('bg-white', 'shadow-md', 'text-black');
                navbar.classList.remove('bg-transparent', 'text-white');
            } else {
                navbar.classList.add('bg-transparent', 'text-white');
                navbar.classList.remove('bg-white', 'shadow-md', 'text-black');
            }
        }
    }

    onMounted(() => {
        window.addEventListener('scroll', handleScroll);
    })

    onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll);
    })
</script>

<style scoped>
    /* Khởi tạo navbar với nền trong suốt */
    .navbar-bar {
        background-color: transparent;
        backdrop-filter: blur(10px);
    }
</style>
