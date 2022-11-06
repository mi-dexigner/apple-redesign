import {RiMacbookLine} from "react-icons/ri";

export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  icon:RiMacbookLine,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        slugify: (input) =>
          input
            .toLowerCase()
            //Remove spaces
            .replace(/\s+/g, "-")
            //Remove special characters
            .replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, ""),
        validation: (Rule) => Rule.required(),
      
      },
    },
    {
      name:"image",
      title:"Image",
      type:"array",
      of:[{type:"image"}],
      options:{
        hotspot:true,
      }
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {type: 'category'},
        },
      ],
    },
    {
      name:'price',
      title:'Price',
      type:'number',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    },
  ],

  preview: {
    select: {
      title: 'title',
      // manufactor: 'manufactor.title',
      media: 'image',
    },
  },
}
