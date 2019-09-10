import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';

class DocumentList extends React.Component {

    componentDidMount() {
        this.props.getDocuments();
    }

    handleClickView = (document) => {
        this.props.history.push('/documents/' + document.id + '/view');
    }
    
    handleClickDelete = (document) => {
        this.props.deleteDocument(document);
    }
    
    render() {
        const props = this.props
        return (
            <div>
                <Link to="/documents/new">Add Document</Link>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Field 1</th>
                            <th>Field 2</th>
                            <th>Field 3</th>
                            <th>Field 4</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.documents.map(document =>
                                <tr key={document.id}>
                                    <td>{document.id}</td>
                                    <td>{document.field1}</td>
                                    <td>{document.field2}</td>
                                    <td>{document.field3}</td>
                                    <td>{document.field4}</td>
                                    <td>
                                        <button onClick={event => this.handleClickView(document)}>View</button>
                                        <button onClick={event => this.handleClickDelete(document)}>Delete</button>
                                    </td>
                                </tr>
                            )}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    documents: state.documents.data.filter(document => !document.isDeleted)
})

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        getDocuments: Actions.getDocuments,
        deleteDocument: Actions.deleteDocument
    }, dispatch)
)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DocumentList));
