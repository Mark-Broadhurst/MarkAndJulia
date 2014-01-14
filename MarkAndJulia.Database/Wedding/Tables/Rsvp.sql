CREATE TABLE [Wedding].[Rsvp] (
    [RsvpId]              INT            IDENTITY (1, 1) NOT NULL,
    [CanAttend]           BIT            NOT NULL,
    [GuestNames]          NVARCHAR (500) NOT NULL,
    [Telephone]           NVARCHAR (50)  NULL,
    [Email]               NVARCHAR (500) NULL,
    [DietaryRequirements] NVARCHAR (500) NULL,
    [RoomRequired]        INT            NULL,
    [CotRequired]         BIT            NULL,
    CONSTRAINT [PrimaryKey_cbcb05bc-b8c4-4cea-ba47-69bd0e96fd57] PRIMARY KEY CLUSTERED ([RsvpId] ASC)
);

