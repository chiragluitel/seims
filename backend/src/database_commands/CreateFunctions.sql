CREATE OR REPLACE FUNCTION function_capture_daily_prices()
RETURNS void AS $$
BEGIN               
    INSERT INTO m_product_price_history (
        product_price_id, 
        product_id, 
        sku, 
        store_price, 
        online_price, 
        discount_price,
        date_added,
        date_modified,
        snapshot_date
    )               
    SELECT
        product_price_id, 
        product_id, 
        sku, 
        store_price, 
        online_price, 
        discount_price,
        date_added,
        date_modified,
        CURRENT_DATE
    FROM m_product_prices_master;
END;
$$ LANGUAGE plpgsql;