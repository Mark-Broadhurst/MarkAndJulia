namespace MarkAndJulia.Website.Controllers
{
    #region Namespaces

    using System.Collections.Generic;
    using System.Web.Http;
    using System.Web.Mvc;

    using MarkAndJulia.Data.Access;
    using MarkAndJulia.Data.Objects;

    #endregion

    public class OrderOfTheDayController : ApiController
    {
        #region Fields

        private readonly IOrderOfTheDayRepository _orderOfTheDayRepository;

        #endregion

        public OrderOfTheDayController(IOrderOfTheDayRepository orderOfTheDayRepository)
        {
            _orderOfTheDayRepository = orderOfTheDayRepository;
        }

        #region Public Methods and Operators

        [OutputCache(Duration = 600)]
        public IEnumerable<OrderOfTheDay> Get()
        {
            return _orderOfTheDayRepository.GetByDateOrder();
        }

        #endregion
    }
}