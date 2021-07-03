import { Subject } from 'rxjs';

interface InitialState {
  loggedInUser: { loggedIn: boolean; empId: string; name: string };
}

let loggedInState: InitialState = {
  loggedInUser: {
    loggedIn: false,
    empId: '',
    name: ''
  }
};

interface Event {
  type: String;
  payload?: {
    empId: string;
    name: string;
  };
}

export const store = new Subject<InitialState>();

export const eventDispatcher = new Subject<Event>();

eventDispatcher.subscribe((data: Event) => {
  switch (data.type) {
    case 'LogInAdmin':
      loggedInState = {
        loggedInUser: {
          loggedIn: true,
          empId: data.payload.empId,
          name: data.payload.name
        }
      };
      store.next(loggedInState);
      break;

    case 'LogOutAdmin':
      loggedInState = {
        loggedInUser: {
          loggedIn: false,
          empId: '',
          name: ''
        }
      };
      store.next(loggedInState);
      break;
    default:
      break;
  }
});
