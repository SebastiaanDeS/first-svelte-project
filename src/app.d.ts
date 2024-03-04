// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			sb: TypedSupabaseClient
			session: Session | nul
		}
		interface PageData {
			session: import('@supabase/supabase-js').Session | null;
		}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
