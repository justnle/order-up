import React from 'react';
import './style.css';
class Seats extends React.Component {
  constructor() {
    super();
    this.state = {
      seat: ['# 1', '# 2', '# 3', '# 4', '# 5', '# 6', '# 7', '# 8', '# 9'],
      seatAvailable: [
        '# 1',
        '# 2',
        '# 3',
        '# 4',
        '# 5',
        '# 6',
        '# 7',
        '# 8',
        '# 9'
      ],
      seatReserved: []
    };
  }

  onClickData(seat) {
    if (this.state.seatReserved.indexOf(seat) > -1) {
      this.setState({
        seatAvailable: this.state.seatAvailable.concat(seat),
        seatReserved: this.state.seatReserved.filter(res => res !== seat)
      });
    } else {
      this.setState({
        seatReserved: this.state.seatReserved.concat(seat),
        seatAvailable: this.state.seatAvailable.filter(res => res !== seat)
      });
    }

    onClickData(seat) {
        if (this.state.seatReserved.indexOf(seat) > -1) {
            this.setState({
                seatAvailable: this.state.seatAvailable.concat(seat),
                seatReserved: this.state.seatReserved.filter(res => res != seat)
            })
        } else {
            this.setState({
                seatReserved: this.state.seatReserved.concat(seat),
                seatAvailable: this.state.seatAvailable.filter(res => res != seat)
            })
        }
    }

    render() {
        return (
            <div>
                <DrawGrid
                    seat={this.state.seat}
                    available={this.state.seatAvailable}
                    reserved={this.state.seatReserved}
                    onClickData={this.onClickData.bind(this)}
                />
            </div>
        )
    }
}

class DrawGrid extends React.Component {
  render() {
    return (
      <>
        <h1 className='display-4 d-flex justify-content-center mt-5 mb-5'>
          Floor Plan
        </h1>
        <div
          id='seatsContainer'
          className='container d-flex column justify-content-center '
        >
          <table className='grid'>
            <tbody>
              <tr>
                {this.props.seat.map(row => (
                  <td
                    className={
                      this.props.reserved.indexOf(row) > -1
                        ? 'reserved'
                        : 'available'
                    }
                    key={row}
                    onClick={e => this.onClickSeat(row)}
                  >
                    {row}{' '}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>

          <div className=' mt-5 ml-5'>
            <div className='col-sm'>
              <AvailableList available={this.props.available} />
            </div>
            <div className='col-sm'>
              <ReservedList reserved={this.props.reserved} />
            </div>
          </div>
        </div>
      </>
    );
  }

    onClickSeat(seat) {
        this.props.onClickData(seat);
    }
}

class AvailableList extends React.Component {
  render() {
    const seatCount = this.props.available.length;
    return (
      <div className='left'>
        <h4>
          Available Tables: (
          {seatCount === 0 ? 'No tables available' : seatCount})
        </h4>
        <ul>
          {this.props.available.map(res => (
            <li key={res}>{res}</li>
          ))}
        </ul>
      </div>
    );
  }
}

class ReservedList extends React.Component {
  render() {
    return (
      <div className='right'>
        <h4>Reserved Tables: ({this.props.reserved.length})</h4>
        <ul>
          {this.props.reserved.map(res => (
            <li key={res}>{res}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export {Seats};
