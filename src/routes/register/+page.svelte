<script lang="ts">
    export let data;
    // onMount(async () => {
    //     let { data, error } = await supabase.from('tbl_rol').select();
    //     console.log(data, error);
    //     if (data) {
    //         products = data;
    //     }
    // });

</script>

<h1>Products</h1>

{#each data.products as product}
    <div>
        <input type="text" bind:value={product.id}>
    </div>
{/each}
