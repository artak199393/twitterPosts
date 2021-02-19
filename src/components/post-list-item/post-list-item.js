import React, { Component } from 'react';
import './post-list-item.css';

const PostlistItem = ({label, onDelete, onToogleImportant, onToogleLiked, important, like}) =>{
        
        let classNames = "app-list-item d-flex justify-content-between";
        
        if(important){
        classNames +=" important"
        }

        if(like){
            classNames +=" like"
        }
        return(
            <div className={classNames}>
                <span className="app-list-item-label" onClick = {onToogleLiked}>
                    {label}
                </span>
                <div className="d-flex justify-content-center align-items-center">
                    <button type="button" className="btn-star btn-sm" onClick={onToogleImportant}>
                        <i className="fa fa-star"/>
                    </button>
                    <button type="button" className="btn-trash btn-sm" onClick={onDelete}>
                        <i className="fa fa-trash-o"/>
                    </button>
                    <i className="fa fa-heart"/>
                </div>
            </div>
        )
    }
export default PostlistItem;
