namespace MarkAndJulia.Website.Models
{
    public class SignInRequest
    {
        #region Public Properties

        public string Email { get; set; }

        public string Password { get; set; }

        public bool RememberMe { get; set; }

        #endregion
    }
}