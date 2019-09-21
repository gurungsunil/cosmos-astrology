import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AppService {
  private reloginOverlay = new BehaviorSubject<boolean>(false);

  reloginOverlay$ = this.reloginOverlay.asObservable();

  setReloginOverlay(val: boolean) {
    this.reloginOverlay.next(val);
  }
}
