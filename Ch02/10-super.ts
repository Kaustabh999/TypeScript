Selecting transcript lines in this section will navigate to timestamp in the video
- [Instructor] All right, so we have our cat class back from earlier lectures and on line one we have our animal class that has been our base or parent class. And on line 19, we have our dog class, which we implemented in the previous lecture, but cat is still extending. For now let's go ahead and close our animal class here just to give us a little bit more screen real estate. And what I want to showcase is how, before we were actually doing an auto assignment in our constructor. When extending or becoming a child of animal class, our cat class, without a constructor defined, was actually passing the values along to our animal parent class by default. You notice when we hover over here. It's going to say derived classes must contain a super call. If we were to do the same thing, let's go ahead and just comment this out for a second to our dog implements class. We're not going to get that error because although it matches the same shape, it's not actually a child of animal. Now let's jump back to our cat class here in line 13 in our constructor. You'll also notice when we hover over our animal class that it is expecting the same three constructor values that we have on line six, but we're not passing them when we need to, because now it's not doing any auto assignments like it was before. We can go ahead and copy over these values. And just to make a point, we don't actually need to have three parameters in here. If we wanted to, let's say, pass this as an object for cat, and we'll just call this data. We could do that as well. And we could pass it in data dot age, data dot legs, and finally data dot name. There's nothing that makes us have the same number of parameters in our constructor, any at all for that matter. Perhaps with our cat, we just wanted to pass in direct values, but when actually having a constructor and extending our parent class, because as a child, we need to call super. Now, before we end this video, I wanted to hammer down a little bit harder, really the shape versus the class aspect in a very practical example. And the difference between extends and implements. Now, we mentioned earlier that when we extend some things, the child of our parent class while implements is the shape of our parent class. Let me go ahead and create two objects real quick, one dog, one cat based off of the current constructor, how they're working. Now, if we had an array of dogs and cats and a bunch of other animals, and for whatever reason we needed to check, if they were an instance of animal, you might be surprised to find out that if we were to go and let's just say, we were to console log dog is instance of animal, which implements animal, capital a in animal. And if you were to console dot log out, cat is an instance of animal. Your first instinct might be that, yeah, these are both going to be true. In fact, this first one, the implements, because it is matching the shape of our animal class, it's actually going to return false 'cause it's not an instance of it. While because we are extending our base model. Even if we repeat the properties or don't repeat them because we have that option in extends, it's still going to go ahead and return true, because it's actually a child of our parent class. And that leads us into our next video. We're going to dive a little bit deeper into what separates implements and extends specifically with our super keyword.



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
    meow(): string {
        return 'MEOW! HISS! HISS!';
    }
}

export class Dog implements Animal {
    age: number;
    legs: number;
    name: string;

    woof(): string {
        return 'WOOF! WOOF! WOOF!';
    }
}