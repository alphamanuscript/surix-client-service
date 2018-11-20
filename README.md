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
`requests` contains all the request types available.

`requests.data` contains:
- `createEntity`: Creates an entity in the current Surix project (expects entity: any parameter).
- `getEntities` Queries entities from the current Surix project.
- `getEntityById`: Gets a single entity by its Surix id.
- `addTagsToEntity`: Add tags to an existing entity.
- `removeTagsFromEntity`: Removes tags from an entity.
- `getTags`: Gets all the entity tags in the project.
- `updateTag`: Updates the specified tag in an entity. <!--readme added-->
- `project`: Fetches the current Surix project.
- `getAppData`: Fetches app data stored by the app in the current project
- `updateAppData`: Updates/adds app data to the current project.
- `createFile`: Creates a file in the current Surix project (expects fileParams: any parameter).
- `getFiles`: Queries files from the current Surix project.
- `getFileById`: Gets a single file by its Surix id.

`requests.toast` contains:
- `show`: Displays a message on Surix toast (expects message: string parameter).

`requests.menu` contains:
- `populate`: Submits the menu items to Surix. The menu is updated immidiately (expects items: any parameter).
`requests.events` contains:
- `menuItemClicked`: The event dispatched when a menu item is clicked.

## Methods:
`Service` has one method `request` which takes 2 parameters, the first is the request type, and the second is optional payload.
## 
## Populating Surix menu:
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
service.request(requests.menu.populate, menuItems).then(res => {
    // The menu was updated automatically
}).catch(err => {
    // Handle the error
});
```

### Show a Toast Message:
```javascript
const toast = {
    message: 'Welcome to Surix',
    type: 'info' // could also be 'success', 'error'
};
service.request(requests.toast.show, toast).then(res => {
    // Toast was displayed successfully 
}).catch(err => {
    // Handle error
});
```

### Fetch Entities:
```javascript
// Fetch entities
const query = {
    query: {
        age: { $gt: 20 }
    },
    tags: ['people']
};
service.request(requests.data.getEntities, query).then((entities) => {
    // Do something with the response
}).catch(err => {
    // Handle error
});
```

### Fetch and entity by its Surix ID
```javascript
const id = '1I7OBNmpPRYMS3s6WmoxeA';
service.request(requests.data.getEntityById, id).then((entity) => {
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

service.request(requests.data.createEntity, entity).then((createdEntity) => {
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

service.request(requests.data.addTagsToEntity, args).then((updatedEntity) => {
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

service.request(requests.data.removeTagsFromEntity, args).then((updatedEntity) => {
    // Do something with the updated entity
}).catch(err => {
    // Handle the error
});
```

**Note**: Tags that are not in the entity will be ignored.

### Updating a tag in an entity
```javascript
const args = {
    tags: 'people',
    update: {
        name: 'persons'
    }
};

surix.request(requests.data.updateTag, args).then(updatedTag => {
    //Tag updated successfully
}).catch(error) => {
    //Error
});
```

### Get all tags in the project
```javascript
service.request(requests.data.getTags).then((tags) => {
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
service.request(requests.data.project).then(project => {
    // Do something with the fetched project
}).catch(err => {
    // Handle error
});
```

### Get App Data:
```javascript
service.request(requests.data.getAppData).then(data => {
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
service.request(requests.data.updateAppData, update).then(updatedData => {
    // do something with updated data
}).catch(err => {
    // handler error
});
```
### Upload a file:
```javascript

const file = document.getElementById('file'); // Assuming the element is an input of type file

const fileParmas = {
    name: 'By picture',
    mimeType: file.type,     // Image mime type (this type is checked against the type of the file itself)
    public: true             // Is the file publicly accessible?
    file,                    // The file itself (has to be of type File)
}

service.request(requests.data.createFile, fileParams).then(fileDetails => {
    // Do something with the file details
}).catch(err => {
    // Handle error
})
```

### Fetch a file by ID
```javascript
const fileId = '123';

service.request(requests.data.getFileById, fileId).then(fileDetails => {
    // Do something with the fileDetails
    // NOTE: fileDetails has  field downloadUrl that contains a url 
    // to the actual file
}).catch(err => {
    // Handle error
});
```

### Fetch all files
```javascript

service.request(requests.data.getFiles).then(files => {
    // DO something with the files, file is an array of fileDetails
}).catch(err => {
    // Handle error
})
```

## Events:
There are times where Surix sends information to the app without the app requesting.

### Menu Item Clicked

When one clicks on the menu populated by the app, Surix tells the app about the click using a `requests.events.menuItemClicked` event.

Listening to the menu click event:
```javascript
let handler = (event) => {
    const msg = event.detail;
    switch(msg.body) {
        case 'settings':
            // The settings menu item was clicked
        break;
        case 'mpesa':
            // The mpesa menu item was clicked
    }

service.on(requests.events.menuItemClicked, handler);
```
