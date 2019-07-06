namespace ReleaseBuddy.Models
{
    public class BitbucketServerBranch
    {
        public string Id { get; set; }
        public string DisplayId { get; set; }
        public string LatestCommit { get; set; }
        public string LatestChangeset { get; set; }
        public bool IsDefault { get; set; }
    }
}