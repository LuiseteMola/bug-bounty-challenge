import { makeAutoObservable, runInAction } from "mobx";
import {
  ActionError,
  ActionResultStatus,
  ActionSuccess
} from "../../../types/global";
import { resultOrError } from "../../../utils/global";

export interface User {
  firstName?: string;
  lastName?: string;
  eMail?: string;
}

export default class UserStore {
  user: User | null = null;

  // init function
  constructor() {
    makeAutoObservable(this);
  }

  // actions
  async getOwnUser() {
    const [result, error] = (await resultOrError<User>(
      new Promise((resolve) =>
        setTimeout(
          () =>
            resolve({
              firstName: "Aria",
              lastName: "Test",
              eMail: "linda.bolt@osapiens.com"
            }),
          500
        )
      )
    ));

    if (!!error) {
      return {
        status: ActionResultStatus.ERROR,
        error
      } as ActionError;
    }

    if (result) {
      runInAction(() => {
        this.user = result;
      });

      return {
        status: ActionResultStatus.SUCCESS,
        result: result
      } as ActionSuccess<User>;
    }

    return {
      status: ActionResultStatus.ERROR,
      error: "Something went wrong."
    } as ActionError;
  }
}
