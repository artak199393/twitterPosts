import React from 'react';
import AppHeader from '../app-header';
import PostStatusFiltr from '../post-status-filter';
import SerachPanel from '../search-panel';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
import './app.css';

const App = () =>{
    return(
    <div className="app">
        <AppHeader/>
        <div className="serach-panel d-flex">
            <SerachPanel/>
            <PostStatusFiltr/>
        </div>
        <PostList/>
        <PostAddForm/>
    </div>
    )
}

export default App