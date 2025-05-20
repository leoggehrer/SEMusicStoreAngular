
using SEMusicStoreAngular.Common.Modules.Attributes;

namespace SEMusicStoreAngular.Logic.Entities.Views
{
    [View("AlbumArtists")]
    public partial class AlbumArtist : ViewObject
    {
        public IdType AlbumId { get; set; }
        public IdType ArtistId { get; set; }
        public string AlbumTitle { get; set; } = string.Empty;
        public string ArtistName { get; set; } = string.Empty;
    }
}
