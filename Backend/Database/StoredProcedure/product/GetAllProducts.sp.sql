USE [StoryShop]
GO
CREATE OR ALTER PROCEDURE GetAllProducts
AS
BEGIN
    SELECT * FROM products
    WHERE is_deleted=0
END