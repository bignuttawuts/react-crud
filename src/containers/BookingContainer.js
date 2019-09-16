import React from 'react';
import moment from 'moment';
import 'moment/locale/th';
import Booking from '../components/Booking';

class BookingContainer extends React.Component {

    state = {
        currentTabIndex: 0,
        currentTabValue: null,
        master: {
            resources: [
                { id: 'res_1', name: 'นัฐวุฒิ สิงหาบุตร' },
                { id: 'res_2', name: 'สุจิตรา ประคำ' },
                { id: 'res_3', name: 'ปริยฉัตร สิงหาบุตร' }
            ],
            subResources: [
                { id: 'sub_res_1', name: '09:30 - 10:30' },
                { id: 'sub_res_2', name: '11:00 - 12:30' },
                { id: 'sub_res_3', name: '13:30 - 14:00' },
                { id: 'sub_res_4', name: '14:30 - 15:00' },
                { id: 'sub_res_5', name: '15:30 - 17:30' }
            ]
        },
        status: {
            '2019-09-19': [
                { id: 'res_1xsub_res_1', status: 'reserved' },
                { id: 'res_1xsub_res_2', status: 'reserved' },
                { id: 'res_2xsub_res_4', status: 'reserved' },
                { id: 'res_3xsub_res_5', status: 'reserved' }
            ],
            '2019-09-20': [
                { id: 'res_2xsub_res_1', status: 'reserved' },
                { id: 'res_2xsub_res_2', status: 'reserved' },
                { id: 'res_2xsub_res_4', status: 'reserved' },
                { id: 'res_3xsub_res_5', status: 'reserved' }
            ]
        },
        showCount: 5,
        tabValues: [],
        startDate: moment('2019-09-19')
    }

    componentDidMount() {
        moment.locale('th');

        let tabValues = [];
        for (let idx = 0; idx < this.state.showCount; idx++) {
            let day = this.state.startDate.clone().add(idx, 'd').format('YYYY-MM-DD');
            tabValues.push(day)
        }
        this.setState({
            tabValues
        });

        this.handleTabChange(null, 0);
    }

    handleTabChange = (event, currentTabIndex) => {
        let currentTabValue = this.state.startDate.clone().add(currentTabIndex, 'd').format('YYYY-MM-DD');
        this.setState({ currentTabIndex, currentTabValue });
    }

    render() {
        return (
            <Booking
                {...this.state}
                handleTabChange={this.handleTabChange} />
        )
    }
}

export default (BookingContainer);
