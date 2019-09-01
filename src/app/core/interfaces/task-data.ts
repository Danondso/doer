import { Guid } from 'guid-typescript';

export interface TaskData {
    project?: string;
    id?: string;
    text: string;
    canEdit?: boolean;
    createdTime?: Date;
}
