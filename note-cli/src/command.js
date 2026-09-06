import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import { findNotes, getAllNotes, newNote, removeNote, removeAllNotes } from './notes.js';

const listNotes = (notes) => {
  notes.forEach(note => {
    console.log('\n');
    console.log('id: ', note.id);
    console.log('title: ', note.title);
    console.log('note: ', note.value);
    console.log('tags: ', note.tags.join(', '));
  })
}

yargs(hideBin(process.argv))
 .command(
  'new <title> <note>',
  'create a new note',
  yargs => {
    return yargs.positional('note', {
      describe: 'The content of the note you want to create',
      type: 'string'
    });
  },
  async argv => {
    try {
      const { note, tags, title } = argv;
      const tagsArr = tags ? tags.split(',') : []
      const createdNote = await newNote(title, note, tagsArr);
      console.log(createdNote);
    } catch(err) {
      console.log(err);
    }
  }
)
  .option('tags', {
    alias: 't',
    type: 'string',
    description: 'tags to add to the note'
  })
  .command('all', 'get all notes', () => {}, async () => {
    const notes = await getAllNotes();
    listNotes(notes)
  })
  .command('find <filter>', 'get matching notes', yargs => {
    return yargs.positional('filter', {
      describe: 'The search term to filter notes by, will be applied to note.content',
      type: 'string'
    })
  }, async (argv) => {
    const notes = await findNotes(argv.filter);
    if (notes.length) listNotes(notes);
    else console.log('No results');
  })
  .command('remove <id>', 'remove a note by id', yargs => {
    return yargs.positional('id', {
      type: 'number',
      description: 'The id of the note you want to remove'
    })
  }, async (argv) => {
    const value = await removeNote(argv.id);  
    if (value) console.log(`Note with id ${value} is removed`);
    else console.log(`Note was not found`);
  })
  .command('web [port]', 'launch website to see notes', yargs => {
    return yargs
      .positional('port', {
        describe: 'port to bind on',
        default: 5000,
        type: 'number'
      })
  }, async (argv) => {
    
  })
   .command('clean', 'remove all notes', () => {}, async (argv) => {
    await removeAllNotes()
    console.log('All notes removed')
  })
  .demandCommand(1)
  .parse()