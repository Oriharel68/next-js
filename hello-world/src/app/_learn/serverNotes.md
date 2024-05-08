

### Route Handlers

to create a route that will handle an api call you create a folder with the name api you want create inside the folder a route.ts file then in this file you default export the GET or POST function to be used as a api route the syntax is importent.

## route (route.ts)

is a file that define an api route for this specific folder default export a GET or POST named Function from this file will create an api route.
* if you have in a folder a page.tsx file and a route.tsx file the route.tsx file will be used.
will be wrriten in this format:

# export async function GET() {
#   return new Response("GET handler");
    
# }

## POST:
# export async function POST(request:NextRequest,context:{params,query}) { // the request is the body of the request
#   return new Response("GET handler");
    
# }
context is an object that have the params object that contains the params for the request

## Query Params

to use  Query Params we exctarct it from the request (NextRequest) by using requst.nextUrl.searchParams
to get a specific param we then use [get] sending the name of the query we want on the searchParams searchParams.get("value")  


## Redirect

when we want to redirect the user to another url for some reason we can use the redirect method from next/navigation.

## Headers Route
in order to use Headers sent by the client we need to use the headers function store it in a variable and then use a get function on it with the header we want to get

## Cookies

To use cookies we can use the cookies method provided by next/headers we invoke the function and then we can use its get function to get the cookies and the set method to set a cookie for the request

## middleware (middleware.ts)

To use the middlewares in our server we need to create a file in the [/src] folder and name it middleware.ts
usually looks like this:

# import { NextResponse, type NextRequest } from "next/server"; 
# 
# export function middleware(request: NextRequest) {  //// This is how the middleware export will looklike
#   const response = NextResponse.next();             ///   this is the next response you can use to return to the client
#   const themePrefrence = request.cookies.get("theme");
#   if (!themePrefrence) {
#     response.cookies.set("theme", "dark");          /// setting cookies
#   }
# 
#   response.headers.set("cutom-header", "custom value"); // setting header
#   return response;
#   // if(request.nextUrl.pathname === "/profile")        //    use this method to find out what route youre on
#   // return NextResponse.redirect(new URL("/hello",request.url)); //   use this to redirect the client to antoher url
# }
# 
# // export const config = {
# //     matcher: '/profile'  // if you use this way you dont need to check which path youre on it will match it                               automaticly
# // }

