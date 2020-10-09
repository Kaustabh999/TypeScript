/*So a setter or the set keyword in our class is pretty much the exact opposite of what a get is. Well, a get is there to get data, a set is there to update data while still provides some additional logic. Now, let's say when we set our isSent property, we wanted to actually have a new property here called delivery date. And delivery date will be the time associated with when that isSent property is then true, meaning we just sent it. So let's set this equal to date. Now, if we wanted to convert this to a setter getter, we can do that pretty easily and still have this functionality, right? It's going to be a bit of a hassle to every time we say, hey, go ahead and isSent update delivery date. Now, let's have our setter do that for us. So we're going to introduce some concepts here, such as access modifiers, but I'm introducing them a little bit earlier. So you can see a very practical approach of how you might use this. So when you're going to use a get value to return isSent and a set value to set isSent. You're typically going to have a private variable that you're going to store the value in. And sometimes you'll see this underscore denoted when using a getter or a setter. Now for our setter isSent, this is going to look similar to our getter from before, but a setter never returns a value, but it always takes in a value because it's there to set something. Can't set something without a value. So we'll have our boolean value. Now, this.isSent when we go and we say, hey, go ahead and update this private value. Like so, this is going to update it. And then when we want to actually access this, we simply create our get like we did earlier. We're going to have isSent, this will return a boolean. And now we will say return this._isSent, which is going to be accessed through isSent. But the way we have it set up right now is this delivery date. Whenever we can do if value is, if you want to be very explicit equal to true, this.delivery date is equal to a new date. It just got set. And now when we go down below here and we say, hey, we want to say message.isSent is equal to true. We're setting it like you would already do. You'll notice that it doesn't look any different when we actually access the property. However, in the background, our setter is running this logic to update delivery date, and we can access it the same way, like we would any normal property.*/

export class Message {
    title: string;
    message: string;
    isSent: boolean;
    
    constructor(title: string, message: string) {
        this.title = title;
        this.message = message;
        this.isSent = false;
    }

    get messageStatus(): string {
        const sentMessage = this.isSent ? 'Has been sent.' : 'Has not been sent.';

        return `${this.message} | ${sentMessage}`;
    }

    previewMessage(): string {
        return this.message.slice(0, 10).concat('...');
    }
}

const message = new Message(
    'New Course!!! Just $9.99!!!',
    'Check out our latest course on OOP with TypeScript!'
);
message.messageStatus;
message.previewMessage();