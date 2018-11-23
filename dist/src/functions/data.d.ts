import { PersistedEntityData, TagUpdateParams, FileDetails, FileParams, TagsParams, EntityData, Project, AppData, Tag, IData, PersistedAppData, QueryParams } from "../types";
import { ServiceBase } from "../service-base";
export declare class Data extends ServiceBase implements IData {
    constructor();
    /**
     * Saves an entity in Surix
     * @param entity EntityData entity to be saved
     * @returns Promise<PersistedEntityData>
     */
    createEntity(entity: EntityData): Promise<PersistedEntityData>;
    /**
     * Returns the current project
     * @returns Promise<Project>
     */
    project(): Promise<Project>;
    /**
     * Returns all the entities present
     * @param query (Optional) query
     * @returns Promise<PersistedEntityData[]>
     */
    getEntities(query?: QueryParams): Promise<PersistedEntityData[]>;
    /**
     * Returns an entity identified by the id provided
     * @param id Surix Id
     * @returns Promise<PersistedEntityData>
     */
    getEntityById(id: string): Promise<PersistedEntityData>;
    /**
     * Adds tags to an existing entity
     * @param params Parameters to add tags
     * @returns Promise<PersistedEntityData>
     */
    addTagsToEntity(params: TagsParams): Promise<PersistedEntityData>;
    /**
     * Removes tags from an entity
     * @param params TagsParams tag parameters
     */
    removeTagsFromEntity(params: TagsParams): Promise<PersistedEntityData>;
    /**
     * Updates tags on an existing entity
     * @param params Update params
     */
    updateTag(params: TagUpdateParams): Promise<Tag>;
    /**
     * Returns all the tags available
     * @returns Promise<Tag[]>
     */
    getTags(): Promise<Tag[]>;
    getAppData(): Promise<PersistedAppData>;
    updateAppData(appData: AppData): Promise<PersistedAppData>;
    /**
     * Creates a file on Surix linked to the current project.
     * @param file FileMessage message details
     * @returns Promise<FileDetails>
     */
    createFile(file: FileParams): Promise<FileDetails>;
    /**
     * Gets a file associated with the id provided
     * @param id string Surix Id
     * @returns Promise<FileDetails>
     */
    getFileById(id: string): Promise<FileDetails>;
    /**
     * Returns all files
     * @returns Promise<FileDetails[]>
     */
    getFiles(): Promise<FileDetails[]>;
}
