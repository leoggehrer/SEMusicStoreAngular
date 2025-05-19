//@CodeCopy
namespace SEMusicStoreAngular.Logic.Contracts
{
    public partial interface IValidatableEntity
    {
        void Validate(IContext context, EntityState entityState);
    }
}
