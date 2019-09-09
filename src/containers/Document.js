import React from 'react';
import GoToHome from './GoToHome';
import { connect } from 'react-redux';
import { addDocument } from '../actions'

class Document extends React.Component {
    render() {
        const props = this.props
        return (
            <div>
                <h1>Document : {props.match.params.id}</h1>
                <h1>Mode : {props.match.params.mode}</h1>
                <button onClick={e => props.addDocument("New Document")}>Save</button>
                <GoToHome />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    documents: state.documents
})

const mapDispatchToProps = (dispatch) => ({
    addDocument: text => dispatch(addDocument(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(Document)
