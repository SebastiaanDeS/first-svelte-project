import supabase from "$lib/supabase";
// import { onMount } from "svelte";

// interface Product {
//     id: string;
// }

// let products: Product[] = [];


export async function load() {
    const { data } = await supabase.from("tbl_rol").select();
    
    return {
        products: data ?? [],
    };
}