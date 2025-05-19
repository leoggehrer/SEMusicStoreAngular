//@CodeCopy
#if ACCOUNT_ON
namespace SEMusicStoreAngular.Logic.Contracts
{
    partial interface IContext
    {
        #region properties
        /// <summary>
        /// Sets the session token.
        /// </summary>
        string SessionToken { set; }
        #endregion properties
    }
}
#endif
