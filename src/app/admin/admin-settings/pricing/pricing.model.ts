export interface QuestionPrice {
    id?: number;
    questionPrice: number;
    discountInPercentage: number;
    createdAt?: number;
    updatedAt?: number;
}

export const DEFAULT_QUESTION_PRICE: QuestionPrice = {
    questionPrice: null,
    discountInPercentage: null
}