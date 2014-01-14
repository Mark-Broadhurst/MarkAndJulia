CREATE TABLE [Wedding].[OrderOfTheDay] (
    [OrderOfTheDayId] INT             IDENTITY (1, 1) NOT NULL,
    [Date]            DATETIME2 (7)   NOT NULL,
    [Event]           NVARCHAR (100)  NOT NULL,
    [Notes]           NVARCHAR (1000) NULL,
    CONSTRAINT [PrimaryKey_055b28c8-ded0-479a-980b-177c8fdbfc18] PRIMARY KEY CLUSTERED ([OrderOfTheDayId] ASC)
);

