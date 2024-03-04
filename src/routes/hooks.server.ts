import '$lib/supabases';
import { getSupabase } from "@supabase/auth-helpers-sveltekit"
import { Handle } from "@sveltejs/kit"

export const handle: Handle = async ({ event, resolve}) => {
    const { session, supabaseClient } = await getSupabase(event)
    
    event.locals.sb = supabaseClient
    event.locals.session = session

    return resolve(event)
}