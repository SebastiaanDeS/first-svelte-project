<script lang="ts">
  import { onMount } from 'svelte';
  import { supabase } from '../../lib/supabaseClient'; // Import the initialized Supabase client

  let productNames: string[] = []; // Initialize an empty array to store product names

  // Fetch product names from the database
  async function fetchProductNames() {
    try {
      const data data: any[] = await supabase
        .from('tbl_product')
        .select('product_name'); // Replace 'product_name' with the actual column name

	productNames = data.map((row) => row.product_name);
    }
  }

  onMount(fetchProductNames); // Fetch product names when the component mounts
</script>

<ul>
  {#each productNames as productName}
    <li>{productName}</li>
  {/each}
</ul>
