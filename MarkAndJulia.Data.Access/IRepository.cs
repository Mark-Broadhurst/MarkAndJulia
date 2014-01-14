namespace MarkAndJulia.Data.Access
{
    public interface IRepository<T>
    {
        #region Public Methods and Operators

        void Delete(T objectToDelete);

        void Save(T objectToInsert);

        #endregion
    }
}