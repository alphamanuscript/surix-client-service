import { Service, requests } from '..';

jest.spyOn(global.window.parent , 'postMessage');

describe('Requests', async () => {
    let surix: any;

    beforeAll(() => {
        surix = Service.init();
    });
    describe('====Init====', async() => {
        test('Compare instances', async() => {
            const anotherSurix = Service.init();
            expect(surix).toBe(anotherSurix);
        });
    });
    describe("====Passes====", async () => {
        test('Get Project', async() => {
            surix.request(requests.data.project).then(() => {
                // Projects fetched successfully
            }).catch(() => {
                // Error 
            });

            expect(window.parent.postMessage).toHaveBeenCalled();
        });
        test('Get Entities', async () => {
            surix.request(requests.data.getEntities).then(()=>{
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
            surix.request(requests.menu.populate, menu).then(() => {
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

            surix.request(requests.data.createEntity, entity).then(() => {
                // Entity created successfully
            }).catch(() => {
                // Error
            });
            
            expect(window.parent.postMessage).toHaveBeenCalled();
        });
    });
});