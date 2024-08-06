export interface ITransaction {
    id: string;
    text: string;
    amount: number;
    userId: string;
    createdAt: Date;
}