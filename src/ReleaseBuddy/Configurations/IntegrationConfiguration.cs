using MongoDB.Bson;
using MongoDB.Bson.Serialization;
using MongoDB.Bson.Serialization.Serializers;
using ReleaseBuddy.Interfaces;
using ReleaseBuddy.Models;

namespace ReleaseBuddy.Configurations
{
    public class IntegrationConfiguration : IBsonTypeConfiguration<Integration>
    {
        public void Configure(BsonClassMap<Integration> classMap)
        {
            classMap.AutoMap();
            classMap.MapIdMember(c => c.Id);
            classMap.IdMemberMap.SetSerializer(new StringSerializer(BsonType.ObjectId));
            classMap.MapMember(c => c.NickName).SetElementName("nickName");
            classMap.MapMember(c => c.Props).SetElementName("props");
            classMap.MapMember(c => c.Type).SetElementName("type");
        }
    }
}