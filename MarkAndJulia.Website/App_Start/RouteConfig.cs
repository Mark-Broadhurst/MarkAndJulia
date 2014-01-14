namespace MarkAndJulia.Website.App_Start
{
    #region Namespaces

    using System.Web.Mvc;
    using System.Web.Routing;

    #endregion

    public class RouteConfig
    {
        #region Public Methods and Operators

        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "Default", 
                url: "{*value}", 
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional });
        }

        #endregion
    }
}