import { createClient } from '@sanity/client'
import crypto from 'crypto'

const client = createClient({
  projectId: 'oyjkh63s',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2023-05-03',
  token: 'sktg3cUpJUFRPfkUG2JRSnjRl4PCcuKB3SiPSOI3fYJU9xiexpq1TuTWD9z1LslC8qY6UkQP5cWzxUj5i',
})

function addKeys(blocks) {
  if (!Array.isArray(blocks)) return blocks;
  return blocks.map(block => ({
    ...block,
    _key: block._key || crypto.randomBytes(8).toString('hex')
  }))
}

async function run() {
  console.log('Fetching articles to patch missing keys...')
  const articles = await client.fetch('*[_type == "article"]')
  let patchedCount = 0
  
  for (const article of articles) {
    if (article.content) {
      const patches = {}
      let needsPatch = false
      
      if (article.content.pl && Array.isArray(article.content.pl)) {
        const hasMissing = article.content.pl.some(b => !b._key)
        if (hasMissing) {
          patches['content.pl'] = addKeys(article.content.pl)
          needsPatch = true
        }
      }
      if (article.content.en && Array.isArray(article.content.en)) {
        const hasMissing = article.content.en.some(b => !b._key)
        if (hasMissing) {
          patches['content.en'] = addKeys(article.content.en)
          needsPatch = true
        }
      }
      if (article.content.cn && Array.isArray(article.content.cn)) {
        const hasMissing = article.content.cn.some(b => !b._key)
        if (hasMissing) {
          patches['content.cn'] = addKeys(article.content.cn)
          needsPatch = true
        }
      }
      
      if (needsPatch) {
        try {
          await client.patch(article._id).set(patches).commit()
          console.log(`Patched keys for article: ${article._id}`)
          patchedCount++
        } catch (err) {
          console.error(`Failed to patch article ${article._id}:`, err.message)
        }
      }
    }
  }
  
  console.log(`Done. Patched ${patchedCount} articles.`)
}

run()
