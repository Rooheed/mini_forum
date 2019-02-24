import React, {Component} from 'react'
import Title from './Title'
import Forum from './Forum'
import AddPost from './AddPost'
import {Route} from 'react-router-dom'
import Single from './Single'

class Main extends Component {
    constructor() {
       super()
    }

    render() {
        return (
        <div>
            <Route exact path = "/" render={() => (
                <div>
                    <Title title={'Mini Forum'}/> 
                    <Forum {...this.props}/>
                </div>
            )}/>
            <Route path= "/AddPost" render = {({history}) => (
                <AddPost {...this.props} onHistory={history}/>
            )}/>

            <Route path="/single/:id" render = {(params) => (
                <Single {...this.props}{...params}  />
        )}/>
        </div>
        )
    }
}


export default Main