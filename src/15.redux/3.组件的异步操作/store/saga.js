import { take} from 'redux-saga/effects';

function* mySage() {
  yield take()
}


// 淦 ，这破saga也太麻烦了，建议用redux-thunk，这里就不写了