class CreateTopicInclusions < ActiveRecord::Migration[5.2]
  def change
    create_table :topic_inclusions do |t|
      t.integer :topic_id, null: false
      t.integer :video_id, null: false

      t.timestamps
    end

    add_index :topic_inclusions, [:topic_id, :video_id], unique: true
  end
end
