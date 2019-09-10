import React from 'react'
import Footer from '../components/Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

class About extends React.Component {
    render() {
        return (
            <div>
                About
                <AddTodo />
                <VisibleTodoList />
                <Footer />
            </div>
        )
    }
}

export default About