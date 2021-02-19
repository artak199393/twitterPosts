import React from 'react';
import PostlistItem from '../post-list-item';
import './post-list.css';

const PostList = ({posts,onDelete, onToogleImportant, onToogleLiked}) =>{
    const elements = posts.map((item) =>{
        return(
            <li key={item.id} className="list-group-item">
            <PostlistItem 
            // label={item.label}
            // like={item.like} 
            // important={item.important}
            {...item}
            onDelete={() => onDelete(item.id)}
            onToogleImportant={() => onToogleImportant(item.id)}
            onToogleLiked={() => onToogleLiked(item.id)}/>
            
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