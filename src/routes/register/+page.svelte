<script lang="ts">
    import supabase from "$lib/supabase";
    import { onMount } from "svelte";

    interface Product {
        // Add properties based on your actual data structure
        product_name: string;
        // Add other properties as needed
    }

    let products: Product[] = [];

    onMount(async () => {
        let { data, error } = await supabase.from('tbl_product').select('*');
        if (data) {
            products = data;
        }
    });
</script>

<h1>Working</h1>

{#each products as product}
    <div>
        <input type="text" bind:value={product.product_name}>
    </div>
{:else}
    <p>No products found</p>
{/each}
