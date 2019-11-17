export interface AdminMessage {
    messageId?: number;
    text: string;
    // type includes: welcome-message, system-message
    type: string;
    sendMessage: boolean;
}

export const DEFAULT_ADMIN_MESSAGE : AdminMessage= {
    text: null,
    type: null,
    sendMessage: true
}