
### special folder name

every folder name will act as a route of the web application expcept:

* _test - will ignore any files that are in this folder and will not be used as route.


* [test] - will act as a dynamic route to get this string you will use params as props to the function then the name of
the folder. Good for products placement profiles etc.

* (test) - will act as a shared space between the routes in this folder sharing template and layout file.
will not be used as a route instead the folders in the route will replace it location.


### Templates (template.tsx)

templates act like layout file but the diffrence is that a layout component will not remount when changing between pages with shared layouts templates will the order of the layout template and page is in the image template.

### Page (page.tsx)

its the componenet for the route to render when he is in the specific route

### layout (layout.tsx)

its a component that will mount when you visit a certain route the has this layout file allows for a scpecific styling to apply for all routes of the folder

### Loading (loading.tsx)


its a component that will render before the actual page will render to ensure the user that the page actualy loading


### replace html elemnt

replace will change hte previous button to the route before this route



### catch all routes

here you get a slug variable as param includes all of the url routes that is preset [...slug] will achive this
adding [] to [..slug] will include the root folder before the slug as its own page and will render it based on 
page.tsx file in the slug folder