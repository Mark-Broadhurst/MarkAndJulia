namespace MarkAndJulia.Website.App_Start
{
    #region Namespaces

    using System.Web.Http;

    #endregion

    public static class WebApiConfig
    {
        #region Public Methods and Operators

        public static void Register(HttpConfiguration config)
        {
            config.Routes.MapHttpRoute(
                name: "DefaultApi", 
                routeTemplate: "api/{controller}/{id}", 
                defaults: new { id = RouteParameter.Optional });
        }

        #endregion
    }
}