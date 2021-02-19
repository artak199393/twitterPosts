import React, { Component } from 'react';
import AppHeader from '../app-header';
import PostStatusFiltr from '../post-status-filter';
import SerachPanel from '../search-panel';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
import './app.css';

export default class App extends Component {
    constructor(props){
        super(props);
        this.state ={
            data :[
                {label: "Going to learn react", important:true, like:false, id:1},
                {label: "That is so good", important:false, like:false, id:2},
                {label: "I need a break...", important:false, like:false, id:3},
            ],
            term:'',
            filter:'all'
        };
        this.deleteItm = this.deleteItm.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToogleImportant=this.onToogleImportant.bind(this);
        this.onToogleLiked=this.onToogleLiked.bind(this);
        this.onUpdateSearch=this.onUpdateSearch.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);


        this.maxId =4;
    }
    deleteItm(id){
        this.setState(({data}) =>{
            const index = data.findIndex(elem =>elem.id ===id);
            
            // const befor = data.slice(0, index);
            // const after = data.slice(index + 1);
            
            // const newArr = [...befor, ...after];
            
            const newArr = [...data.slice(0, index), ...data.slice(index +1)];
            return{
                data: newArr
            }
        })
    }

    addItem(body){
        const nextItem = {
            label:body,
            important:false,
            id:this.maxId++
        }
        this.setState(({data}) =>{
            const newArr= [...data, nextItem];
            return{
                data: newArr
            }
        })
    }
    onToogleImportant(id){
        this.setState(({data}) =>{
            const index = data.findIndex(elem => elem.id === id)
            const old = data[index];
            const newItem ={...old, important: !old.important};
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index +1)];
            return{
                data:newArr
            }
        })
    }
    onToogleLiked(id){
        this.setState(({data}) =>{
            const index = data.findIndex(elem => elem.id === id)
            const old = data[index];
            const newItem ={...old, like: !old.like};
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index +1)];
            return{
                data:newArr
            }
        })
    }
    serarchPost(items, term){
        if(term.length ===0){
            return items
        }
        return items.filter((item) => {
            return item.label.indexOf(term) >-1
        });
    }
    filterPost(items, filter) {
        if(filter === 'like'){
            return items.filter(item => item.like)
        }else{
            return items
        }
    }
    onUpdateSearch(term){
        this.setState({term});
    }
    onFilterSelect(filter){
        this.setState({filter})
    }
    render(){
        const {data, term, filter}= this.state;
        const liked = data.filter(item => item.like).length;
        const allPosts = data.length;

        const visiblePosts = this.filterPost(this.serarchPost(data, term), filter);
        return(
            <div className="app">
                <AppHeader
                liked={liked}
                allPosts={allPosts}/>
                <div className="serach-panel d-flex">
                    <SerachPanel
                    onUpdateSearch={this.onUpdateSearch}/>
                    <PostStatusFiltr
                    filter={filter}
                    onFilterSelect={this.onFilterSelect}/>
                </div>
                <PostList 
                    posts = {visiblePosts} 
                    onDelete={this.deleteItm}
                    onToogleImportant={this.onToogleImportant}
                    onToogleLiked={this.onToogleLiked}/>
                <PostAddForm
                onAdd={this.addItem}/>
            </div>
            )
    }
    
}
