const projects = [
    {
        title: "Senior Thesis Project",
        completionDate: "May 2024",
        completed: false,
        description: `For my Senior Thesis, I am building a Markov Model to simulate the results of MLB games.
        The model uses data from <a>Retrosheet</a> which includes play-by-play data I can use to determine the start and end state for each at-bat. The 
        model is written in Python and I use R to acquire the Retrosheet data with the BaseballR package. In addition to the model, the project will have an
        interactive front-end which allows the user to visualize the results of each simulation.`
    },
    {
        title:"NCAA Baseball Map",
        completionDate: "December 2023",
        completed: true,
        hasLink: true,
        link: "https://qgiscloud.com/tonyowens/ncaa_baseball_2023/",
        linkText: "Map",
        description: `For this project, I used QGIS to create a map of all the NCAA Division 1 baseball teams that took place in 2023. The map includes the location for each game, as well as the date and score.
        I acquired the data using the <a href="https://billpetti.github.io/baseballr/" target="_blank">baseballr</a> R package, and utilized Python and R to clean the data and prepare it for use in QGIS.
        I used the <a href="https://geopy.readthedocs.io/en/stable/" target="_blank">GeoPy</a> library to geocode the location of each game.
        The source code for the data preparation is available at the following link <a href="https://github.com/tonyowensjr/ncaa_baseball_map" target="_blank"> source code</a>.`
    },
    {
        title: "COS 426 Final Project",
        completionDate: "December 2023",
        hasLink: true,
        link: "https://tonyowensjr.github.io/cos_426_final/",
        linkText: "Game Link",
        completed: true,
        description: `The final project for the class COS 426: Computer Graphics. Here I worked with 
        another student to develop a video game in JavaScript. The game is a rendition of the popular mobile game Angry Birds. It uses the Three.js library for design and the Cannon.js physics engine.`
    },
    {
        title: "COS 316 Final Project",
        completionDate: "December 2023",
        hasLink: false,
        completed: true,
        link: "https://github.com/joshkol1/COS316-Final-Project",
        linkText: "Project Code",
        description: `The final project for the class COS 316: Principles of Computer System Design. For this project, I worked with another student to build an iptables-like simple stateful firewall application in Go. We also 
        used the Python library scapy to generate packets to test the application, and benchmark its performance.`
    },
    {
        title: "Princeton Baseball Umpire Scraper",
        completed:true,
        completionDate: "November 2023",
        description: `A Python script which scrapes the <a href="https://stats.ncaa.org/" target="_blank">NCAA Stats</a> website for the umpire assigned to each game, and the location
        of the game. The script uses the library <a href="https://selenium-python.readthedocs.io/" target="_blank">Selenium</a> to acquire the umpire for each D1 game.
        The script fits into our larger project of combining our internal Trackman data with the NCAA play-by-play data to visualize the strike zone of each umpire.`
    },
    {
        title: "Princeton Baseball Team Shiny App",
        link: "r_shiny_demo.html",
        linkText: "App Demo",
        completed:true,
        hasLink: true,
        completionDate: "September 2023",
        description:`An interactive R Shiny app which visualizes game data. The data sources 
        are the Princeton Baseball team's Trackman data, and the game data available via the NCAA website. This app allows the coaches to visualize 
        how hitters perform against different pitchers, where pitchers locate their pitches most often and the strike zones of different umpires in the NCAA.`
    },
    {
        title: "Final Project SPA 304",
        completionDate: "May 2023",
        completed: true,
        hasLink: true,
        link: "spa_304.html",
        linkText: "Paper",
        description: `My final project for the class SPA 304: Spanish in the Community.
        For this project, I wrote a 6-page research paper in Spanish about the discrimination that Hispanic and Latino players face in the MLB. This spring, I intend to write a 6,000
        word expansion of this paper for completion of the independent work component of my certificate in Spanish Language and Culture at Princeton University.`
    },
    {
        title: "Junior Year Independent Work Project",
        completed: true,
        completionDate: "May 2023",
        hasLink: true,
        link: "jr_iw.html",
        linkText: "Paper",
        description: `Junior Spring, I had the opportunity to complete a semester-long independent work project on a topic of my choosing.
        For my project, I created several Machine Learning Models based on data which I scraped from Fangraphs. The Machine Learning models are
        written in Python primarlily using the Scikit-learn library. There is also a Neural Network model written in PyTorch. The findings and my approach
        are described in detail in the <a href="jr_iw.hmtl" target="_blank" >write-up.</a>`
    },
    {
        title: "Movie Revenue Prediction Competition",
        completed: true,
        completionDate: "March 2023",
        description: `During Junior Spring, I participated in a competition hosted by the Princeton Data Science Club. The goal of the competition was to predict the revenue of movies based on a provided data set.
        In addition to using the provided data, I used the Python nltk library to perform sentiment analysis on the title and description and the Consumer Price Index and inflation rate for the year the movie was released. The final model was a Scikit-learn 
        random forest regressor model. I placed 2nd in the competition out of around 30 participants.`
    },
    {
        title: "SML 310 Final Project",
        completed: true,
        hasLink: true,
        link: "sml_310.html",
        linkText: "Paper",
        completionDate: "December 2022",
        description: `Junior Fall I took the class SML310, a project-based course about Machine Learning models. For the final project,
        I developed several Machine Learning models to predict the results of NBA games. The models are written largely in R using the  To acquire the training data, I scraped <a href="https://basketball-reference.com" target="_blank">Basketball Reference</a> for 
        game results and <a href="https://realgm.com" target="_blank">RealGM</a> for player stats. In addition to the models, I wrote a <a href="sml_310.html" target="_blank">paper</a> detailing my process and results.`
    },
    {
        title: "Football Analytics Blitz Competition",
        completed: true,
        hasLink: true,
        link: "https://docs.google.com/presentation/d/1ver-MUXXezytkemYb3ZvXxLHu3obaGPzIjanyaW-np4/edit?usp=sharing",
        linkText: "Presentation",
        completionDate: "February 2022",
        description: `Sophomore year, I participated in the Football Analytics Blitz competition. I worked with a team of 4 other students to analyze a provided data set and
        present our findings to a panel of coaches. For this project, I used SQL to query our data and extract relevant information regarding the Chiefs and their opponents. I also used Python to assist with data 
        cleaning and the visualization of our results.`
    },
    {
        title: "Seam Carving",
        completed: true,
        hasLink: false,
        completionDate: "November 2021",
        description: `An assignment for the class COS 226: Algorithms and Data Structures. I wrote a content-aware image resizing algorithm in Java. For this project,
        I implemented several functions which allow the user to resize an image vertically or horizontally, while maintaining the important features of the image.`
    }
];

function generateProjects() {
    const projectList = document.getElementById('projectList');

    projects.forEach(project => {
        // Create list item
        const li = document.createElement('li');
        li.className = 'list-group-item';

        // Create heading
        const h2 = document.createElement('h2');
        h2.textContent = project.title;

        // Append emphasis element for date if it exists
        if (project.completionDate) {
            const em = document.createElement('em');
            em.textContent = project.completed ? '     (' + project.completionDate +')' : ' (Intended Completion Date: ' + project.completionDate + ')';
            h2.appendChild(em);
        }

        if (project.hasLink){
            const a = document.createElement('a');
            a.href = project.link;
            a.textContent = project.linkText;
            a.target="_blank";
            h2.appendChild(a);
        }

        // Create paragraph and set HTML content
        const p = document.createElement('p');
        p.innerHTML = project.description; // Use innerHTML for HTML content

        // Append elements to list item
        li.appendChild(h2);
        li.appendChild(p);

        // Append list item to the list
        projectList.appendChild(li);
    });
}

// Call the function to generate projects
generateProjects();