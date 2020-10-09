/*] Protected's probably the more confusing of the access modifiers, just because it has a couple of moving parts, unlike private and public, which are pretty straightforward. Protected has to do with having essentially a private modifier that allows you to use a value in a parent and sibling class. It also causes some issues with implements. So if you remember earlier, implements means we're actually just matching the shape of the object while extends is actually a child of our parent class. Now, let's say protected was on age here. You'll notice that there's no way for us to actually implement Animal now because of the protected property. In order for this to match it, it needs to be a child. If we were to get rid of this, you'll see we still have this issue because age is missing in type Dog. But if we have it there, the property is protected and thus it's not a derived class of Animal. So when you're using protected, you're not going to be able to implement things correctly, or at all really, unless you sort of disable this or hard-code ways around it, which obviously you don't want to do that. However, in our child class, not the shape but our child class Cat here on line 13, we have access to this private method. And if we wanted to do something like, hey, a birthday where we then simply returned a new number, which was return this.age plus one, we have access to that. Now, if we were to let's go ahead right here, create a cat object, you'll notice that we still can't access it from an instantiation. So age 19, legs four, and then name Baby. Fun fact about Baby, I named her Princess for about a week before I decided that was a bad move. But you'll notice that the age property, it's not available. It's actually protected and not accessible and only accessible within the base class, in this case Animal, and all of its subclasses are child classes.
*/

export class Animal {
    age: number;
    legs: number;
    name: string;

    constructor(age: number, legs: number, name: string) {
        this.age = age;
        this.legs = legs;
        this.name = name;
    }
}

export class Cat extends Animal {
    constructor(data: { age: number, legs: number, name: string }) {
        super(data.age, data.legs, data.name);
    }
}

export class Dog implements Animal {
    age: number;
    legs: number;
    name: string;
}
