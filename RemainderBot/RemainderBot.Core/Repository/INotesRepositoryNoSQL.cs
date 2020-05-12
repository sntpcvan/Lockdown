using RemainderBot.Core.DtoModels.NOSQL;
using System;
using System.Collections.Generic;
using System.Text;

namespace RemainderBot.Core.Repository
{
    public interface INotesRepositoryNoSQL
    {
        IEnumerable<Notes> GetAllNotes();
        IEnumerable<Notes> GetAllNotes(string text);
        Notes GetNote(int id);
        bool AddNote(Notes value);
        IEnumerable<Notes> SearchNote(string searchKey);
    }
}
