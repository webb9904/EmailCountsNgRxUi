import { Exclusion } from "../exclusions/exclusion";
import { Recipient } from "../recipients/recipient";

export interface AppState {
    recipients: { recipients: Recipient[] },
    exclusions: { exclusions: Exclusion[] },
}