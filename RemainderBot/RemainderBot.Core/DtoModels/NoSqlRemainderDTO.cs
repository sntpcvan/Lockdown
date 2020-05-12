using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Text;

namespace RemainderBot.Core.DtoModels.NOSQL
{
    public class Notes
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        protected DateTime CreatedOn { get; set; }
        protected DateTime LastModified { get; set; }
        public IEnumerable<TextContent> MainContent { get; set; }
        public DateTime CreateDateTime { get; set; }
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
        public long Id { get; set; }
        public string Name { get; set; }
        public string Code { get; set; }
        public Remainder Remainder { get; set; }
    }

    public class Remainder
    {

    }

    public class TextContent
    {

        public long Id { get; set; }
        public string Data { get; set; }
        public string Attribute { get; set; }
    }
}
