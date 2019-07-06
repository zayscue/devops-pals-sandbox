using MongoDB.Bson.Serialization;

namespace ReleaseBuddy.Interfaces
{
    public interface IBsonTypeConfiguration<T> where T : class
    {
        void Configure(BsonClassMap<T> classMap);
    }
}