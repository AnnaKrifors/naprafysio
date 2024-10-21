import {slug} from '../components/slug'

export default {
  name: 'indexPage', // Unikt namn för schemat
  title: 'Hem', // Titel som visas i Sanity Studio
  type: 'document', // Typ av schema, i detta fall ett dokument
  fields: [
    slug('title'), // Använd funktionen slug för att skapa ett slug-fält
    {
      name: 'title', // Namn på fältet
      title: 'Title', // Titel som visas i Studio
      type: 'string', // Typ av data för fältet
      description: 'Titel för startsidan', // Beskrivning för användarna
    },
    {
      name: 'content', // Namn på fältet
      title: 'Content', // Titel för fältet i Studio
      type: 'array', // Typ av data, en array av block (rich text editor)
      of: [{type: 'block'}],
      description: 'Innehåll för startsidan',
    },
    {
      name: 'image', // Namn på fältet
      title: 'Image', // Titel i Studio
      type: 'image', // Typ av data för fältet
      options: {
        hotspot: true, // Gör det möjligt att anpassa bildens fokuspunkt
      },
      description: 'Bild som visas på startsidan',
    },
  ],
}
