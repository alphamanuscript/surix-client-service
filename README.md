# App Service

This library allows Surix apps to communicate with the host Surix web client.

The service needs to be imported first before use
```javascript
import { Service, requests } from '@surix/client-service';
const service = Service.init();
```
or
```javascript
const Surix = require('@surix/client-service'); 
const service = Surix.Service.init();
const requests = Surix.requests;
```
or
```javascript
<script src="https://cdn.jsdelivr.net/npm/@surix/client-service@0.2.5/dist/client-service.min.js"></script>
const service = Surix.Service.init();
const requests = Surix.requests;
```
`Service`    is the service itself.

Service contains all the methods grouped according to their operations

[data](#data-methods) contains:
- [createEntity](#create-entity): Creates an entity in the current Surix project (expects entity: any parameter).
- [getEntities](#fetch-entities): Queries entities from the current Surix project.
- [getEntityById](#fetch-and-entity-by-its-surix-id): Gets a single entity by its Surix id.
- [addTagsToEntity](#add-tags-to-an-entity): Add tags to an existing entity.
- [removeTagsFromEntity](#remove-tags-from-an-entity): Removes tags from an entity.
- [getTags](#get-all-tags): Gets all the entity tags in the project.
- [updateTag](#updating-a-tag): Updates the specified tag in an entity. <!--readme added-->
- [project](#fetch-project): Fetches the current Surix project.
- [getAppData](#get-app-data): Fetches app data stored by the app in the current project
- [updateAppData](#update-app-data): Updates/adds app data to the current project.
- [createFile](#upload-a-file): Creates a file in the current Surix project (expects fileParams: any parameter).
- [getFiles](#fetch-all-files): Queries files from the current Surix project.
- [getFileById](#fetch-a-file-by-id): Gets a single file by its Surix id.

[toast](#toast-methods) contains:
- [show](#show-a-toast-message): Displays a message on Surix toast (expects message: string parameter).

[menu](#menu-methods) contains:
- [populate](#populating-surix-menu): Submits the menu items to Surix. The menu is updated immidiately (expects items: any parameter).

[events](#events-methods) contains:
- [menuItemClicked](#menu-item-clicked): The event dispatched when a menu item is clicked.

## Menu Methods
### Populating Surix menu:
menu payload is an array of objects:
```javascript
const menuItems = [
    {
        icon: 'speaker_notes', 
        // This is the icon to be displayed on the menu
        // The icon name follows the material icon standard.
        title: "MPESA Transactions", 
        // This is the text displayed on the menu
        // and also on the title bar when this item is clicked.
        action: 'mpesa', 
        // This is a tag, the value is abitrary. The developer 
        // could use this to check which menu list item was clicked
        default: true 
        // This will be selected by default when the menu populates
    },
    {
        icon: 'settings',
        title: "Settings",
        action: 'settings'
    }
]
```

Populating the menu:
```javascript
service.menu.populate(menuItems).then(res => {
    // The menu was updated automatically
}).catch(err => {
    // Handle the error
});
```

## Toast Methods
### Show a Toast Message:
```javascript
const toast = {
    message: 'Welcome to Surix',
    type: 'info' // could also be 'success', 'error'
};
service.toast.show(toast).then(res => {
    // Toast was displayed successfully 
}).catch(err => {
    // Handle error
});
```
## Data Methods
### Fetch Entities:
```javascript
// Fetch entities
const query = {
    query: {
        age: { $gt: 20 }
    },
    tags: ['people']
};
service.data.getEntities(query).then((entities) => {
    // Do something with the response
}).catch(err => {
    // Handle error
});
```

### Fetch and entity by its Surix ID
```javascript
const id = '1I7OBNmpPRYMS3s6WmoxeA';
service.data.getEntityById(id).then((entity) => {
    // Do something with the entity
}).catch(err => {
    // Handle error
});
```

### Create Entity:
```javascript
// Create an Entity
const entity = {
    data: {
        value: 18,
        type: 'number',
        label: 'Age'
    }
};

service.data.createEntity(entity).then((createdEntity) => {
    // Do something with the newly created entity
}).catch(err => {
    // Handle the error
});
```

### Add tags to an entity
```javascript
const args = {
    tags: ['people', 'friends'],
    entityId: '1I7OBNmpPRYMS3s6WmoxeA'
};

service.data.addTagsToEntity(args).then((updatedEntity) => {
    // Do something with the updated entity
}).catch(err => {
    // Handle the error
});
```

**Note**: And entity cannot have duplicate tags. If a tag is already in
the entity, it will be ignored.

### Remove tags from an entity
```javascript
const args = {
    tags: ['people', 'friends'],
    entityId: '1I7OBNmpPRYMS3s6WmoxeA'
};

service.data.removeTagsFromEntity(args).then((updatedEntity) => {
    // Do something with the updated entity
}).catch(err => {
    // Handle the error
});
```

**Note**: Tags that are not in the entity will be ignored.

### Updating a tag
```javascript
const args = {
    tags: 'people',
    update: {
        name: 'persons'
    }
};

surix.data.updateTag(args).then(updatedTag => {
    //Tag updated successfully
}).catch(error) => {
    //Error
});
```

### Get all tags
```javascript
service.data.getTags().then((tags) => {
    // Do something with the tags
}).catch((err) => {
    // handle error
});
```

The response of the request is an array of tag objects:
```javascript
[
    { name: 'contacts' },
    { name: 'products' },
    { name: 'messages' }
]
```

### Fetch Project:
```javascript
service.data.project().then(project => {
    // Do something with the fetched project
}).catch(err => {
    // Handle error
});
```

### Get App Data:
```javascript
service.data.getAppData().then(data => {
    // do something with the data
}).catch(err => {
    //handler error
});
```

### Update App Data:
```javascript
const update = {
    data: {
        theme: {
            type: 'text',
            value: 'blue'
        },
        active: {
            type: 'boolean',
            value: true
        }
    }
};
service.data.updateAppData(update).then(updatedData => {
    // do something with updated data
}).catch(err => {
    // handler error
});
```
### Upload a file:
```javascript

const file = document.getElementById('file'); // Assuming the element is an input of type file

const fileParmas = {
    name: 'My picture',      // File title
    mimeType: file.type,     // Image mime type (this type is checked against the type of the file itself)
    public: true             // Is the file publicly accessible?
    file,                    // The file itself (has to be of type File)
}

service.data.createFile(fileParams).then(fileDetails => {
    // Do something with the file details
}).catch(err => {
    // Handle error
})
```

### Fetch a file by ID
```javascript
const fileId = '123';

service.data.getFileById(fileId).then(fileDetails => {
    // Do something with the fileDetails
    // NOTE: fileDetails has  field downloadUrl that contains a url 
    // to the actual file
}).catch(err => {
    // Handle error
});
```

### Fetch all files
```javascript

service.data.getFiles().then(files => {
    // DO something with the files, file is an array of fileDetails
}).catch(err => {
    // Handle error
})
```

## Events Methods           
There are times where Surix sends information to the app without the app requesting.

### Menu Item Clicked:          

When one clicks on the menu populated by the app, Surix tells the app about the click using a `menuItemClicked` event.

Listening to the menu click event:
```javascript
let handler = (event) => {
    const msg = event.detail;
    // msg.body contains the action value in your menu item
    switch(msg.body) {
        case 'settings':
            // The settings menu item was clicked
        break;
        case 'mpesa':
            // The mpesa menu item was clicked
    }

service.events.menuItemClicked(handler);
```
