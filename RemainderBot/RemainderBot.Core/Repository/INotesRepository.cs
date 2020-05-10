using RemainderBot.Core.DataLayer.Context;
using System;
using System.Collections.Generic;
using System.Text;

namespace RemainderBot.Core.Repository
{
    public interface INotesRepository
    {
        IEnumerable<Notes> GetAllNotes();
        IEnumerable<Notes> GetAllNotes( string text);
        IEnumerable<Notes> GetNote(int id);
        bool AddNote(Notes value);
        IEnumerable<Notes> SearchNote(string searchKey);
    }
}
