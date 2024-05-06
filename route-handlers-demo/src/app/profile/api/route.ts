import { headers , cookies } from "next/headers";
import { NextRequest } from "next/server";


export async function GET(request:NextRequest){
    const HeadersList = headers();
    console.log(HeadersList.get('Authorization'));
     
    cookies().set("resultsPerPage","20");
    const theme = request.cookies.get("theme");
    console.log(theme);
    console.log(cookies().get("resultsPerPage"));
    
    return new Response("<h1>Profile Api</>",
    {
        headers:{
            "Content-Type": "text/html",
            "Set-Cookie" : "theme=dark"
        }
    })
}