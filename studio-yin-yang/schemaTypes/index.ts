import { service } from './service'
import { article } from './article'
import { category } from './category'
import { caseStudy } from './caseStudy'
import { localeString, localeText, localeBlock } from './locale'

export const schemaTypes = [
  localeString,
  localeText,
  localeBlock,
  category,
  service,
  article,
  caseStudy,
]
