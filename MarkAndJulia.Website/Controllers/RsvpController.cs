namespace MarkAndJulia.Website.Controllers
{
    #region Namespaces

    using System.Web.Http;

    using MarkAndJulia.Data.Access;
    using MarkAndJulia.Data.Objects;

    #endregion

    public class RsvpController : ApiController
    {
        #region Fields

        private readonly IRsvpRepository _rsvpRepository;

        #endregion

        #region Constructors and Destructors

        public RsvpController(IRsvpRepository rsvpRepository)
        {
            _rsvpRepository = rsvpRepository;
        }

        #endregion

        #region Public Methods and Operators

        public void Post(Rsvp rsvp)
        {
            _rsvpRepository.Save(rsvp);
        }

        #endregion
    }
}