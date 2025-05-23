//@CodeCopy
#if ACCOUNT_ON
namespace SEMusicStoreAngular.WebApi.Controllers
{
    using Microsoft.AspNetCore.Mvc;
    /// <summary>
    /// A base class for an MVC controller without view support.
    /// </summary>
    [Route("api/[controller]")]
    [ApiController]
    public partial class AccountsController : ControllerBase
    {
        /// <summary>
        /// This method checks the login data email/password and, if correct, returns a logon session.
        /// </summary>
        /// <param name="logonModel">The logon data.</param>
        /// <returns>The logon session object.</returns>
        [HttpPost("login")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<Models.Account.LoginSession>> LoginByAsync([FromBody] Models.Account.LogonModel logonModel)
        {
            var result = await Logic.AccountAccess.LoginAsync(logonModel.Email, logonModel.Password, logonModel.Info ?? string.Empty);
            
            return Ok(result);
        }

        /// <summary>
        /// This method performs a logout with the appropriate token.
        /// </summary>
        /// <param name="sessionToken">The session token.</param>
        /// <returns></returns>
        [HttpDelete("{sessionToken}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        public async Task<ActionResult> LogoutByAsync(string sessionToken)
        {
            await Logic.AccountAccess.LogoutAsync(sessionToken).ConfigureAwait(false);

            return NoContent();
        }
        
        /// <summary>
        /// This method checks whether the session token is still valid.
        /// </summary>
        /// <param name="sessionToken">The session token that is checked.</param>
        /// <returns>True if the token is still valid, false otherwise.</returns>
        [HttpGet("issessionalive/{sessionToken}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<bool>> IsSessionAliveAsync(string sessionToken)
        {
            var result = await Logic.AccountAccess.IsSessionAliveAsync(sessionToken);
            
            return Ok(result);
        }
    }
}
#endif
