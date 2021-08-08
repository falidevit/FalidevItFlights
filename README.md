## FalidevItFlights 
### Une application d'avis sur des vols construite avec Ruby on Rails et React

Cette application est destinée à être un exemple simple d'une application CRUD de notation et d'avis de vol d'avion construite avec **Ruby on Rails** et **React.js** utilisant **Webpacker**.



## Exécution en local
- run `bundle install`
- run `npm install` ou `yarn install`
- run `rails db:create`
- run `rails db:migrate`
- run `rails db:seed`
- run `bundle exec rails s`
- in another tab run `./bin/webpack-dev-server` (pas obligatoire) 
- navigate to `http://localhost:3000`


## Routes
```shell
             Prefix Verb   URI Pattern                           Controller#Action
               root GET    /                                     pages#index
    api_v1_airlines GET    /api/v1/airlines(.:format)            api/v1/airlines#index
                    POST   /api/v1/airlines(.:format)            api/v1/airlines#create
 new_api_v1_airline GET    /api/v1/airlines/new(.:format)        api/v1/airlines#new
edit_api_v1_airline GET    /api/v1/airlines/:slug/edit(.:format) api/v1/airlines#edit
     api_v1_airline GET    /api/v1/airlines/:slug(.:format)      api/v1/airlines#show
                    PATCH  /api/v1/airlines/:slug(.:format)      api/v1/airlines#update
                    PUT    /api/v1/airlines/:slug(.:format)      api/v1/airlines#update
                    DELETE /api/v1/airlines/:slug(.:format)      api/v1/airlines#destroy
     api_v1_reviews POST   /api/v1/reviews(.:format)             api/v1/reviews#create
      api_v1_review DELETE /api/v1/reviews/:id(.:format)         api/v1/reviews#destroy
                    GET    /*path(.:format)                      pages#index
```

---