export interface ModeratorModel {
    userId: number;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    gender: string;
    city: string;
    state: string;
    country: string;
    role: string;
}

export const DEFAULT_MODERATOR_MODEL = {
    userId: null,
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    gender: '',
    city: '',
    state: '',
    country: '',
    role: 'ROLE_MODERATOR'
}