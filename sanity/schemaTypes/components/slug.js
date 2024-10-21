import {defineType} from 'sanity'

export function slug(source) {
  return defineType({
    name: 'slug',
    title: 'Slug',
    type: 'slug',
    options: {
      source: source,
      maxLength: 96,
    },
  })
}
