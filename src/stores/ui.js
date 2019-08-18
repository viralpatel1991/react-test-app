import { observable } from 'mobx';

export default class UiStore {
  @observable currentScreen = 'HOME';

  setCurrentScreen(currentScreen) {
    this.currentScreen = currentScreen;
  }
}
