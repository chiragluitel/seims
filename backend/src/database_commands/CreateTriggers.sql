CREATE TRIGGER trigger_update_productpricehistory_date_modified_column
BEFORE UPDATE ON m_product_price_history
FOR EACH ROW                                                 
EXECUTE FUNCTION function_update_date_modified_column();

CREATE TRIGGER trigger_update_productpricesmaster_date_modified_column
BEFORE UPDATE ON m_product_prices_master
FOR EACH ROW                                                 
EXECUTE FUNCTION function_update_date_modified_column();

CREATE TRIGGER trigger_update_producttranhistory_date_modified_column
BEFORE UPDATE ON m_product_transaction_history
FOR EACH ROW                                                 
EXECUTE FUNCTION function_update_date_modified_column();


CREATE TRIGGER trigger_update_mshopfloorlocation_date_modified_column
BEFORE UPDATE ON m_shopfloor_location_master
FOR EACH ROW                                                 
EXECUTE FUNCTION function_update_date_modified_column();


CREATE TRIGGER trigger_update_mtranmaster_date_modified_column
BEFORE UPDATE ON m_transactions_master
FOR EACH ROW                                                 
EXECUTE FUNCTION function_update_date_modified_column();

CREATE TRIGGER trigger_update_mtranmaster_date_modified_column
BEFORE UPDATE ON m_transactions_master
FOR EACH ROW                                                 
EXECUTE FUNCTION function_update_date_modified_column();

CREATE TRIGGER trigger_update_mproductimages_date_modified_column
BEFORE UPDATE ON m_productimages_master 
FOR EACH ROW                                                 
EXECUTE FUNCTION function_update_date_modified_column();
