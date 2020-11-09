import { ModeratorsTaskModel } from './moderators-task/moderators-task.model';
export interface ModeratorModel {
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

export const DEFAULT_MODERATOR_MODEL = {
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
};

export const FAKE_TASK_FOR_MOD_NEP_ANSWER: ModeratorsTaskModel = {
  currentJob: {
     currentJobType: 'nepali-answer',
     processUrl: null,
     englishQuestion: null,
     nepaliAnswer: {
        createdAt: '2020-11-09T13:40:40.000+0000',
        updatedAt: '2020-11-09T13:43:20.000+0000',
        id: 330,
        nepQuestionId: 321,
        userId: 6,
        answer: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'
     }
  },
  userDetails: {
     userId: 6,
     firstName: 'Anusha',
     lastName: 'Shrestha',
     email: 'anusashrestha088@gmail.com',
     phoneNumber: '9818452200',
     gender: 'F',
     city: 'Ilam',
     state: '01',
     country: 'Nepal',
     profileImageUrl: null,
     dateOfBirth: '2020-11-6',
     birthTime: '05:13 AM',
     accurateTime: true
  },
  questionAnswerHistoryList: [
     {
        engQuestion: 'When will I meet the true love of my life?',
        status: 'Clear',
        createdAt: '2020-10-04 12:03:47.0',
        translatedEngQuestion: {
           nepQuestionId: 57,
           translatedQuestion: 'kahile chai maile mero satya maya paune xu tah//hmm?',
           translatedBy: 'Rajesh Ghimire',
           translatedOn: '2020-10-05 09:21:13.0'
        },
        nepaliAnswer: {
           nepAnswerId: 58,
           nepReply: 'paune xau ni balak aawasya paune xau kina hattar garxau.. baru tmro ghar chai kaha ho?',
           repliedBy: ' Astrologer   Indramani',
           repliedOn: '2020-10-05 09:22:07.0'
        },
        englishAnswer: {
           engReply: 'ofcourse you will meet surely in near future... can you provide me your home addreess?',
           translatedBy: 'Rajesh Ghimire',
           translatedOn: '2020-10-05 09:23:06.0'
        }
     },
     {
        engQuestion: 'Am I going to be in a new relationship soon?',
        status: 'Clear',
        createdAt: '2020-10-05 09:48:01.0',
        translatedEngQuestion: {
           nepQuestionId: 67,
           translatedQuestion: 'ma k naya relation ma hunxu tah ?',
           translatedBy: 'Rajesh Ghimire',
           translatedOn: '2020-10-05 09:49:04.0'
        },
        nepaliAnswer: {
           nepAnswerId: 68,
           nepReply: 'hunxau',
           repliedBy: ' Astrologer   Indramani',
           repliedOn: '2020-10-05 09:49:45.0'
        },
        englishAnswer: {
           engReply: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
           translatedBy: 'Rajesh Ghimire',
           translatedOn: '2020-10-05 09:49:57.0'
        }
     },
     {
        engQuestion: 'Hello this is a test question for testing unclear question?',
        status: 'Unclear',
        createdAt: '2020-10-05 11:10:45.0',
        translatedEngQuestion: null,
        nepaliAnswer: null,
        englishAnswer: null
     },
     {
        engQuestion: 'Hello this is a test question?',
        status: 'Clear',
        createdAt: '2020-10-05 11:24:38.0',
        translatedEngQuestion: {
           nepQuestionId: 73,
           translatedQuestion: 'yo test question ho hai?',
           translatedBy: 'Rajesh Ghimire',
           translatedOn: '2020-10-05 11:25:28.0'
        },
        nepaliAnswer: {
           nepAnswerId: 74,
           nepReply: 'hunxa balak',
           repliedBy: ' Astrologer   Indramani',
           repliedOn: '2020-10-05 11:25:46.0'
        },
        englishAnswer: {
           engReply: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.\n\n',
           translatedBy: 'Rajesh Ghimire',
           translatedOn: '2020-10-05 11:26:10.0'
        }
     },
     {
        engQuestion: 'When will I meet the true love of my life?',
        status: 'Clear',
        createdAt: '2020-10-06 09:21:13.0',
        translatedEngQuestion: {
           nepQuestionId: 60,
           translatedQuestion: 'blah balh kjdahfkahkjsfhakjshfkasfhkhksafdhksa',
           translatedBy: 'Rajesh Ghimire',
           translatedOn: '2020-10-05 09:28:54.0'
        },
        nepaliAnswer: {
           nepAnswerId: 61,
           nepReply: 'kjsdffhdfkjhksdf kjdhkjhsd sksjhdkjsdh',
           repliedBy: ' Astrologer   Indramani',
           repliedOn: '2020-10-05 09:29:28.0'
        },
        englishAnswer: {
           engReply: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
           translatedBy: 'Rajesh Ghimire',
           translatedOn: '2020-10-05 09:30:10.0'
        }
     },
     {
        engQuestion: ' I don\'t know what i am , my actual personality. Can you tell me more about myself ?',
        status: 'Unclear',
        createdAt: '2020-10-13 05:39:25.0',
        translatedEngQuestion: null,
        nepaliAnswer: null,
        englishAnswer: null
     },
     {
        engQuestion: ' I am giving my best on my studies but still I cannot do well and cannot get things easily . how can i improve my study ?',
        status: 'Clear',
        createdAt: '2020-10-13 05:43:03.0',
        translatedEngQuestion: {
           nepQuestionId: 103,
           translatedQuestion: 'ma chai mero sikshya lai ramro banauna k garna parla?\n',
           translatedBy: 'Rajesh Ghimire',
           translatedOn: '2020-10-13 05:45:46.0'
        },
        nepaliAnswer: {
           nepAnswerId: 104,
           nepReply: 'ramro pada',
           repliedBy: ' Astrologer   Indramani',
           repliedOn: '2020-10-13 05:46:07.0'
        },
        englishAnswer: {
           engReply: 'Study well mofos.',
           translatedBy: 'Rajesh Ghimire',
           translatedOn: '2020-10-13 05:46:24.0'
        }
     },
     {
        engQuestion: ' I love singing and dancing , if I give it time  will it affect my career ?',
        status: 'Unclear',
        createdAt: '2020-10-13 07:02:02.0',
        translatedEngQuestion: null,
        nepaliAnswer: null,
        englishAnswer: null
     },
     {
        engQuestion: 'Hey',
        status: 'Unclear',
        createdAt: '2020-10-13 07:11:22.0',
        translatedEngQuestion: null,
        nepaliAnswer: null,
        englishAnswer: null
     },
     {
        engQuestion: 'Hi my name is anusha',
        status: 'Unclear',
        createdAt: '2020-10-13 07:13:44.0',
        translatedEngQuestion: null,
        nepaliAnswer: null,
        englishAnswer: null
     },
     {
        engQuestion: 'Lets try another one ',
        status: 'Clear',
        createdAt: '2020-10-13 07:15:51.0',
        translatedEngQuestion: {
           nepQuestionId: 136,
           translatedQuestion: 'k try garxas ra',
           translatedBy: 'Rajesh Ghimire',
           translatedOn: '2020-10-13 07:18:58.0'
        },
        nepaliAnswer: {
           nepAnswerId: 149,
           nepReply: 'garxu',
           repliedBy: ' Astrologer   Indramani',
           repliedOn: '2020-10-13 13:00:04.0'
        },
        englishAnswer: {
           engReply: 'i WILL',
           translatedBy: 'Rajesh Ghimire',
           translatedOn: '2020-10-13 13:00:52.0'
        }
     },
     {
        engQuestion: 'I want know about my future husband ',
        status: 'Unclear',
        createdAt: '2020-10-13 07:16:14.0',
        translatedEngQuestion: null,
        nepaliAnswer: null,
        englishAnswer: null
     },
     {
        engQuestion: 'I am that kibd of person and like that kind of personality.??? ',
        status: 'Clear',
        createdAt: '2020-10-13 07:21:36.0',
        translatedEngQuestion: {
           nepQuestionId: 145,
           translatedQuestion: 'OKA',
           translatedBy: 'Rajesh Ghimire',
           translatedOn: '2020-10-13 12:56:09.0'
        },
        nepaliAnswer: {
           nepAnswerId: 150,
           nepReply: 'ye',
           repliedBy: ' Astrologer   Indramani',
           repliedOn: '2020-10-13 13:00:10.0'
        },
        englishAnswer: {
           engReply: 'was ist ihre name?',
           translatedBy: 'Rajesh Ghimire',
           translatedOn: '2020-10-13 13:01:35.0'
        }
     },
     {
        engQuestion: 'Hello',
        status: 'Unclear',
        createdAt: '2020-10-15 17:40:19.0',
        translatedEngQuestion: null,
        nepaliAnswer: null,
        englishAnswer: null
     },
     {
        engQuestion: 'Wtf',
        status: 'Unclear',
        createdAt: '2020-10-15 17:43:19.0',
        translatedEngQuestion: null,
        nepaliAnswer: null,
        englishAnswer: null
     },
     {
        engQuestion: 'Tigre',
        status: 'Unclear',
        createdAt: '2020-10-15 17:43:43.0',
        translatedEngQuestion: null,
        nepaliAnswer: null,
        englishAnswer: null
     },
     {
        engQuestion: ' I am giving my best on my studies but still I cannot do well and cannot get things easily . how can i improve my study ?',
        status: 'Unclear',
        createdAt: '2020-10-17 08:55:00.0',
        translatedEngQuestion: null,
        nepaliAnswer: null,
        englishAnswer: null
     },
     {
        engQuestion: 'When will I have as much money as to buy a house?',
        status: 'Unclear',
        createdAt: '2020-10-17 08:58:00.0',
        translatedEngQuestion: null,
        nepaliAnswer: null,
        englishAnswer: null
     },
     {
        engQuestion: 'blah',
        status: 'Unclear',
        createdAt: '2020-10-17 08:58:42.0',
        translatedEngQuestion: null,
        nepaliAnswer: null,
        englishAnswer: null
     },
     {
        engQuestion: ' I am giving my best on my studies but still I cannot do well and cannot get things easily . how can i improve my study ?',
        status: 'Clear',
        createdAt: '2020-10-18 08:57:29.0',
        translatedEngQuestion: {
           nepQuestionId: 311,
           translatedQuestion: 'Maile mero padhai ramro banauna ke garnu parx hola?',
           translatedBy: 'Rajesh Ghimire',
           translatedOn: '2020-11-07 11:12:45.0'
        },
        nepaliAnswer: {
           nepAnswerId: 320,
           nepReply: 'Ramro saga padha babu',
           repliedBy: ' Astrologer   Indramani',
           repliedOn: '2020-11-08 04:58:38.0'
        },
        englishAnswer: {
           engReply: 'All the best!',
           translatedBy: 'Rajesh Ghimire',
           translatedOn: '2020-11-08 05:00:15.0'
        }
     },
     {
        engQuestion: 'Test Question 1 For checking unclear question????',
        status: 'Unclear',
        createdAt: '2020-10-19 08:57:29.0',
        translatedEngQuestion: null,
        nepaliAnswer: null,
        englishAnswer: null
     },
     {
        engQuestion: 'Test Question 1 For checking unclear question????',
        status: 'Unclear',
        createdAt: '2020-10-19 08:57:29.0',
        translatedEngQuestion: null,
        nepaliAnswer: null,
        englishAnswer: null
     },
     {
        engQuestion: 'Test Question 2 For checking unclear question????',
        status: 'Unclear',
        createdAt: '2020-10-20 08:57:29.0',
        translatedEngQuestion: null,
        nepaliAnswer: null,
        englishAnswer: null
     },
     {
        engQuestion: 'Test Question 3 For checking unclear question????',
        status: 'Clear',
        createdAt: '2020-11-01 11:14:02.0',
        translatedEngQuestion: {
           nepQuestionId: 321,
           translatedQuestion: 'All the best!',
           translatedBy: 'Rajesh Ghimire',
           translatedOn: '2020-11-08 04:59:48.0'
        },
        nepaliAnswer: {
           nepAnswerId: 330,
           nepReply: 'subha kamana',
           repliedBy: 'Test Astrologer',
           repliedOn: '2020-11-09 14:40:40.0'
        },
        englishAnswer: null
     },
     {
        engQuestion: ' I am giving my best on my studies but still I cannot do well and cannot get things easily . how can i improve my study ?',
        status: 'Clear',
        createdAt: '2020-11-02 07:55:00.0',
        translatedEngQuestion: {
           nepQuestionId: 298,
           translatedQuestion: 'maile  aafno tarfa bata padhai ma ekdam dherai focus gariako xu tara ramro  garna sakirako xaina kina hola ? ra kasari mero study improve garna sakxu hola ?  ',
           translatedBy: 'Rajesh Ghimire',
           translatedOn: '2020-11-02 12:03:40.0'
        },
        nepaliAnswer: {
           nepAnswerId: 299,
           nepReply: 'sovab: sahasi mihineti , immandar , ali dherai jiddi ,,   padhai ma moon ra sun ko suport xa jasle grada hajur ko padhai  ma ramro hune ho tara pani  weak jupiter ko assrr  le  garda padhai ma kei badha haru auana sakxan care garnu ramro hune xa ,, ra  aile ko time ma mars ko dasa xa jasle garda  mind concentrate huna garo vayeko ra  tapai ali dherai chanchal vayeko huna sakxa  ,, tueday red clothes  wa khan pan ko saman  haru gariv dukhi lai donate  garnu vayema ramro hune xa ra padhai ma  2020 12 wa 2021 3 dekhi mercury ko support ma ramro hudai jana sakne samvawana xa ,,, ra   2024 6 wa 11 dekhi padhai ma safal huna sakne ra aarhitk xetra  pani improve garne  name frame  banaune samaye  dekhinchha ,,',
           repliedBy: ' Astrologer   Indramani',
           repliedOn: '2020-11-02 12:48:32.0'
        },
        englishAnswer: {
           engReply: 'sovab: sahasi mihineti , immandar , ali dherai jiddi ,, padhai ma moon ra sun ko suport xa jasle grada hajur ko padhai ma ramro hune ho tara pani weak jupiter ko assrr le garda padhai ma kei badha haru auana sakxan care garnu ramro hune xa ,, ra aile ko time ma mars ko dasa xa jasle garda mind concentrate huna garo vayeko ra tapai ali dherai chanchal vayeko huna sakxa ,, tueday red clothes wa khan pan ko saman haru gariv dukhi lai donate garnu vayema ramro hune xa ra padhai ma 2020 12 wa 2021 3 dekhi mercury ko support ma ramro hudai jana sakne samvawana xa ,,, ra 2024 6 wa 11 dekhi padhai ma safal huna sakne ra aarhitk xetra pani improve garne name frame banaune samaye dekhinchha ,,\n',
           translatedBy: 'Rajesh Ghimire',
           translatedOn: '2020-11-02 16:41:25.0'
        }
     },
     {
        engQuestion: 'Test Question 4 For checking unclear question????',
        status: 'Clear',
        createdAt: '2020-11-02 11:14:02.0',
        translatedEngQuestion: {
           nepQuestionId: 323,
           translatedQuestion: 'All the best!',
           translatedBy: 'Rajesh Ghimire',
           translatedOn: '2020-11-08 05:00:47.0'
        },
        nepaliAnswer: null,
        englishAnswer: null
     },
     {
        engQuestion: 'Test Question 5 For checking unclear question????',
        status: 'Clear',
        createdAt: '2020-11-03 11:14:02.0',
        translatedEngQuestion: {
           nepQuestionId: 324,
           translatedQuestion: 'All the best!',
           translatedBy: 'Rajesh Ghimire',
           translatedOn: '2020-11-08 05:01:05.0'
        },
        nepaliAnswer: null,
        englishAnswer: null
     }
  ]
};

// export const FAKE_TASK_FOR_MOD_ENG_QUESTION: ModeratorsTaskModel = {
//   currentJob: {
//      currentJobType: 'english-question',
//      processUrl: null,
//      englishQuestion: {
//         createdAt: '2020-11-06T13:53:19.000+0000',
//         updatedAt: '2020-11-09T14:43:12.828+0000',
//         engQuesId: 8,
//         engQuestion: 'Test Question 7 For checking unclear question????',
//         assignedModId: 200,
//         userId: 6,
//         questionPrice: 1,
//         prevEngQuesId: null
//      },
//      nepaliAnswer: null
//   },
//   userDetails: {
//      userId: 6,
//      firstName: 'Anusha',
//      lastName: 'Shrestha',
//      email: 'anusashrestha088@gmail.com',
//      phoneNumber: '9818452200',
//      gender: 'F',
//      city: 'Ilam',
//      state: '01',
//      country: 'Nepal',
//      profileImageUrl: null,
//      dateOfBirth: '2020-11-6',
//      birthTime: '05:13 AM',
//      accurateTime: true
//   },
//   questionAnswerHistoryList: [
//      {
//         engQuestion: 'When will I meet the true love of my life?',
//         status: 'Clear',
//         createdAt: '2020-10-04 12:03:47.0',
//         translatedEngQuestion: {
//            nepQuestionId: 57,
//            translatedQuestion: 'kahile chai maile mero satya maya paune xu tah//hmm?',
//            translatedBy: 'Rajesh Ghimire',
//            translatedOn: '2020-10-05 09:21:13.0'
//         },
//         nepaliAnswer: {
//            nepAnswerId: 58,
//            nepReply: 'paune xau ni balak aawasya paune xau kina hattar garxau.. baru tmro ghar chai kaha ho?',
//            repliedBy: ' Astrologer   Indramani',
//            repliedOn: '2020-10-05 09:22:07.0'
//         },
//         englishAnswer: {
//            engReply: 'ofcourse you will meet surely in near future... can you provide me your home addreess?',
//            translatedBy: 'Rajesh Ghimire',
//            translatedOn: '2020-10-05 09:23:06.0'
//         }
//      },
//      {
//         engQuestion: 'Am I going to be in a new relationship soon?',
//         status: 'Clear',
//         createdAt: '2020-10-05 09:48:01.0',
//         translatedEngQuestion: {
//            nepQuestionId: 67,
//            translatedQuestion: 'ma k naya relation ma hunxu tah ?',
//            translatedBy: 'Rajesh Ghimire',
//            translatedOn: '2020-10-05 09:49:04.0'
//         },
//         nepaliAnswer: {
//            nepAnswerId: 68,
//            nepReply: 'hunxau',
//            repliedBy: ' Astrologer   Indramani',
//            repliedOn: '2020-10-05 09:49:45.0'
//         },
//         englishAnswer: {
//            engReply: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
//            translatedBy: 'Rajesh Ghimire',
//            translatedOn: '2020-10-05 09:49:57.0'
//         }
//      },
//      {
//         engQuestion: 'Hello this is a test question for testing unclear question?',
//         status: 'Unclear',
//         createdAt: '2020-10-05 11:10:45.0',
//         translatedEngQuestion: null,
//         nepaliAnswer: null,
//         englishAnswer: null
//      },
//      {
//         engQuestion: 'Hello this is a test question?',
//         status: 'Clear',
//         createdAt: '2020-10-05 11:24:38.0',
//         translatedEngQuestion: {
//            nepQuestionId: 73,
//            translatedQuestion: 'yo test question ho hai?',
//            translatedBy: 'Rajesh Ghimire',
//            translatedOn: '2020-10-05 11:25:28.0'
//         },
//         nepaliAnswer: {
//            nepAnswerId: 74,
//            nepReply: 'hunxa balak',
//            repliedBy: ' Astrologer   Indramani',
//            repliedOn: '2020-10-05 11:25:46.0'
//         },
//         englishAnswer: {
//            engReply: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.\n\n',
//            translatedBy: 'Rajesh Ghimire',
//            translatedOn: '2020-10-05 11:26:10.0'
//         }
//      },
//      {
//         engQuestion: 'When will I meet the true love of my life?',
//         status: 'Clear',
//         createdAt: '2020-10-06 09:21:13.0',
//         translatedEngQuestion: {
//            nepQuestionId: 60,
//            translatedQuestion: 'blah balh kjdahfkahkjsfhakjshfkasfhkhksafdhksa',
//            translatedBy: 'Rajesh Ghimire',
//            translatedOn: '2020-10-05 09:28:54.0'
//         },
//         nepaliAnswer: {
//            nepAnswerId: 61,
//            nepReply: 'kjsdffhdfkjhksdf kjdhkjhsd sksjhdkjsdh',
//            repliedBy: ' Astrologer   Indramani',
//            repliedOn: '2020-10-05 09:29:28.0'
//         },
//         englishAnswer: {
//            engReply: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
//            translatedBy: 'Rajesh Ghimire',
//            translatedOn: '2020-10-05 09:30:10.0'
//         }
//      },
//      {
//         engQuestion: ' I don\'t know what i am , my actual personality. Can you tell me more about myself ?',
//         status: 'Unclear',
//         createdAt: '2020-10-13 05:39:25.0',
//         translatedEngQuestion: null,
//         nepaliAnswer: null,
//         englishAnswer: null
//      },
//      {
//         engQuestion: ' I am giving my best on my studies but still I cannot do well and cannot get things easily . how can i improve my study ?',
//         status: 'Clear',
//         createdAt: '2020-10-13 05:43:03.0',
//         translatedEngQuestion: {
//            nepQuestionId: 103,
//            translatedQuestion: 'ma chai mero sikshya lai ramro banauna k garna parla?\n',
//            translatedBy: 'Rajesh Ghimire',
//            translatedOn: '2020-10-13 05:45:46.0'
//         },
//         nepaliAnswer: {
//            nepAnswerId: 104,
//            nepReply: 'ramro pada',
//            repliedBy: ' Astrologer   Indramani',
//            repliedOn: '2020-10-13 05:46:07.0'
//         },
//         englishAnswer: {
//            engReply: 'Study well mofos.',
//            translatedBy: 'Rajesh Ghimire',
//            translatedOn: '2020-10-13 05:46:24.0'
//         }
//      },
//      {
//         engQuestion: ' I love singing and dancing , if I give it time  will it affect my career ?',
//         status: 'Unclear',
//         createdAt: '2020-10-13 07:02:02.0',
//         translatedEngQuestion: null,
//         nepaliAnswer: null,
//         englishAnswer: null
//      },
//      {
//         engQuestion: 'Hey',
//         status: 'Unclear',
//         createdAt: '2020-10-13 07:11:22.0',
//         translatedEngQuestion: null,
//         nepaliAnswer: null,
//         englishAnswer: null
//      },
//      {
//         engQuestion: 'Hi my name is anusha',
//         status: 'Unclear',
//         createdAt: '2020-10-13 07:13:44.0',
//         translatedEngQuestion: null,
//         nepaliAnswer: null,
//         englishAnswer: null
//      },
//      {
//         engQuestion: 'Lets try another one ',
//         status: 'Clear',
//         createdAt: '2020-10-13 07:15:51.0',
//         translatedEngQuestion: {
//            nepQuestionId: 136,
//            translatedQuestion: 'k try garxas ra',
//            translatedBy: 'Rajesh Ghimire',
//            translatedOn: '2020-10-13 07:18:58.0'
//         },
//         nepaliAnswer: {
//            nepAnswerId: 149,
//            nepReply: 'garxu',
//            repliedBy: ' Astrologer   Indramani',
//            repliedOn: '2020-10-13 13:00:04.0'
//         },
//         englishAnswer: {
//            engReply: 'i WILL',
//            translatedBy: 'Rajesh Ghimire',
//            translatedOn: '2020-10-13 13:00:52.0'
//         }
//      },
//      {
//         engQuestion: 'I want know about my future husband ',
//         status: 'Unclear',
//         createdAt: '2020-10-13 07:16:14.0',
//         translatedEngQuestion: null,
//         nepaliAnswer: null,
//         englishAnswer: null
//      },
//      {
//         engQuestion: 'I am that kibd of person and like that kind of personality.??? ',
//         status: 'Clear',
//         createdAt: '2020-10-13 07:21:36.0',
//         translatedEngQuestion: {
//            nepQuestionId: 145,
//            translatedQuestion: 'OKA',
//            translatedBy: 'Rajesh Ghimire',
//            translatedOn: '2020-10-13 12:56:09.0'
//         },
//         nepaliAnswer: {
//            nepAnswerId: 150,
//            nepReply: 'ye',
//            repliedBy: ' Astrologer   Indramani',
//            repliedOn: '2020-10-13 13:00:10.0'
//         },
//         englishAnswer: {
//            engReply: 'was ist ihre name?',
//            translatedBy: 'Rajesh Ghimire',
//            translatedOn: '2020-10-13 13:01:35.0'
//         }
//      },
//      {
//         engQuestion: 'Hello',
//         status: 'Unclear',
//         createdAt: '2020-10-15 17:40:19.0',
//         translatedEngQuestion: null,
//         nepaliAnswer: null,
//         englishAnswer: null
//      },
//      {
//         engQuestion: 'Wtf',
//         status: 'Unclear',
//         createdAt: '2020-10-15 17:43:19.0',
//         translatedEngQuestion: null,
//         nepaliAnswer: null,
//         englishAnswer: null
//      },
//      {
//         engQuestion: 'Tigre',
//         status: 'Unclear',
//         createdAt: '2020-10-15 17:43:43.0',
//         translatedEngQuestion: null,
//         nepaliAnswer: null,
//         englishAnswer: null
//      },
//      {
//         engQuestion: ' I am giving my best on my studies but still I cannot do well and cannot get things easily . how can i improve my study ?',
//         status: 'Unclear',
//         createdAt: '2020-10-17 08:55:00.0',
//         translatedEngQuestion: null,
//         nepaliAnswer: null,
//         englishAnswer: null
//      },
//      {
//         engQuestion: 'When will I have as much money as to buy a house?',
//         status: 'Unclear',
//         createdAt: '2020-10-17 08:58:00.0',
//         translatedEngQuestion: null,
//         nepaliAnswer: null,
//         englishAnswer: null
//      },
//      {
//         engQuestion: 'blah',
//         status: 'Unclear',
//         createdAt: '2020-10-17 08:58:42.0',
//         translatedEngQuestion: null,
//         nepaliAnswer: null,
//         englishAnswer: null
//      },
//      {
//         engQuestion: ' I am giving my best on my studies but still I cannot do well and cannot get things easily . how can i improve my study ?',
//         status: 'Clear',
//         createdAt: '2020-10-18 08:57:29.0',
//         translatedEngQuestion: {
//            nepQuestionId: 311,
//            translatedQuestion: 'Maile mero padhai ramro banauna ke garnu parx hola?',
//            translatedBy: 'Rajesh Ghimire',
//            translatedOn: '2020-11-07 11:12:45.0'
//         },
//         nepaliAnswer: {
//            nepAnswerId: 320,
//            nepReply: 'Ramro saga padha babu',
//            repliedBy: ' Astrologer   Indramani',
//            repliedOn: '2020-11-08 04:58:38.0'
//         },
//         englishAnswer: {
//            engReply: 'All the best!',
//            translatedBy: 'Rajesh Ghimire',
//            translatedOn: '2020-11-08 05:00:15.0'
//         }
//      },
//      {
//         engQuestion: 'Test Question 1 For checking unclear question????',
//         status: 'Unclear',
//         createdAt: '2020-10-19 08:57:29.0',
//         translatedEngQuestion: null,
//         nepaliAnswer: null,
//         englishAnswer: null
//      },
//      {
//         engQuestion: 'Test Question 1 For checking unclear question????',
//         status: 'Unclear',
//         createdAt: '2020-10-19 08:57:29.0',
//         translatedEngQuestion: null,
//         nepaliAnswer: null,
//         englishAnswer: null
//      },
//      {
//         engQuestion: 'Test Question 2 For checking unclear question????',
//         status: 'Unclear',
//         createdAt: '2020-10-20 08:57:29.0',
//         translatedEngQuestion: null,
//         nepaliAnswer: null,
//         englishAnswer: null
//      },
//      {
//         engQuestion: 'Test Question 3 For checking unclear question????',
//         status: 'Clear',
//         createdAt: '2020-11-01 11:14:02.0',
//         translatedEngQuestion: {
//            nepQuestionId: 321,
//            translatedQuestion: 'All the best!',
//            translatedBy: 'Rajesh Ghimire',
//            translatedOn: '2020-11-08 04:59:48.0'
//         },
//         nepaliAnswer: {
//            nepAnswerId: 330,
//            nepReply: 'subha kamana',
//            repliedBy: 'Test Astrologer',
//            repliedOn: '2020-11-09 14:40:40.0'
//         },
//         englishAnswer: {
//            engReply: 'all the best',
//            translatedBy: 'Praveen Bhusal',
//            translatedOn: '2020-11-09 15:17:08.0'
//         }
//      },
//      {
//         engQuestion: ' I am giving my best on my studies but still I cannot do well and cannot get things easily . how can i improve my study ?',
//         status: 'Clear',
//         createdAt: '2020-11-02 07:55:00.0',
//         translatedEngQuestion: {
//            nepQuestionId: 298,
//            translatedQuestion: 'maile  aafno tarfa bata padhai ma ekdam dherai focus gariako xu tara ramro  garna sakirako xaina kina hola ? ra kasari mero study improve garna sakxu hola ?  ',
//            translatedBy: 'Rajesh Ghimire',
//            translatedOn: '2020-11-02 12:03:40.0'
//         },
//         nepaliAnswer: {
//            nepAnswerId: 299,
//            nepReply: 'sovab: sahasi mihineti , immandar , ali dherai jiddi ,,   padhai ma moon ra sun ko suport xa jasle grada hajur ko padhai  ma ramro hune ho tara pani  weak jupiter ko assrr  le  garda padhai ma kei badha haru auana sakxan care garnu ramro hune xa ,, ra  aile ko time ma mars ko dasa xa jasle garda  mind concentrate huna garo vayeko ra  tapai ali dherai chanchal vayeko huna sakxa  ,, tueday red clothes  wa khan pan ko saman  haru gariv dukhi lai donate  garnu vayema ramro hune xa ra padhai ma  2020 12 wa 2021 3 dekhi mercury ko support ma ramro hudai jana sakne samvawana xa ,,, ra   2024 6 wa 11 dekhi padhai ma safal huna sakne ra aarhitk xetra  pani improve garne  name frame  banaune samaye  dekhinchha ,,',
//            repliedBy: ' Astrologer   Indramani',
//            repliedOn: '2020-11-02 12:48:32.0'
//         },
//         englishAnswer: {
//            engReply: 'sovab: sahasi mihineti , immandar , ali dherai jiddi ,, padhai ma moon ra sun ko suport xa jasle grada hajur ko padhai ma ramro hune ho tara pani weak jupiter ko assrr le garda padhai ma kei badha haru auana sakxan care garnu ramro hune xa ,, ra aile ko time ma mars ko dasa xa jasle garda mind concentrate huna garo vayeko ra tapai ali dherai chanchal vayeko huna sakxa ,, tueday red clothes wa khan pan ko saman haru gariv dukhi lai donate garnu vayema ramro hune xa ra padhai ma 2020 12 wa 2021 3 dekhi mercury ko support ma ramro hudai jana sakne samvawana xa ,,, ra 2024 6 wa 11 dekhi padhai ma safal huna sakne ra aarhitk xetra pani improve garne name frame banaune samaye dekhinchha ,,\n',
//            translatedBy: 'Rajesh Ghimire',
//            translatedOn: '2020-11-02 16:41:25.0'
//         }
//      },
//      {
//         engQuestion: 'Test Question 4 For checking unclear question????',
//         status: 'Clear',
//         createdAt: '2020-11-02 11:14:02.0',
//         translatedEngQuestion: {
//            nepQuestionId: 323,
//            translatedQuestion: 'All the best!',
//            translatedBy: 'Rajesh Ghimire',
//            translatedOn: '2020-11-08 05:00:47.0'
//         },
//         nepaliAnswer: {
//            nepAnswerId: 332,
//            nepReply: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.\n\nThe standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
//            repliedBy: 'Test Astrologer',
//            repliedOn: '2020-11-09 15:19:41.0'
//         },
//         englishAnswer: {
//            engReply: 'test reply',
//            translatedBy: 'Praveen Bhusal',
//            translatedOn: '2020-11-09 15:20:47.0'
//         }
//      },
//      {
//         engQuestion: 'Test Question 5 For checking unclear question????',
//         status: 'Clear',
//         createdAt: '2020-11-03 11:14:02.0',
//         translatedEngQuestion: {
//            nepQuestionId: 324,
//            translatedQuestion: 'All the best!',
//            translatedBy: 'Rajesh Ghimire',
//            translatedOn: '2020-11-08 05:01:05.0'
//         },
//         nepaliAnswer: {
//            nepAnswerId: 334,
//            nepReply: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.\n\nThe standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
//            repliedBy: 'Test Astrologer',
//            repliedOn: '2020-11-09 15:21:39.0'
//         },
//         englishAnswer: {
//            engReply: 'test reply',
//            translatedBy: 'Praveen Bhusal',
//            translatedOn: '2020-11-09 15:24:26.0'
//         }
//      },
//      {
//         engQuestion: 'Test Question 7 For checking unclear question????',
//         status: 'Assigned',
//         createdAt: '2020-11-06 14:53:19.0',
//         translatedEngQuestion: null,
//         nepaliAnswer: null,
//         englishAnswer: null
//      }
//   ]
// };
