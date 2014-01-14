namespace MarkAndJulia.Website.Controllers
{
    #region Namespaces

    using System.Web.Http;

    using MarkAndJulia.Data.Access;
    using MarkAndJulia.Data.Objects;

    #endregion

    public class ContactController : ApiController
    {
        #region Fields

        private readonly IContactUsRepository _contactUsRepository;

        #endregion

        #region Constructors and Destructors

        public ContactController(IContactUsRepository contactUsRepository)
        {
            _contactUsRepository = contactUsRepository;
        }

        #endregion

        #region Public Methods and Operators

        public void Post(ContactUs contactUs)
        {
            _contactUsRepository.Save(contactUs);
        }

        #endregion
    }
}