import type { CollectionConfig } from 'payload'

import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'

export const Collection087: CollectionConfig = {
  slug: 'collection-087',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
  ],
}
