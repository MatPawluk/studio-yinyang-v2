import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: 'oyjkh63s',
  dataset: 'production',
  useCdn: true, // `false` do świeżych, niezacacheowanych danych podczas deweloperki jeśli wolisz
  apiVersion: '2023-05-03', // uzywaj daty dzisiejszej lub ostatniej wspieranej weryfikacji API
});
