<script>
    // ============================================== Imports  ============================================== 
    // ======================= Components ======================= 
    import Header from '../../components/Header.svelte';
    
    // ======================= Images ======================= 
    import heroImg from '../../img/wavesBg.png';
    import productImg from '../../img/Boba_Coffie.png';
</script>

<Header />

<main>
    <section class="min-h-dvh gap-10 bg-violet-950 flex justify-center items-center flex-col">
        <h1 class="text-white text-5xl uppercase font-extrabold tracking-wide">Contact</h1>
        
        <article class="flex gap-24">
            <div class="flex flex-col">
                <h2 class="text-pink-500 tracking-widest font-extrabold uppercase text-2xl">Email</h2>
                <p class="text-white">supportcodingshere.com</p>
                <div></div>
            </div>

            <form class="flex flex-col" action="">
                <label for="name">name</label>
                <input type="text" name="name">
            </form>
        </article>
    </section>    
</main>

<style>
    @import '../global.css';
</style>