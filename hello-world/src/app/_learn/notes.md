
### special folder name

every folder name will act as a route of the web application expcept:

* _test - will ignore any files that are in this folder and will not be used as route.


* [test] - will act as a dynamic route to get this string you will use params as props to the function then the name of
the folder. Good for products placement profiles etc.

* (test) - will act as a shared space between the routes in this folder sharing template and layout file.
will not be used as a route instead the folders in the route will replace it location.

* @test - will act as a slot that get sent to the layout as props easier time to use it can also have its own error handling and loading states

* (.)test -will create a intercpeptor fo a route that are in the same level for example: you have the f1 folder inside that you have the f2 folder and the (.)f2 folder when navigating to it from the f1 url thourgh the ui you will get the intercepted route for f2( (.)f2 --> page.tsx ) when reloading the page you will get the normal page.tsx ( f2--->page.tsx ), also there is the (..) that will intercept one level above the folder and (..)(..) two level above and also for the root app directory we have this (...).



### Templates (template.tsx)

templates act like layout file but the diffrence is that a layout component will not remount when changing between pages with shared layouts templates will the order of the layout template and page is in the image template.

### Page (page.tsx)

its the componenet for the route to render when he is in the specific route

### layout (layout.tsx)

its a component that will mount when you visit a certain route the has this layout file allows for a scpecific styling to apply for all routes of the folder

### Loading (loading.tsx)


its a component that will render before the actual page will render to ensure the user that the page actualy loading


### not found (not-found.tsx)

a component that will handle the 404 error next has its default 404 but if  you make a not-found component it will replace it a notfound component only applies for the nested routes if a 404 is above in the hierachy it will show the default 404 or the one above it

### Error (error.tsx)

 its a component that will be displayed when an error has been thrown to the webapp the props for the error is {error}
this object will contain further details about the error.

 also a [reset] function present in the props of the component this function can be used to reset the component (remount it)

 the error componenet will follow the same rules of hiearchy

 if an error occured in a layout componenet and there is a error.tsx in the same folder it will not catch it because of the hierachy the fix for this will be placing the error.tsx higher in the hierachy

### Default (default.tsx)

when using unmatched routes meaning that in a slot you have a certain route that does something but in other slots you dont have this route you will need a default.tsx file to handle it cause it will look for this route when rendering the component when not finding its route if you got to this specific route via navigation in the ui you will not need this default.tsx file it will remembers what rendered before and will not throw an 404 error in the page.

### replace html element

replace will change hte previous button to the route before this route



### catch all routes

here you get a slug variable as param includes all of the url routes that is preset [...slug] will achive this
adding [] to [..slug] will include the root folder before the slug as its own page and will render it based on 
page.tsx file in the slug folder

### Conditional  routes

to use Conditinal routes in aa slot enviroment you create a new slot (@login) make the login page and then in the layout page of the father you can do the logic there check if the user is logged in if he isnt you use jsx to display the login component if he is you continue to display the dashboard normally