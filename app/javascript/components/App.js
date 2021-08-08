import React , { Component, Fragment } from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import  Airlines from './Airlines/Airlines'
import  Airline from './Airline/Airline'
import './App.css'

class App extends Component {
    render(){
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Airlines} />
                    <Route exact path="/airlines/:slug" component={Airline} />
                    {/* <UnprotectedRoute path="/login" component={Login}/>
                    <UnprotectedRoute exact path="/register" component={Register} />
                    <UnprotectedRoute path="/forgot-password" component={Forgot}/>
                    <UnprotectedRoute path="/reset-password" component={Reset}/> */}
                </Switch>
            </BrowserRouter>
        )
    }
}
export default App