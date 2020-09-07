function getInfo() {
	window.numberOfQuestions = 	10;
	window.currentSlide = 		0;
	window.currentScore = 		0;
	
	window.answerChoices = ["A", "B", "C", "D", "E"];	// Array of possible answer choices
	window.answerColor="#0009DB";						// Text color of answer choices (dark blue)
	window.selectedAnswerColor = "#A847DD";				// Text color of currently selected answer (purple)
	window.BGColorNum = 0;								// Used to choose a different circuit board color for each question
	window.endOfQuestion = 14.5;						// Time in seconds at which question time ends
	
	// Set color variables
	window.purple = "#792E6D";
	window.red = "#90061D";
	window.gray = "#575853";
	window.blue = "#003695";
	window.green = "#005B54";
	
	// create array of color values to cycle through when setting the background color for each questions
	window.colorList = [window.purple, window.red, window.gray, window.green];

	
	window.title = 				"Computer Science Trivia";
	window.questions = [		"A byte typically contains how many bits?", 
								"Who of the following is considered to be one of the very first computer programmers?",
								"Which of the following is a popular programming language?", 
								"Which of the following is a popular operating system?", 
								"Which of the following is a binary number?",
								"The acronym ALU stands for _____?",
								"Which computer scientist led the initiative that broke the Enigma code used by the Nazis to send messages in World War II, thus giving the Allies a tactical advantage in the war?",
								"This early text adventure game was designed by Will Crowther and first ran on the PDP-10 mainframe.",
								"An array is a type of _____.",
								"Second-generation computers replaced vacuum tubes with _____." ];
	window.correctAnswer = [ 	"B", "E", "C", "B", "A", "D", "C", "A", "E", "D"]; 
	window.answerA = [ 			"10", 
								"Bill Gates", 
								"Windows", 
								"Java", 
								"00101010",
								"Asynchronous Lag Uploading",
								"Grace Hopper",
								"<cite>Colossal Cave Adventure</cite>",
								"Primitive value",
								"Capacitors" ];
	window.answerB = [ 			"8", 
								"Chieko Asakawa", 
								"iOS", 
								"Android",
								"2",
								"Archived/Localized Unicode",
								"Ron Gilbert",
								"<cite>Zork</cite>",
								"Database",
								"Integrated circuits" ];
	window.answerC = [ 			"5",
								"Carol Shaw",
								"C#", 
								"C++", 
								"65<i>i</i>+7",
								"Abstract Load Unmount",
								"Alan Turing",
								"<cite>Mystery House</cite>",
								"Logic gate",
								"Resistors" ];
	window.answerD = [ 			"16",  
								"Donald Knuth",
								"Linux", 
								"COBOL",
								"F4BC",
								"Arithmetic Logic Unit",
								"Margaret Hamilton",
								"<cite>Shadowgate</cite>",
								"Recursive function",
								"Transistors" ];
	window.answerE = [ 			"3", 
								"Ada Lovelace", 
								"FreeBSD", 
								"HTML", 
								"<i>e</i>",
								"Artificially Logged Unfriending",
								"Charles Babbage",
								"<cite>Plundered Hearts</cite>",
								"Data structure",
								"Diodes" ];
	window.response = [ 		"A byte is a unit of digital information. While a byte generally contains 8 bits today, historically this was not always the case.", 
								"During the 19th century, Ada Lovelace worked with Charles Babbage on the development of his Analytical Engine, which was intended to be a general purpose computer.", 
								"C# (pronounced “C-sharp”) was developed by Microsoft as part of its .NET framework.", 
								"Android is an OS based on a Linux kernel designed primarily for tablets and smartphones.", 
								"There are only two digits in binary: 0 and 1. In binary, 1 + 1 = 10. 10 in binary is equal to 2 in decimal (the number system most people are used to using).",
								"The ALU, or arithmetic logic unit, is a component of a computer’s CPU, or central processing unit. It handles arithmetic and comparison operations.",
								"In addition to his codebreaking efforts, Alan Turing was a prolific computer scientist who devised the Turing test and the Turing machine.",
								"<cite>Colossal Cave Adventure</cite> may have been the first digital example of interactive fiction. It was an influence on later text adventures such as <cite>Zork</cite>.",
								"Arrays are data structures that consist of a set of individual values such as integers, real numbers, characters, or even other arrays.",
								"Third-generation computers organized transistors onto chips called integrated circuits." ];
							
}
						