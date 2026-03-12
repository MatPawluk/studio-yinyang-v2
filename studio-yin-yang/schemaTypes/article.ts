import {defineField, defineType} from 'sanity'

export const article = defineType({
  name: 'article',
  title: 'Article',
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
      title: 'Category',
      type: 'reference',
      to: {type: 'category'},
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      options: {
        dateFormat: 'DD.MM.YYYY',
      },
    }),
    defineField({
      name: 'readTime',
      title: 'Read Time',
      type: 'localeString',
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
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
      name: 'description',
      title: 'Description',
      type: 'localeText',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'localeBlock',
      description: 'Treść artykułu (Bogaty edytor tekstu)',
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'keyStats',
      title: 'Key Data (Sidebar)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'value', title: 'Value', type: 'localeString' },
            { name: 'label', title: 'Label', type: 'localeString' },
          ],
          preview: {
            select: {
              title: 'value.pl',
              subtitle: 'label.pl',
            },
          },
        },
      ],
    }),
    defineField({
      name: 'relatedArticles',
      title: 'Related Articles (Manual Selection)',
      type: 'array',
      of: [{type: 'reference', to: {type: 'article'}}],
      validation: (Rule) => Rule.max(2),
      description: 'Select up to 2 articles to show as related. If empty, articles from the same category will be shown automatically.',
    }),
  ],
  preview: {
    select: {
      title: 'title.pl',
      media: 'image',
    },
  },
})
