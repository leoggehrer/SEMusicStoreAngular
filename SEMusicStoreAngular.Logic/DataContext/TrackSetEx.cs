#if GENERATEDCODE_ON
using SEMusicStoreAngular.Logic.Entities;

namespace SEMusicStoreAngular.Logic.DataContext
{
    partial class TrackSet
    {
        internal override IQueryable<Track> ExecuteAsQuerySet()
        {
            return base.ExecuteAsQuerySet().Include(e => e.Album)
                                           .Include(e => e.Genre);
        }
    }
}
#endif