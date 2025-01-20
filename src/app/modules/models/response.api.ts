export class ResponseApi<T> {
    data?: T;
    status!: number;
    error!: boolean;
    message?: string;
}