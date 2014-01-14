namespace MarkAndJulia.Data.Repositories
{
    #region Namespaces

    using MarkAndJulia.Data.Access;
    using MarkAndJulia.Data.Objects;

    #endregion

    public class UserRepository : Repository<User>, IUserRepository
    {
        #region Public Methods and Operators

        public User Get(string email, string passwordHash)
        {
            return
                Session.QueryOver<User>()
                       .Where(user => user.EmailAddress == email)
                       .Where(user => user.PasswordHash == passwordHash)
                       .SingleOrDefault();
        }

        #endregion
    }
}