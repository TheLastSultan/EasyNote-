class ModifyNotesTable < ActiveRecord::Migration[5.1]
  def change
    change_column :notes, :body, :text
    add_column :notes, :body_with_style, :text
  end
end
