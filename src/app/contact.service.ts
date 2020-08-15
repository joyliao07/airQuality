import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ContactService {

  constructor(private http: HttpClient) { }

  PostMessage(input: FormGroup) {
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa('api:' + environment.mailGunAPI)
    });

    console.log('input in PostMessage is: ', input);

    const formData = new FormData();
    formData.append('from', `${input['Fullname']} <${input['Email']}>`);
    formData.append('to', 'joyliao07@gmail.com');
    formData.append('subject', 'AirQuality Client Message');
    formData.append('text', input['Comment']);

    return this.http
      .post(
        `https://api.mailgun.net/v3/${environment.mailGunSandbox}.mailgun.org/messages`,
        formData,
        { headers }
      ).subscribe(
        res => { console.log('res : ', res); },
        err => { console.log('err : ', err); }
      );
  }

}
