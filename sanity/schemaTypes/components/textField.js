export const textField = (nameProp, titleProp) => ({
  name: nameProp,
  title: titleProp,
  type: 'array',
  of: [
    {
      type: 'block',
      marks: {
        decorators: [
          {title: 'Bold', value: 'strong'},
          {title: 'Italic', value: 'em'},
          {title: 'Underline', value: 'underline'},
        ],
      },
    },
  ],
})
