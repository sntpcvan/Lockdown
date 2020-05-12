using CoreLibrary.Execution;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Text;

namespace CoreLibrary.MongoDb
{
    public class NoSQL<T> : IMongo<T>
    {
        readonly AppGlobal _appGlobal;
        public NoSQL(AppGlobal appGlobal)
        {
            _appGlobal = appGlobal;
        }
        public IMongoCollection<T> GetCollection(string collectionName) {
            var client = new MongoClient(_appGlobal.ConnectionString);
            var database = client.GetDatabase(collectionName);
            return database.GetCollection<T>(collectionName);
        }
    }
}
