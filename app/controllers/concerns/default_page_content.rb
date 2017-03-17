module DefaultPageContent
  extend ActiveSupport::Concern 

  included do 
    before_filter :set_page_defaults
  end

  def set_page_defaults
    @page_title = "MyPortfolio | My Portfolio Website"
    @seo_keywords = "Alfredo Urdaneta Portfolio"
  end
end