require 'test_helper'

class Api::ProfilePagesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_profile_pages_index_url
    assert_response :success
  end

  test "should get update" do
    get api_profile_pages_update_url
    assert_response :success
  end

end
