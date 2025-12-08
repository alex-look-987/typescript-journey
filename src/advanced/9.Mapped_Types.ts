/* 
Mapped Types its kinda a for loop to check
if the propertie of the type exists.
If not, got simply ignore and move on.

*/

type User = {
  id: number;
  username: string;
  email: string;
  age: number;
}

type UserUpdate = {[P in keyof User]?: User[P];}

let currentUser: User = {
    id: 24,
    username: "alexLook",
    email: "test@gmail.com",
    age: 23
}

let updatedUser: UserUpdate = {
    username: "alexLook",
    email: "test@gmail.com"
}
