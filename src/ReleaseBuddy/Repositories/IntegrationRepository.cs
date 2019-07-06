using System.Threading.Tasks;
using MongoDB.Bson;
using MongoDB.Driver;
using ReleaseBuddy.Interfaces;
using ReleaseBuddy.Models;

namespace ReleaseBuddy.Repositories
{
    public class IntegrationRepository : RepositoryBase<Integration>
    {
        protected override string CollectionName => "integrations";

        public IntegrationRepository(IMongoClient client, IDatabaseSettings settings) : base(client, settings)
        {
        }

        public override async Task<Integration> CreateAsync(Integration entity)
        {
            entity.Id = ObjectId.GenerateNewId().ToString();
            return await base.CreateAsync(entity);
        }
    }
}