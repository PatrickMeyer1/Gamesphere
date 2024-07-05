import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom';
import './Thread.css'; 
import default1Pic from './assets/default1.png';
import default2Pic from './assets/default2.png';
import default3Pic from './assets/default3.png';
import default4Pic from './assets/default4.png';
import clockPic from './assets/clock.png';
import likePic from './assets/like.png';
import dislikePic from './assets/dislike.png';
import sharePic from './assets/share.png';
import sendPic from './assets/send.png';

function Thread() {
    const { id } = useParams(); 
    const [thread, setThread] = useState(null);

    const threadData = [
        {
        id: 1,
        title: "Best Weapons in Gaming History",
        author: "YaBoy780",
        date: "July 2, 2024",
        comments: [
          {
            id: 1,
            profilePic: default2Pic,
            author: "YaBoy780",
            timeAgo: "27 minutes ago",
            likes: 10,
            dislikes: 2,
            shares: 5,
            text: "I think the Energy Sword from Halo is hands down the best weapon ever. It's so satisfying to use and looks incredibly cool. Plus, it's been a staple in the series for years. Every time I get my hands on it, I feel a rush of excitement. It's not just a weapon, it's a symbol of Halo's iconic status in the gaming world. The design is sleek and deadly, and the gameplay mechanics around it are just perfect. The way it can turn the tide of a battle in multiplayer matches is unparalleled. I've had countless memorable moments with the Energy Sword, from epic kills to intense duels."
          },
          {
            id: 2,
            profilePic: default3Pic,
            author: "1OfAK1nd",
            timeAgo: "22 minutes ago",
            likes: 8,
            dislikes: 1,
            shares: 3,
            text: "The BFG 9000 from Doom has to be mentioned. It's one of the most iconic weapons in gaming history. The sheer power it brings to the table makes it unforgettable. When you fire that massive green blast, you know everything in its path is going down. The BFG isn't just about raw power, though. It's a statement piece, representing the over-the-top, action-packed nature of the Doom series. The thrill of using it, especially in the heat of battle, is unmatched. It's a weapon that demands respect and delivers chaos. The first time I used it, I was blown away, and it never gets old."
          },
          {
            id: 3,
            profilePic: default4Pic,
            author: "WUTT1440p",
            timeAgo: "10 minutes ago",
            likes: 15,
            dislikes: 3,
            shares: 7,
            text: "Don't forget about the Master Sword from The Legend of Zelda series. It's a legendary weapon with deep lore and a critical role in the game's story. The Master Sword isn't just a powerful blade; it's a symbol of courage and heroism. Every time Link draws it, you feel the weight of the journey and the battles ahead. The history and mystique surrounding the Master Sword add layers of depth to the game, making it more than just a tool for combat. It's a beacon of hope and a reminder of the hero's destiny. The moments leading up to acquiring the Master Sword are always epic and memorable."
          },
          {
            id: 4,
            profilePic: default3Pic,
            author: "TheGooat900",
            timeAgo: "9 minutes ago",
            likes: 12,
            dislikes: 0,
            shares: 2,
            text:<iframe width="560" height="315" src="https://www.youtube.com/embed/42_JsIXMkJc?si=eB6cAAPil0Ku7Nby" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen="true"></iframe>
          }
        ]
        },
        {
            id: 2,
            title: "Top FPS Games for PC",
            author: "ShooterPro",
            date: "June 30, 2024",
            comments: [
              {
                id: 1,
                profilePic: default2Pic,
                author: "ShooterPro",
                timeAgo: "25 minutes ago",
                likes: 12,
                dislikes: 3,
                shares: 6,
                text: "Battlefield 6 is shaping up to be a fantastic entry with its large-scale battles and stunning visuals."
              },
              {
                id: 2,
                profilePic: default3Pic,
                author: "FPSMaster",
                timeAgo: "20 minutes ago",
                likes: 10,
                dislikes: 1,
                shares: 4,
                text: "Call of Duty: Modern Warfare 2 Remastered brings back classic gameplay with enhanced graphics and new features."
              }
            ]
          },
          {
            id: 3,
            title: "Upcoming Strategy Games",
            author: "Strategist",
            date: "June 25, 2024",
            comments: [
              {
                id: 1,
                profilePic: default2Pic,
                author: "Strategist",
                timeAgo: "30 minutes ago",
                likes: 15,
                dislikes: 2,
                shares: 8,
                text: "Civilization VII looks like it will continue the series' legacy of deep strategy and addictive gameplay."
              },
              {
                id: 2,
                profilePic: default3Pic,
                author: "WarGamer",
                timeAgo: "28 minutes ago",
                likes: 11,
                dislikes: 1,
                shares: 5,
                text: "Total War: Three Kingdoms 2 expands on its predecessor with new factions and improved diplomacy mechanics."
              }
            ]
          },
          {
            id: 4,
            title: "Best Indie Games of the Year",
            author: "IndieFan",
            date: "July 1, 2024",
            comments: [
              {
                id: 1,
                profilePic: default2Pic,
                author: "IndieFan",
                timeAgo: "32 minutes ago",
                likes: 18,
                dislikes: 4,
                shares: 7,
                text: "Hollow Knight: Silksong promises to deliver another masterpiece with its beautiful art style and challenging gameplay."
              },
              {
                id: 2,
                profilePic: default3Pic,
                author: "PixelArtDev",
                timeAgo: "29 minutes ago",
                likes: 14,
                dislikes: 2,
                shares: 6,
                text: "Stardew Valley 2 brings new crops, animals, and locations, expanding on the beloved farming simulator."
              }
            ]
          },
          {
            id: 5,
            title: "Esports News and Updates",
            author: "EsportsGuru",
            date: "July 2, 2024",
            comments: [
              {
                id: 1,
                profilePic: default2Pic,
                author: "EsportsGuru",
                timeAgo: "35 minutes ago",
                likes: 20,
                dislikes: 3,
                shares: 10,
                text: "The latest Dota 2 International tournament features record-breaking prize pools and intense competition."
              },
              {
                id: 2,
                profilePic: default3Pic,
                author: "CSGOPro",
                timeAgo: "33 minutes ago",
                likes: 16,
                dislikes: 2,
                shares: 8,
                text: "Counter-Strike: Global Offensive introduces new maps and gameplay updates to keep the esports scene competitive."
              }
            ]
          },
          {
            id: 6,
            title: "Hardware Recommendations for Gaming",
            author: "Techie",
            date: "June 28, 2024",
            comments: [
              {
                id: 1,
                profilePic: default2Pic,
                author: "Techie",
                timeAgo: "40 minutes ago",
                likes: 25,
                dislikes: 5,
                shares: 12,
                text: "The latest NVIDIA RTX 4090 graphics card sets new benchmarks for gaming performance and ray-tracing capabilities."
              },
              {
                id: 2,
                profilePic: default3Pic,
                author: "PCMasterRace",
                timeAgo: "38 minutes ago",
                likes: 22,
                dislikes: 4,
                shares: 10,
                text: "AMD Ryzen 7 6800X processor is a powerhouse for gaming and multitasking, offering great value for enthusiasts."
              }
            ]
          },
          {
            id: 7,
            title: "Top 10 Mobile Games",
            author: "MobileGamer",
            date: "June 27, 2024",
            comments: [
              {
                id: 1,
                profilePic: default2Pic,
                author: "MobileGamer",
                timeAgo: "42 minutes ago",
                likes: 30,
                dislikes: 6,
                shares: 15,
                text: "Genshin Impact continues to dominate the mobile gaming scene with its expansive world and engaging gameplay."
              },
              {
                id: 2,
                profilePic: default3Pic,
                author: "CasualGamer",
                timeAgo: "39 minutes ago",
                likes: 28,
                dislikes: 5,
                shares: 13,
                text: "Among Us updates bring new maps and features, keeping players hooked with its social deduction gameplay."
              }
            ]
          },
            {
            id: 8,
            title: "Best RPG Games of 2024",
            author: "Gamer123",
            date: "July 2, 2024",
            comments: [
              {
                id: 1,
                profilePic: default2Pic,
                author: "Gamer123",
                timeAgo: "27 minutes ago",
                likes: 10,
                dislikes: 2,
                shares: 5,
                text: "The Witcher 4: Wild Hunt is my top pick for 2024. Its storytelling and immersive world-building set a new standard for RPGs."
              },
              {
                id: 2,
                profilePic: default3Pic,
                author: "RPGFanatic",
                timeAgo: "22 minutes ago",
                likes: 8,
                dislikes: 1,
                shares: 3,
                text: "Elder Scrolls VI looks promising with its vast open world and deep lore. Can't wait to explore Tamriel once again!"
              },
              {
                id: 3,
                profilePic: default4Pic,
                author: "QuestMaster",
                timeAgo: "10 minutes ago",
                likes: 15,
                dislikes: 3,
                shares: 7,
                text: "Cyberpunk 2077 continues to evolve and could become a standout RPG with upcoming updates and expansions."
              },
              {
                id: 4,
                profilePic: default3Pic,
                author: "RPGGuru",
                timeAgo: "9 minutes ago",
                likes: 12,
                dislikes: 0,
                shares: 2,
                text: "Check out this gameplay preview of Starfield, Bethesda's new sci-fi RPG slated for release next year."
              }
            ]
          },
          {
            id: 9,
            title: "Latest Action Games Releases",
            author: "ActionFanatic",
            date: "July 3, 2024",
            comments: [
              {
                id: 1,
                profilePic: default1Pic,
                author: "ActionFanatic",
                timeAgo: "5 minutes ago",
                likes: 5,
                dislikes: 1,
                shares: 2,
                text: "I'm excited about the new releases this year! Can't wait to dive into the action."
              },
              {
                id: 2,
                profilePic: default3Pic,
                author: "GamerX",
                timeAgo: "10 minutes ago",
                likes: 3,
                dislikes: 0,
                shares: 1,
                text: "Any recommendations for action games with great single-player campaigns?"
              }
            ]
          },
          {
            id: 10,
            title: "Exploring the World of Adventure Games",
            author: "AdventureSeek",
            date: "July 1, 2024",
            comments: [
              {
                id: 1,
                profilePic: default2Pic,
                author: "AdventureSeek",
                timeAgo: "7 minutes ago",
                likes: 4,
                dislikes: 0,
                shares: 2,
                text: "Adventure games have always been my favorite genre. Any hidden gems you recommend?"
              },
              {
                id: 2,
                profilePic: default3Pic,
                author: "GameExplorer",
                timeAgo: "12 minutes ago",
                likes: 2,
                dislikes: 1,
                shares: 1,
                text: "I'm looking forward to trying out new adventure games this summer!"
              }
            ]
          },
          {
            id: 11,
            title: "Strategic Insights for Competitive Gaming",
            author: "CompGamer",
            date: "July 2, 2024",
            comments: [
              {
                id: 1,
                profilePic: default1Pic,
                author: "CompGamer",
                timeAgo: "8 minutes ago",
                likes: 6,
                dislikes: 2,
                shares: 3,
                text: "Strategy games are all about planning and execution. What strategies do you find most effective?"
              },
              {
                id: 2,
                profilePic: default4Pic,
                author: "StrategistX",
                timeAgo: "15 minutes ago",
                likes: 4,
                dislikes: 0,
                shares: 2,
                text: "I enjoy analyzing competitive play. It's fascinating to see how different strategies unfold."
              }
            ]
          },
          {
            id: 12,
            title: "Retro Gaming Revival: Nostalgia or Necessity?",
            author: "RetroGamer",
            date: "July 3, 2024",
            comments: [
              {
                id: 1,
                profilePic: default2Pic,
                author: "RetroGamer",
                timeAgo: "6 minutes ago",
                likes: 3,
                dislikes: 1,
                shares: 1,
                text: "Retro games hold a special place in gaming history. What's your favorite retro game?"
              },
              {
                id: 2,
                profilePic: default3Pic,
                author: "NostalgiaFan",
                timeAgo: "11 minutes ago",
                likes: 5,
                dislikes: 0,
                shares: 2,
                text: "Playing retro games brings back so many memories. It's amazing how timeless some of them are."
              }
            ]
          },
          {
            id: 13,
            title: "Peripherals Buying Guide for Gamers",
            author: "TechEnthusiast",
            date: "July 1, 2024",
            comments: [
              {
                id: 1,
                profilePic: default1Pic,
                author: "TechEnthusiast",
                timeAgo: "9 minutes ago",
                likes: 4,
                dislikes: 0,
                shares: 2,
                text: "Choosing the right peripherals can make a big difference in gaming experience. Any tips for finding the best ones?"
              },
              {
                id: 2,
                profilePic: default4Pic,
                author: "GamingExpert",
                timeAgo: "14 minutes ago",
                likes: 3,
                dislikes: 1,
                shares: 1,
                text: "I'm looking to upgrade my gaming setup. What are your recommendations for gaming mice?"
              }
            ]
          },
          {
            id: 14,
            title: "Console Wars: Which Console Should You Choose?",
            author: "ConsoleGamer",
            date: "July 2, 2024",
            comments: [
              {
                id: 1,
                profilePic: default1Pic,
                author: "ConsoleGamer",
                timeAgo: "10 minutes ago",
                likes: 5,
                dislikes: 2,
                shares: 2,
                text: "Each console has its strengths. What factors do you consider when choosing between them?"
              },
              {
                id: 2,
                profilePic: default2Pic,
                author: "TechReviewer",
                timeAgo: "13 minutes ago",
                likes: 4,
                dislikes: 0,
                shares: 1,
                text: "Comparing consoles can be tough with so many options. It's all about finding what suits your gaming style."
              }
            ]
          },
          {
            id: 15,
            title: "Best Mobile Phones for Mobile Gaming",
            author: "MobileGaming",
            date: "July 3, 2024",
            comments: [
              {
                id: 1,
                profilePic: default2Pic,
                author: "MobileGaming",
                timeAgo: "7 minutes ago",
                likes: 6,
                dislikes: 1,
                shares: 3,
                text: "Mobile gaming is becoming more popular. What features do you prioritize in a gaming phone?"
              },
              {
                id: 2,
                profilePic: default4Pic,
                author: "PhoneGamer",
                timeAgo: "12 minutes ago",
                likes: 4,
                dislikes: 0,
                shares: 2,
                text: "I'm looking for a new phone that's great for gaming. Any recommendations?"
              }
            ]
          },
          {
            id: 16,
            title: "Esports Tournaments Recap",
            author: "EsportsEn10",
            date: "July 1, 2024",
            comments: [
              {
                id: 1,
                profilePic: default4Pic,
                author: "EsportsEn10",
                timeAgo: "8 minutes ago",
                likes: 8,
                dislikes: 2,
                shares: 4,
                text: "Esports tournaments are so exciting! Which tournament impressed you the most recently?"
              },
              {
                id: 2,
                profilePic: default2Pic,
                author: "EsportsFan",
                timeAgo: "15 minutes ago",
                likes: 5,
                dislikes: 1,
                shares: 3,
                text: "I love following esports. The competition and skill level are incredible."
              }
            ]
          },
          {
            id: 17,
            title: "Team Strategies for Competitive Play",
            author: "TeamLeader",
            date: "July 2, 2024",
            comments: [
              {
                id: 1,
                profilePic: default1Pic,
                author: "TeamLeader",
                timeAgo: "9 minutes ago",
                likes: 7,
                dislikes: 1,
                shares: 3,
                text: "Teamwork is crucial in competitive gaming. What strategies does your team use?"
              },
              {
                id: 2,
                profilePic: default4Pic,
                author: "CompetitiveGuy",
                timeAgo: "14 minutes ago",
                likes: 6,
                dislikes: 0,
                shares: 2,
                text: "Improving team coordination can lead to better results in tournaments."
              }
            ]
          },
          {
            id: 18,
            title: "Gaming News Roundup",
            author: "GamingNews",
            date: "July 3, 2024",
            comments: [
              {
                id: 1,
                profilePic: default2Pic,
                author: "GamingNews",
                timeAgo: "6 minutes ago",
                likes: 5,
                dislikes: 1,
                shares: 2,
                text: "There's always something new happening in the gaming world. What's caught your attention recently?"
              },
              {
                id: 2,
                profilePic: default3Pic,
                author: "NewsWatcher",
                timeAgo: "11 minutes ago",
                likes: 4,
                dislikes: 0,
                shares: 1,
                text: "Staying updated with gaming news is essential for every gamer."
              }
            ]
          },
          {
            id: 19,
            title: "Highlights from E3 2024",
            author: "E3Highlights",
            date: "July 1, 2024",
            comments: [
              {
                id: 1,
                profilePic: default3Pic,
                author: "E3Highlights",
                timeAgo: "7 minutes ago",
                likes: 6,
                dislikes: 2,
                shares: 3,
                text: "E3 always brings exciting announcements. Which game reveals impressed you the most?"
              },
              {
                id: 2,
                profilePic: default2Pic,
                author: "E3Fanatic",
                timeAgo: "12 minutes ago",
                likes: 5,
                dislikes: 1,
                shares: 2,
                text: "I'm looking forward to seeing how the games from E3 will shape the future of gaming."
              }
            ]
          },
          {
            id: 20,
            title: "Best FPS Games of the Year",
            author: "FPSGamer",
            date: "July 2, 2024",
            comments: [
              {
                id: 1,
                author: "FPSGamer",
                profilePic: default2Pic,
                timeAgo: "5 minutes ago",
                likes: 3,
                dislikes: 1,
                shares: 2,
                text: "Which FPS game do you think has the most balanced multiplayer experience?"
              },
              {
                id: 2,
                author: "ShooterFan",
                profilePic: default3Pic,
                timeAgo: "10 minutes ago",
                likes: 2,
                dislikes: 0,
                shares: 1,
                text: "I enjoy both fast-paced shooters and tactical gameplay. Any recommendations for both styles?"
              }
            ]
          },
          {
            id: 21,
            title: "Discussing Storytelling in Games",
            author: "StoryLover",
            date: "July 3, 2024",
            comments: [
              {
                id: 1,
                author: "StoryLover",
                profilePic: default3Pic,
                timeAgo: "7 minutes ago",
                likes: 4,
                dislikes: 0,
                shares: 2,
                text: "What game has the most compelling narrative you've experienced recently?"
              },
              {
                id: 2,
                author: "NarrativeExpert",
                profilePic: default4Pic,
                timeAgo: "12 minutes ago",
                likes: 3,
                dislikes: 1,
                shares: 1,
                text: "Story-driven games often blur the line between interactive storytelling and traditional narratives. How do you think games handle this?"
              }
            ]
          },
          {
            id: 22,
            title: "Favorite Gaming Moments of All Time",
            author: "MemorableGuy",
            date: "July 4, 2024",
            comments: [
              {
                id: 1,
                author: "MemorableGuy",
                profilePic: default2Pic,
                timeAgo: "15 minutes ago",
                likes: 5,
                dislikes: 0,
                shares: 3,
                text: "Share your most unforgettable gaming moment. What made it special for you?"
              },
              {
                id: 2,
                author: "NostalgicPlayer",
                profilePic: default3Pic,
                timeAgo: "20 minutes ago",
                likes: 4,
                dislikes: 1,
                shares: 2,
                text: "Reminiscing about classic gaming memories. Which game holds a special place in your heart?"
              }
            ]
          },
          {
            id: 23,
            title: "Building the Ultimate Gaming PC",
            author: "PCMasterBuild",
            date: "July 4, 2024",
            comments: [
              {
                id: 1,
                author: "PCMasterBuild",
                profilePic: default4Pic,
                timeAgo: "25 minutes ago",
                likes: 7,
                dislikes: 1,
                shares: 4,
                text: "What components are you most excited about in your upcoming PC build?"
              },
              {
                id: 2,
                author: "TechEnthusiast",
                profilePic: default1Pic,
                timeAgo: "30 minutes ago",
                likes: 6,
                dislikes: 0,
                shares: 3,
                text: "Tips for building a gaming PC on a budget without compromising performance?"
              }
            ]
          },
          {
            id: 24,
            title: "Best Gaming Keyboards for 2024",
            author: "KeyboardEmp",
            date: "July 4, 2024",
            comments: [
              {
                id: 1,
                author: "KeyboardEmp",
                profilePic: default1Pic,
                timeAgo: "18 minutes ago",
                likes: 4,
                dislikes: 0,
                shares: 2,
                text: "Discussing the latest advancements in mechanical keyboards. What features do you prioritize?"
              },
              {
                id: 2,
                author: "GamingSetup",
                profilePic: default2Pic,
                timeAgo: "22 minutes ago",
                likes: 3,
                dislikes: 1,
                shares: 1,
                text: "Wireless vs. wired gaming mice: Which one offers better performance and why?"
              }
            ]
          },
          {
            id: 25,
            title: "Console Exclusive Games Discussion",
            author: "ConsoleGamer",
            date: "July 4, 2024",
            comments: [
              {
                id: 1,
                author: "ConsoleGamer",
                profilePic: default1Pic,
                timeAgo: "20 minutes ago",
                likes: 6,
                dislikes: 1,
                shares: 3,
                text: "Which console has the best exclusive games lineup this year?"
              },
              {
                id: 2,
                author: "ExclusiveGamer",
                profilePic: default4Pic,
                timeAgo: "25 minutes ago",
                likes: 5,
                dislikes: 0,
                shares: 2,
                text: "Discussing the impact of exclusive titles on console sales and player preferences."
              }
            ]
          },
          {
            id: 26,
            title: "Gaming Performance on Latest Smartphones",
            author: "MobileGamer",
            date: "July 4, 2024",
            comments: [
              {
                id: 1,
                author: "MobileGamer",
                profilePic: default1Pic,
                timeAgo: "15 minutes ago",
                likes: 5,
                dislikes: 0,
                shares: 3,
                text: "Which smartphone offers the best gaming performance in 2024?"
              },
              {
                id: 2,
                author: "TechReview",
                profilePic: default4Pic,
                timeAgo: "20 minutes ago",
                likes: 4,
                dislikes: 1,
                shares: 2,
                text: "Comparing gaming capabilities between flagship and mid-range smartphones."
              }
            ]
          },
          {
            id: 27,
            title: "Future of Esports Tournaments",
            author: "EsportsEn10",
            date: "July 4, 2024",
            comments: [
              {
                id: 1,
                author: "EsportsEn10",
                profilePic: default4Pic,
                timeAgo: "18 minutes ago",
                likes: 4,
                dislikes: 0,
                shares: 2,
                text: "Predicting the trends and innovations in esports tournaments over the next decade."
              },
              {
                id: 2,
                author: "ProGamer",
                profilePic: default3Pic,
                timeAgo: "22 minutes ago",
                likes: 3,
                dislikes: 1,
                shares: 1,
                text: "How can esports tournaments better engage with fans and sponsors?"
              }
            ]
          },
          {
            id: 28,
            title: "Strategies for Building a Competitive Gaming Team",
            author: "TeamLeader",
            date: "July 4, 2024",
            comments: [
              {
                id: 1,
                author: "TeamLeader",
                profilePic: default3Pic,
                timeAgo: "20 minutes ago",
                likes: 6,
                dislikes: 1,
                shares: 3,
                text: "What qualities do you look for when recruiting players for a gaming team?"
              },
              {
                id: 2,
                author: "Strategist",
                profilePic: default1Pic,
                timeAgo: "25 minutes ago",
                likes: 5,
                dislikes: 0,
                shares: 2,
                text: "Discussing effective team communication and synergy in competitive gaming."
              }
            ]
          },
          {
            id: 29,
            title: "Latest Gaming Industry News",
            author: "GamingInsider",
            date: "July 4, 2024",
            comments: [
              {
                id: 1,
                profilePic: 'path_to_profile_picture.jpg',
                author: "GamingInsider",
                profilePic: default2Pic,
                timeAgo: "18 minutes ago",
                likes: 4,
                dislikes: 0,
                shares: 2,
                text: "Breaking down the latest mergers and acquisitions in the gaming industry."
              },
              {
                id: 2,
                profilePic: 'path_to_profile_picture.jpg',
                author: "IndustryWatch",
                profilePic: default3Pic,
                timeAgo: "22 minutes ago",
                likes: 3,
                dislikes: 1,
                shares: 1,
                text: "Analyzing the impact of gaming trends on stock market performances."
              }
            ]
          },
          {
            id: 30,
            title: "Top Moments from Gaming Conventions",
            author: "ConventionsFan",
            date: "July 4, 2024",
            comments: [
              {
                id: 1,
                author: "ConventionsFan",
                profilePic: default1Pic,
                timeAgo: "20 minutes ago",
                likes: 6,
                dislikes: 1,
                shares: 3,
                text: "Recalling the most exciting announcements and reveals from recent gaming conventions."
              },
              {
                id: 2,
                author: "EventWatcher",
                profilePic: default3Pic,
                timeAgo: "25 minutes ago",
                likes: 5,
                dislikes: 0,
                shares: 2,
                text: "Which gaming convention had the most impressive showcases this year?"
              }
            ]
          }

    ];

    const [showSelectMenu, setShowSelectMenu] = useState(false);
  const [sortMethod, setSortMethod] = useState('newest');

  const toggleSelectMenu = () => {
    setShowSelectMenu(!showSelectMenu);
  };


    useEffect(() => {
        const selectedThread = threadData.find(thread => thread.id === parseInt(id));
        if (selectedThread) {
          setThread(selectedThread);
        } else {
          setThread(null);
        }
      }, [id, threadData]);
    
      if (!thread) {
        return <div>No content</div>; 
      }

      return (
        <div className="thread-page-container">
          <div className="thread-content-container">
            <div className="thread-header-post">
              <h2 className="thread-title-post">{thread.title}</h2>
              <div className="thread-info-post">
                <img src={thread.comments[0].profilePic} className="title-profile-icon icon" alt="Profile" />
                <p>{thread.author}</p>
                <img src={clockPic} className="clock-icon icon" alt="Clock" />
                <p>{thread.date}</p>
              </div>
            </div>

{/*  
            <div className="breadcrumbs">
                <Link to="/">Home</Link> &gt; 
                <Link to="/ForumPage">General Forum</Link> &gt;
                <span>Thread</span>
            </div>
*/}
            <div className="pagination">
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>Next</li>
          </ul>
        </div>

        <div className="sorting-dropdown">
          <p className="sort-by-text">Sort by:</p>
          <div className="sort-dropdown-container">
            <div className="selected-sort" onClick={toggleSelectMenu} >
              {sortMethod === 'newest' && 'Newest'}
              {sortMethod === 'oldest' && 'Oldest'}
              {sortMethod === 'top' && 'Top'}
              <span className="dropdown-icon">&#9660;</span>
            </div>
            {showSelectMenu && (
              <div className="select-menu">
                <ul>
                  <li>Newest</li>
                  <li>Oldest</li>
                  <li>Top</li>
                </ul>
              </div>
            )}
          </div>
        </div>
    
            {thread.comments.map(comment => (
              <div className="thread-comment" key={comment.id}>
                <div className="thread-profile">
                  <img src={comment.profilePic} className="thread-profile-icon" alt="Profile" />
                  <p>{comment.author}</p>
                </div>
                <div className="thread-main">
                  <div className="thread-time-like">
                    <p>{comment.timeAgo}</p>
                    <div className="thread-like">
                      <img src={likePic} className="like-share-icon" alt="Like" />
                      <img src={dislikePic} className="like-share-icon" alt="Dislike" />
                      <img src={sharePic} className="like-share-icon" alt="Share" />
                    </div>
                  </div>
                  <div className="thread-text">
                    {comment.text}
                  </div>
                </div>
              </div>
            ))}
    
            <div className="thread-comment-post">
              <textarea placeholder="Add a comment"></textarea>
              <img src={sendPic} className="send-icon" alt="Send" />
            </div>
    
            <div className="pagination">
              <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>Next</li>
              </ul>
            </div>
    
          </div>
        </div>
      );
}

export default Thread;
