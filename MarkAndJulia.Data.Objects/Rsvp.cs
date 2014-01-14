namespace MarkAndJulia.Data.Objects
{
    public class Rsvp
    {
        #region Public Properties

        public virtual bool CanAttend { get; set; }

        public virtual bool CotRequired { get; set; }

        public virtual string DietaryRequirements { get; set; }

        public virtual string Email { get; set; }

        public virtual string GuestNames { get; set; }

        public virtual RoomRequired RoomRequired { get; set; }

        public virtual int RsvpId { get; set; }

        public virtual string Telephone { get; set; }

        #endregion
    }
}