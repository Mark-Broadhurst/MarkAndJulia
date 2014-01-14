CREATE TABLE [Wedding].[Guest] (
    [GuestID]         INT            IDENTITY (1, 1) NOT NULL,
    [Firstname]       NVARCHAR (50)  NOT NULL,
    [Lastname]        NVARCHAR (50)  NOT NULL,
    [House Number]    NVARCHAR (50)  NULL,
    [Street Name]     NVARCHAR (50)  NULL,
    [Town]            NVARCHAR (50)  NULL,
    [County]          NVARCHAR (50)  NULL,
    [Postcode]        NVARCHAR (10)  NULL,
    [Email Address]   NVARCHAR (255) NULL,
    [TelephoneNumber] NVARCHAR (15)  NULL,
    [AdultOrChild]    BIT            DEFAULT ((0)) NOT NULL,
    [HasRsvped]       BIT            DEFAULT ((0)) NOT NULL,
    [IsGoing]         BIT            DEFAULT ((0)) NOT NULL,
    CONSTRAINT [PrimaryKey_954542b0-9d45-4c10-a253-cf9bf7fc92cc] PRIMARY KEY CLUSTERED ([GuestID] ASC)
);

