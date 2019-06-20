require 'test_helper'

class IndexControllerTest < ActionDispatch::IntegrationTest
  test "should get update" do
    get index_update_url
    assert_response :success
  end

end
