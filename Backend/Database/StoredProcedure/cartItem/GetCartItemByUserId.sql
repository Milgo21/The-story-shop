USE [StoryShop]
GO
alter PROCEDURE GetCartItemByUserId
    @user_id VARCHAR(255)

AS
BEGIN
    SET NOCOUNT ON;
    SELECT c.*, p.* FROM Cart_items c
    LEFT JOIN Products p on p.id = c.product_id
    WHERE user_id = @user_id;
END