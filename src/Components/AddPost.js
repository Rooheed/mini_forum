import React, {Component} from 'react'

class AddPost extends Component {
    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(event) {
        event.preventDefault();
        const PostLink = event.target.elements.text.value
        const description = event.target.elements.description.value
        const post = {
            id: Number(new Date()),
            description: description,
            PostLink: PostLink
        }
        if (description && PostLink) {
            this.props.addPost(post)
            this.props.onHistory.push('/')
        }
    }
    render() {
        return (
    <div>
        <h1> Mini Forum </h1> 
        <div className="form">
        <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Write your title here" name="text"/>
            <input type="text" placeholder="Write your description here" name="description"/>
            <button> Post </button>
        </form>
        </div>
    </div>
    )
    }
}


export default AddPost