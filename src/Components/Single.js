import React, {Component} from 'react'
import PostForum from './PostForum'
import Comments from './Comments'

class Single extends Component {
       render() {
              const {match, posts} = this.props
              const id = Number(match.params.id)
              const post = posts.find((post) => post.id === id)
              const comments = this.props.comments[match.params.id] || []
              const index = this.props.posts.findIndex((post) => post.id === id)

        return <div className='single-post'>
       <h1> Mini Forum </h1> 
       <PostForum post={post} {...this.props} index={index}/>
       <Comments addComment={this.props.addComment} comments={comments} id = {id}/>
       </div> 
 
 } 
}
export default Single

