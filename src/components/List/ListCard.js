import React from 'react'
import { Card } from 'antd';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

class ListCard extends React.Component {
    constructor(props) {
        super()
    }
    componentWillMount() {
        console.log(this.props)
    }
    render() {
        return (
            <Card title="Default size card" extra={<Link to="/">More</Link>} style={{ width: 300 }}>
                {
                    this.props.tags.map(item => {
                        return (<p key={item.id}>{item.text}</p>)
                    })
                }
            </Card>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tags: state.list
    }
}

ListCard = connect(
    mapStateToProps
)(ListCard)

export default ListCard