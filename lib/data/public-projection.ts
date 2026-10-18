export type PublicTrack = { id: string; title: string; album: string | null; number: number | null }
export function projectPublicTrack(row: unknown): PublicTrack {
  if (!row || typeof row !== 'object') throw new Error('Faixa inválida')
  const value = row as Record<string, unknown>
  if (typeof value.id !== 'string' || !value.id.trim() || typeof value.titulo !== 'string' || !value.titulo.trim() || (value.album != null && typeof value.album !== 'string') || (value.numero != null && (!Number.isInteger(value.numero) || typeof value.numero !== 'number'))) throw new Error('Faixa inválida')
  return { id: value.id, title: value.titulo, album: value.album as string | null ?? null, number: value.numero as number | null ?? null }
}
