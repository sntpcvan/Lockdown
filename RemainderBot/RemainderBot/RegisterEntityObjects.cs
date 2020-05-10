using CoreLibrary.Execution;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using RemainderBot.Core.DataLayer.Context;
using RemainderBot.Core.Domain;
using RemainderBot.Core.Repository;
using System;
using System.Collections.Generic;
using System.Text;

namespace RemainderBot
{
    public static class RegisterEntityObjects
    {
        public static void RegisterDataBase(this IServiceCollection services, IServiceProvider provider)
        {
            services.AddDbContext<RemainderContext>();
            services.AddScoped<RemainderContext>();
            TriggerMigration(services, provider);



            services.AddTransient<INotesRepository, NotesRepository>();
            services.AddTransient<NotesProcessor>();


        }

        private static void TriggerMigration(IServiceCollection services, IServiceProvider provider)
        {
            var service = services.BuildServiceProvider();
            var dbContext = service.GetService<RemainderContext>();
            dbContext.Database.Migrate();
        }
    }
}
