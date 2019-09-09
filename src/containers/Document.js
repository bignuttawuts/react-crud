import React from 'react';
import GoToHome from './GoToHome';
import { connect } from 'react-redux';
import { addDocument } from '../actions'

class Document extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            field1: '',
            field2: '',
            field3: 0,
            field4: 0
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
                <h1>Document : {props.match.params.id}</h1>
                <h1>Mode : {props.match.params.mode}</h1>
                <label>
                    Field1: <input name="field1" placeholder="field1" type="text" onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    Field2: <input name="field2" placeholder="field2" type="text" onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    Field3: <input name="field3" placeholder="field3" type="number" onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    Field4: <input name="field4" placeholder="field4" type="number" onChange={this.handleInputChange} />
                </label>
                <br />
                <button onClick={e => props.addDocument(this.state)}>Save</button>
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
