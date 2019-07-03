class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.date :date, null: false
      t.integer :home_team_id, null: false
      t.integer :away_team_id, null: false
      t.integer :venue_id, null: false
      t.string :sport, null: false

      t.timestamps
    end
    add_index :events, :date
    add_index :events, :home_team_id
    add_index :events, :away_team_id
    add_index :events, :venue_id
  end
end
