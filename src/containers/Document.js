import React from 'react';
import { connect } from 'react-redux';
import { addDocument, getDocument } from '../actions'

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

    componentDidMount() {
        const { getDocument, match } = this.props
        getDocument(match.params.id)
    }

    componentDidUpdate(prevProps, prevState, snapshot)
    {
        const { getDocument, match, document } = this.props

        this.setState({
            field1: document.field1,
            field2: document.field2,
            field3: document.field3,
            field4: document.field4
        });
    }
    render() {
        const props = this.props
        
        return (
            <div>
                <label>Document Id : {props.match.params.id}</label>
                <br />
                <label>Mode : {props.match.params.mode}</label>
                <br />
                <label>
                    Field1: <input name="field1" placeholder="field1" type="text" value={this.state.field1} onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    Field2: <input name="field2" placeholder="field2" type="text" value={this.state.field2} onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    Field3: <input name="field3" placeholder="field3" type="number" value={this.state.field3} onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    Field4: <input name="field4" placeholder="field4" type="number" value={this.state.field4} onChange={this.handleInputChange} />
                </label>
                <br />
                <button onClick={e => props.addDocument(this.state)}>Save</button>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    document: state.documents.viewDocument
})

const mapDispatchToProps = (dispatch) => ({
    addDocument: document => dispatch(addDocument(document)),
    getDocument: id => dispatch(getDocument(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Document)
