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
    <section class="min-h-dvh gap-10 bg-violet-950 flex justify-center items-center flex-col py-28 px-18">
        <h1 class="text-white text-5xl uppercase font-extrabold tracking-wide">Contact</h1>
        
        <article class="flex gap-24 w-full justify-center">
            <div class="flex flex-col gap-2 w-1/3">
                <h2 class="text-pink-400 tracking-widest font-black uppercase text-xl">Email</h2>
                <p class="text-white">support@codingshere.com</p>
                
                <div class="w-full h-1 rounded-md bg-pink-400 my-7"></div>
                
                <h2 class="text-pink-400 tracking-widest font-black uppercase text-xl">Email</h2>
                <p class="text-white">Calling hours: 8:00 - 17:00</p>
                <p class="text-white">+324 683 068 59</p>
                
                <div class="w-full h-1 rounded-md bg-pink-400 my-7"></div>
            </div>

            <form class="flex flex-col w-1/3 gap-3 text-pink-400 font-black tracking-widest" action="">
                <label class="uppercase text-normal" for="name">name</label>
                <input class="rounded px-2 py-2 mb-2 bg-transparent text-white font-normal border-pink-400 border-2" type="text" name="name">
                
                <label class="uppercase text-normal" for="name">Email</label>
                <input class="rounded px-2 py-2 mb-2 bg-transparent text-white font-normal border-pink-400 border-2" type="text" name="name">
                
                <label class="uppercase text-normal" for="name">phone number</label>
                <input class="rounded px-2 py-2 mb-2 bg-transparent text-white font-normal border-pink-400 border-2" type="text" name="name">
                
                <label class="uppercase text-normal" for="name">message</label>
                <textarea  class="rounded h-40 px-2 py-2 mb-2 bg-transparent text-white font-normal border-pink-400 border-2 resize-none" type="text" name="name"></textarea>

                <button class="px-16 rounded-lg uppercase py-4 bg-white self-end text-violet-950">submit</button>
            </form>
        </article>
    </section>    
</main>

<style>
    @import '../global.css';
</style>