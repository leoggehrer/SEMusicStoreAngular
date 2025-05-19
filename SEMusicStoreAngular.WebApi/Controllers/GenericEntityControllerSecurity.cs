//@CodeCopy
#if ACCOUNT_ON
using SEMusicStoreAngular.WebApi.Contracts;

namespace SEMusicStoreAngular.WebApi.Controllers
{
    partial class GenericEntityController<TModel, TEntity, TContract>
    {
        #region partial methods
        partial void OnReadContextAccessor(IContextAccessor contextAccessor)
        {
            contextAccessor.SessionToken = SessionToken;
        }
        #endregion partial methods
    }
}
#endif
