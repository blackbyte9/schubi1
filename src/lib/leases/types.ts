export type Lease = {
    id:         number;
    item:   string;
    student:  number;
    active:     boolean;
    leased: Date;
    returned: Date | null;
};
