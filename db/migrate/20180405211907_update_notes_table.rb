class UpdateNotesTable < ActiveRecord::Migration[5.1]
  def change
    change_column_null :notes, :notebook_id, true
  end
end
