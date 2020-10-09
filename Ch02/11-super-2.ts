/*
You may have been wondering earlier if the super keyword that we use to pass the data from our child constructor to our parent constructor is just one and done, and we're not ever going to really reference it again. But we are. And it's one of the items that distinguishes extends from implements more than anything else. You see here in our cat class on line 19, we have our meow method. Let's go ahead and actually just add a copy of this to our parent class like so, and we'll just do a generic one instead of meow hiss hiss, we'll do roar, roar, roar, something a little bit more generic. The meow name may not be that generic, but that's not what this is about right now. What we've essentially done is we have overwritten our animals meow with our cat meow. Now the super keyword here actually allows us to access methods from our parent class. Now, when overwriting methods, there's always a reference to the overwritten method. However, that is not true for properties. It's something to keep in mind. So let's say our cat class had, can you guess it, nine lives, and the typical animal class had one life, right? Most people only have one, cats have nine. If we wanted to access super.lives, you could actually do this, but you might be surprised to find out that it's going to return back what is in our cat class here. That's because when you override properties, there are overridden permanently. There isn't a reference to our parent based class. So keep that in mind when deciding what use case is going to work better for you between extends and implements.

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

    meow(): string {
        return 'MEOW! HISS! HISS!';
    }
}
