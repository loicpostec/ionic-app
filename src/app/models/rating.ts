import { User } from './user';

export class Rating {

    _id: string;
    postedBy: string;
    poi: string;
    value: number;
    comment: string;
    dateAdd: string;
    user?: User;
}

