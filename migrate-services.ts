import { createClient } from '@sanity/client';
import { servicesData } from '@/data/servicesData';
import { servicesTextEN } from '@/data/servicesDataEN';
import { servicesTextCN } from '@/data/servicesDataCN';
import dotenv from 'dotenv';

dotenv.config();

const projectId = 'oyjkh63s';
const dataset = 'production';
const token = process.env.VITE_SANITY_API_TOKEN;

if (!token) {
  console.error('❌ Missing VITE_SANITY_API_TOKEN in .env');
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  useCdn: false,
  apiVersion: '2024-03-04',
  token,
});

async function migrateServices() {
  console.log('🚀 Migrating Services to Sanity...');
  
  const keys = Object.keys(servicesData);
  console.log(`Found ${keys.length} services to migrate`);

  for (const slug of keys) {
    const pl = servicesData[slug];
    const en = servicesTextEN[slug];
    const cn = servicesTextCN[slug];
    
    if (!pl) {
      console.warn(`⚠️ Missing PL data for ${slug}, skipping...`);
      continue;
    }

    process.stdout.write(`  Creating service: ${slug}... `);
    
    const maxArr = (a: any[], b: any[], c: any[]) =>
      Math.max(a?.length || 0, b?.length || 0, c?.length || 0);

    const doc: any = {
      _type: 'service',
      _id: `service-${slug}`,
      slug: { current: slug },
      title: { pl: pl.title || '', en: en?.title || '', cn: cn?.title || '' },
      subtitle: { pl: pl.subtitle || '', en: en?.subtitle || '', cn: cn?.subtitle || '' },
      description: { pl: pl.description || '', en: en?.description || '', cn: cn?.description || '' },
      whenItMakesSense: Array.from(
        { length: maxArr(pl.whenItMakesSense, en?.whenItMakesSense, cn?.whenItMakesSense) }
      ).map((_, i) => ({
        _key: `wims-${i}`,
        pl: pl.whenItMakesSense?.[i] || '',
        en: en?.whenItMakesSense?.[i] || '',
        cn: cn?.whenItMakesSense?.[i] || '',
      })),
      problemsSolved: Array.from(
        { length: maxArr(pl.problemsSolved, en?.problemsSolved, cn?.problemsSolved) }
      ).map((_, i) => ({
        _key: `prob-${i}`,
        pl: pl.problemsSolved?.[i] || '',
        en: en?.problemsSolved?.[i] || '',
        cn: cn?.problemsSolved?.[i] || '',
      })),
      scopeIncludes: Array.from(
        { length: maxArr(pl.scope?.includes, en?.scope?.includes, cn?.scope?.includes) }
      ).map((_, i) => ({
        _key: `inc-${i}`,
        pl: pl.scope?.includes?.[i] || '',
        en: en?.scope?.includes?.[i] || '',
        cn: cn?.scope?.includes?.[i] || '',
      })),
      scopeExcludes: Array.from(
        { length: maxArr(pl.scope?.excludes, en?.scope?.excludes, cn?.scope?.excludes) }
      ).map((_, i) => ({
        _key: `exc-${i}`,
        pl: pl.scope?.excludes?.[i] || '',
        en: en?.scope?.excludes?.[i] || '',
        cn: cn?.scope?.excludes?.[i] || '',
      })),
      deliverables: Array.from(
        { length: maxArr(pl.deliverables, en?.deliverables, cn?.deliverables) }
      ).map((_, i) => ({
        _key: `del-${i}`,
        pl: pl.deliverables?.[i] || '',
        en: en?.deliverables?.[i] || '',
        cn: cn?.deliverables?.[i] || '',
      })),
      workModelType: {
        pl: pl.workModel?.type || '',
        en: en?.workModel?.type || '',
        cn: cn?.workModel?.type || '',
      },
      workModelDuration: {
        pl: pl.workModel?.duration || '',
        en: en?.workModel?.duration || '',
        cn: cn?.workModel?.duration || '',
      },
      workModelCommunication: {
        pl: pl.workModel?.communication || '',
        en: en?.workModel?.communication || '',
        cn: cn?.workModel?.communication || '',
      },
      caseStudyClient: {
        pl: pl.caseStudy?.client || '',
        en: en?.caseStudy?.client || '',
        cn: cn?.caseStudy?.client || '',
      },
      caseStudySituation: {
        pl: pl.caseStudy?.situation || '',
        en: en?.caseStudy?.situation || '',
        cn: cn?.caseStudy?.situation || '',
      },
      caseStudyActions: {
        pl: pl.caseStudy?.actions || '',
        en: en?.caseStudy?.actions || '',
        cn: cn?.caseStudy?.actions || '',
      },
      caseStudyResult: {
        pl: pl.caseStudy?.result || '',
        en: en?.caseStudy?.result || '',
        cn: cn?.caseStudy?.result || '',
      },
    };

    await client.createOrReplace(doc);
    console.log('✅');
  }
}

migrateServices()
  .then(() => console.log('\n✅ All services migrated successfully!'))
  .catch((err) => {
    console.error('\n❌ Migration failed:', err);
    process.exit(1);
  });
