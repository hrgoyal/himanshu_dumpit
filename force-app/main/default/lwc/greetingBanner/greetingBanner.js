import { LightningElement, api } from 'lwc';

export default class GreetingBanner extends LightningElement {
    // Configurable from Lightning App Builder when placed on a Home page
    @api hideDate = false;

    greeting;
    today;

    connectedCallback() {
        const now = new Date();
        const hour = now.getHours();

        let greetingText;
        if (hour < 12) {
            greetingText = 'Good Morning';
        } else if (hour < 17) {
            greetingText = 'Good Afternoon';
        } else {
            greetingText = 'Good Evening';
        }
        this.greeting = `${greetingText}! Have a great day ahead.`;

        this.today = now.toLocaleDateString(undefined, {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }
}