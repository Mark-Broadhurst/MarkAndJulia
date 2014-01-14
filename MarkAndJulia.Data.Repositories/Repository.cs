namespace MarkAndJulia.Data.Repositories
{
    #region Namespaces

    using System.Collections.Generic;

    using MarkAndJulia.Data.Access;

    using NHibernate;

    #endregion

    public class Repository<T> : IRepository<T>
        where T : class
    {
        #region Properties

        protected ISession Session
        {
            get
            {
                return SessionProvider.GetSession();
            }
        }

        #endregion

        #region Public Methods and Operators

        public void Delete(T objectToDelete)
        {
            Session.Delete(objectToDelete);
        }

        public T Get(int id)
        {
            return Session.Get<T>(id);
        }

        public IEnumerable<T> GetAll()
        {
            return Session.QueryOver<T>().Cacheable().Future<T>();
        }

        public void Save(T objectToInsert)
        {
            Session.SaveOrUpdate(objectToInsert);
        }

        #endregion
    }
}