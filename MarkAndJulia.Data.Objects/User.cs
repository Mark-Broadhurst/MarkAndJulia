namespace MarkAndJulia.Data.Objects
{
    public class User
    {
        #region Public Properties

        public virtual string EmailAddress { get; set; }

        public virtual string Firstname { get; set; }

        public virtual bool IsAdmin { get; set; }

        public virtual string Lastname { get; set; }

        public virtual string PasswordHash { get; set; }

        public virtual int UserId { get; set; }

        #endregion
    }
}