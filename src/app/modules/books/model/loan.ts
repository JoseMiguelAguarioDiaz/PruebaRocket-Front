export interface Loan {
    id?: number;
    loanDate: Date;
    studentId: number;
    bookId: number;
    returned: boolean;
    returnDate?: Date;
}