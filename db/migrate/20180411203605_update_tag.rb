class UpdateTag < ActiveRecord::Migration[5.1]
  def change
    add_column :tags, :user_id, :string
    change_column_null :tags, :user_id, false
  end
end
