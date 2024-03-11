import supabase from "$lib/supabase";

export async function load() {


    const { data, error } = await supabase
    .rpc('TestQuery');

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
