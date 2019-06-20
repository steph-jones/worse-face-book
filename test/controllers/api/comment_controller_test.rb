require 'test_helper'

class Api::CommentControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_comment_index_url
    assert_response :success
  end

  test "should get update" do
    get api_comment_update_url
    assert_response :success
  end

end
