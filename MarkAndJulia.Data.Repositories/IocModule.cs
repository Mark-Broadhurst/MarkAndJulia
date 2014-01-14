namespace MarkAndJulia.Data.Repositories
{
    #region Namespaces

    using MarkAndJulia.Data.Access;

    using Ninject.Modules;

    #endregion

    public class IocModule : NinjectModule
    {
        #region Public Methods and Operators

        public override void Load()
        {
            Kernel.Bind<IOrderOfTheDayRepository>().To<OrderOfTheDayRepository>();
            Kernel.Bind<IContactUsRepository>().To<ContactUsRepository>();
            Kernel.Bind<IRsvpRepository>().To<RsvpRepository>();
            Kernel.Bind<IUserRepository>().To<UserRepository>();
        }

        #endregion
    }
}