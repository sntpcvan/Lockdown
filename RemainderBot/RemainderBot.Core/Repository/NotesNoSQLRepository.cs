using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using CoreLibrary.MongoDb;
using MongoDB.Driver;
using RemainderBot.Core.DtoModels.NOSQL;

namespace RemainderBot.Core.Repository
{
    public class NotesNoSQLRepository : INotesRepositoryNoSQL
    {
        IMongoCollection<Notes> _notes;
        public NotesNoSQLRepository(IMongo<Notes> collection)
        {
            _notes = collection.GetCollection(Constant.NotesCollection);
        }

        public bool AddNote(Notes value)
        {
            _notes.InsertOne(value);
            return true;
        }

        public IEnumerable<Notes> GetAllNotes()
        {
            return _notes.Find(f => true).ToList();
        }

        public IEnumerable<Notes> GetAllNotes(string text)
        {
            return _notes.Find(n => n.MainContent.Any(o=>o.Data.Contains(text))).ToList();
        }

        public Notes GetNote(int id)
        {
            return null;
        }

        public IEnumerable<Notes> SearchNote(string searchKey)
        {
            return _notes.Find(n => n.MainContent.Any(o => o.Data.Contains(searchKey))).ToList();
        }

     
    }
}
