namespace MarkAndJulia.Website.Controllers
{
    #region Namespaces

    using System.Linq;
    using System.Web.Http;

    using Breeze.WebApi;

    using Newtonsoft.Json.Linq;

    #endregion

    [BreezeController]
    public class DataController : ApiController
    {
        #region Fields

        private readonly EFContextProvider<MarkAndJuliaContext> _contextProvider =
            new EFContextProvider<MarkAndJuliaContext>();

        #endregion

        #region Public Methods and Operators

        [HttpGet]
        public string Metadata()
        {
            return _contextProvider.Metadata();
        }

        [HttpGet]
        public IQueryable<ContactUs> ContactUs()
        {
            return _contextProvider.Context.ContactUs;
        }

        [HttpGet]
        public IQueryable<OrderOfTheDay> OrderOfTheDay()
        {
            return _contextProvider.Context.OrderOfTheDays;
        }

        [HttpGet]
        public IQueryable<Rsvp> Rsvp()
        {
            return _contextProvider.Context.Rsvps;
        }

        [HttpGet]
        public IQueryable<User> User()
        {
            return _contextProvider.Context.Users;
        }

        [HttpPost]
        public SaveResult SaveChanges(JObject saveBundle)
        {
            return _contextProvider.SaveChanges(saveBundle);
        }

        #endregion
    }
}