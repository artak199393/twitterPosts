import React from 'react';
import AppHeader from '../app-header';
import PostStatusFiltr from '../post-status-filter';
import SerachPanel from '../search-panel';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
import './app.css';

const App = () =>{

    const data =[
        {label: "Going to learn react", important:true, id:"qwedwq"},
        {label: "That is so good", important:false, id:"gege"},
        {label: "I need a break...", important:false, id:"kmlp"},
    ];
    return(
    <div className="app">
        <AppHeader/>
        <div className="serach-panel d-flex">
            <SerachPanel/>
            <PostStatusFiltr/>
        </div>
        <PostList posts = {data}/>
        <PostAddForm/>
    </div>
    )
}

export default App