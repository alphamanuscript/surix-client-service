export interface FieldPair {
    type: 'boolean' | 'text' | 'phone' | 'number' | 'datetime' | 'object' | 'file' | 'list';
    value: boolean | string | number | UnitField | EntityListValueData | EntityFileValueData;
}

export interface SimpleFieldPair {
    type: 'boolean' | 'text' | 'phone' | 'number' | 'datetime';
    value: boolean | string | number;
}

export interface AppDataField {
    [fieldName: string]: SimpleFieldPair;
}
export interface EntityFileValueData {
    ref: string
}

export type EntityListValueData = FieldPair[];

export interface UnitField extends FieldPair {
    label: string;
}

export interface BasicFieldValueData {
    [fieldName: string]: UnitField | BasicFieldValueData;
}

export interface EntityData {
    data: UnitField | BasicFieldValueData;
    tags?: string[]
}

export interface AppData {
    data: AppDataField;
}

export interface PersistedAppData extends AppData, HasTimestamps, HasId {}
export interface PersistedEntityData extends HasId, HasTimestamps, EntityData {}

export interface ToastParams {
    message: string;
    type: 'error' | 'success' | 'info';
}

export interface MenuItem {
    title: string;
    action: string;
    icon: string;
    default?: boolean;
}

export interface FileParams {
    name: string;
    public: boolean;
    mimeType: string;
    file: File;
    tags: string[];
}

export interface TagsParams {
    tags: string[];
    entityId: string;
}

export interface Tag {
    name: string;
}

export interface TagUpdateParams {
    tags: string;
    update: Tag
}

interface CreatedBy extends HasId {
    type: string;
}

export interface FileDetails extends HasTimestamps, HasId {
    addedBy: string;
    addedAt: Date;
    status: string;
    tags: string[];
    uploadUrl: string;
    mimeType: string;
    size: number;
    name: string;
    filename: string;
    public: boolean;
    createdBy: CreatedBy;
    downloadUrl: string;
}

export interface Project extends HasId, HasTimestamps {
    name: string;
    createdBy: string;
    users: Array<{ _id: string, role: string }>;
    apps: Array<{ _id: string, addedBy: string, addedAt: Date}>;
}

interface HasId {
    _id: string;
}
  
interface HasTimestamps {
    createdAt: Date;
    updatedAt: Date;
}

export interface IData {
    createEntity(entity: EntityData): Promise<PersistedEntityData>;
    project(): Promise<Project>;
    getEntities(query?: any): Promise<PersistedEntityData[]>;
    getEntityById(id: string): Promise<PersistedEntityData>;
    addTagsToEntity(params: TagsParams): Promise<PersistedEntityData>;
    removeTagsFromEntity(params: TagsParams): Promise<PersistedEntityData>;
    updateTag(params: TagUpdateParams): Promise<Tag>;
    getTags(): Promise<Tag[]>;
    getAppData(): Promise<PersistedAppData>;
    updateAppData(data: AppData): Promise<PersistedAppData>;
    createFile(file: FileParams): Promise<FileDetails>;
    getFileById(id: string): Promise<FileDetails>;
    getFiles(): Promise<FileDetails[]>;
}
export interface IToast {
    show(message: ToastParams): Promise<any>;
}
export interface IMenu {
    populate(menu: MenuItem[]): Promise<any>
}