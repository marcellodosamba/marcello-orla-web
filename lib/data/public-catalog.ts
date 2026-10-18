import 'server-only'
import { createClient } from '@supabase/supabase-js'
import { projectPublicTrack, type PublicTrack } from './public-projection'

export async function getPublicCatalog(): Promise<{ tracks: PublicTrack[]; error: string | null }> {
  try {
    const client = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, { auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false }, global: { fetch: (input, init) => fetch(input, { ...init, cache: 'no-store' }) } })
    const tracks: PublicTrack[] = []
    for (let offset = 0; ; offset += 500) {
      const { data, error } = await client
        .from('marcello_public_tracks')
        .select('id,titulo:title,album:release_title,numero:track_number')
        .order('track_number')
        .range(offset, offset + 499)
      if (error || !data) return { tracks: [], error: 'O catálogo está indisponível no momento. Tente novamente mais tarde.' }
      tracks.push(...data.map(projectPublicTrack))
      if (data.length < 500) break
    }
    return { tracks, error: null }
  } catch {
    return { tracks: [], error: 'O catálogo está indisponível no momento. Tente novamente mais tarde.' }
  }
}
