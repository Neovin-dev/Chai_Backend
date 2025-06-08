# How to connect frontend and backend in javascript | Fullstack Proxy and CORS

> THis lecture can be placed or learned during Frontend or Backend course
> This is get to hang of how things work out in production and production mindset.

- we will have two folder for this

### -- backend
     - `npm init` in this folder for package.json
     - install node and express modules
     - gitignore
     - then write a basic server

We will encounter error when starting to run this `npm run start`
error: `Cannot use import statement outside a module`

There are two ways in JS to import files
- commonJs 
- moduleJS (express from expres)

this can be dont syncronously as well as asynchronously
modueleJS do it unsyncly so we use require instead of import which is commonJS way of doing it. 
if we still want to use module then we can add a new parameter in `package.json` called `"type":"module"` and this will make import functional

"nodemon" -> to automate the refreshing of the server again ang again after changes.
this is all in backend for now ( as this is just a walkthrough project through the whole cycle)

### -- frontend
there are multiple ways to make apps in frontend either it could be vite or parcel or create-react. these are different type of `bundlers` also called `tool-chains`. give us a template or ease of access. 

   -- we will use vite
   -- rename or chane color of terminals to handle both in terminal (uselss info idk why i wrote it)

```js
function App() {
  const [jokes, setJokes] = useState([])

  return (
    <>
      <h1 style={{color:"red"}}>JavaScript and Backend</h1>
      <p>JOKES: {jokes.length}</p>
        {
          jokes.map((joke, index) => {
            <div key={joke.id}>
              <h2>{joke.title}</h2>
              <p>{joke.text}</p>
            </div>
          })
        }
    </>
  )
}
```
After writing this code we are still getting Jokes: 0 that is because we havent send the request yet. Generally we do deeper discussion on this APi request. for this we can prefer from fetch, axios or ReactQuery each has a different implenentation and requirement so we must understand what is eachs requirement to use them 

we will start with the axios `npm install axios` (Read about them). we are using them as they give us additional functinality. 

### CORS 
- Cross Orign Request Sharing
- this gives error here as origns are different as one is running at 3000 and other is running at 4000 therefore cross orign. 
- we can install `cors npm` as well and configure it. 
1. origin same hoga jabhi entry duga
2. in backend addup cors npm package in middleware. (Whitelisting urls)
3. in frontend, addup the proxy in the vite config file.

when we use a Baas(AppWrite, Vercel) as there we use their own packages not a public APi for our tasks. there we go to cloud and added local host so we can whitelist the service so that the application could run properly. 

We will also introduce the concept of Proxy to handle the variable domain name in localhost4000
using proxy form create React app or any other tool
we will do these changes in `vite.config.js` this is the way to do in vite
### Middleware


<!-- Note: I lost it after 42:00 (How to connect frontend and backend in javascript | Fullstack Proxy and CORS) min mark as well as I didnt completely understand everything so need to revist it again as whole as it was quite dense and knowledgeable most terms are new therefore mayba whole of it was not digestable as before I get used to it new term was introduced. dont expect to learn in 1 go-->