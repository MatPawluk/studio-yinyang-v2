import {defineField, defineType} from 'sanity'

export const service = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title.pl',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category (Slug)',
      type: 'string',
      description: 'np. strategia-wobec-chin, import-eksport',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'localeString',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'localeText',
    }),
    defineField({
      name: 'image',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'caseStudyImage',
      title: 'Case Study Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'whenItMakesSense',
      title: 'When It Makes Sense',
      type: 'array',
      of: [{type: 'localeString'}],
    }),
    defineField({
      name: 'problemsSolved',
      title: 'Problems Solved',
      type: 'array',
      of: [{type: 'localeString'}],
    }),
    defineField({
      name: 'scopeIncludes',
      title: 'Scope Includes',
      type: 'array',
      of: [{type: 'localeString'}],
    }),
    defineField({
      name: 'scopeExcludes',
      title: 'Scope Excludes',
      type: 'array',
      of: [{type: 'localeString'}],
    }),
    defineField({
      name: 'deliverables',
      title: 'Deliverables',
      type: 'array',
      of: [{type: 'localeString'}],
    }),
    defineField({
      name: 'workModelType',
      title: 'Work Model - Type',
      type: 'localeString',
    }),
    defineField({
      name: 'workModelDuration',
      title: 'Work Model - Duration',
      type: 'localeString',
    }),
    defineField({
      name: 'workModelCommunication',
      title: 'Work Model - Communication',
      type: 'localeString',
    }),
    defineField({
      name: 'caseStudyClient',
      title: 'Case Study - Client',
      type: 'localeString',
    }),
    defineField({
      name: 'caseStudySituation',
      title: 'Case Study - Situation',
      type: 'localeText',
    }),
    defineField({
      name: 'caseStudyActions',
      title: 'Case Study - Actions',
      type: 'localeText',
    }),
    defineField({
      name: 'caseStudyResult',
      title: 'Case Study - Result',
      type: 'localeText',
    }),
    defineField({
      name: 'caseStudyRef',
      title: 'Linked Case Study',
      type: 'reference',
      to: [{type: 'caseStudy'}],
      description: 'Select a dedicated case study for this service. If selected, it will override the embedded case study fields above.',
    }),
  ],
  preview: {
    select: {
      title: 'title.pl',
      media: 'image',
    },
  },
})
