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
};

export interface QueryModel {
    nepQuestionId: number;
    answer: string;
    userId: number;
    moderatorId?: number;
}

export const DEFAULT_QUERY_MODEL: QueryModel = {
    nepQuestionId: 0,
    answer: '',
    userId: 0
};

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

export const FAKE_FOR_AST_TASK = {
  success: true,
  questionerDetails: {
     questionId: 321,
     question: 'All the best!',
     user: {
        userId: 6,
        firstName: 'Anusha',
        lastName: 'Shrestha',
        email: 'anusashrestha088@gmail.com',
        phoneNumber: '9818452200',
        city: 'Ilam',
        state: '01',
        country: 'Nepal',
        gender: 'F',
        role: 'ROLE_USER',
        profileImageUrl: null,
        dateOfBirth: '2020-11-6',
        birthTime: '05:13 AM',
        accurateTime: true
     },
     possibleDuplicateUsers: [

     ],
     previousQueries: [
        {
           questionId: 57,
           question: 'kahile chai maile mero satya maya paune xu tah//hmm?',
           answer: 'paune xau ni balak aawasya paune xau kina hattar garxau.. baru tmro ghar chai kaha ho?',
           userId: 6
        },
        {
           questionId: 60,
           question: 'blah balh kjdahfkahkjsfhakjshfkasfhkhksafdhksa',
           answer: 'kjsdffhdfkjhksdf kjdhkjhsd sksjhdkjsdh',
           userId: 6
        },
        {
           questionId: 67,
           question: 'ma k naya relation ma hunxu tah ?',
           answer: 'hunxau',
           userId: 6
        },
        {
           questionId: 73,
           question: 'yo test question ho hai?',
           answer: 'hunxa balak',
           userId: 6
        },
        {
           questionId: 88,
           question: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
           answer: 'YES YES YES',
           userId: 6
        },
        {
           questionId: 103,
           question: 'ma chai mero sikshya lai ramro banauna k garna parla?\n',
           answer: 'ramro pada',
           userId: 6
        },
        {
           questionId: 136,
           question: 'k try garxas ra',
           answer: 'garxu',
           userId: 6
        },
        {
           questionId: 145,
           question: 'OKA',
           answer: 'ye',
           userId: 6
        },
        {
           questionId: 298,
           question: 'maile  aafno tarfa bata padhai ma ekdam dherai focus gariako xu tara ramro  garna sakirako xaina kina hola ? ra kasari mero study improve garna sakxu hola ?  ',
           answer: 'sovab: sahasi mihineti , immandar , ali dherai jiddi ,,   padhai ma moon ra sun ko suport xa jasle grada hajur ko padhai  ma ramro hune ho tara pani  weak jupiter ko assrr  le  garda padhai ma kei badha haru auana sakxan care garnu ramro hune xa ,, ra  aile ko time ma mars ko dasa xa jasle garda  mind concentrate huna garo vayeko ra  tapai ali dherai chanchal vayeko huna sakxa  ,, tueday red clothes  wa khan pan ko saman  haru gariv dukhi lai donate  garnu vayema ramro hune xa ra padhai ma  2020 12 wa 2021 3 dekhi mercury ko support ma ramro hudai jana sakne samvawana xa ,,, ra   2024 6 wa 11 dekhi padhai ma safal huna sakne ra aarhitk xetra  pani improve garne  name frame  banaune samaye  dekhinchha ,,',
           userId: 6
        },
        {
           questionId: 311,
           question: 'Maile mero padhai ramro banauna ke garnu parx hola?',
           answer: 'Ramro saga padha babu',
           userId: 6
        },
        {
           questionId: 321,
           question: 'All the best!',
           answer: 'N/A',
           userId: 6
        },
        {
           questionId: 323,
           question: 'All the best!',
           answer: 'N/A',
           userId: 6
        },
        {
           questionId: 324,
           question: 'All the best!',
           answer: 'N/A',
           userId: 6
        }
     ]
  }
};
