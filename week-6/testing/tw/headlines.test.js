const headlines = require("./headlines");
const twApi = require("./twApi");

// here we create a mock, or "dumb" copy, of the twApi file. This means that jest will create dumb copies of all the functions in the twApi file. These dumb copies can be invoked, but they won't make ajax requests to the twitter api.
jest.mock("./twApi");

test(`headlines filters out tweets that don't have exactly one link`, () => {
    //if the mock, or dumb copy, that Jest made of getTweets
    twApi.getTweets.mockResolvedValue([
        {
            entities: {
                urls: [
                    {
                        url: "www.google.com"
                    }
                ]
            },
            full_text: `I <3 SALT`
        },
        {
            entities: {
                urls: [
                    {
                        url: "www.google.com"
                    },
                    {
                        url: "www.spiced-academy.com"
                    }
                ]
            },
            full_text: `I <3 SALT`
        },
        {
            entities: {},
            full_text: `I <3 Puppies`
        }
    ]); //ends mockResolvedValue
    return headlines().then(tweets => {
        expect(tweets[0]).toEqual({
            text: `I <3 SALT`,
            href: "www.google.com"
        });
    });
});
