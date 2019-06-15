import { Guid } from 'guid-typescript';

export interface TaskData {
    project: string;
    id: Guid;
    text: string;
    canEdit: boolean;
}
