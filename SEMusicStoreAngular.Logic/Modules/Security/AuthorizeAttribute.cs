﻿//@CodeCopy
#if ACCOUNT_ON
namespace SEMusicStoreAngular.Logic.Modules.Security
{
    /// <summary>
    /// Represents an attribute used to authorize access to a class or method.
    /// </summary>
    /// <remarks>
    /// This attribute can be applied to classes or methods. It indicates that access to the class or method
    /// is restricted and requires authorization.
    /// </remarks>
    /// <seealso cref="System.Attribute" />
    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Method)]
    internal partial class AuthorizeAttribute : Attribute
    {
        /// <summary>
        /// Gets a value indicating whether this property is required.
        /// </summary>
        /// <value><c>true</c> if this property is required; otherwise, <c>false</c>.</value>
        public bool Required { get; set; }
        /// <summary>
        /// Gets the roles associated with the user.
        /// </summary>
        /// <value>
        /// The roles associated with the user.
        /// </value>
        public IEnumerable<string> Roles { get; }
        /// <summary>
        /// Initializes a new instance of the <see cref="AuthorizeAttribute"/> class.
        /// </summary>
        public AuthorizeAttribute()
        {
            Required = true;
            Roles = [];
        }
        /// <summary>
        /// Initializes a new instance of the <see cref="AuthorizeAttribute"/> class with specified roles.
        /// </summary>
        /// <param name="roles">The roles to assign.</param>
        public AuthorizeAttribute(params string[] roles)
        {
            Required = true;
            Roles = roles ?? [];
        }
        /// <summary>
        /// Initializes a new instance of the <see cref="AuthorizeAttribute"/> class.
        /// </summary>
        /// <param name="required">Determines if authorization is required.</param>
        /// <param name="roles">The list of roles allowed for authorization.</param>
        protected AuthorizeAttribute(bool required, params string[] roles)
        {
            Required = required;
            Roles = roles ?? [];
        }
    }
}
#endif

