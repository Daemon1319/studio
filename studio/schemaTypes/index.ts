import { type SchemaTypeDefinition } from 'sanity'

const gallery: SchemaTypeDefinition = {
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'service' }],
    },
  ],
}

const packages: SchemaTypeDefinition = {
  name: 'package',
  title: 'Packages',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Package Name',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'price',
      title: 'Price (₱)',
      type: 'number',
    },
    {
      name: 'inclusions',
      title: 'Inclusions',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
}

const services: SchemaTypeDefinition = {
  name: 'service',
  title: 'Services',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Service Name',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'price',
      title: 'Starting Price (₱)',
      type: 'number',
    },
    {
      name: 'inclusions',
      title: 'Inclusions',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
}

export const schemaTypes: SchemaTypeDefinition[] = [gallery, packages, services]