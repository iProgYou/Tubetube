class CreateVideos < ActiveRecord::Migration[5.2]
  def change
    create_table :videos do |t|
      t.integer :creator_id, null: false
      t.string :title, null: false
      t.text :description
      t.integer :plays, null: false, default: 0

      t.timestamps
    end

    add_index :videos, :title, unique: true
  end
end
