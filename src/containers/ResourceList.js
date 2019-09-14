import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
import moment from 'moment'

class ResourceList extends React.Component {

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
                <Link className="button is-primary" to="/documents/new">Add Document</Link>
                <table className="table is-bordered is-striped is-narrow is-hoverable">
                    <thead>
                        <tr>
                            <th>PO No</th>
                            <th>Create Date</th>
                            <th>Status</th>
                            <th>Supplier</th>
                            <th>Delivery Date</th>
                            <th>Requested By</th>
                            <th>Approved By</th>
                            <th>Department</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.documents.map(document =>
                                <tr key={document.id}>
                                    <td>{document.id}</td>
                                    <td>{moment(document.field1, moment.ISO_8601).format("YYYY-MM-DD")}</td>
                                    <td>{document.field2}</td>
                                    <td>{moment(document.field3, moment.ISO_8601).format("YYYY-MM-DD")}</td>
                                    <td>{document.field4}</td>
                                    <td>{document.field5}</td>
                                    <td>{document.field6}</td>
                                    <td>{document.field7}</td>
                                    <td>
                                        <div className="buttons">
                                            <button className="button is-light" onClick={event => this.handleClickView(document)}>View</button>
                                            <button className="button is-light" onClick={event => this.handleClickDelete(document)}>Delete</button>
                                        </div>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ResourceList));
