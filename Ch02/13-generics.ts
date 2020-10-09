/*Generics are a very powerful tool to give static typing to a dynamic type. And oftentimes you'll see so many people use, or just any to do that, and it causes a lot of problem. any should be avoided at all costs, and sometimes generic can solve that. One common thing that I've had to do at a couple places when using generics, and I haven't had to use them too many times, is when merging different data sets that we haven't been able to do data migration on for instance, and that's an example we're going to look at. So, there is going to be a little bit more setup in this than perhaps in other videos. Now, you'll see on line one, we have a User class, and then we have this classicUserData property, and this params of any. Now, it'd be nice if we could actually define what this type is and make it generic, because we don't know if it's going to be ClassicUser, or ClassicUser2, and you might do that, but it might be something else, there could be maybe 50 types of users and old data sets and whatnot, and in certain circumstances we know what they are, and we'd rather just tell it what it is. We can actually do that using generics. You denote this with your alligator teeth here, and T is usually the default, and then if you want multiple generics, you can, just by putting a comma and a value, we only need our one. And we'll pass our T here. This is essentially saying that this type that we're passing is this type now. And if we hover over our User class, you'll see it's saying this type is unknown. We can assign a type simply by doing this, which we can say ClassicUser, and now this has the type of ClassicUser. So, when we go and merge our classic user, which takes in our param, and it updates our classicUserData, we'll have access to things like first and last on our ClassicUser, which we'll see here, user1.classicUserData.name.first We have access to that now. Now, if we were to do the same, except now we did our ClassicUser2, the updated one, which I said, "We need our middle name, sir." Now if we wanted to access that, we do have our static typing associated with it. And you'll see that middle is available. It's called generics, but I more think of it as almost dynamic, but this is one example of how you might use that in your object oriented programming. I will say don't go too generic crazy, 'cause sometimes you can build in an anti-pattern doing that, and things get a little too squirrely too quickly, but something to consider.
*/

export class User {
    name: string;
    age: number;
    email: string;
    isMale: boolean;
    public classicUserData: any;

    public mergeClassicUser(params: any): void {
        const { name, isMale, age, email } = this;

        this.classicUserData = { name, isMale, age, email, ...params };
    }
}

interface ClassicUser {
    name: { first: string, last: string };
}

interface ClassicUser2 {
    name: { first: string, middle: string, last: string };
}

const user1 = new User();
user1.mergeClassicUser({ name: { first: 'Dylan', last: 'Israel' } });

const user2 = new User();
user2.mergeClassicUser({ name: { first: 'Dylan', last: 'Israel', middle: 'Christopher' } });