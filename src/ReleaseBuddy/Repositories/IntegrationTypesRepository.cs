using ReleaseBuddy.Models;
using MongoDB.Driver;
using ReleaseBuddy.Interfaces;

namespace ReleaseBuddy.Repositories
{
    public class IntegrationTypesRepository : RepositoryBase<IntegrationType>
    {
        protected override string CollectionName => "integrationTypes";

        public IntegrationTypesRepository(IMongoClient client, IDatabaseSettings settings) : base(client, settings)
        {
        }
    }
}