class AddPasswordDigestToUsers < ActiveRecord::Migration[5.2]
  def change
    def change
      add_column :users, :password_digest, :string, null: false
    end
  end
end
