export const requests = {
    data: {
        createEntity: 'data.createEntity',
        project: 'data.project',
        getEntities: 'data.getEntities',
        getEntityById: 'data.getEntityById',
        addTagsToEntity: 'data.addTagsToEntity',
        removeTagsFromEntity: 'data.removeTagsFromEntity',
        getTags: 'data.getTags',
        getAppData: 'data.getAppData',
        updateAppData: 'data.updateAppData'
    },
    toast: {
        show: 'toast.show',
    },
    menu: {
        populate: 'menu.populate'
    },
    events: {
        menuItemClicked: 'menu-item-clicked',
        // TODO: this is for backwards compatibility
        // it is deprecated and will be removed in a future update
        menuClicked: 'menu-item-clicked'
    }
}