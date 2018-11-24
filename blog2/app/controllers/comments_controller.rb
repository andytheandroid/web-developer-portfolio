class CommentsController < ApplicationController

  #very dangerous use this only for developement and testing
  skip_before_action :verify_authenticity_token


	 def create
    @article = Article.find(params[:article_id])
    @comment = @article.comments.create(comment_params)
    redirect_to article_path(@article)
  end
 

   def destroy
    @article = Article.find(params[:article_id])
    @comment = @article.comments.find(params[:id])
    @comment.destroy
    redirect_to article_path(@article)
  end
 

  private
    def comment_params
      params.require(:comment).permit(:commenter, :body)
    end
end
