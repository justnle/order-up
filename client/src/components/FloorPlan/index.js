import React from 'react';
import API from '../../utils/floorPlanAPI';
import './style.css';
class Seats extends React.Component {
  constructor() {
    super();
    this.state = {
      tables: []
    };
  }

  componentDidMount() {
    API.getTables().then(response => {
      this.setState({
        tables: response.data
      });
    });
  }

  onClickData = selectedTable => {
    if (selectedTable.isAvailable) {
      selectedTable.isAvailable = false;
    } else {
      selectedTable.isAvailable = true;
    }

    const { tables } = this.state;

    const updatedTables = tables.map(table =>
      selectedTable._id === table._id ? selectedTable : table
    );

    this.setState({
      tables: updatedTables
    }, () => {
      API.updateTables(selectedTable._id, selectedTable);
    });
  };

  render() {
    return (
      <div>
        <DrawGrid tables={this.state.tables} onClickData={this.onClickData} />
      </div>
    );
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
                {this.props.tables.map(table => (
                  <td
                    className={table.isAvailable ? 'available' : 'reserved'}
                    key={table.tableNumber}
                    onClick={e => this.onClickSeat(table)}
                  >
                    {table.tableNumber}{' '}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>

          <div className=' mt-5 ml-5'>
            <div className='col-sm'>
              <AvailableList available={this.props.tables.filter(table => table.isAvailable).map(table => table.tableNumber)} />
            </div>
            <div className='col-sm'>
              <ReservedList reserved={this.props.tables.filter(table => !table.isAvailable).map(table => table.tableNumber)} />
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

export { Seats };
