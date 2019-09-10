import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions'

class DocumentList extends React.Component {

    componentDidMount() {
        this.props.getDocuments();
    }

    render() {
        const props = this.props
        return (
            <div>
                <Link to="/docs/new">Add Document</Link>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Column 1</th>
                            <th>Column 2</th>
                            <th>Column 3</th>
                            <th>Column 4</th>
                            <th></th>
                            <th></th>
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
                                        <Link to={`/docs/${document.id}/view`}>View</Link>
                                    </td>
                                    <td>
                                        <Link to={`/docs/${document.id}/edit`}>Edit</Link>
                                        <button onClick={() => props.openEditDocument(document)}>Edit</button>
                                    </td>
                                    <td>
                                        <button onClick={() => props.deleteDocument(document.id)}>Delete</button>
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
    documents: state.documents.data
})

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        getDocuments: Actions.getDocuments
    }, dispatch)
)
export default connect(mapStateToProps, mapDispatchToProps)(DocumentList)