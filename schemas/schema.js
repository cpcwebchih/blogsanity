import React from 'react'
// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import youtube from './youtube';

const NormalRightStyle = props => (
  <p  style={{textAlign: 'right'}}>{props.children}</p>
)

const NormalCenterStyle = props => (
  <p style={{textAlign: 'center'}}>{props.children}</p>
)


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
          type: 'string',
          validation: Rule => Rule.required()
        },
        {
          name: 'avatar',
          title: 'Foto',
          type: 'image',
          validation: Rule => Rule.required()
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
          title: 'Question',
          validation: Rule => Rule.required()
        },
        {          
          name: 'answer',
          title: 'Answer',
          validation: Rule => Rule.required(),
          type: 'array',
          of: [
            {
              type: 'block'
            }
          ]
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
          validation: Rule => Rule.required(),
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
              type: 'block',
              styles: [
                {
                  title: 'Normal Center', value: 'normalcenter',
                  blockEditor: {
                    render: NormalCenterStyle
                  }
                },
                {title: 'Normal Right', value: 'normalright', 
                  blockEditor: {
                    render: NormalRightStyle
                  }
                },
                {title: 'Heading 1', value: 'h1'},
                {title: 'Heading 2', value: 'h2'},
                {title: 'Heading 3', value: 'h3'},
                {title: 'Heading 4', value: 'h4'},
                {title: 'Heading 5', value: 'h5'},
                {title: 'Heading 6', value: 'h6'},
                {title: 'Quote', value: 'blockquote'}
              ]
            },
            youtube,
            {
              type: 'image',
              fields: [
                {
                  title: 'Image Position',
                  name: 'imageposition', 
                  type: 'string',
                  options: {
                    list: [
                      {title: 'Center', value: 'imagecenter'},
                      {title: 'Left', value: 'imageleft'},
                      {title: 'Right', value: 'imageright'},
                    ],
                    layout: 'radio'
                  }
                },
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
          validation: Rule => Rule.required(),
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
              type: 'block',
              styles: [
                {
                  title: 'Normal Center', value: 'normalcenter',
                  blockEditor: {
                    render: NormalCenterStyle
                  }
                },
                {title: 'Normal Right', value: 'normalright', 
                  blockEditor: {
                    render: NormalRightStyle
                  }
                },
                {title: 'Heading 1', value: 'h1'},
                {title: 'Heading 2', value: 'h2'},
                {title: 'Heading 3', value: 'h3'},
                {title: 'Heading 4', value: 'h4'},
                {title: 'Heading 5', value: 'h5'},
                {title: 'Heading 6', value: 'h6'},
                {title: 'Quote', value: 'blockquote'}
              ]
            },
            youtube,
            {
              type: 'image',
              fields: [
                {
                  title: 'Image Position',
                  name: 'imageposition', 
                  type: 'string',
                  options: {
                    list: [
                      {title: 'Center', value: 'imagecenter'},
                      {title: 'Left', value: 'imageleft'},
                      {title: 'Right', value: 'imageright'},
                    ],
                    layout: 'radio'
                  }
                },
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
            },
          ]
        }
      ]
    }
  ])
})
