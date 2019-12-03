import { UserDetails } from '../moderators/moderators-task/moderators-task.model';

export interface AstrologerModel {
    userId: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phoneNumber: string;
    gender: string;
    city: string;
    state: string;
    country: string;
}

export const DEFAULT_ASTROLOGER_MODEL = {
    userId: null,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phoneNumber: '',
    gender: '',
    city: '',
    state: '',
    country: ''
}

export interface QueryModel {
    nepQuestionId: number;
    answer: string;
    userId: number;
    moderatorId?: number;
}

export const DEFAULT_QUERY_MODEL : QueryModel = {
    nepQuestionId: 0,
    answer: '',
    userId: 0
}

export interface AstrologersTaskModel {
    success: boolean;
    questionerDetails: {
        questionId: number;
        question: string;
        user: UserDetails,
        possibleDuplicateUsers?: Array<UserDetails>,
        previousQueries: Array<QueryModel>
    };
}