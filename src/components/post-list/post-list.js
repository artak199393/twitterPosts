import React from 'react';
import PostlistItem from '../post-list-item';
import './post-list.css';

const PostList = ({posts}) =>{
    const elements = posts.map((item) =>{
        return(
            <li key={item.id} className="list-group-item">
            <PostlistItem 
            label={item.label} 
            important={item.important}/>

            </li>
        )
    })
    return(
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}
export default PostList;