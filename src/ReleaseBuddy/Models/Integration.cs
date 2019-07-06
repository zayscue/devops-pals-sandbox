using System.Collections.Generic;

namespace ReleaseBuddy.Models
{
    public class Integration
    {
        public Integration()
        {
            Props = new Dictionary<string, string>();
        }

        public string Id { get; set; }
        public string NickName { get; set; }
        public IDictionary<string, string> Props { get; set; }
        public virtual IntegrationType Type { get; set; }
    }
}