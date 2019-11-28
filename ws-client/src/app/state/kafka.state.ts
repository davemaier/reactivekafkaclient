import { State, Action, StateContext, Selector } from '@ngxs/store';
import { AddMessageAction } from './kafka.actions';

export class KafkaStateModel {
  public messages: string[];
}

@State<KafkaStateModel>({
  name: 'kafka',
  defaults: {
    messages: []
  }
})
export class KafkaState {
  @Selector()
  static messages(state: KafkaStateModel): string[] {
    return state.messages;
  }

  @Action(AddMessageAction)
  add(ctx: StateContext<KafkaStateModel>, action: AddMessageAction) {
    const state = ctx.getState();
    ctx.setState({ messages: [ ...state.messages, action.message ] });
  }
}
