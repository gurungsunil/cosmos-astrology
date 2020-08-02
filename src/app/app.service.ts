import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AppService {
  private reloginOverlay = new BehaviorSubject<boolean>(false);

}
