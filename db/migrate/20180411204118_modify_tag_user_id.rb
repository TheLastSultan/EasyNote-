class ModifyTagUserId < ActiveRecord::Migration[5.1]
  def change
    remove_column :tags, :user_id
    add_column :tags, :user_id, :integer
  end
end
