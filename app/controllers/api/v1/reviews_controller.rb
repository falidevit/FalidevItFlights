module Api
    module V1
        class ReviewsController < ApplicationController
            
            def create
                review =  airline.reviews.new(review_params)

                if review.save
                    render json: ReviewSerializer.new(review).serialized_json
                else
                    render json: { error: review.errors.messages }, status: 422
                end
            end 

            def destroy
                review = Review.find_by(id: params[:id])
               # review = airline.reviews.find(params[:slug])

                if review.destroy
                    head :no_content
                else
                    render json: { error: review.errors.messages }, status: 422
                end
            end

            private
            def review_params
                params.require(:review).permit(:title, :description, :score, :airline_id)
            end

            # fast_jsonapi serializer
            
            # def serializer(records, options = {})
            #     ReviewSerializer
            #     .new(records, options)
            #     .serialized_json
            # end

            # def errors(record)
            #     { errors: record.errors.messages }
            # end

            def airline
                @airline ||= Airline.find(params[:airline_id])
            end

        end
    end
end