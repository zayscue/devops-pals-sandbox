using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using MongoDB.Bson;
using MongoDB.Driver;
using ReleaseBuddy.Interfaces;

namespace ReleaseBuddy.Repositories
{
    public abstract class RepositoryBase<T> : IRepositoryBase<T> where T : class
    {
        protected abstract string CollectionName { get; }
        protected IMongoDatabase Database;
        protected IMongoCollection<T> Collection;

        protected RepositoryBase(IMongoClient client, IDatabaseSettings settings)
        {
            if (client == null)
                throw new ArgumentNullException(nameof(client));
            if (settings == null)
                throw new ArgumentNullException(nameof(settings));
            Database = client.GetDatabase(settings.DatabaseName);
            Collection = Database.GetCollection<T>(CollectionName);
        }

        public async virtual Task<IEnumerable<T>> GetAll()
        {
            var cursor = await Collection.FindAsync(item => true);
            return await cursor.ToListAsync();
        }

        public async virtual Task<T> CreateAsync(T entity)
        {
            await Collection.InsertOneAsync(entity);
            return entity;
        }

        public async virtual Task RemoveAsync(string id)
        {
            await Collection.DeleteOneAsync(Builders<T>.Filter.Eq("_id", new ObjectId(id)));
        }
    }
}