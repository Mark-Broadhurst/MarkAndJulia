namespace MarkAndJulia.Website.Controllers
{
    #region Namespaces

    using System.Web.Mvc;

    #endregion

    public class HomeController : Controller
    {
        #region Public Methods and Operators

        public ActionResult Index()
        {
            return View();
        }

        #endregion
    }
}