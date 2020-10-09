/*] Polymorphism is one of those big, scary words in software engineering and really just object-oriented programming that isn't all that complicated. It's just one of those words you don't use. We've actually been doing it this whole time and sometimes when dealing with some of these more complex topics or these scary topics, the way I like to do about it is just to introduce it to you, don't tell you what it is and then tell you you already know it. And it sort of demystifies it a little bit. So let's talk about the three main tenets of polymorphism and look at a few examples of things you already have done. One is the method and parameter overriding, where the child overrides a parent method. This is something we've done time and time again. So let's take a look at our User class here. It just has a firstName, age, and email. And in our Base class, we have a protected role that we're going to have access to and other aspects. So in SuperAdmin that extends BaseUser on line 23, you see we're giving a default value. Sort of overriding the parameters. Now, when it comes to overriding a method, you can see on line 18, we have hasAllAccess, which is just a Boolean. It says hey, if our role's admin, go ahead and return true. Now, in SuperAdmin class, we're overriding it to always return true. So our admin should have availability to everything. Another item that is pretty common is method overloading and this is really just the same name methods with more parameters or less, depending on how you look at it. And JavaScript doesn't support this or TypeScript as well 'cause you have to remember, TypeScript has to compile down to JavaScript. Let's give an example of that just so you can see what to avoid and maybe some potential solutions. So in hasAllAccess, our override, let's say we wanted to overload this because for whatever reason, we wanted to check the user's age, right? If they're greater than 18, and their role was defined. The hasAllAccess method is actually going to have an issue here because it's a duplicate function implementation. How you might go about solving this in JavaScript, just one, you could go ahead and make user optional like so. We'll still put a type. Or you could actually go and instantiate a object instead of making it optional like so, or do the full-on new user. If we were to do something like Dylan, Israel, age 32 and 32 is a number, of course, to match our constructor. So that's our override and you, of course, need to have the logic in your method account for this being optional or not. But that's one way that you might go about overloading and then finally, implementing through our abstract classes and interfaces, which we've done so many times before where we take our user and we implement our parent base-level class to match the shape and methods.*/

/*
1. method / param overriding -> child overrides parent method
2. method overloading -> same name methods (JavaScript doesn't support this)
3. interfaces / abstract classes implements
*/

export class User {
    firstName: string;
    age: number;
    email: string;

    constructor(firstName: string, email: string, age: number) { }
}

class BaseUser extends User {
    protected role: string;

    public hasAllAccess(): boolean {
        return this.role === 'Admin';
    }
}

export class SuperAdmin extends BaseUser {
    role = 'Admin';
    password: string;

    constructor(firstName: string, lastName: string, age: number) {
        super(firstName, lastName, age)
    }

    // override 
    public hasAllAccess(): boolean {
        return true;
    }

    // overloading failure
    // public hasAllAccess(user: User) {
    //     return user.age > 18 && this.role;
    // }
}

export class Guest implements User {
    name: string;
    age: number;
    email: string;
    firstName: string;
    lastName: string;
    middleName: string;

    get fullName(): string {
        return `${this.firstName} ${this.middleName} ${this.lastName}`;
    }

    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}