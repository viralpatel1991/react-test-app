import React, { Component, PropTypes } from 'react';
import { observer } from 'mobx-react';
import './HomeScreen.scss';
import DATA from './../../data/data.json';
import { OPTIONS } from './../../constants/game_constants';

const LineChart = require('react-chartjs').Line;

@observer
export default class HomeScreen extends Component {

  static propTypes = {
    game: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);
    this.handleValueChange = this.handleValueChange.bind(this);
  }

  handleValueChange(event) {
    this.props.game.selectedOption = event.target.value;
  }

  render() {
    const chartData = {
      labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25' ],
      datasets: [
        {
          label: 'My First dataset',
          fill: false,
          pointHoverRadius: 5,
          pointRadius: 1,
          pointHitRadius: 10,
          data: DATA[this.props.game.selectedOption].data,
          spanGaps: false,
        },
      ],
    };
    return (
      <div>
        <div className="container1">
          <div className="">
            <select className="select" onChange={(e) => { this.handleValueChange(e); }}>
              {
                OPTIONS.map((item) => {
                  return (
                    <option key={item.key} value={item.key}>{item}</option>
                  );
                })
              }
            </select>
          </div> 
        </div>
        <div className="container2">
          <LineChart data={chartData} options={null} width="700" height="500" />
        </div>
      </div>
    );
  }
}
