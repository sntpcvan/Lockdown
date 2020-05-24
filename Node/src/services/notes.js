var notesModel = require('../models/notes');
var notesDBC = notesModel.notesModel;

async function saveNote(note) {
   let data = mapNotes(note);
   var note = new notesDBC(data);
   var document = await note.save();
   return document._id;
}


async function getAllNotes() {
   var query = notesDBC.find({ userId: 11 });
   let doc = await query.exec();
   return doc;
}

async function getNotes(id) {
   return await notesDBC.find({ _id: id }).exec();
}

async function searchNote(text) {
   if (!text) {
      throw 'Search parameter not a valid'
   }
   return await notesDBC.find({
      mainContent: {
         $elemMatch: {
            data: { $regex: '.*' + text + '.*' }
         }
      }
   });

}



function mapNotes(note) {
   if (typeof note == "undefined") {
      throw 'Note Object is not found';
   };

   if (typeof note.mainContent == 'undefined' || note.mainContent.length === 0) {
      throw 'No Notes to save';
   }

   if (note.mainContent.map(o => o.data).every(e => e == '')) {
      throw 'All notes empty';
   }
   let currentTime = Date.now();
   let userId = 11;
   let tag = mapTag(note);
   return {
      lastModified: currentTime,
      mainContent: note.mainContent,
      userId: userId,
      tags: tag
   }
}

function mapTag(note) {
   return [
      {
         name: 'default',
         code: 'DEFAULT',
         remainder: 'DEFAULTREMAINDER'
      }
   ];
}




module.exports = {
   getNotes: getNotes,
   getAllNotes: getAllNotes,
   saveNote: saveNote,
   searchNote: searchNote
}