import {Injectable} from '@angular/core';
import {NotificationsService} from 'angular2-notifications';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private nService: NotificationsService) {
  }

  errFunc(): void {
    this.nService.warn('¡Advertencia!', 'Función matemática no válida', {
      timeOut: 3000,
      showProgressBar: true,
      pauseOnHover: true,
      clickToClose: true
    });
  }

  errParams(message: string): void {
    this.nService.warn('¡Advertencia!', message, {
      timeOut: 3000,
      showProgressBar: true,
      pauseOnHover: true,
      clickToClose: true
    });
  }

}
