import { Component } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { ConnectWebSocket } from '@ngxs/websocket-plugin';
import { Observable } from 'rxjs';
import { KafkaState } from './state/kafka.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  @Select(KafkaState.messages)
  kafkaMessages$: Observable<string[]>
  
  constructor(private store:Store){ }

  ngOnInit(){
    this.store.dispatch(new ConnectWebSocket())
  }
}
