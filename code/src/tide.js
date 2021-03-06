import {Tide, initActions} from 'tide'
import State from './state'
import AppActions from './actions/index'

// This is where you instantiate your global store and
// register your actions

export default function create() {
  const tide = new Tide()
  tide.setState(new State())
  initActions(tide, {app: AppActions})
  return tide
}
