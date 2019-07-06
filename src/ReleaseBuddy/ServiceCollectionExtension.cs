using System.Collections.Generic;
using System.Linq;
using Microsoft.Extensions.DependencyInjection;
using MongoDB.Bson.Serialization;
using ReleaseBuddy.Configurations;
using ReleaseBuddy.Models;

namespace ReleaseBuddy
{
    public static class ServiceCollectionExtension
    {
        public static IServiceCollection AddBsonConfigurations(this IServiceCollection services)
            => AddBsonConfigurationClasses(services);

        private static IServiceCollection AddBsonConfigurationClasses(IServiceCollection services)
        {
            var integrationTypeConfig = new IntegrationTypeConfiguration();
            services.AddTransient(integrationTypeConfig.GetType());
            var integrationConfig = new IntegrationConfiguration();
            services.AddTransient(integrationConfig.GetType());


            BsonClassMap.RegisterClassMap<IntegrationType>(cm => integrationTypeConfig.Configure(cm));
            BsonClassMap.RegisterClassMap<Integration>(cm => integrationConfig.Configure(cm));

            return services;
        }
    }
}