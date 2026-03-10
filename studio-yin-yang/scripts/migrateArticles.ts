
import { createClient } from '@sanity/client'
import { readFileSync } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const client = createClient({
  projectId: 'oyjkh63s',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2023-05-03',
  token: 'sktg3cUpJUFRPfkUG2JRSnjRl4PCcuKB3SiPSOI3fYJU9xiexpq1TuTWD9z1LslC8qY6UkQP5cWzxUj5i',
})

const articlesTranslations = {
  pl: [
    { category: 'Analizy', title: 'Gdzie znika Twoja marża? 5 sygnałów, że Twój chiński „producent" to tylko pośrednik', description: 'W chińskim systemie handlowym ustalenie, kto rzeczywiście stoi za produkcją, przypomina pracę analityka. Wyjaśniamy, jak za pomocą twardych danych z rejestrów państwowych ChRL zdemaskować pośrednika w mniej niż 15 minut.', date: '7.02.2026', readTime: '14 min', slug: 'gdzie-znika-twoja-marza', featured: true },
    { category: 'Analizy', title: 'Chiński Nowy Rok 2026: Jak uniknąć paraliżu łańcucha dostaw w Roku Konia?', description: 'Dla chińskiego sektora produkcyjnego Święto Wiosny to całkowite wygaszenie reaktora gospodarczego. Polskie firmy, które nie zaplanują dostaw z 4-miesięcznym wyprzedzeniem, ryzykują puste magazyny.', date: '5.02.2026', readTime: '12 min', slug: 'chinski-nowy-rok-2026', featured: true },
    { category: 'Analizy', title: 'Przewagi konkurencyjne chińskich firm w wybranych sektorach', description: 'Analiza kluczowych przewag, które pozwalają chińskim firmom dominować w wybranych branżach globalnie.', date: '10.01.2025', readTime: '12 min', slug: 'przewagi-konkurencyjne-chinskich-firm', featured: true },
    { category: 'Analizy', title: 'Chiński system innowacji i jego implikacje dla Europy', description: 'Jak chiński ekosystem innowacji wpływa na konkurencyjność europejskich firm i instytucji.', date: '5.01.2025', readTime: '15 min', slug: 'chinski-system-innowacji', featured: true },
    { category: 'Poradniki', title: 'Jak przygotować firmę do współpracy z chińskim partnerem', description: 'Praktyczny przewodnik dla firm planujących nawiązanie współpracy z partnerami z Chin.', date: '20.12.2024', readTime: '8 min', slug: 'przygotowanie-do-wspolpracy' },
    { category: 'Poradniki', title: 'Na co zwrócić uwagę przed podpisaniem umowy z firmą z Chin', description: 'Kluczowe aspekty prawne, kulturowe i operacyjne, które należy rozważyć przed finalizacją umowy.', date: '15.12.2024', readTime: '10 min', slug: 'przed-podpisaniem-umowy' },
    { category: 'Blog', title: 'Chiny jako konkurent technologiczny Europy - aktualne trendy', description: 'Komentarz do najnowszych wydarzeń w sektorze technologicznym i ich wpływu na rynek europejski.', date: '10.12.2024', readTime: '5 min', slug: 'chiny-konkurent-technologiczny' },
    { category: 'Analizy', title: 'Automatyzacja i robotyzacja w Chinach a przyszłość produkcji w Polsce', description: 'Jak rozwój automatyzacji w Chinach może wpłynąć na polski sektor produkcyjny.', date: '1.12.2024', readTime: '14 min', slug: 'automatyzacja-robotyzacja-chiny' },
  ],
  en: [
    { category: 'Analyses', title: 'Where does your margin disappear? 5 signs your Chinese "manufacturer" is just a middleman', description: 'In the Chinese trade system, determining who actually stands behind production is like detective work. We explain how to unmask a middleman in less than 15 minutes using hard data from PRC state registries.', date: '7.02.2026', readTime: '14 min', slug: 'gdzie-znika-twoja-marza', featured: true },
    { category: 'Analyses', title: 'Chinese New Year 2026: How to avoid supply chain paralysis in the Year of the Horse?', description: 'For China\'s manufacturing sector, the Spring Festival is a complete shutdown of the economic reactor. Polish companies that don\'t plan deliveries 4 months ahead risk empty warehouses.', date: '5.02.2026', readTime: '12 min', slug: 'chinski-nowy-rok-2026', featured: true },
    { category: 'Analyses', title: 'Competitive advantages of Chinese companies in selected sectors', description: 'Analysis of key advantages that allow Chinese companies to dominate globally in selected industries.', date: '10.01.2025', readTime: '12 min', slug: 'przewagi-konkurencyjne-chinskich-firm', featured: true },
    { category: 'Analyses', title: 'Chinese innovation system and its implications for Europe', description: 'How the Chinese innovation ecosystem impacts the competitiveness of European companies and institutions.', date: '5.01.2025', readTime: '15 min', slug: 'chinski-system-innowacji', featured: true },
    { category: 'Guides', title: 'How to prepare your company for cooperation with a Chinese partner', description: 'Practical guide for companies planning to establish cooperation with partners from China.', date: '20.12.2024', readTime: '8 min', slug: 'przygotowanie-do-wspolpracy' },
    { category: 'Guides', title: 'What to watch out for before signing a contract with a Chinese company', description: 'Key legal, cultural and operational aspects to consider before finalizing a contract.', date: '15.12.2024', readTime: '10 min', slug: 'przed-podpisaniem-umowy' },
    { category: 'Blog', title: 'China as Europe\'s technological competitor - current trends', description: 'Commentary on the latest developments in the technology sector and their impact on the European market.', date: '10.12.2024', readTime: '5 min', slug: 'chiny-konkurent-technologiczny' },
    { category: 'Analyses', title: 'Automation and robotization in China and the future of manufacturing in Poland', description: 'How the development of automation in China may affect the Polish manufacturing sector.', date: '1.12.2024', readTime: '14 min', slug: 'automatyzacja-robotyzacja-chiny' },
  ],
  cn: [
    { category: '分析', title: '你的利润去哪了？5个信号表明你的中国"制造商"只是中间商', description: '在中国贸易体系中，确定谁真正站在生产背后就像侦探工作。我们解释如何在不到15分钟内使用中国国家注册的硬数据揭露中间商。', date: '7.02.2026', readTime: '14 min', slug: 'gdzie-znika-twoja-marza', featured: true },
    { category: '分析', title: '2026年中国新年：如何避免马年供应链瘫痪？', description: '对于中国制造业来说，春节是经济反应堆的完全关闭。没有提前4个月计划交货的波兰公司面临空仓风险。', date: '5.02.2026', readTime: '12 min', slug: 'chinski-nowy-rok-2026', featured: true },
    { category: '分析', title: '中国企业在特定行业的竞争优势', description: '分析使中国企业在全球特定行业中占据主导地位的关键优势。', date: '10.01.2025', readTime: '12 min', slug: 'przewagi-konkurencyjne-chinskich-firm', featured: true },
    { category: '分析', title: '中国创新体系及其对欧洲的影响', description: '中国创新生态系统如何影响欧洲企业和机构的竞争力。', date: '5.01.2025', readTime: '15 min', slug: 'chinski-system-innowacji', featured: true },
    { category: '指南', title: '如何准备与中国合作伙伴的合作', description: '为计划与中国合作伙伴建立合作关系的公司提供实用指南。', date: '20.12.2024', readTime: '8 min', slug: 'przygotowanie-do-wspolpracy' },
    { category: '指南', title: '与中国公司签约前需要注意什么', description: '在最终签订合同前需要考虑的关键法律、文化和运营方面。', date: '15.12.2024', readTime: '10 min', slug: 'przed-podpisaniem-umowy' },
    { category: '博客', title: '中国作为欧洲的技术竞争者 - 当前趋势', description: '对技术领域最新发展及其对欧洲市场影响的评论。', date: '10.12.2024', readTime: '5 min', slug: 'chiny-konkurent-technologiczny' },
    { category: '分析', title: '中国的自动化和机器人化与波兰制造业的未来', description: '中国自动化发展如何影响波兰制造业。', date: '1.12.2024', readTime: '14 min', slug: 'automatyzacja-robotyzacja-chiny' },
  ],
}

const images = {
  articleCompetition: '../../src/assets/article-competition.jpg',
  articleInnovation: '../../src/assets/article-china-innovation.jpg',
  serviceStrategy: '../../src/assets/service-strategy.jpg',
}

const articleImageMap = {
  'gdzie-znika-twoja-marza': 'articleCompetition',
  'chinski-nowy-rok-2026': 'articleInnovation',
  'przewagi-konkurencyjne-chinskich-firm': 'articleCompetition',
  'chinski-system-innowacji': 'articleInnovation',
  'przygotowanie-do-wspolpracy': 'serviceStrategy',
  'przed-podpisaniem-umowy': 'articleCompetition',
  'chiny-konkurent-technologiczny': 'articleInnovation',
  'automatyzacja-robotyzacja-chiny': 'serviceStrategy',
}

const categoryMap = {
  'Analizy': 'category-analizy',
  'Poradniki': 'category-poradniki',
  'Blog': 'category-blog',
}

async function migrate() {
  console.log('Starting migration with token...')

  // 1. Upload assets
  const assetIds = {}
  for (const [key, filePath] of Object.entries(images)) {
    console.log(`Uploading asset: ${key}...`)
    try {
      const asset = await client.assets.upload('image', readFileSync(path.resolve(__dirname, filePath)), {
        filename: path.basename(filePath)
      })
      assetIds[key] = asset._id
      console.log(`Uploaded ${key}: ${asset._id}`)
    } catch (err: any) {
      console.error(`Failed to upload ${key}:`, err.message)
    }
  }

  // 2. Delete existing articles
  console.log('Deleting existing articles...')
  try {
     const existingArticles = await client.fetch('*[_type == "article"]._id')
     console.log(`Found ${existingArticles.length} articles to delete.`)
     for (const id of existingArticles) {
       await client.delete(id)
     }
     console.log('Deletion finished.')
  } catch (err: any) {
    console.error('Failed to delete articles:', err.message)
  }

  // 3. Create new articles
  const slugs = articlesTranslations.pl.map(a => a.slug)
  for (const slug of slugs) {
    console.log(`Preparing article: ${slug}...`)
    
    const plData = articlesTranslations.pl.find(a => a.slug === slug)
    const enData = articlesTranslations.en.find(a => a.slug === slug)
    const cnData = articlesTranslations.cn.find(a => a.slug === slug)

    if (!plData || !enData || !cnData) continue

    const categoryId = categoryMap[plData.category as keyof typeof categoryMap] || 'category-analizy'
    const imageKey = articleImageMap[slug as keyof typeof articleImageMap]
    const assetId = assetIds[imageKey as keyof typeof assetIds]

    // Convert date DD.MM.YYYY to YYYY-MM-DD
    const dateParts = plData.date.split('.')
    const date = `${dateParts[2]}-${dateParts[1].padStart(2, '0')}-${dateParts[0].padStart(2, '0')}`

    const doc = {
      _type: 'article',
      _id: `article-${slug}`,
      title: {
        pl: plData.title,
        en: enData.title,
        cn: cnData.title,
      },
      slug: {
        _type: 'slug',
        current: slug,
      },
      category: {
        _type: 'reference',
        _ref: categoryId,
      },
      date: date,
      readTime: {
        pl: plData.readTime,
        en: enData.readTime,
        cn: cnData.readTime,
      },
      author: 'Yin Yang Team',
      description: {
        pl: plData.description,
        en: enData.description,
        cn: cnData.description,
      },
      featured: !!plData.featured,
      image: assetId ? {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: assetId,
        },
      } : undefined,
      content: {
        pl: [
          {
            _type: 'block',
            style: 'h2',
            children: [{ _type: 'span', text: plData.title }],
          },
          {
            _type: 'block',
            style: 'normal',
            children: [{ _type: 'span', text: plData.description }],
          },
        ],
        en: [
          {
            _type: 'block',
            style: 'h2',
            children: [{ _type: 'span', text: enData.title }],
          },
          {
            _type: 'block',
            style: 'normal',
            children: [{ _type: 'span', text: enData.description }],
          },
        ],
        cn: [
          {
            _type: 'block',
            style: 'h2',
            children: [{ _type: 'span', text: cnData.title }],
          },
          {
            _type: 'block',
            style: 'normal',
            children: [{ _type: 'span', text: cnData.description }],
          },
        ],
      }
    }

    try {
      await client.create(doc)
      console.log(`Created article: ${slug}`)
    } catch (err: any) {
      console.error(`Failed to create article ${slug}:`, err.message)
    }
  }

  console.log('Migration finished!')
}

migrate()
