namespace MarkAndJulia.Data.Access
{
    #region Namespaces

    using System.Collections.Generic;

    using MarkAndJulia.Data.Objects;

    #endregion

    public interface IOrderOfTheDayRepository : IRepository<OrderOfTheDay>
    {
        #region Public Methods and Operators

        IEnumerable<OrderOfTheDay> GetByDateOrder();

        #endregion
    }
}