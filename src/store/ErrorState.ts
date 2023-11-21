import { runInAction, action, makeObservable, observable } from "mobx";

class ErrorState {
  errors: Array<string> = [];
  
  enqueue(newError: string): void {
    runInAction(() => { this.errors = [...this.errors, newError] });
  };

  dequeue(): void {
    runInAction(() => { this.errors = this.errors.slice(1) });
  };

  constructor() {
    makeObservable(this, {
      errors: observable,
      enqueue: action,
      dequeue: action,
    });
  }
}

export default ErrorState;
