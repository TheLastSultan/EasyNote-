class AddIndexToUsersTable < ActiveRecord::Migration[5.1]
  def change
    add_index :users, :session_token
    add_index :users, :username
    change_column_null :users, :username, false
  end
end
