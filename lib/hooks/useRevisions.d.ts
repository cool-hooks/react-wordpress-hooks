declare type UseRevisions = {
    parent: number;
    context: 'view' | 'embed' | 'edit';
};
declare type RetriveRevision = {
    parent: number;
    id: number;
    context: 'view' | 'embed' | 'edit';
};
declare type DeleteRevision = {
    parent: number;
    force: boolean;
};
export declare const useRevisions: (options: UseRevisions) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export declare const useRetriveRevision: (options: RetriveRevision) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export declare const useDeleteRevision: (id: number, options?: DeleteRevision | undefined) => {
    data: object[];
    loading: boolean;
    error: string | object | null;
};
export {};
