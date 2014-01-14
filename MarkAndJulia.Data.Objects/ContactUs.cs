namespace MarkAndJulia.Data.Objects
{
    public class ContactUs
    {
        #region Public Properties

        public virtual int ContactUsId { get; set; }

        public virtual string Email { get; set; }

        public virtual string Name { get; set; }

        public virtual string Question { get; set; }

        public virtual string Telephone { get; set; }

        #endregion
    }
}