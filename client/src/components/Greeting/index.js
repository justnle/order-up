import React from 'react';
import './style.css';

class Greeting extends React.Component {
    state = {
        hour: null,
    }

    componentDidMount() {
        this.getHour()
    }

    getHour = () => {
        const date = new Date();
        const hour = date.getHours()
        this.setState({
            hour
        });
    }

    render() {
        const { hour } = this.state;
        return (
            <div className='title'>
                <h2 id='greeting' className='text-center'>
                    {hour < 12 ? `Good Morning` : `Good evening`}
                </h2>
            </div>
        );
    }

}

export default Greeting;


