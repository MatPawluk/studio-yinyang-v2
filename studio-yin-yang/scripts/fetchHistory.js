import { createClient } from '@sanity/client'
import fs from 'fs'

const client = createClient({
  projectId: 'oyjkh63s',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2023-05-03',
  token: 'sktg3cUpJUFRPfkUG2JRSnjRl4PCcuKB3SiPSOI3fYJU9xiexpq1TuTWD9z1LslC8qY6UkQP5cWzxUj5i', // token with read/write
})

const oldIds = [
  'article-automatyzacja-robotyzacja-chiny',
  'article-chinski-nowy-rok',
  'article-chinski-system-innowacji',
  'article-chiny-konkurent-technologiczny',
  'article-gdzie-znika',
  'article-przed-podpisaniem-umowy',
  'article-przygotowanie-do-wspolpracy',
  'article-przewagi-konkurencyjne-chinskich-firm',
  'article-gdzie-znika-twoja-marza',
  'drafts.article-automatyzacja-robotyzacja-chiny',
  'drafts.article-chinski-nowy-rok',
  'drafts.article-chinski-system-innowacji',
  'drafts.article-chiny-konkurent-technologiczny',
  'drafts.article-gdzie-znika',
  'drafts.article-przed-podpisaniem-umowy',
  'drafts.article-przygotowanie-do-wspolpracy',
  'drafts.article-przewagi-konkurencyjne-chinskich-firm',
  'drafts.article-gdzie-znika-twoja-marza'
]

async function fetchHistory(id) {
  const url = `https://oyjkh63s.api.sanity.io/v2023-05-03/data/history/production/documents/${id}?time=2026-03-09T12:00:00Z`
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer sktg3cUpJUFRPfkUG2JRSnjRl4PCcuKB3SiPSOI3fYJU9xiexpq1TuTWD9z1LslC8qY6UkQP5cWzxUj5i`
    }
  })
  if (res.ok) {
    const data = await res.json()
    return data
  }
  return null
}

async function run() {
  console.log('Fetching historical versions of deleted articles...')
  const results = {}
  for (const id of oldIds) {
    const historicDoc = await fetchHistory(id)
    if (historicDoc && historicDoc.documents && historicDoc.documents.length > 0) {
      console.log(`Found historic document for ${id}`)
      results[id] = historicDoc.documents[0]
    } else {
      console.log(`No historic document for ${id}`)
    }
  }
  fs.writeFileSync('./historical_articles.json', JSON.stringify(results, null, 2))
  console.log('Saved to historical_articles.json')
}

run()
