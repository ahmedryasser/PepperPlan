CREATE TABLE [dbo].[Table]
(
	[ClassId] NVARCHAR(36) NOT NULL PRIMARY KEY, 
    [Name] NVARCHAR(36) NULL, 
    [Prerequisites] NVARCHAR(36) NULL, 
    [GesSatisfied] NVARCHAR(36) NULL, 
    [MajorSatisfied] NVARCHAR(36) NULL, 
    [MinorSatisfied] NVARCHAR(36) NULL, 
    [Units] INT NULL, 
    [SemestersOffered] NVARCHAR(36) NULL
)
