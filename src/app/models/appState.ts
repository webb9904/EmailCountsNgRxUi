import { Recipient } from "../recipients/recipient";

export interface AppState {
    recipients: { recipients: Recipient[] }
}