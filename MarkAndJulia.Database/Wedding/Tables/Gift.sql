CREATE TABLE [Wedding].[Gift] (
    [GiftId]             INT             IDENTITY (1, 1) NOT NULL,
    [Name]               NVARCHAR (50)   NOT NULL,
    [Description]        NVARCHAR (1000) NOT NULL,
    [Price]              SMALLMONEY      NOT NULL,
    [PurchasedByGuestId] INT             NULL,
    CONSTRAINT [PrimaryKey_702933e2-5d91-4e2e-abc7-4080c68f9993] PRIMARY KEY CLUSTERED ([GiftId] ASC)
);

