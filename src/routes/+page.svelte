<script>
    // ============================================== Imports  ============================================== 
    // ======================= Components ======================= 
    import Header from '../components/Header.svelte';
    
    // ======================= Images ======================= 
    import heroImg from '../img/wavesBg.png';
    import productImg from '../img/Boba_Coffie.png';
</script>

<Header />
<main>
    <section class="min-h-dvh w-full flex justify-center items-center relative">
        <h1 class="uppercase font-black text-9xl tracking-wide z-10 text-white">Bubbley</h1>
        <img class="absolute w-full h-full object-cover" src="{heroImg}" alt="">
        <a class="z-10 text-white absolute bottom-0 m-7 lowercase text-xl animate-pulse" href="./register">Explore more</a>
    
        <div class="flex justify-center items-center opacity-70 overflow-hidden text-white py-3 px-2 absolute bottom-0 right-0 m-5 border-white border-2 rounded-xl">
            <i class="translate-y-12 fa-solid fa-arrow-down-long text-base scroll-down"></i>
        </div>
    </section>
    
    <section class="flex flex-col items-center p-24 bg-blue-950 gap-20 relative">
        <h2 class="text-pink-400 font-bold text-5xl">The best selling products</h2>
    
        <article class="flex justify-center items-center gap-12">
            <div class="flex flex-col items-center item gap-3 bg-white p-8 rounded-3xl w-72">
                <img class="mb-5 h-40" src="{productImg}" alt="">
                <h3 class="text-xl font-bold">Coffie Boba Tea</h3>
                <p class="text-lg number"><span class="text-sm number">€ </span>6.95</p>
                <button class="mt-3 border-2 border-pink-400 uppercase font-extrabold px-9 py-2 text-sm tracking-wider text-white bg-pink-400 rounded-xl ease-in-out duration-300 hover:bg-white hover:text-pink-400">buy now</button>
            </div>
            
            <div class="flex flex-col items-center item gap-3 bg-white p-8 rounded-3xl w-72">
                <img class="mb-5 h-40" src="{productImg}" alt="">
                <h3 class="text-xl font-bold">Coffie Boba Tea</h3>
                <p class="text-lg number"><span class="text-sm number">€ </span>7.50</p>
                <button class="mt-3 border-2 border-pink-400 uppercase font-extrabold px-9 py-2 text-sm tracking-wider text-white bg-pink-400 rounded-xl ease-in-out duration-300 hover:bg-white hover:text-pink-400">buy now</button>
            </div>
    
            <div class="flex flex-col items-center item gap-3 bg-white p-8 rounded-3xl w-72">
                <img class="mb-5 h-40" src="{productImg}" alt="">
                <h3 class="text-xl font-bold">Coffie Boba Tea</h3>
                <p class="text-lg number"><span class="text-sm number">€ </span>6.50</p>
                <button class="mt-3 border-2 border-pink-400 uppercase font-extrabold px-9 py-2 text-sm tracking-wider text-white bg-pink-400 rounded-xl ease-in-out duration-300 hover:bg-white hover:text-pink-400">buy now</button>
            </div>
        </article>
    </section>
</main>

<style>
    @import './global.css';
</style>