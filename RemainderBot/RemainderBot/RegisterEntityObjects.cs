using CoreLibrary.Execution;
using CoreLibrary.MongoDb;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using RemainderBot.Core.DataLayer.Context;
using RemainderBot.Core.Domain;
using RemainderBot.Core.Repository;
using System;
using System.Collections.Generic;
using System.Text;
using NoSQL = RemainderBot.Core.DtoModels.NOSQL;

namespace RemainderBot
{
    public static class RegisterEntityObjects
    {
        public static void RegisterDataBase(this IServiceCollection services, IServiceProvider provider)
        {
            //string database = 
         //   GenerateSQLEntity(services, provider);
            GenerateNoSQLEntity(services, provider);
            services.AddTransient<NotesProcessor>();
            services.AddTransient<INotesRepositoryNoSQL, NotesNoSQLRepository>();

        }

        private static void GenerateNoSQLEntity(IServiceCollection services, IServiceProvider provider)
        {
            services.AddSingleton<IMongo<NoSQL.Notes>, NoSQL<NoSQL.Notes>>();
        }

        private static void GenerateSQLEntity(IServiceCollection services, IServiceProvider provider)
        {
            services.AddDbContext<RemainderContext>();
            services.AddScoped<RemainderContext>();
            TriggerMigration(services, provider);



            services.AddTransient<INotesRepository, NotesSQLRepository>();
         
        }

        private static void TriggerMigration(IServiceCollection services, IServiceProvider provider)
        {
            var service = services.BuildServiceProvider();
            var dbContext = service.GetService<RemainderContext>();
            dbContext.Database.Migrate();
        }
    }
}
