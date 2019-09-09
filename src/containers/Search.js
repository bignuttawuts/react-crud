import React from 'react';
import GoToHome from './GoToHome';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addDocument } from '../actions'

class Search extends React.Component {
    render() {
        const props = this.props
        return (
            <div>
                <GoToHome />
                <h1>Search : {props.match.params.id}</h1>
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
                                    </td>
                                    <td>
                                        <button>Delete</button>
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
    documents: state.documents
})

const mapDispatchToProps = (dispatch) => ({
    addDocument: text => dispatch(addDocument(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)
