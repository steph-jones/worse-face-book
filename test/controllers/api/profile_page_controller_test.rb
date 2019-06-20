require 'test_helper'

class Api::ProfilePageControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_profile_page_index_url
    assert_response :success
  end

  test "should get update" do
    get api_profile_page_update_url
    assert_response :success
  end

end
