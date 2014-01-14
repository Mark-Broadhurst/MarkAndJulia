namespace MarkAndJulia.Data.Repositories
{
    #region Namespaces

    using System.Collections.Generic;

    using MarkAndJulia.Data.Access;
    using MarkAndJulia.Data.Objects;

    #endregion

    public class OrderOfTheDayRepository : Repository<OrderOfTheDay>, IOrderOfTheDayRepository
    {
        #region Public Methods and Operators

        public IEnumerable<OrderOfTheDay> GetByDateOrder()
        {
            return Session.QueryOver<OrderOfTheDay>().OrderBy(day => day.Date).Asc.Cacheable().Future<OrderOfTheDay>();
        }

        #endregion
    }
}