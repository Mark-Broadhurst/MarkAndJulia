namespace MarkAndJulia.Website.Controllers
{
    #region Namespaces

    using System.Collections.Generic;
    using System.Web.Helpers;
    using System.Web.Http;

    using MarkAndJulia.Data.Access;
    using MarkAndJulia.Data.Objects;
    using MarkAndJulia.Website.Models;

    #endregion

    public class UserController : ApiController
    {
        #region Fields

        private readonly IUserRepository _userRepository;

        #endregion

        public UserController(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        #region Public Methods and Operators

        public IEnumerable<User> Get()
        {
            return new List<User>();
        }

        public User Post(SignInRequest request)
        {
            return _userRepository.Get(request.Email, Crypto.SHA256(request.Password));
        }

        #endregion
    }
}