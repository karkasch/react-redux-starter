export interface IAppState {
    id: number;
    userName: string;
    contacts: IContact[];

    loadProgress: boolean;
}

export interface IContact {
    name: string;
}
