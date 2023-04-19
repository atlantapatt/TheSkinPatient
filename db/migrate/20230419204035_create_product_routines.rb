class CreateProductRoutines < ActiveRecord::Migration[6.1]
  def change
    create_table :product_routines do |t|
      t.integer :product_id
      t.integer :routine_id

      t.timestamps
    end
  end
end
