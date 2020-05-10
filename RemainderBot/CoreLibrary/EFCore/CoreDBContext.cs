using CoreLibrary.Execution;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace CoreLibrary.EFCore
{
    public abstract class CoreDBContext : DbContext
    {
        private string  _connectionString { get; }

        public CoreDBContext(AppGlobal Global)
        {
            _connectionString = Global.ConnectionString;
        }

        public CoreDBContext() { }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) {
            //optionsBuilder.UseSqlServer(_connectionString);
            optionsBuilder.UseSqlServer("Server = localhost\\sqlexpress; Database = REMAI; Trusted_Connection = True;");
        }

        protected abstract override void OnModelCreating(ModelBuilder modelBuilder);
        

    }
}
