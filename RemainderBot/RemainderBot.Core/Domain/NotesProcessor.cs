using CoreLibrary.Execution;
using RemainderBot.Core.DataLayer.Context;
using RemainderBot.Core.Repository;

using System;
using System.Collections.Generic;
using System.Text;

namespace RemainderBot.Core.Domain
{
    public class NotesProcessor
    {
        private readonly INotesRepository notesRepo;
        private readonly AppGlobal appGlobal;
        public NotesProcessor(INotesRepository notesRepository, AppGlobal _appGlobal)
        {
            notesRepo = notesRepository;
            appGlobal = _appGlobal;
        }

        public bool AddNotes(Notes value)
        {
            IEnumerable<Tags> tags = new List<Tags> { new Tags { Code = "GENERAL", Name = "GENERAL" } };
            value.UserId = appGlobal.UserId;
            value.CreateDateTime = DateTime.UtcNow;
            //value.Tags = tags;
            return notesRepo.AddNote(value);
        }

        public IEnumerable<Notes> GetAllNotes()
        {
            return notesRepo.GetAllNotes();
        }

        public IEnumerable<Notes> SearchNote(string searchKey)
        {
            return notesRepo.SearchNote(searchKey);
        }
    }
}
