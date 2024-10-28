import {slug} from '../components/slug'
import {textField} from '../components/textField' // Se till att denna sökväg är korrekt

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
    textField('content', 'Content'), // Använd textField-komponenten här
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
