using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Text;

namespace CoreLibrary.MongoDb
{
    public interface IMongo<T>
    {
        IMongoCollection<T> GetCollection(string collectionName);
    }
}
