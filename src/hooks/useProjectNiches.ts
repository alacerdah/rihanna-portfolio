import { useEffect, useState } from 'react'
import { fetchProjectNiches, type ApiNiche } from '../shared/videos-api'

// undefined = ainda buscando; null = sem dado do admin (API fora, slug não configurado, etc.)
export function useProjectNiches() {
  const [niches, setNiches] = useState<ApiNiche[] | null | undefined>(undefined)

  useEffect(() => {
    let alive = true
    fetchProjectNiches().then((result) => {
      if (alive) setNiches(result)
    })
    return () => {
      alive = false
    }
  }, [])

  return niches
}
