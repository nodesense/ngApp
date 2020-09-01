import { LoggerService } from './logger.service';
import { HttpClient } from '@angular/common/http';
import { Injectable, Inject, ErrorHandler } from "@angular/core";
import {Location} from "@angular/common";

 
 
import {Router} from "@angular/router";
import { environment } from '../../environments/environment';

@Injectable()
export class ErrorHandlerService implements ErrorHandler {
    
    constructor(private location: Location,
                private http: HttpClient, 
                private logger: LoggerService) {
         
    }

    public handleError( error: any ) : void {
        // Log to the console.
        try {

            console.log("Custom error handler");
            console.group( "ErrorHandler" );
            console.error( error.message );
            console.error( error.stack );
            console.groupEnd();
 

            this.logger.exception(error);
            
        // let data: {} = {}
        // data["message"] = error.message;
        // data["stack_trace"] = JSON.stringify(error.stack);

          
        // //POST /crash/logs
        // this.http.post(environment.apiEndPoint + "/logs/errors",
        //                 data 
        // )
         
        // .subscribe ( () => {
        //     console.log("posted error logs to api");
        // })
    

            

        } catch ( handlingError ) {
            console.group( "ErrorHandler" );
            console.warn( "Error when trying to output error." );
            console.error( handlingError );
            console.groupEnd();
        }
    }
}