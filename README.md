# React Side Menu

A responsive, iconographic side menu bar for React web apps

**Large** (width 1360px+):

![](https://raw.githubusercontent.com/wilsocr88/react-side-menu/master/React%20App%205-19-2020%209-44-00%20AM.png)

**Medium** (width 768px - 1359px)

![](https://raw.githubusercontent.com/wilsocr88/react-side-menu/master/React%20App%205-19-2020%209-44-22%20AM.png)

**Mobile** (width less than 768px)

![](https://raw.githubusercontent.com/wilsocr88/react-side-menu/master/React%20App%205-19-2020%209-45-12%20AM.png)
![](https://raw.githubusercontent.com/wilsocr88/react-side-menu/master/React%20App%205-19-2020%209-45-25%20AM.png)

## Usage

* Import your icon components, and the SideMenu component, into your React app:

```javascript
// import the top-level SideMenu directory for a cleaner import
import SideMenu from 'path/to/SideMenu'
import { MdAddCircle, MdStar, MdPerson } from 'react-icons/md'
```

* Build an array of objects for your menu

(**Note:** *The ```hr: true``` object is a horizonal line between menu items*)

```javascript
const menu = [
    {
        icon: MdAddCircle,
        text: "New",
        link: "/new"
    },
    {
        icon: MdStar,
        text: "Favorites",
        link: "/favorites"
    },
    {
        hr: true
    },
    {
        icon: MdPerson,
        text: "Agent",
        link: "/agent"
    },
]
```

* Pass your menu array to the ```menu``` prop when rendering/returning your JSX

```jsx
<SideMenu menu={menu} />
```

## Props

| property   |      type      |  description |
|------------:|-------------:|------:|
| menu | array[object]  | array of menu item objects (see below) |

### Menu item object

Each object inside the ```menu``` prop's array requires EITHER:

| property   |      type      |  description |
|------------:|-------------:|------:|
| icon | React component  | the bare [react-icons](https://react-icons.github.io/) component for your icon of choice |
| text | string  | the text label for menu item |
| link | string  | the navigable URL for the link |

OR

| property   |      type      |  description |
|------------:|-------------:|------:|
| hr | boolean  | if true, this spot in the menu will display a horizonal separator line |

## CONTRIBUTING

See [CONTRIBUTING](https://github.com/wilsocr88/react-side-menu/blob/master/CONTRIBUTING.md)
