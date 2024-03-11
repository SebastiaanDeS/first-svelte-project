<script lang="ts">
     // ============================================== Imports  ============================================== 
    // ======================= Components ======================= 
    import Header from '../../components/Header.svelte';

    // ======================= Images ======================= 
    export let data;
</script>

<Header />

<main>
    <section class="min-h-dvh bg-violet-950 flex flex-col align-middle px-16 py-32 gap-16">
        <h1 class="text-white tracking-wider uppercase font-extrabold text-4xl">Products</h1>

        <article class="flex flex-wrap justify-center align-middle gap-14">
            {#each data.products as product}
                <div class="bg-white py-8 rounded-xl w-80 flex flex-col items-center justify-center gap-4">
                    <img class="h-44 object-contain" src="src/img/{product.tbl_product.product_img}" alt="">
                    <h2 class="text-xl">{product.tbl_product.product_name}</h2>
                    <p class="number text-lg">€ {product.tbl_product.pt_price}</p>

                    <!-- Accessing fields from related tables -->
                    <p class="text-sm">Product Type: {product.tbl_type.type_field}</p>

                    <button class="bg-pink-400 mt-2 text-white py-3 px-10 tracking-wider border-2 border-pink-400 uppercase rounded-lg font-bold text-sm hover:bg-white hover:text-pink-400 ease-in-out duration-300">shopping cart</button>
                </div>
            {/each}
                <!-- <pre>{JSON.stringify(product, null, 2)}</pre> -->
                
        </article>
    </section>
</main>

<style>
    @import '../global.css';
</style>
