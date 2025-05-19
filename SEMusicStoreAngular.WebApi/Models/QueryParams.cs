//@CodeCopy
namespace SEMusicStoreAngular.WebApi.Models
{
    public partial class QueryParams
    {
        public string Filter { get; set; } = string.Empty;
        public string[] Values { get; set; } = [];
    }
}
