import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: 'u5usn0i1',  // Reemplázalo con tu ID de Sanity
  dataset: 'production',
  useCdn: true,  // Usa CDN para respuestas más rápidas
  apiVersion: '2023-01-01',  // Versión de la API (puede actualizarse)
})
