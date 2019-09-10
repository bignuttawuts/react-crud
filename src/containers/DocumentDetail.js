import React from 'react';
import { connect } from 'react-redux';
import { addDocument, getDocument } from '../actions'
import _ from 'lodash';

const newDocumentState = {
    id: '',
    field1: '',
    field2: '',
    field3: '',
    field4: '',
    isDeleted: false
}

class DocumentDetail extends React.Component {

    state = { ...newDocumentState };

    componentDidUpdate(prevProps, prevState, snapshot) {

        if (!prevProps.documentDetail.props.open && this.props.documentDetail.props.open) {
            if (this.props.documentDetail.type === 'edit' &&
                this.props.documentDetail.data &&
                !_.isEqual(this.props.documentDetail.data, prevState)) {
                this.setState({ ...this.props.documentDetail.data });
            }

            if (this.props.documentDetail.type === 'new' &&
                !_.isEqual(newDocumentState, prevState)) {
                this.setState({ ...newDocumentState });
            }
        }
    }

    handleChange = (event) => {
        this.setState(_.set({ ...this.state }, event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value));
    }

    componentDidMount() {
        const { getDocument, match } = this.props
        getDocument(match.params.id)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
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
                    Field1: <input name="field1" placeholder="field1" type="text" value={this.state.field1} onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    Field2: <input name="field2" placeholder="field2" type="text" value={this.state.field2} onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    Field3: <input name="field3" placeholder="field3" type="number" value={this.state.field3} onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    Field4: <input name="field4" placeholder="field4" type="number" value={this.state.field4} onChange={this.handleChange} />
                </label>
                <br />
                <button onClick={e => props.addDocument(this.state)}>Save</button>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    document: state.documents.documentDetail,
    documentDetail: state.documents.documentDetail
})

const mapDispatchToProps = (dispatch) => ({
    addDocument: document => dispatch(addDocument(document)),
    getDocument: id => dispatch(getDocument(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(DocumentDetail)
