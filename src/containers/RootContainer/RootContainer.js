import React, { Component } from 'react';
import { observer } from 'mobx-react';
import HomeScreen from '../../components/HomeScreen/HomeScreen';
import UiStore from '../../stores/ui';
import GameStore from '../../stores/game';
import './RootContainer.scss';

const SCREENS = {
  HOME: HomeScreen,
};

const ui = new UiStore();
const game = new GameStore(ui);

@observer
export default class RootContainer extends Component {
  render() {
    const Screen = SCREENS[ui.currentScreen];
    return (
      <div className="root-container">
        <Screen ui={ui} game={game} />
      </div>
    );
  }
}
