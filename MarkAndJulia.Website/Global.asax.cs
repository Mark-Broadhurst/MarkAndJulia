namespace MarkAndJulia.Website
{
    #region Namespaces

    using System.Web;
    using System.Web.Mvc;
    using System.Web.Routing;

    using MarkAndJulia.Website.App_Start;

    #endregion

    // Note: For instructions on enabling IIS6 or IIS7 classic mode, 
    // visit http://go.microsoft.com/?LinkId=9394801
    public class WebApiApplication : HttpApplication
    {
        #region Methods

        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();

            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
        }

        #endregion
    }
}