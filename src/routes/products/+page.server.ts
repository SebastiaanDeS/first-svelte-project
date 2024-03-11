import supabase from "$lib/supabase";

export async function load() {
    const { data, error } = await supabase
    .from("tbl_product")
    .select(`
        *,
        tbl_product_type(*, tbl_type(*))
        
    `);

    if (error) {
        console.error("Error fetching data:", error.message);
        return {
            products: [],
            error: error.message,
        };
    }

    return {
        products: data ?? [],
    };
}
