import React from 'react'
import ListTag from '../components/List/ListTags'
import ListCard from '../components/List/ListCard'

class List extends React.Component{
    render(){
        return(
            <div>
                <h1>List</h1>
                <ListTag />
                <br />
                <ListCard />
            </div>
        )
    }
}

export default List