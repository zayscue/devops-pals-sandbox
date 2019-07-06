using System.Collections.Generic;

namespace ReleaseBuddy.Models
{
    public class PagedList<T> where T : class
    {
        public int Size { get; set; }
        public int Limit { get; set; }
        public bool IsLastPage { get; set; }
        public ICollection<T> Values { get; set; }
    }
}