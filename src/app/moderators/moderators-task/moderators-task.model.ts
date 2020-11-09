// export interface ModeratorsTaskModel {
//     engQuesId: number;
//     engQuestion: string;
//     modAssigned: boolean;
//     assignedModId: number;
//     finishFlag: false;
//     userId: number;
// }

// export const DEFAULT_MODERATORS_TASK = {
//     "engQuesId": 6,
//     "engQuestion": "What is your name?",
//     "modAssigned": true,
//     "assignedModId": 1,
//     "finishFlag": false,
//     "userId": 2
// }


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

export interface CurrentJob {
  currentJobType: string;
  processUrl: string;
  englishQuestion?: {
    createdAt: string;
    updatedAt: string;
    engQuesId: number;
    engQuestion: string;
    userId: number;
    assignedModId: number;
    markQuestionUnclear: boolean;
    paid: boolean;
    prevEngQuesId: number;
  };
  nepaliAnswer?: {
    createdAt: string;
    updatedAt: string;
    id: number;
    nepQuestionId: number;
    userId: number
    answer: string;
  };
}

export interface UserDetails {
  userId: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  gender: string;
  city: string;
  state: string;
  country: string;
  profileImageUrl: string;
  dateOfBirth: string;
  birthTime: string;
  accurateTime: boolean;
}

export interface QuestionAnswerHistory {
  engQuestion: string;
  status: string;
  createdAt: string;
  translatedEngQuestion: {
    translatedOn: string;
    translatedBy: string;
    nepQuestionId: number;
    translatedQuestion: string;
  };
  nepaliAnswer: {
    nepReply: string;
    repliedBy: string;
    repliedOn: string;
    nepAnswerId: number;
  };
  englishAnswer?: {
    engReply?: string;
    translatedBy?: string;
    translatedOn?: string;
  };
}

export interface ModeratorsTaskModel {
  currentJob: CurrentJob;
  userDetails: UserDetails;
  questionAnswerHistoryList: Array<QuestionAnswerHistory>;
}

// export const DEFAULT_MODERATORS_TASK_MODEL : ModeratorsTaskModel= {
//    "currentJob": {
//        "currentJobType": "nepali-answer",
//        "processUrl": null,
//        "englishQuestion": null,
//        "nepaliAnswer": {
//            "createdAt": "2019-11-26T15:54:14.000+0000",
//            "updatedAt": "2019-12-03T15:42:43.000+0000",
//            "id": 131,
//            "nepQuestionId": 130,
//            "userId": 107,
//            "answer": "safal hunxa"
//        }
//    },
//    "userDetails": {
//        "userId": 107,
//        "firstName": "Sijan",
//        "lastName": "Shrestha",
//        "email": "sijanstha123@gmail.com",
//        "phoneNumber": "9842496932",
//        "gender": "male",
//        "city": "ktm",
//        "state": "0",
//        "country": "Nepal",
//        "profileImageUrl": null,
//        "dateOfBirth": "2019-07-8",
//        "birthTime": "15:35",
//        "accurateTime": true
//    },
//    "questionAnswerHistoryList": [
//        {
//            "engQuestion": "When will I meet the true love of my life?",
//            "status": "clear",
//            "createdAt": "2019-11-26 21:26:43.0",
//            "translatedEngQuestion": {
//                "nepQuestionId": 130,
//                "translatedBy": "Voluptatum nulla aut Qui iure facere fugi",
//                "translatedOn": "2019-11-26 21:32:49.0",
//                "translatedQuestion": "mero true love kahile vetxu?"
//            },
//            "nepaliAnswer": {
//                "nepAnswerId": 131,
//                "nepReply": "safal hunxa",
//                "repliedBy": "Autem velit in corpo Qui cillum blanditii",
//                "repliedOn": "2019-11-26 21:39:14.0"
//            },
//            "englishAnswer": null
//        }
//    ]
// };

export interface TranslatedNepaliAnswer {
  nepQuestionId: number;
  userId: number;
  // answer: string;
  translatedAns: string;
  moderatorId: number;
}

export interface TranslatedEnglishQuestion {
  engQsnId: number;
  convertedQsn: string;
  userId: number;
}
