<template>
    <TopNavbar />
    <main>
        <div>
            <Hero/>
            <Features/>
            <About/>
            <Team/>
            <Services/>
            <Contact/>
        </div>
    </main>
</template>

<script setup>
    import TopNavbar from "./partial/TopNavbar.vue";
    import About from "./partial/About.vue";
    import Contact from "./partial/Contact.vue";
    import Features from "./partial/Features.vue";
    import Hero from "./partial/Hero.vue";
    import Services from "./partial/Services.vue";
    import Team from "./partial/Team.vue";
</script>

<style>
</style>
