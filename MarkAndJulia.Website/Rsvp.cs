//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace MarkAndJulia.Website
{
    using System;
    using System.Collections.Generic;
    
    public partial class Rsvp
    {
        public int RsvpId { get; set; }
        public bool CanAttend { get; set; }
        public string GuestNames { get; set; }
        public string Telephone { get; set; }
        public string Email { get; set; }
        public string DietaryRequirements { get; set; }
        public Nullable<int> RoomRequired { get; set; }
        public Nullable<bool> CotRequired { get; set; }
    }
}
