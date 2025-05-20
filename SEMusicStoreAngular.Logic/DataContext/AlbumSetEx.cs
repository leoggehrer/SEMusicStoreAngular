#if GENERATEDCODE_ON
using SEMusicStoreAngular.Logic.Entities;

namespace SEMusicStoreAngular.Logic.DataContext
{
    partial class AlbumSet
    {
        internal override IQueryable<Album> ExecuteAsQuerySet()
        {
            return base.ExecuteAsQuerySet().Include(e => e.Artist);
        }
    }

}
#endif