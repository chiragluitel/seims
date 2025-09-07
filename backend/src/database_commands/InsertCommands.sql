INSERT INTO m_product_master (enterprise_id, product_id, product_barcode, category_id)
VALUES ($1, $2, $3, $4)
RETURNING product_id, sku
INSERT INTO m_longdescription_detail (longdescription_text)
VALUES ($5)
RETURNING longdescription_id
INSERT INTO m_product_detail(product_id, sku, product_name, product_description, category_id, longdescription_id)
VALUES ($6, $7, $8, $9, $10)
INSERT INTO m_inventory_master (enterprise_id, product_id, sku, soh, quantity_ordered, location_id)
VALUES()