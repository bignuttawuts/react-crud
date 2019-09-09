import React from 'react';
import GoToHome from './GoToHome';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addDocument } from '../actions'

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            field1: '',
            field2: '',
            field3: 2,
            field4: false
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

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
                                    <td>{document.text}</td>
                                    <td>Column 2</td>
                                    <td>Column 3</td>
                                    <td>Column 4</td>
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
