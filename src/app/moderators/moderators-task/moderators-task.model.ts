export interface ModeratorsTaskModel {
    engQuesId: number;
    engQuestion: string;
    modAssigned: boolean;
    assignedModId: number;
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


export interface QuestionUnclearModel {
    id?: number;
	engQuestionId: number;
	description: string;
	assignedModId: number;
	userId: number;
	messageId?: string;
	sentStatus?: boolean;
	failureMsg?: string;
}

export interface TranslatedQuestionRequest {
    engQsnId: number;
	convertedQsn: string;
	userId: number;
}