CREATE TABLE [dbo].[User] (
    [UserId]       INT            IDENTITY (1, 1) NOT NULL,
    [Firstname]    NVARCHAR (50)  NOT NULL,
    [Lastname]     NVARCHAR (50)  NOT NULL,
    [EmailAddress] NVARCHAR (255) NOT NULL,
    [PasswordHash] NVARCHAR (64)  NOT NULL,
    [IsAdmin]      BIT            CONSTRAINT [ColumnDefault_28cb3c32-3057-4fa9-8227-fc5807f84c8e] DEFAULT ((0)) NOT NULL,
    CONSTRAINT [PrimaryKey_9ab8bb4b-c9af-47fb-9c40-423f268e1866] PRIMARY KEY CLUSTERED ([UserId] ASC)
);

