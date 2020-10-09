/*Getters and setters in object oriented programming and TypeScript are one of the more powerful items that you can utilize. It's also one of the most underused items when it comes to getting data from the backend, often times you're not mapping to your classes, so you're losing out on some of these helper methods and helper functions that getters and setters provide. So, a get, which we'll talk about right now, and we'll come back to set in future lectures, is simply a property that does some logic to return a value. You can denote that with the get keyword, and let's say we wanted to return our message, concatenated with whether it has been sent or not. So, we'll have a property called messageStatus, which we'll invoke like a function. And we'll here have a return, every get needs to have a return. And all we want to do is we'll just have a little bit of logic, and we'll call this sentMessage, and we'll set this equal to a ternary. Say that if it is sent, go ahead and return 'Has been sent.' If it has not been sent, 'Has not been sent.' and then we'll return just a little bit of concatenating of the strings here. this.message, we'll put a pipe, and then we'll put sentMessage, like so. And now we have this get that's going to be accessed as if its a property. You see previewMessage from previous lectures, but now if we wanted to access just, "Hey, what is our message status?" We'd access it just like that, and we'd get it back. It's a property, but it's a property that has a little bit more logic that we can go and define, and that is automatically updated. So, if this.message updates, and this.isSent, whenever we go and call this again, we'll have the latest message status.*
/
export class Message {
    title: string;
    message: string;
    isSent: boolean;

    constructor(title: string, message: string) {
        this.title = title;
        this.message = message;
        this.isSent = false;
    }

    previewMessage(): string {
        return this.message.slice(0, 10).concat('...');
    }
}

const message = new Message(
    'New Course!!! Just $9.99!!!',
    'Check out our latest course on OOP with TypeScript!'
);

message.previewMessage();