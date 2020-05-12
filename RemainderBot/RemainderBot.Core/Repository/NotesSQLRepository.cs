using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using CoreLibrary.Execution;
using Microsoft.EntityFrameworkCore;
using RemainderBot.Core.DataLayer.Context;

namespace RemainderBot.Core.Repository
{
    public class NotesSQLRepository : INotesRepository
    {
        private readonly RemainderContext context;
        private readonly AppGlobal global;
        public NotesSQLRepository(RemainderContext _context, AppGlobal appGlobal)
        {
            context = _context;
            global = appGlobal;
        }

        public bool AddNote(Notes value)
        {
            try
            {
                context.Add(value);
                context.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public IEnumerable<Notes> GetAllNotes()
        {
            return context.Notes
                .Include(x => x.MainContent)
                .Where(n => n.UserId == global.UserId);
        }

        public IEnumerable<Notes> GetAllNotes(string text)
        {
            //return context.Notes.Where(n => n.UserId == global.UserId
            //&& n.MainContent.Contains(text, StringComparison.OrdinalIgnoreCase));

            return null;
        }

        public IEnumerable<Notes> GetNote(int id)
        {
            return context.Notes.Where(n => n.Id == id);
        }

        public IEnumerable<Notes> SearchNote(string searchKey)
        {
            return context.Notes.Include(s => s.MainContent)
                   .Where(o => o.MainContent.Any(m => m.Data.Contains(searchKey)))
                   .Where(x => x.UserId == global.UserId).ToList();
        }
    }
}
