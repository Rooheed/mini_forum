import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

function PostForum(props) {
    const post = props.post
    return <figure className="figure">
        <Link to={`single/${post.id}`}><figcaption className="heading-1"> <p> {post.PostLink} </p> </figcaption></Link>
        <figcaption className="description"> <p> {post.description} </p> </figcaption>
        <Link className="button" to={`/single/${post.id}`}> 
 <div className="comment-count"> 
 <div className="speech-bubble"> </div>
 {props.comments[post.id] ? props.comments[post.id].length : 0 }
 </div>
 </Link>
 
    </figure>
}

PostForum.propTypes = {
    post: PropTypes.object.isRequired,
}

export default PostForum