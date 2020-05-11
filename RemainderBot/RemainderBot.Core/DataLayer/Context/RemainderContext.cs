using CoreLibrary.EFCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using CoreLibrary.Execution;
using System.Data.Common;

namespace RemainderBot.Core.DataLayer.Context
{
    public class RemainderContext : DbContext
    {

        private readonly string _connectionString;
        private readonly DbConnection dbConnection;
        public RemainderContext(AppGlobal global)
        {
            _connectionString = global.ConnectionString;
            dbConnection = global.DbConnection;
        }

        public RemainderContext() {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(dbConnection);
            //optionsBuilder.UseSqlServer("Server = localhost; Database = REMAI; Trusted_Connection = True;");
        }

        public virtual DbSet<Notes> Notes { get; set; }
        public virtual DbSet<NotesTag> NotesTag { get; set; }
        public virtual DbSet<Tags> Tags { get; set; }
        public virtual DbSet<Remainder> Remainder { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
           // modelBuilder.Entity<Notes>().Property(p => p.MainContent).IsRequired();
        }

    }

    public class Notes: CoreEntity
    {       
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

    public class Tags : CoreEntity
    {
        public string Name { get; set; }
        public string Code { get; set; }
        public Remainder Remainder { get; set; }
    }

    public class Remainder : CoreEntity
    {
         
    }

    public class TextContent {

        public long Id { get; set; }
        public string Data { get; set; }
        public string Attribute { get; set; }
    }
}
