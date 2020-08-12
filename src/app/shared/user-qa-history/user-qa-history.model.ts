import { QuestionAnswerHistory } from 'src/app/moderators/moderators-task/moderators-task.model';

export interface UserQaHistoryModel {
    birthTime: string;
    city: string;
    country: string;
    dateOfBirth: string;
    email: string;
    firstName: string;
    lastName: string;
    profileImageUrl: string;
    questionAnswerHistoryList: Array<QuestionAnswerHistory>;
    state: string;
}
