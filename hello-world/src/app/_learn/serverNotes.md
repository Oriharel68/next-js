

### Route Handlers

to create a route that will handle an api call you create a folder with the name api you want create inside the folder a route.ts file then in this file you default export the GET or POST function to be used as a api route the syntax is importent.

## route (route.ts)

is a file that define an api route for this specific folder default export a GET or POST named Function from this file will create an api route.
* if you have in a folder a page.tsx file and a route.tsx file the route.tsx file will be used.
will be wrriten in this format:

# export async function GET() {
#   return new Response("GET handler");
    
# }