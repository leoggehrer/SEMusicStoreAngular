//@CodeCopy
#if ACCOUNT_ON
namespace SEMusicStoreAngular.WebApi.Contracts
{
    partial interface IContextAccessor
    {
        string SessionToken { set; }
    }
}
#endif
