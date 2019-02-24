import React from 'react'
import PostForum from './PostForum'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

//anchor tag, href attribute
function Forum(props) {
    return <div>
                <Link className="addIcon" to="/AddPost"> </Link>
                <div className="photoGrid">
                {props.posts
                    .sort(function(x,y) {
                        return y.id - x.id
                    })
                    .map((post, index) => <PostForum key={index} post={post} {...props} index={index}/>)}
            </div>
        </div>
}

Forum.propTypes = {
    posts: PropTypes.array.isRequired,
   }



export default Forum