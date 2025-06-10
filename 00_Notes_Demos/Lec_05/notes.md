# How to setup a professional backend project

Till now we studied some backed basics concepts but
from here on out we will be writing production grade code to build some actual backend. and build a complex project to get the hang of the production with all the essential practices. 

[Figma Link of the Project](https://www.figma.com/design/nONMAT8TxbVhClUZ660l5h/PLAY?node-id=0-1&p=f&t=ug3YoJfS5tXnzVs1-0)

[Model Link (erasor.io)](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbnozVjZUbFpiLU9LQjc2RFhvT2h6RDZpZkZjd3xBQ3Jtc0trMkZTQ1dfNlhYbXh3SzR1LXptRS1uNzI2eE1RRUpJelkyRURfN3ZVNC1laGktaXN5SzRuYTA1TjJpc3hpR2lCSUgya2haX0RBTHpNTDRlRzcyWlVsNmdtd0JSaGxZUzVwUS1NMzJMS2VndkdfRjhUWQ&q=https%3A%2F%2Fapp.eraser.io%2Fworkspace%2FYtPqZ1VogxGy1jzIDkzj%3Forigin%3Dshare&v=9B4CvtzXRpc)

> We are doing things here a certain way but there can be other work flows to do data modelling and stuff. 

initially we will focus on the users

> we will make the files of the project in the main section/ outside lec as this is a very large project which will span multiple lectures and keepping it lecture wise can ruin the structure of the project. 

// Git doesnt track empty folders so we use `.gitkeep` to track it. 
we will first focus on the struture of the file.

to configure the gitignore we will use .gitignore generator which will create a gitignore file according to our project needs. here we will choose node
[gitignore-generator](https://mrkandreev.name/snippets/gitignore-generator/)

"type": "module", we will use module in package.json

to solve the server start and solve problem we will use `--watch` but here we use what is used in production that is `nodemon` this is a development dependency. 

another extention we will use is prettier we also use its vscode code extension but will use this in production so everyone has same syntactical way of doing thing and each project have its way it is also a dev dependency. we have to add a few files manually to get more out of pretierrc