import { Jewelry } from "./Jewelry";
import { User } from "./User";

export class RequestApproval {
  id: number;
  isConfirm?: boolean;
  desiredPrice?: number;
  valuation?: number;
  requestTime?: string;
  responseTime?: string;
  jewelry?: Jewelry;
  sender?: User;
  responder?: User;
  staff?: User;
  state?: string;
  note?: string;

  constructor(
    id: number,
    isConfirm?: boolean,
    valuation?: number,
    responseTime?: string,
    jewelry?: Jewelry,
    sender?: User,
    state?: string,
    desiredPrice?: number,
    requestTime?: string,
    responder?: User,
    staff?: User,
    note?: string
  ) {
    this.id = id;
    this.isConfirm = isConfirm;
    this.desiredPrice = desiredPrice;
    this.valuation = valuation;
    this.requestTime = requestTime;
    this.responseTime = responseTime;
    this.jewelry = jewelry;
    this.sender = sender;
    this.responder = responder;
    this.staff = staff;
    this.state = state;
    this.note = note
  }
}
