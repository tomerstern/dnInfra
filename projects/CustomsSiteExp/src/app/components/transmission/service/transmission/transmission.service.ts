import { Injectable } from '@angular/core';
import { CooKey } from 'projects/CustomsSiteExp/src/app/coo/models/coo';
import { environment } from 'projects/CustomsSiteExp/src/environments/environment';
import { BehaviorSubject } from 'rxjs';
import { IMalamMainData} from '../../models/Transmission';
import { CommunicationService } from '../../../../core/services/communication.service';

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

  async getCooHeaderList( key: CooKey) {
    //let jsonKey: any = JSON.stringify(key);
    return this.webAPI.sendWebRequest("Transmission/GetTansmissionLog" , key);
    // return this.sendWebRequest("Transmission/GetTansmissionLog" , jsonKey);
  }
}

