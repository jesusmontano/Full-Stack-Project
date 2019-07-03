class CreateTickets < ActiveRecord::Migration[5.2]
  def change
    create_table :tickets do |t|
      t.integer :owner_id, null: false
      t.integer :venue_id, null: false
      t.integer :event_id, null: false
      t.float :price, null: false
      t.integer :row, null: false
      t.integer :section, null: false

      t.timestamps
    end
    add_index :tickets, :owner_id
    add_index :tickets, :venue_id
    add_index :tickets, :event_id
  end
end
