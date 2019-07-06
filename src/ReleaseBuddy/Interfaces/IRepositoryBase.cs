using System.Collections.Generic;
using System.Threading.Tasks;

namespace ReleaseBuddy.Interfaces
{
    public interface IRepositoryBase<T> where T : class
    {
        Task<IEnumerable<T>> GetAll();
        Task<T> CreateAsync(T entity);
        Task RemoveAsync(string id);
    }
}