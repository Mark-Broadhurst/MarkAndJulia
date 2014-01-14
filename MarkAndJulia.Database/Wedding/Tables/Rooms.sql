CREATE TABLE [Wedding].[Rooms] (
    [RoomId]       INT           IDENTITY (1, 1) NOT NULL,
    [NumberOrName] NVARCHAR (50) NOT NULL,
    [Type]         INT           NULL,
    [Floor]        INT           NULL,
    [GuestId]      INT           NULL,
    [CotAvalible]  BIT           NULL,
    [CotRequired]  BIT           NULL,
    CONSTRAINT [PrimaryKey_7135d905-374e-4edc-861e-1a690defe9a8] PRIMARY KEY CLUSTERED ([RoomId] ASC)
);

