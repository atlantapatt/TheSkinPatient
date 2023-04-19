class CreateProductWishlists < ActiveRecord::Migration[6.1]
  def change
    create_table :product_wishlists do |t|
      t.integer :product_id
      t.integer :wishlist_id

      t.timestamps
    end
  end
end
