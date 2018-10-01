# App Service
This app facilitates the communication between Surix app and Surix itself

The service needs to be imported first before use
```javascript
import { Service, requests } from 'surix-tools';
const surix = Service.init();
```
or
```javascript
const Surix = require('surix-tools'); 
const surix = Surix.Service.init();
```
or
```javascript
<script src="https://cdn.jsdelivr.net/npm/@surix/client-service@0.2.4/dist/client-service.min.js"></script>
const service = Surix.Service.init();
const requests = Surix.requests;
```
`Service`    is the service itself.
`requests` contains all the request types available.

`requests.data` contains:
- `getEntities` Queries entities from the current Surix project.
- `createEntities`: Creates an entity in the current Surix project (expects entity: any parameter).
- `project`: Fetches the current Surix project.
- `getAppData`: Fetches app data stored by the app in the current project
- `updateAppData`: Updates/adds app data to the current project

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
### 
### Fetch Entities:
```javascript
// Fetch entities
const query = {
    query: {
        age: { $gt: 20 }
    },
    tags: ['people']
};
service.request(requests.data.getEntities, query).then(res => {
    // Do something with the response
}).catch(err => {
    // Handle error
});
```
### 
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

service.request(requests.data.createEntity, entity).then(entity => {
    // Do something with the newly created entity
}).catch(err => {
    // Handle the error
});
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
service.request(requests.data.updateAppData).then(updatedData => {
    // do something with updated data
}).catch(err => {
    // handler error
});
```

## Show a Toast Message:
```javascript
const message = 'Welcome to Surix';

service.request(requests.toast.show, message).then(res => {
    // Toast was displayed successfully 
}).catch(err => {
    // Handle error
});
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
