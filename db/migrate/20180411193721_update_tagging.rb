class UpdateTagging < ActiveRecord::Migration[5.1]
  def change
    add_index :taggings, [:note_id, :tag_id], unique: true
  end
end
