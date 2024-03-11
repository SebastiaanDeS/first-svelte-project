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
                <div class="bg-white px-12 py-10 rounded-xl w-80 flex flex-col items-center gap-4">
                    {#if product.tbl_product_type && product.tbl_product_type[0].tbl_type}                        
                        <p class="self-start text-lg uppercase opacity-50">{product.tbl_product_type[0].tbl_type.type}</p>
                    {/if}

                    <img class="h-44 object-contain" src="src/img/{product.product_img}" alt="">
                    <h2 class="text-xl">{product.product_name}</h2>

                    <!-- Access pt_price from the first object in tbl_product_type array -->
                    {#if product.tbl_product_type}
                        <p class="number text-lg">€ {product.tbl_product_type[0].pt_price}</p>
                    {/if}


                    <button class="bg-pink-400 mt-2 text-white py-3 px-10 tracking-wider border-2 border-pink-400 uppercase rounded-lg font-bold text-sm hover:bg-white hover:text-pink-400 ease-in-out duration-300">shopping cart</button>
                </div>
                <div class="p-10 bg-white rounded-xl">
                    <pre>{JSON.stringify(product, null, 2)}</pre>
                </div>
            {/each}
                
        </article>
    </section>
</main>

<style>
    @import '../global.css';
</style>
