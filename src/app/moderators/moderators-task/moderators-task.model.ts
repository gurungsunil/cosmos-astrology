export interface ModeratorsTaskModel {
    engQuesId: number;
    endQuestion: string;
    modAssigned: boolean;
    assignedMode: number;
    finishFlag: false;
    userId: number;
}

export const DEFAULT_MODERATORS_TASK = {
    "engQuesId": 6,
    "engQuestion": "What is your name?",
    "modAssigned": true,
    "assignedModId": 1,
    "finishFlag": false,
    "userId": 2
}