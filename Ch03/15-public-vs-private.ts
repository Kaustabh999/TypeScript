/*] Let's talk about the difference between public and private and in a future video, we'll talk about protected because it actually plays off how extended and implements works. Now, public and private are the two main access modifiers you're going to use. By default, our property here is public. If we don't have any keyword in front of it, which is where your access modifier goes, this is public. This is equivalent to us actually adding said default. Now, one thing to keep in mind is that the IntelliSense doesn't say if it's public or private, you just need to know that by default, TypeScript is private, which may be different than a lot of you coming from C#, for instance, where by default, it's actually public. And I believe it's the same in Java but don't quote me on that. I haven't done Java in many years. Now, public means we have access to everything. So let's say we create my cat again. You remember my cat Baby. Good cat, miss her. But let's say we wanted access to our age, for instance, or our legs or our name. We have access to all of these items. That's because it's public. We also have access to it in a method anywhere in here where let's say we had our get and we wanted it to return ourLegs, we could go ahead and return this.legs. This is accessible within our class. It's accessible outside of our class. I'm going to go ahead and close the cat for some more screen space here. Now, let's say we had the same value and we changed legs here to private. We have private legs. You'll notice that legs is private and only accessible within the class Animal. We'll talk more about this in our Protected class. But let's go ahead and comment that out for now. However, you'll also notice that if we wanted to access it outside of our class, we're going to get an error here. It's private and only accessible within the class Animal. Private means it's quite literally only accessible in the class itself. It doesn't matter if it's a child. It doesn't matter if it's an instantiation outside, we're only going to be able to access our legs method within our parent class or in the class itself rather. And you'll see, if we go ahead and comment this back in, we will have access to it because our Animal class with its private legs is accessible only here and we'll still continue to get this error. It's limiting the scope of availability. Hence the access modifier. But that's encapsulation at its core.*/

export class Animal {
    public age: number;
    private legs: number;
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