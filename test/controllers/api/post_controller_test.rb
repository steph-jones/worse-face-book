require 'test_helper'

class Api::PostControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_post_index_url
    assert_response :success
  end

  test "should get update" do
    get api_post_update_url
    assert_response :success
  end

end
