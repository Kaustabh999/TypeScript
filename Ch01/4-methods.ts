/*All right. Let's dive into methods. Methods are nothing more than functions that belong to our classes. Let's check out a little bit of our setup here. You see we have a title for a new course. I've sent out numerous sort of email promotions for my own courses, as well as for businesses. So you might get something like a title, "Hey, you know, new course, just 9.99." And then in the content you get a, "Oh, check out the latest course on object oriented program with TypeScript." Now let's say that we had a preview message method, which all it would do would take the first 10 characters of our message here and then put ... to sort of intrigue you. What would that look like in TypeScript? So we'll start off by writing a previewMessage and we're not going to have any parameters on here, but what we are going to have is a return type of a string. So much like how our properties and our parameters can have type, so can our return. You can see here that what we're returning is any or void right now because we're not returning anything. Void is what the type would be when you're not returning something. In our case, we want to return a string. So let's go ahead and do that. So we can return this.message to access our property. We'll go ahead just slice off the first 10 characters and concat this. These two methods are nothing more than string methods and put ... on the end there. Now, if we wanted to actually use this we could do something like this, message. and you can see we have our preview message method, that we can then go and invoke. And if you hover over it, we have the nice IntelliSense that tells us, "Hey, this is a method and it's going to return a string."*/

export class Message {
    title: string;
    message: string;
    isSent: boolean;

    constructor(title: string, message: string) {
        this.title = title;
        this.message = message;
        this.isSent = false;
    }

}

const message = new Message(
    'New Course!!! Just $9.99!!!',
    'Check out our latest course on OOP with TypeScript!'
);