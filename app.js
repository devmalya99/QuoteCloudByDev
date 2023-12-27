let btn=document.querySelector('#new-quote')

let quote=document.querySelector('.quote')

let person=document.querySelector('.person')

const quotes= [
    { quote: "To live is the rarest thing in the world. Most people exist, that is all.", person: "Unknown" },
    { quote: "Life's most persistent and urgent question is, 'What are you doing for others?'", person: "Unknown" },
    { quote: "I have not failed. I've just found 10,000 ways that won't work.", person: "Thomas Edison" },
    { quote: "Genius is one percent inspiration and ninety-nine percent perspiration.", person: "Thomas Edison" },
    { quote: "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.", person: "George Smith Patton" },
    { quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.", person: "Winston Churchill" },
    { quote: "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible.", person: "Francis of Assisi" },
    { quote: "The two most important days in your life are the day you are born and the day you find out why.", person: "Stephen Hawking" },
    { quote: "Anyone can hide. Facing up to things, working through them, that's what makes you strong.", person: "Unknown" },
    { quote: "If you want to live a happy life, tie it to a goal, not to people or things", person: "Unknown" },
    { quote: "You have to trust in something, your gut, destiny, life, karma, whatever.", person: "Steve Jobs" },
    { quote: "Life will always be to a large extent what we ourselves make it.", person: "Unknown" },
    { quote: "I can dream alone and strive alone, but true success always requires the help and support of others.", person: "Unknown" },
    { quote: "Your most unhappy customers are your greatest source of learning.", person: "Brian Tracy" },
    { quote: "If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on. Sheryl Sandberg", person: "Sheryl Sandberg" },
    { quote: "First, have a definite, clear practical ideal; a goal, an objective. Second, have the necessary means to achieve your ends; wisdom, money, materials, and methods. Third, adjust all your means to that end. Aristotle", person: "Aristotle" },
    { quote: "You can’t fall if you don’t climb. But there’s no joy in living your whole life on the ground. Unknown", person: "Unknown" },
    { quote: "We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained. Marie Curie", person: "Marie Curie" },
    { quote: "Too many of us are not living our dreams because we are living our fears. Les Brown", person: "Les Brown" },
    { quote: "Challenges are what make life interesting and overcoming them is what makes life meaningful. Joshua J. Marine", person: "Joshua J. Marine" },
        { quote: "People often say that motivation doesn’t last. Well, neither does bathing – that’s why we recommend it daily.", person: "Zig Ziglar" },
        { quote: "Motivation is a fire from within. If someone else tries to light that fire under you, chances are it will burn very briefly.", person: "Stephen Covey" },
        { quote: "There is only one motivation, and that is desire. No reasons or principle contain it or stand against it.", person: "Jane Smiley" },
        { quote: "Be miserable. Or motivate yourself. Whatever has to be done, it’s always your choice.", person: "Wayne Dyer" },
        { quote: "Desire is the key to motivation, but it’s determination and commitment to an unrelenting pursuit of your goal — a commitment to excellence — that will enable you to attain the success you seek.", person: "Mario Andretti" },
        { quote: "Motivation will almost always beat mere talent", person: "Norman R. Augustine"},
        { quote: "Motivation, passion, and focus have to come from the top.", person: "Kevin Plank" },
        { quote: "Motivation is what gets you started. Habit is what keeps you going.", person: "Jim Ryun" },
        { quote: "Your talent determines what you can do. Your motivation determines how much you’re willing to do. Your attitude determines how well you do it.", person: "Lou Holtz" },
        { quote: "The changing of the goals helps keep the motivation fresh.", person: "Bradley Wiggins" },
        { quote: "Other people’s success spurs me on to do well and gives me motivation.", person: "Nicholas Hoult" },
        { quote: "When you fail you learn from the mistakes you made and it motivates you to work even harder.", person: "Natlaie Glubis" },
        { quote: "I’m not one for those motivational speeches. I’ve always been more of an example guy.", person: "Carey Price" },
        { quote: "People always need to hear good motivational speeches.", person: "Rudy Ruettiger" },
        { quote: "Real obsession needs an unconscious motivation behind it.", person: "Damon Galgut" },
        { quote: "Motivation is the art of getting people to do what you want them to do because they want to do it.", person: "Dwight D. Eisenhower" },
        { quote: "With the new year comes a refueled motivation to improve on the past one.", person: "Gretchen Bleiler" },
        { quote: "Once something is a passion, the motivation is there.", person: "Michael Schumacher" },
        { quote: "My motivation is being the best." , person: "Brian Shaw" },
        { quote: "For me, motivation is a person who has the capability to recruit the resources he needs to achieve a goal.", person: "Arsene Wenger" }
    
];

   btn.addEventListener('click',function()
   {
      let random=Math.floor(Math.random()*quotes.length)
       
      quote.innerText=quotes[random].quote
      person.innerText=quotes[random].person
      
    })
   