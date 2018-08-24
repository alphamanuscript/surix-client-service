import { Service, DATA } from '..';
import { MENU } from '../src/requests';

jest.spyOn(global.window.parent , 'postMessage');

describe('Requests', async () => {
    let surix: any;

    beforeAll(() => {
        surix = new Service();
    });
    describe("====Passes====", async () => {
        test('Get Project', async() => {
            surix.request(DATA.PROJECT).then(() => {
                // Projects fetched successfully
            }).catch(() => {
                // Error 
            });

            expect(window.parent.postMessage).toHaveBeenCalled();
        });
        test('Get Entities', async () => {
            surix.request(DATA.GET_ENTITIES).then(()=>{
                // Entities fetched successfully
            }).catch(()=>{
                // Error
            });

            expect(window.parent.postMessage).toHaveBeenCalled();
        });
        test("Set menu", async () => {
            const menu = [
                {
                    icon: 'icon', title: 'Title', action: 'action'
                }
            ]
            surix.request(MENU.POPULATE, menu).then(() => {
                // Menu set successfully
            }).catch(() => {
                // Error
            });

            expect(window.parent.postMessage).toHaveBeenCalled();
        });
        test('Create Entity', async() => {
            const entity = {
                data: {
                    name: {
                        title: 'name',
                        type: 'string',
                        value: 'Kevin Nderitu'
                    }
                }
            }

            surix.request(DATA.CREATE_ENTITY, entity).then(() => {
                // Entity created successfully
            }).catch(() => {
                // Error
            });
            
            expect(window.parent.postMessage).toHaveBeenCalled();
        });
    });
});