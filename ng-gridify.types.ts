export class ngGridifyData {
    Title: string;
    Columns: ngGridifyColumn[]
    Data: any;
    SortBy?: string;
    SortByAscending?: boolean;
    ExportEnabled: boolean;
    ItemClick: {
        Function : any;
        Text: string;
    };
    ItemsPerPage: number;
}

export class ngGridifyColumn {
    Name: string;
    DisplayValue?: string;
    Width?: string;
    Type?: string;
}