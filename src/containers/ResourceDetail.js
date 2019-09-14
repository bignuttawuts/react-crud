import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import * as Actions from '../actions';

class ResourceDetail extends React.Component {

    state = { data: null, itemDialog: { isOpen: false, data: null } };

    componentDidMount() {
        this.updateDocumentState();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (!_.isEqual(this.props.location, prevProps.location)) {
            this.updateDocumentState();
        }

        if (
            (this.props.document.data && !this.state.data) ||
            (this.props.document.data && this.state.data && this.props.document.data.id !== this.state.data.id)
        ) {
            this.setState({ ...this.props.document })
        }
    }

    handleChange = (event) => {
        this.setState({ data: _.set({ ...this.state.data }, event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value) });
    }

    handleChangeItemDialog = (event) => {
        this.setState({ itemDialog: { isOpen: this.state.itemDialog.isOpen, data: _.set({ ...this.state.data }, event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value) }});
    }

    updateDocumentState = () => {
        const params = this.props.match.params;
        const { documentId, mode } = params;

        if (mode === 'new') {
            this.props.newDocument();
        } else {
            this.props.getDocument(documentId)
        }
    }

    handleClickViewItemDialog = (item) => {
        this.setState({
            itemDialog: { isOpen: true, data: item }
        })
    }

    handleClickCloseItemDialog = () => {
        this.setState({
            itemDialog: { isOpen: false }
        })
    }

    handleClickDelete = (item) => {

    }

    render() {
        const props = this.props;
        const { data, itemDialog } = this.state;

        return (
            data && <div>
                <div className="field">
                    <label className="label">Document Id</label>
                    {props.match.params.documentId}
                </div>
                <div className="field">
                    <label className="label">Mode</label>
                    {props.match.params.mode}
                </div>
                <div className="field">
                    <label className="label">Field1</label>
                    <div className="control">
                        <input className="input" name="field1" placeholder="field1" type="text" value={data.field1} onChange={this.handleChange} />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Field2</label>
                    <div className="control">
                        <input className="input" name="field2" placeholder="field2" type="text" value={data.field2} onChange={this.handleChange} />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Field3</label>
                    <div className="control">
                        <input className="input" name="field3" placeholder="field3" type="text" value={data.field3} onChange={this.handleChange} />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Field4</label>
                    <div className="control">
                        <input className="input" name="field4" placeholder="field4" type="text" value={data.field4} onChange={this.handleChange} />
                    </div>
                </div>
                <button className="button is-primary">Add Item</button>
                <table className="table is-bordered is-striped is-narrow is-hoverable">
                    <thead>
                        <tr>
                            <th>Item Id</th>
                            <th>Item Name</th>
                            <th>Item Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.items && data.items.map(item =>
                                <tr>
                                    <td>{item.itemId}</td>
                                    <td>{item.itemName}</td>
                                    <td>{item.itemPrice}</td>
                                    <td>
                                        <button className="button is-light" onClick={event => this.handleClickViewItemDialog(item)}>View</button>
                                        <button className="button is-light" onClick={event => this.handleClickDelete(item)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                <button className="button is-success" onClick={e => props.saveDocument(data)}>Save</button>

                <div class={`modal ${itemDialog.isOpen ? 'is-active' : ''}`}>
                    <div class="modal-background"></div>
                    <div class="modal-card">
                        <header class="modal-card-head">
                            <p class="modal-card-title">Modal title</p>
                            <button class="delete" onClick={event => this.handleClickCloseItemDialog()} aria-label="close"></button>
                        </header>
                        <section class="modal-card-body">
                        <div className="field">
                                <label className="label">Item Id</label>
                                <div className="control">
                                    <input className="input" name="itemDialog.data.itemId" placeholder="Item Id" type="text" 
                                        value={itemDialog.data && itemDialog.data.itemId}
                                        onChange={this.handleChangeItemDialog} />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Item Name</label>
                                <div className="control">
                                    <input className="input" name="itemDialog.data.itemName" placeholder="Item Name" type="text" 
                                        value={itemDialog.data && itemDialog.data.itemName}
                                        onChange={this.handleChangeItemDialog} />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Item Price</label>
                                <div className="control">
                                    <input className="input" name="itemDialog.data.itemPrice" placeholder="Item Price" type="text" 
                                        value={itemDialog.data && itemDialog.data.itemPrice}
                                        onChange={this.handleChangeItemDialog} />
                                </div>
                            </div>
                        </section>
                        <footer class="modal-card-foot">
                            <button class="button is-success" onClick={event => this.handleClickSaveItemDialog()}>Save changes</button>
                            <button class="button" onClick={event => this.handleClickCloseItemDialog()}>Cancel</button>
                        </footer>
                    </div>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    document: state.document
})

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        getDocument: Actions.getDocument,
        newDocument: Actions.newDocument,
        saveDocument: Actions.saveDocument
    }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(ResourceDetail);
