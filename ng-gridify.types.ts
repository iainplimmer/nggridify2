export class ngGridifyData {
    Title: string;
    Columns: ngGridifyColumn[]
    Data?: any;
    DataUrl?: string;
    SortBy?: string;
    SortByAscending?: boolean;
    ErrorMessage?: string;
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