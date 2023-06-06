class AddAmazonProductUrlToBooks < ActiveRecord::Migration[6.1]
  def change
    add_column :books, :amazon_product_url, :string
  end
end
