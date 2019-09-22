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
}