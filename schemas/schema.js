// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    {
      name: 'author',
      type: 'document',
      title: 'Author',
      fields: [
        {
          name: 'name',
          title: 'Nombre',
          type: 'string'
        },
        {
          name: 'avatar',
          title: 'Foto',
          type: 'image'
        }
      ]
    },
    {
      name: 'questions',
      type: 'document',
      title: 'Questions',
      fields: [
        {
          name: 'question',
          type: 'string',
          title: 'Question'
        },
        {
          name: 'answer',
          type: 'string',
          title: 'Answer'
        }
      ]
    },
    {
      name: 'posts',
      type: 'document',
      title: 'Posts',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Title',
          validation: Rule => Rule.required()

        },
        {
          name: 'slug',
          type: 'string',
          title: 'Slug',
          validation: Rule => Rule.required()

        },
        {
          name: 'coverImage',
          title: 'Cover Image',
          type: 'image',
          options: {
            hotspot: true
          },
        },
        {
          name: 'date',
          title: 'Date',
          type: 'datetime',
          validation: Rule => Rule.required()
        },
        {
          name: 'author',
          title: 'Author',
          type: 'reference',
          to: [{type: 'author'}],
          validation: Rule => Rule.required()
        },
        {
          name: 'content',
          title: 'Content',
          type: 'array',
          of: [
            {
              type: 'block'
            },
            {
              type: 'image',
              fields: [
                {
                  type: 'text',
                  name: 'alt',
                  title: 'Description',
                  options: {
                    isHighlighted: true
                  }
                }
              ],
              options: {
                hotspot: true
              }
            }
          ]
        },
      ]
    },
    {
      name: 'sessions',
      type: 'document',
      title: 'Sessions',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Title',
          validation: Rule => Rule.required()

        },
        {
          name: 'slug',
          type: 'string',
          title: 'Slug',
          validation: Rule => Rule.required()

        },
        {
          name: 'coverImage',
          title: 'Cover Image',
          type: 'image',
          options: {
            hotspot: true
          },
        },
        {
          name: 'date',
          title: 'Date',
          type: 'datetime',
          validation: Rule => Rule.required()
        },
        {
          name: 'author',
          title: 'Author',
          type: 'reference',
          to: [{type: 'author'}],
          validation: Rule => Rule.required()
        },
        {
          name: 'content',
          title: 'Content',
          type: 'array',
          of: [
            {
              type: 'block'
            },
            {
              type: 'image',
              fields: [
                {
                  type: 'text',
                  name: 'alt',
                  title: 'Description',
                  options: {
                    isHighlighted: true
                  }
                }
              ],
              options: {
                hotspot: true
              }
            }
          ]
        },
      ]
    }
  ])
})
