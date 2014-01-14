CREATE TABLE [dbo].[ContactUs] (
    [ID]        INT            IDENTITY (1, 1) NOT NULL,
    [Name]      NVARCHAR (100) NOT NULL,
    [Telephone] NVARCHAR (15)  NULL,
    [Email]     NVARCHAR (100) NULL,
    [Question]  NVARCHAR (MAX) NOT NULL,
    CONSTRAINT [PrimaryKey_740f1231-67e3-4d8e-ba11-e24f69a7d0e7] PRIMARY KEY CLUSTERED ([ID] ASC)
);

