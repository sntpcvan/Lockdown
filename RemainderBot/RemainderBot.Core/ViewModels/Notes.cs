using System;
using System.Collections.Generic;
using System.Text;

namespace RemainderBot.Core.ViewModels
{
    public class Notes
    {
        public long Id { get; set; }
        public string MainContent { get; set; }
        public Guid UserId { get; set; }
        public IEnumerable<NotesTag> Tags { get; set; }
    }

   

    public class NotesTag
    {
        public long Id { get; set; }
        public Tags Tags { get; set; }
    }

    public class Tags
    {
        public string Name { get; set; }
        public string Code { get; set; }
        public Remainder Remainder { get; set; }
    }

    public class Remainder 
    {

    }
}
