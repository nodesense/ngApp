import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class LoggerService {

  constructor(  private http: HttpClient, ) { }

  log(...args) {
    if (this.log)
      console.log(...args);
  }

  info(...args) {

  }

  error(msg) {
    let data: {} = {}
    data["message"] = msg;

    //data["stack_trace"] = JSON.stringify(error.stack);

      
    //POST /crash/logs
    this.http.post(environment.apiEndPoint + "/logs/errors",
                    data 
    )

    .subscribe ( () => {
      console.log("posted error logs to api");
  })
  }

  exception(error) {
    let data: {} = {}
    data["message"] = error.message;
    data["stack_trace"] = JSON.stringify(error.stack);

      
    //POST /crash/logs
    this.http.post(environment.apiEndPoint + "/logs/errors",
                    data 
    )

    .subscribe ( () => {
      console.log("posted error logs to api");
  })
     
  }

}
