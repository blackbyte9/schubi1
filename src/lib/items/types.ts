/* eslint-disable no-unused-vars */

export enum Status {
    REMOVED = "REMOVED",
    NEW = "NEW",
    USED = "USED",
    DAMAGED = "DAMAGED",
};

export type Item = {
    isbn: string;
    id: string;
    status: Status;
    leased?: boolean;
};
