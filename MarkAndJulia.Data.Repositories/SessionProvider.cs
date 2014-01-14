namespace MarkAndJulia.Data.Repositories
{
    #region Namespaces

    using NHibernate;
    using NHibernate.Cfg;
    using NHibernate.Dialect;
    using NHibernate.Driver;

    #endregion

    public static class SessionProvider
    {
        #region Static Fields

        private static Configuration configuration;

        private static ISessionFactory sessionFactory;

        #endregion

        #region Public Properties

        private static ISessionFactory SessionFactory
        {
            get
            {
                return sessionFactory ?? (sessionFactory = Configuration.BuildSessionFactory());
            }
        }

        #endregion

        #region Properties

        private static Configuration Configuration
        {
            get
            {
                return configuration ?? (configuration = new Configuration().DataBaseIntegration(
                    db =>
                        {
                            db.ConnectionStringName = "MarkAndJulia";
                            db.Dialect<MsSqlAzure2008Dialect>();
                            db.Driver<Sql2008ClientDriver>();
                        }).AddAssembly("MarkAndJulia.Data.Access").Configure());
            }
        }

        #endregion

        #region Public Methods and Operators

        public static ISession GetSession()
        {
            return SessionFactory.OpenSession();
        }

        #endregion
    }
}