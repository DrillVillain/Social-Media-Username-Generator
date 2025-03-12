const nicheOptions = {
    instagram: ["Influencer", "Business", "Personal", "Faceless", "Fitness", "Travel", "Fashion", "Foodie", "Photography", "Luxury", "Motivation"],
    youtube: ["Vlogger", "Tech", "Gaming", "Education", "Music", "Reaction", "ASMR", "Podcast", "DIY", "Shorts", "Reviews"],
    tiktok: ["Dancer", "Comedy", "Fitness", "Motivation", "ASMR", "Pranks", "Beauty", "Trendy", "Edits", "Viral"],
    twitter: ["News", "Crypto", "Personal", "Business", "Parody", "AI Enthusiast", "Writer", "Meme Dealer"],
    twitch: ["Gaming", "Esports", "IRL Streaming", "Music", "Speedrunning", "Just Chatting", "RP", "Clips"],
    reddit: ["Memes", "Tech", "Science", "Conspiracy", "Self-Improvement", "Stocks", "Startups", "Hustle"],
    linkedin: ["Entrepreneur", "Marketing", "Finance", "Consulting", "Real Estate", "Startup", "CEO", "Investor"]
};

const styles = {
    cool: [
        "Epic", "Savage", "Legend", "Neon", "Hyper", "Storm", "Vortex", "Shadow", "Ghost", "Frost",
        "Rogue", "Cipher", "Echo", "Phantom", "Infinity", "Inferno", "Nova", "Havoc", "Quantum", "Glitch",
        "Turbo", "Zero", "Astral", "Matrix", "Hacker", "Stealth", "Dark", "Chaos", "Blaze", "Zen",
        "Xeno", "Wraith", "Skyline", "Stealthy", "Abyss", "Vortex", "Omni", "Solar", "CipherX", "ShadowX",
        "Ghostly", "Eclipse", "Thunder", "Solaris", "Nocturnal", "Titan", "Orion", "Blackout", "Viral",
        "Omega", "Crimson", "Rift", "Blizzard", "Venom", "Shockwave", "Xcalibur", "Synergy", "Striker",
        "Nightmare", "Dagger", "Horizon", "Zenith", "Echoes", "Gravity", "Sonic", "Blitz", "Volt", "QuantumX"
    ],
    professional: [
        "Official", "Pro", "Elite", "Expert", "Master", "Authority", "CEO", "Innovator", "Consultant", "Investor",
        "Founder", "Director", "Visionary", "Leader", "C-Level", "Hustle", "Startup", "Strategist", "Mogul", "Empire",
        "Venture", "Network", "Pioneer", "Nexus", "Prestige", "Evolve", "Corporate", "Advisory", "Titan", "Disruptor",
        "Executive", "Capital", "Wealth", "Success", "Boardroom", "Analyst", "Thinker", "Advisor", "Trendsetter", "EliteX",
        "VentureX", "Magnet", "Influence", "HighRoller", "Forbes", "Billionaire", "Inc", "Prime", "Apex", "Ambition",
        "BossMove", "FounderX", "Growth", "Tycoon", "Dominate", "Fortune", "PowerHouse", "Entrepreneur", "Legacy", "Monarch",
        "Vanguard", "CEOConnect", "PrimeX", "Execu", "StratX", "Elevate", "EpicScale", "Funded", "BoardroomX", "EconX"
    ],
    funny: [
        "Goofy", "Wacky", "LOL", "Silly", "Quirky", "MemeLord", "Bored", "Jokester", "Derp", "WeirdFlex",
        "Lulz", "Oops", "Oopsie", "Whoops", "Noob", "Troll", "DumbDumb", "Clown", "Yikes", "Cursed",
        "Pog", "UwU", "Meh", "Smol", "EpicFail", "Giggly", "Teehee", "Facepalm", "Honk", "Bingus",
        "Cringe", "Dank", "Boomer", "Sussy", "Based", "Karen", "Yeet", "Zoomer", "Gigachad", "Bork",
        "Shreked", "MemeX", "LulW", "Derpy", "BruhMoment", "VibeCheck", "VibeCrasher", "UwUXD", "PepeHands", "Pepega",
        "OmegaLUL", "Soyboy", "TrollX", "Sh*tpost", "KeK", "Kekw", "OopsieDoodle", "Gonk", "Failboat", "Bonk",
        "Zaddy", "DorkLord", "FacepalmX", "OofX", "OopsX", "UwUForce", "TrollWarlord", "CringeMaster", "MemeGod"
    ],
    anonymous: [
        "Cipher", "Nameless", "Shadow", "Ghost", "Incognito", "X", "Hacker", "Stealth", "Unknown", "Silent",
        "Rogue", "Hidden", "Masked", "Veil", "Void", "Phantom", "Unseen", "Spectre", "Whisper", "Null",
        "DarkNet", "Anony", "DeepWeb", "Onyx", "Cloak", "Nightfall", "Blackout", "Omni", "Abyss", "Illusion",
        "Vanished", "MaskedX", "VeiledX", "EchoX", "StealthyX", "HackerX", "DeepX", "VoidX", "CipherGhost",
        "NamelessOne", "AnonPrime", "QuantumGhost", "PhantomX", "IncognitoElite", "Ghostly", "Whisperer", "TheUnseen",
        "BlackBox", "DarkNetX", "DarkWebX", "Redacted", "ZeroX", "NoTrace", "Infiltrator", "Disappeared", "DeepEcho",
        "SilentHacker", "TheWatcher", "UnknownEntity", "SilentShadow", "VoidEntity", "HiddenOne", "TheNameless", "GhostProtocol"
    ]
};

function updateNiches() {
    const platform = document.getElementById("platform").value;
    const nicheSelect = document.getElementById("niche");
    nicheSelect.innerHTML = '<option value="">Select a Niche</option>';

    if (platform && nicheOptions[platform]) {
        nicheOptions[platform].forEach(niche => {
            let option = document.createElement("option");
            option.value = niche.toLowerCase().replace(/\s+/g, "_");
            option.textContent = niche;
            nicheSelect.appendChild(option);
        });
    }
}

async function generateUsername() {
    console.log("generateUsername function called");
    const platform = document.getElementById("platform").value;
    const niche = document.getElementById("niche").value;
    const style = document.getElementById("style").value;
    const userIdea = document.getElementById("userIdea").value.trim();
    
    if (!platform || !niche || !style) {
        alert("Please select platform, niche, and style!");
        return;
    }

    const randomNum = Math.floor(Math.random() * 1000);
    const randomStyle = styles[style][Math.floor(Math.random() * styles[style].length)];
    const baseUsername = userIdea ? `${userIdea}${randomNum}` : `${randomStyle}${niche.charAt(0).toUpperCase() + niche.slice(1)}${randomNum}`;

    console.log("Base Username:", baseUsername);
    const aiUsername = await generateAIUsername(baseUsername, platform, niche, style, userIdea);
    console.log("AI Generated Username:", aiUsername);
    document.getElementById("result").innerText = `Generated Username: @${aiUsername}`;
    checkAvailability(aiUsername);
}

async function generateAIUsername(baseUsername, platform, niche, style, userIdea) {
    const apiKey = 'a93d97a3f69844b28c0bf84683c67f5d'; // Replace with your OpenAI API key
    const prompt = `Generate a creative and unique username based on the following details:
    Base Username: ${baseUsername}
    Platform: ${platform}
    Niche: ${niche}
    Style: ${style}
    User Idea: ${userIdea}
    Provide at least 5 different username options.`;

    try {
        const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                prompt: prompt,
                max_tokens: 50
            })
        });

        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }

        const data = await response.json();
        console.log("API Response:", data);
        const usernames = data.choices[0].text.trim().split('\n').filter(username => username);
        return usernames[Math.floor(Math.random() * usernames.length)];
    } catch (error) {
        console.error("Error generating AI username:", error);
        alert("Error generating AI username. Please try again later.");
        return generateFallbackUsername(baseUsername, platform, niche, style, userIdea); // Fallback to base username if API call fails
    }
}

function generateFallbackUsername(baseUsername, platform, niche, style, userIdea) {
    const randomNum = Math.floor(Math.random() * 1000);
    const randomStyle = styles[style][Math.floor(Math.random() * styles[style].length)];
    const nicheFormatted = capitalizeFirstLetter(niche.replace(/_/g, ''));
    const separator = getRandomSeparator();
    const randomSuffix = getRandomSuffix(niche);

    // Generate final username with different catchy variations
    const usernameFormats = [
        `${userIdea}${separator}${randomStyle}${randomNum}`,
        `${randomStyle}${separator}${userIdea}${randomNum}`,
        `${userIdea}${separator}${nicheFormatted}${randomNum}`,
        `${randomStyle}${separator}${userIdea}${separator}${randomSuffix}`,
        `${userIdea}${randomNum}${separator}${randomStyle}`,
        `${randomStyle}${separator}${getRandomCatchyWord()}${randomNum}`,
        `${getRandomCatchyWord()}${separator}${userIdea}${randomNum}`
    ];

    return usernameFormats[Math.floor(Math.random() * usernameFormats.length)];
}

function checkAvailability(username) {
    setTimeout(() => {
        const available = Math.random() > 0.3; // Simulating 70% chance of availability
        const availabilityElement = document.getElementById("availability");
        availabilityElement.innerText = available ? "✅ Username is available!" : "❌ Username is taken. Try again!";
        availabilityElement.className = available ? "success" : "error";
    }, 1000);
}

// Randomly selects a separator (_ or . or - or no separator)
function getRandomSeparator() {
    const separators = ["_", ".", "-", ""];
    return separators[Math.floor(Math.random() * separators.length)];
}

// Generates a random suffix to make the username unique
function getRandomSuffix(niche) {
    const suffixes = {
        gaming: ["Gamer", "Playz", "XP", "HQ", "Live", "Noob", "Beast", "Arena"],
        crypto: ["Crypto", "Investor", "NFT", "HODL", "X", "Whale", "Bull", "Moon"],
        fitness: ["Fit", "Gym", "Beast", "Vibes", "Flex", "Gains", "Energy"],
        fashion: ["Trend", "Style", "Chic", "Drip", "Queen", "Aesthetic", "Slay"],
        business: ["CEO", "Boss", "Brand", "Capital", "Elite", "Hustle", "Growth"],
        default: ["X", "Vibes", "HQ", "Master", "Pro", "Wave", "NextGen"]
    };

    return suffixes[niche] ? suffixes[niche][Math.floor(Math.random() * suffixes[niche].length)] : suffixes.default[Math.floor(Math.random() * suffixes.default.length)];
}

// Generates a catchy random word to add even more uniqueness
function getRandomCatchyWord() {
    const catchyWords = [
        "Alpha", "Hustle", "Viral", "Quantum", "Glitch", "Boost", "Neon", "Thunder",
        "Shadow", "Rogue", "Inferno", "Nova", "Titan", "Zen", "Luxe", "Vortex", "Turbo"
    ];

    return catchyWords[Math.floor(Math.random() * catchyWords.length)];
}

// Capitalizes the first letter of a word
function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Copy to clipboard
document.getElementById("copyBtn").addEventListener("click", function() {
    const usernameText = document.getElementById("result").innerText.split("@")[1];
    if (!usernameText) return;
    navigator.clipboard.writeText(usernameText);
    alert("Username copied to clipboard!");
});

// Dark Mode Toggle
document.getElementById("darkModeToggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});