using MongoDB.Bson;
using MongoDB.Bson.Serialization.Serializers;
using ReleaseBuddy.Interfaces;
using ReleaseBuddy.Models;

namespace ReleaseBuddy.Configurations
{
    public class IntegrationTypeConfiguration : IBsonTypeConfiguration<IntegrationType>
    {
        public void Configure(MongoDB.Bson.Serialization.BsonClassMap<IntegrationType> classMap)
        {
            classMap.AutoMap();
            classMap.MapIdMember(c => c.Id);
            classMap.IdMemberMap.SetSerializer(new StringSerializer(BsonType.ObjectId));
            classMap.MapMember(c => c.Name).SetElementName("name");
        }
    }
}