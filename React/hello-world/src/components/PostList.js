import React, { Component } from 'react'
import axios from 'axios'

export class PostList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            post: []
        }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts').then(
            posts=>{
                console.log(posts)
                this.setState(
                    {
                        post:posts.data
                    }
                )
            }
        ).catch(err=>{
            console.log(err)
        })
    }
    render() {
        return (
            <div>
                {this.state.post.map(p=><h1>{ }</h1>)}
            </div>
        )
    }
}

export default PostList