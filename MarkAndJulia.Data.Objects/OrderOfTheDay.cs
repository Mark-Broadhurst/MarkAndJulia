namespace MarkAndJulia.Data.Objects
{
    #region Namespaces

    using System;

    #endregion

    public class OrderOfTheDay
    {
        #region Public Properties

        public virtual DateTime Date { get; set; }

        public virtual int Day
        {
            get
            {
                return Date.Day;
            }
        }

        public virtual string Event { get; set; }

        public virtual string Notes { get; set; }

        public virtual int OrderOfTheDayId { get; set; }

        public virtual string Time
        {
            get
            {
                return Date.ToShortTimeString();
            }
        }

        #endregion
    }
}