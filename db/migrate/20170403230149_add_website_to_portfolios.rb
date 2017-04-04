class AddWebsiteToPortfolios < ActiveRecord::Migration[5.0]
  def change
    add_column :portfolios, :website, :string
  end
end
