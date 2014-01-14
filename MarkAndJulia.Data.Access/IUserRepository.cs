namespace MarkAndJulia.Data.Access
{
    #region Namespaces

    using MarkAndJulia.Data.Objects;

    #endregion

    public interface IUserRepository : IRepository<User>
    {
        #region Public Methods and Operators

        User Get(string email, string passwordHash);

        #endregion
    }
}