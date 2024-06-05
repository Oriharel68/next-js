

#### Server components vs Client componenets

* server components will be renderd on the server side then showed to the client side, this will improve load time for large application and will prevent performance issuse caused by the user device.

* The disadvantage of using server components is that you can't use web api such as local storage,react hooks and more..

* In next any components created will be a Server components to make a client component you need to write at the top of the component: "use client";


#### Streaming

Streaming is a way to render sites in next js without waiting for each component to finish rendering.

to use it we will wrap the componenet with the suspense element imported from react and put a fallback componenet (a loading component) to be replaced by the component after it finished rendereing

### Server only code

when you using utilitis such as js files to help with server side logic that contains api keys or senstive information about the databases its best to use the libary server-only to ensure that if developer accidently using this specific file it will throw an runtime error at him.

To use that we first need to install the module with this: npm i server-only
next to implemt it in a file we import it at the top: import "server-only".


#### Third pary packages

Sometimes the packges we download from npm using client side features that cant be used in a server side componenet for exanmple react-slick (a package that implemnet a carousel) when we try to use this packgage in a server component it will show us an error runtime screen in order to use this package we will wrap the code with a client side component so we can use it. 