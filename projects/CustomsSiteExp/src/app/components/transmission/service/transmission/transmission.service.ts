import { Injectable } from '@angular/core';
import { environment } from 'projects/CustomsSiteExp/src/environments/environment';
import { BehaviorSubject } from 'rxjs';
import { IMalamMainData} from '../../models/Transmission';
import { CommunicationService } from '../../../../core/services/communication.service';
import { ShipmentKey } from 'projects/CustomsSiteExp/src/app/core/models/shipment';
import { getMaxListeners } from 'process';

@Injectable({
  providedIn: 'root'
})
export class TransmissionService {

  constructor(private webAPI: CommunicationService) { }
  malamMain: IMalamMainData;

  setTransmission(jsonTransmission: any)
  {
    this.malamMain = jsonTransmission;
  }

  async GetTansmissionLog( key: ShipmentKey) {
    return this.webAPI.sendWebRequest("Transmission/GetTansmissionLog" , key);
  }

}

