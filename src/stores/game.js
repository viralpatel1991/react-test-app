import { observable } from 'mobx';
// import DATA from '../data/data.json';

export default class GameStore {
  @observable ui;
  @observable selectedOption = 0;

  constructor(ui) {
    this.ui = ui;
  }
}
