import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addTodo } from '../actions'

function Home(props) {
    return (
        <div>
            <h1>Home</h1>
            <button onClick={e => props.addTodo("New Document")}>Add Document</button>
            <ul>{
                props.documents.map(document =>
                    <li key={document.id}><Link to={`/doc/${document.id}`}>{document.text}</Link></li>
                )}
            </ul>
        </div>
    )
}


const mapStateToProps = (state) => ({
    documents: state.documents
})

const mapDispatchToProps = (dispatch) => ({
    addTodo: text => dispatch(addTodo(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);