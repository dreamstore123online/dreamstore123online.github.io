<template>
    <div id="hero" class="relative pt-16 pb-32 flex content-center items-center justify-center"
        style="min-height: 75vh;">
        <div
            class="absolute top-0 w-full h-full bg-center bg-cover"
            style="background-image: url(&quot;https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1267&amp;q=80&quot;);"
        >
            <span id="blackOverlay" class="w-full h-full absolute opacity-75 bg-black"></span>
        </div>
        <div class="container relative mx-auto">
            <div class="items-center flex flex-wrap">
                <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                    <div class="pr-12">
                        <h1 class="text-white font-semibold text-5xl">Your story starts with us.</h1>
                        <p
                            class="mt-4 text-lg text-gray-300"
                        >This is a simple example of a Landing Page you can build using Tailwind Starter Kit. It features multiple CSS components based on the Tailwindcss design system.</p>
                    </div>
                </div>
            </div>
        </div>
        <div
            class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style="height: 70px; transform: translateZ(0px);"
        >
            <svg
                class="absolute bottom-0 overflow-hidden"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
            >
                <polygon class="text-gray-300 fill-current" points="2560 0 2560 100 0 100"></polygon>
            </svg>
        </div>
    </div>
</template>

<script>
    export default {};
</script>
