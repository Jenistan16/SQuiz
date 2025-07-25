const questionBank = {
    math: {
        name: "Mathematics",
        topics: {
            "number-systems": {
                name: "Number Systems",
                questions: Array(100).fill().map((_, i) => {
                    const qType = i % 5;
                    if (qType === 0) {
                        const num = i + 10;
                        return {
                            id: `math-ns-${i}`,
                            text: `What is ${num} in binary?`,
                            options: [
                                num.toString(2),
                                (num + 1).toString(2),
                                (num - 1).toString(2),
                                (num + 2).toString(2)
                            ],
                            answer: 0,
                            explanation: `${num} in binary is ${num.toString(2)}`
                        };
                    }
                    // ... (keep rest of math questions same as before)
                })
            },
            "algebra": {
                name: "Algebra",
                questions: Array(100).fill().map((_, i) => {
                    // ... (keep algebra questions same as before)
                })
            }
        }
    },
    science: {
        name: "Science",
        topics: {
            "physics": {
                name: "Physics",
                questions: Array(100).fill().map((_, i) => {
                    const concepts = [
                        {q: "What is the unit of force?", a: "Newton", o: ["Joule", "Newton", "Watt", "Pascal"]},
                        {q: "What is the acceleration due to gravity (m/s²)?", a: "9.8", o: ["9.8", "10", "6.7", "3.0"]},
                        {q: "Which law states F=ma?", a: "Newton's Second Law", o: ["Newton's First Law", "Newton's Second Law", "Newton's Third Law", "Ohm's Law"]},
                        {q: "What does E=mc² represent?", a: "Mass-energy equivalence", o: ["Kinetic energy", "Potential energy", "Mass-energy equivalence", "Thermal energy"]},
                        {q: "What is the SI unit of power?", a: "Watt", o: ["Joule", "Volt", "Watt", "Ohm"]}
                    ];
                    const current = concepts[i % concepts.length];
                    return {
                        id: `sci-phy-${i}`,
                        text: current.q,
                        options: current.o,
                        answer: current.o.indexOf(current.a),
                        explanation: `Correct answer: ${current.a}`
                    };
                })
            },
            "chemistry": {
                name: "Chemistry",
                questions: Array(100).fill().map((_, i) => {
                    const elements = [
                        {name: "Hydrogen", symbol: "H", number: 1},
                        {name: "Helium", symbol: "He", number: 2},
                        {name: "Carbon", symbol: "C", number: 6},
                        {name: "Oxygen", symbol: "O", number: 8},
                        {name: "Gold", symbol: "Au", number: 79}
                    ];
                    const current = elements[i % elements.length];
                    const qType = i % 4;
                    
                    if (qType === 0) {
                        return {
                            id: `sci-chem-${i}`,
                            text: `What is the atomic number of ${current.name}?`,
                            options: elements.map(e => e.number.toString()),
                            answer: elements.indexOf(current),
                            explanation: `${current.name} has atomic number ${current.number}`
                        };
                    }
                    // ... (keep rest of chemistry questions same as before)
                })
            }
        }
    },
    history: {
        name: "History",
        topics: {
            "ancient": {
                name: "Ancient Civilizations",
                questions: Array(100).fill().map((_, i) => {
                    const civilizations = [
                        {name: "Egypt", achievement: "Pyramids", period: "3150 BC to 30 BC"},
                        {name: "Greece", achievement: "Democracy", period: "8th century BC to 146 BC"},
                        {name: "Rome", achievement: "Republic", period: "753 BC to 476 AD"},
                        {name: "China", achievement: "Great Wall", period: "1600 BC to 1912 AD"},
                        {name: "Mesopotamia", achievement: "Writing", period: "3500 BC to 539 BC"}
                    ];
                    const current = civilizations[i % civilizations.length];
                    const qType = i % 3;
                    
                    if (qType === 0) {
                        return {
                            id: `hist-anc-${i}`,
                            text: `Which ancient civilization built the ${current.achievement}?`,
                            options: civilizations.map(c => c.name),
                            answer: civilizations.indexOf(current),
                            explanation: `The ${current.name} built the ${current.achievement}`
                        };
                    } else if (qType === 1) {
                        return {
                            id: `hist-anc-${i}`,
                            text: `When did the ${current.name} civilization flourish?`,
                            options: civilizations.map(c => c.period),
                            answer: civilizations.indexOf(current),
                            explanation: `${current.name} flourished from ${current.period}`
                        };
                    } else {
                        return {
                            id: `hist-anc-${i}`,
                            text: `What was the ${current.name} civilization known for?`,
                            options: civilizations.map(c => c.achievement),
                            answer: civilizations.indexOf(current),
                            explanation: `${current.name} was known for ${current.achievement}`
                        };
                    }
                })
            },
            "modern": {
                name: "Modern History",
                questions: Array(100).fill().map((_, i) => {
                    const events = [
                        {event: "World War I", year: "1914-1918", cause: "Assassination of Archduke Franz Ferdinand"},
                        {event: "World War II", year: "1939-1945", cause: "Invasion of Poland"},
                        {event: "American Revolution", year: "1775-1783", cause: "Taxation without representation"},
                        {event: "French Revolution", year: "1789-1799", cause: "Financial crisis and social inequality"},
                        {event: "Industrial Revolution", year: "1760-1840", cause: "Technological advancements"}
                    ];
                    const current = events[i % events.length];
                    const qType = i % 3;
                    
                    if (qType === 0) {
                        return {
                            id: `hist-mod-${i}`,
                            text: `When did ${current.event} occur?`,
                            options: events.map(e => e.year),
                            answer: events.indexOf(current),
                            explanation: `${current.event} occurred from ${current.year}`
                        };
                    } else if (qType === 1) {
                        return {
                            id: `hist-mod-${i}`,
                            text: `What was the main cause of ${current.event}?`,
                            options: events.map(e => e.cause),
                            answer: events.indexOf(current),
                            explanation: `Main cause: ${current.cause}`
                        };
                    } else {
                        return {
                            id: `hist-mod-${i}`,
                            text: `Which event happened from ${current.year}?`,
                            options: events.map(e => e.event),
                            answer: events.indexOf(current),
                            explanation: `${current.event} happened from ${current.year}`
                        };
                    }
                })
            }
        }
    },
    english: {
        name: "English",
        topics: {
            "grammar": {
                name: "Grammar",
                questions: Array(100).fill().map((_, i) => {
                    const rules = [
                        {rule: "subject-verb agreement", example: "She walks to school", wrong: "She walk to school"},
                        {rule: "proper comma usage", example: "I bought apples, oranges, and bananas", wrong: "I bought apples oranges and bananas"},
                        {rule: "correct pronoun case", example: "He and I went to the store", wrong: "Him and me went to the store"},
                        {rule: "proper tense usage", example: "I have eaten breakfast", wrong: "I has ate breakfast"},
                        {rule: "correct article usage", example: "An hour ago", wrong: "A hour ago"}
                    ];
                    const current = rules[i % rules.length];
                    const qType = i % 2;
                    
                    if (qType === 0) {
                        return {
                            id: `eng-gram-${i}`,
                            text: `Which sentence demonstrates proper ${current.rule}?`,
                            options: [current.example, current.wrong, "Both are correct", "Neither is correct"],
                            answer: 0,
                            explanation: `Correct: "${current.example}" demonstrates proper ${current.rule}`
                        };
                    } else {
                        return {
                            id: `eng-gram-${i}`,
                            text: `What is wrong with this sentence: "${current.wrong}"?`,
                            options: [
                                `Incorrect ${current.rule}`,
                                "Spelling error",
                                "Punctuation error",
                                "Nothing is wrong"
                            ],
                            answer: 0,
                            explanation: `The sentence has incorrect ${current.rule}`
                        };
                    }
                })
            },
            "literature": {
                name: "Literature",
                questions: Array(100).fill().map((_, i) => {
                    const works = [
                        {title: "Romeo and Juliet", author: "William Shakespeare", quote: "What's in a name? That which we call a rose by any other name would smell as sweet"},
                        {title: "Pride and Prejudice", author: "Jane Austen", quote: "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife"},
                        {title: "Moby Dick", author: "Herman Melville", quote: "Call me Ishmael"},
                        {title: "1984", author: "George Orwell", quote: "War is peace. Freedom is slavery. Ignorance is strength"},
                        {title: "To Kill a Mockingbird", author: "Harper Lee", quote: "You never really understand a person until you consider things from his point of view... Until you climb inside of his skin and walk around in it"}
                    ];
                    const current = works[i % works.length];
                    const qType = i % 3;
                    
                    if (qType === 0) {
                        return {
                            id: `eng-lit-${i}`,
                            text: `Who wrote "${current.title}"?`,
                            options: works.map(w => w.author),
                            answer: works.indexOf(current),
                            explanation: `${current.author} wrote "${current.title}"`
                        };
                    } else if (qType === 1) {
                        return {
                            id: `eng-lit-${i}`,
                            text: `Which work contains this quote: "${current.quote}"?`,
                            options: works.map(w => w.title),
                            answer: works.indexOf(current),
                            explanation: `"${current.title}" by ${current.author} contains this quote`
                        };
                    } else {
                        return {
                            id: `eng-lit-${i}`,
                            text: `Complete this famous opening: "${current.quote.split(' ').slice(0, 3).join(' ')}..."`,
                            options: works.map(w => w.quote),
                            answer: works.indexOf(current),
                            explanation: `Full quote: "${current.quote}"`
                        };
                    }
                })
            }
        }
    }
};