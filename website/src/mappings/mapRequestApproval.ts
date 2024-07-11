import { Jewelry } from "../models/Jewelry";
import { RequestApproval } from "../models/RequestApproval";
import { User } from "../models/User";
import { mapJewelry } from "./mapJewelry";
import { mapUser } from "./mapUser";


export function mapRequestApproval(response: any): RequestApproval {
    const mappedJewelry: Jewelry = mapJewelry(response.jewelry);
    const mappedStaff: User | undefined = response.staff ? mapUser(response.staff) : undefined;
    const mappedSender: User | undefined = response.sender ? mapUser(response.sender) : undefined;
    const mappedResponder: User | undefined = response.responder ? mapUser(response.responder) : undefined;

    return {
        id: response.id,
        isConfirm: response.confirm,
        desiredPrice: response.desiredPrice,
        valuation: response.valuation,
        requestTime: response.requestTime,
        responseTime: response.responseTime,
        state: response.state,
        jewelry: mappedJewelry,
        staff: mappedStaff,
        sender: mappedSender,
        responder: mappedResponder,
        note: response.note
    };
}