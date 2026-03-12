import {defineField, defineType} from 'sanity'

export const caseStudy = defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'localeString',
    }),
    defineField({
      name: 'client',
      title: 'Client',
      type: 'localeString',
    }),
    defineField({
      name: 'goal',
      title: 'Goal',
      type: 'localeString',
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'localeString',
    }),
    defineField({
      name: 'result',
      title: 'Result',
      type: 'localeText',
    }),
    defineField({
      name: 'situation',
      title: 'Situation',
      type: 'localeText',
    }),
    defineField({
      name: 'actions',
      title: 'Actions',
      type: 'localeText',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'isMain',
      title: 'Show on Homepage',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'name.pl',
      media: 'image',
    },
  },
})
