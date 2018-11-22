import {
    PersistedEntityData,
    TagUpdateParams,
    FileDetails, 
    FileParams, 
    TagsParams,
    EntityData,
    Project,
    AppData,
    Tag,
    IData,
    PersistedAppData
} from "../types";
import { requests } from "../requests";
import { ServiceBase } from "../service-base";

export class Data extends ServiceBase implements IData{
    //public _service: Service;
    
    public constructor() {
        super();
        //this._service = Service.init();
    }

    /**
     * Saves an entity in Surix
     * @param entity EntityData entity to be saved
     * @returns Promise<PersistedEntityData>
     */
    public async createEntity(entity: EntityData): Promise<PersistedEntityData> {
        return await this.internalRequest(requests.data.createEntity, entity);
    }

    /**
     * Returns the current project
     * @returns Promise<Project>
     */
    public async project(): Promise<Project> {
        return await this.internalRequest(requests.data.project);
    }

    /**
     * Returns all the entities present
     * @param query (Optional) query
     * @returns Promise<PersistedEntityData[]>
     */
    public async getEntities(query?: any): Promise<PersistedEntityData[]> {
        return await this.internalRequest(requests.data.getEntities, query);
    }

    /**
     * Returns an entity identified by the id provided
     * @param id Surix Id
     * @returns Promise<PersistedEntityData>
     */
    public async getEntityById(id: string): Promise<PersistedEntityData> {
        return await this.internalRequest(requests.data.getEntityById, id);
    }

    /**
     * Adds tags to an existing entity
     * @param params Parameters to add tags
     * @returns Promise<PersistedEntityData>
     */
    public async addTagsToEntity(params: TagsParams): Promise<PersistedEntityData> {
        return await this.internalRequest(requests.data.addTagsToEntity, params);
    }

    /**
     * Removes tags from an entity
     * @param params TagsParams tag parameters
     */
    public async removeTagsFromEntity(params: TagsParams): Promise<PersistedEntityData> {
        return await this.internalRequest(requests.data.removeTagsFromEntity, params);
    }

    /**
     * Updates tags on an existing entity
     * @param params Update params
     */
    public async updateTag(params: TagUpdateParams): Promise<Tag> {
        return await this.internalRequest(requests.data.updateTag, params);
    }

    /**
     * Returns all the tags available
     * @returns Promise<Tag[]>
     */
    public async getTags(): Promise<Tag[]> {
        return await this.internalRequest(requests.data.getTags);
    }

    public async getAppData(): Promise<PersistedAppData> {
        return await this.internalRequest(requests.data.getAppData);
    }
    public async updateAppData(appData: AppData): Promise<PersistedAppData> {
        return await this.internalRequest(requests.data.updateAppData, appData);
    }

    /**
     * Creates a file on Surix linked to the current project.
     * @param file FileMessage message details
     * @returns Promise<FileDetails>
     */
    public async createFile(file: FileParams): Promise<FileDetails> {
        return await this.internalRequest(requests.data.createFile, file);
    }

    /**
     * Gets a file associated with the id provided
     * @param id string Surix Id
     * @returns Promise<FileDetails>
     */
    public async getFileById(id: string): Promise<FileDetails> {
        return await this.internalRequest(requests.data.getFileById, id);
    }

    /**
     * Returns all files
     * @returns Promise<FileDetails[]>
     */
    public async getFiles(): Promise<FileDetails[]>{
        return await this.internalRequest(requests.data.getFiles);
    }
}