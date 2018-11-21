import { Service } from "../..";
import { Project, FileDetails, FileParams, TagsParams, TagUpdateParams, Tag, EntityData, PersistedEntityData, AppData } from "../types";
import { requests } from "../../build/dist";

export class Data {
    public _service: Service;
    
    public constructor() {
        this._service = Service.init();
    }

    /**
     * Saves an entity in Surix
     * @param entity EntityData entity to be saved
     * @returns Promise<PersistedEntityData>
     */
    public async createEntity(entity: EntityData): Promise<PersistedEntityData> {
        return await this._service.request(requests.data.createEntity, entity);
    }

    /**
     * Returns the current project
     * @returns Promise<Project>
     */
    public async project(): Promise<Project> {
        return await this._service.request(requests.data.project);
    }

    /**
     * Returns all the entities present
     * @param query (Optional) query
     * @returns Promise<PersistedEntityData[]>
     */
    public async getEntities(query?: any): Promise<PersistedEntityData[]> {
        return await this._service.request(requests.data.getEntities, query);
    }

    /**
     * Returns an entity identified by the id provided
     * @param id Surix Id
     * @returns Promise<PersistedEntityData>
     */
    public async getEntityById(id: string): Promise<PersistedEntityData> {
        return await this._service.request(requests.data.getEntityById, id);
    }

    /**
     * Adds tags to an existing entity
     * @param params Parameters to add tags
     * @returns Promise<PersistedEntityData>
     */
    public async addTagsToEntity(params: TagsParams): Promise<PersistedEntityData> {
        return await this._service.request(requests.data.addTagsToEntity, params);
    }

    /**
     * Removes tags from an entity
     * @param params TagsParams tag parameters
     */
    public async removeTagsFromEntity(params: TagsParams): Promise<PersistedEntityData> {
        return await this._service.request(requests.data.removeTagsFromEntity, params);
    }

    /**
     * Updates tags on an existing entity
     * @param params Update params
     */
    public async updateTag(params: TagUpdateParams): Promise<Tag> {
        return await this._service.request(requests.data.updateTag, params);
    }

    /**
     * Returns all the tags available
     * @returns Promise<Tag[]>
     */
    public async getTags(): Promise<Tag[]> {
        return await this._service.request(requests.data.getTags);
    }

    public async getAppData() {
        return await this._service.request(requests.data.getAppData);
    }
    public async updateAppData(appData: AppData) {
        return await this._service.request(requests.data.updateAppData, appData);
    }

    /**
     * Creates a file on Surix linked to the current project.
     * @param file FileMessage message details
     * @returns Promise<FileDetails>
     */
    public async createFile(file: FileParams): Promise<FileDetails> {
        return await this._service.request(requests.data.createFile, file);
    }

    /**
     * Gets a file associated with the id provided
     * @param id string Surix Id
     * @returns Promise<FileDetails>
     */
    public async getFileById(id: string): Promise<FileDetails> {
        return await this._service.request(requests.data.getFileById, id);
    }

    /**
     * Returns all files
     * @returns Promise<FileDetails[]>
     */
    public async getFiles(): Promise<FileDetails[]>{
        return await this._service.request(requests.data.getFiles);
    }
}