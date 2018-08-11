# App Service
This app facilitates the communication between Surix app and Surix itself

The service needs to be imported first before use
```javascript
import { SurixService, DATA, TOAST, SIDEBAR } from 'surix-service';

const service = new SurixService();
```
`SurixService`    is the service itself.
`DATA` , `TOAST` , `MENU`    are the request types available.

`DATA` contains:
- `GET_ENTITIES:` Fetches entities from the current Surix project.
- `CREATE_ENTITY`: Creates an entity in the current Surix project (expects entity: any parameter).
- `PROJECT`: Fetches the current Surix project.

`TOAST` contains:
- `SHOW`: Displays a message on Surix toast (expects message: string parameter).

`MENU` contains:
- `POPULATE`: Submits the sidebar items to Surix. The sidebar is updated immidiately (expects items: any parameter).

## Methods:
`SurixService` has one method `request` which takes 2 parameters, the first is the request type, and the second is optional payload.
## 
## Populating Surix Sidebar:
Sidebar payload is an array of objects:
```javascript
const menuItems = [
        {
            icon: 'speaker_notes', 
            // This is the icon to be displayed on the sidebar
            // The icon name follows the material icon standard.
            title: "MPESA Transactions", 
            // This is the text displayed on the sidebar
            // and also on the title bar when this item is clicked.
            action: 'mpesa', 
            // This is a tag, the value is abitrary. The developer 
            // could use this to check which sidebar list item was clicked
            default: true 
            // This will be selected by default when the sidebar populates
        },
        {
            icon: 'settings',
            title: "Settings",
            action: 'settings'
        }
]
```

Populating the sidebar:
```javascript
service.request(MENU.POPULATE, menuItems).then(res => {
    // The sidebar was updated automatically
}).catch(err => {
    // Handle the error
});
```
### 
### Fetch Entities:
```javascript
// Fetch entities
service.request(DATA.GET_ENTITIES).then(res => {
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

service.request(DATA.CREATE_ENTITY, entity).then(entity => {
    // Do something with the newly created entity
}).catch(err => {
    // Handle the error
});
```

### Fetch Project:
```javascript
service.request(DATA.PROJECT).then(project => {
    // Do something with the fetched project
}).catch(err => {
    // Handle error
});
```

## Show a Toast Message:
```javascript
const message = 'Welcome to Surix';

service.request(TOAST.SHOW, message).then(res => {
    // Toast was displayed successfully 
}).catch(err => {
    // Handle error
});
```
## Events:
There are times where Surix sends information to the app without the app requesting. When one clicks on the sidebar populated by the app, Surix tells the app about the click using a `clickReq` event.

Listening to the clickReq event:
```javascript
document.addEventListener('clickReq', event => {
    const msg = event.detail;
    switch(msg) {
        case 'settings':
            // The settings sidebar item was clicked
        break;
        case 'mpesa':
            // The mpesa sidebar item was clicked
    }
});
```
