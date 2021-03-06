kters = [
	{
		"name": "Laura Roslin (b)",
		"type": "political",
		"pos": {
			"header": "Religious Visions",
			"text": "When you draw Crisis Cards, draw 2 and choose 1 to resolve. Place the other on the bottom of the deck."
		},
		"opg": {
			"header": "Skilled Politician - Action",
			"text": "Once per game, draw 4 Quorum Cards. Choose 1 to resolve and place the rest on the bottom of the deck. You do not need to be President to use this ability."
		},
		"neg": {
			"header": "Terminal Illness",
			"text": "In order to activate a location, you must first discard 2 Skill Cards. If you cannot, discard 1 if you can, then proceed."
		},
		"setup": "President's Office",
		"succ": {
			"president": 1,
			"admiral": 26,
			"cag": 26
		},
		"image": "http://media.battlestarwiki.org/images/thumb/8/8b/Laura_Roslin.jpg/200px-Laura_Roslin.jpg",
		"skills": [
			{
				"num": 3,
				"text": "politics"
			},
			{
				"num": 2,
				"text": "leadership"
			}
		],
		"origin": "base"
	},
	{
		"name": "Gaius Baltar",
		"type": "political",
		"pos": {
			"header": "Delusional Intuition",
			"text": "After you draw a Crisis Card, draw 1 Skill Card of your choice (it may be from outside your skill set)."
		},
		"opg": {
			"header": "Cylon Detector - Action",
			"text": "Once per game, you may look at all Loyalty Cards belonging to another player."
		},
		"neg": {
			"header": "Coward",
			"text": "You start the game with 2 Loyalty Cards (instead of 1)."
		},
		"setup": "Research Lab",
		"succ": {
			"president": 2,
			"admiral": 23,
			"cag": 23
		},
		"image": "https://upload.wikimedia.org/wikipedia/en/5/51/Baltar_Season_3.jpg",
		"skills": [
			{
				"num": 2,
				"text": "politics"
			},
			{
				"num": 1,
				"text": "leadership"
			},
			{
				"num": 1,
				"text": "engineering"
			}
		],
		"origin": "base"
	},
	{
		"name": "Tom Zarek",
		"type": "political",
		"pos": {
			"header": "Friends in Low Places",
			"text": "When a player activates the \"Administration\" or the \"Brig\" location, you may choose to reduce or increase the difficulty by 2."
		},
		"opg": {
			"header": "Unconventional Tactics - Action",
			"text": "Once per game, lose 1 population to gain 1 of any other resource type."
		},
		"neg": {
			"header": "Convicted Criminal",
			"text": "You may not activate locations occupied by other characters (except the \"Brig\")."
		},
		"setup": "Administration",
		"succ": {
			"president": 4,
			"admiral": 20,
			"cag": 20
		},
		"image": "http://media.battlestarwiki.org/images/thumb/0/0e/Zarek.jpg/200px-Zarek.jpg",
		"skills": [
			{
				"num": 2,
				"text": "politics"
			},
			{
				"num": 2,
				"text": "leadership"
			},
			{
				"num": 1,
				"text": "tactics"
			}
		],
		"origin": "base"
	},
	{
		"name": "William Adama (b)",
		"type": "military",
		"pos": {
			"header": "Inspirational Leader",
			"text": "When you draw a Crisis Card, all 1 strength Skill Cards count positive for the skill check, and you may draw a used Skill Card of strength 3 or less into your hand after the skill check is resolved."
		},
		"opg": {
			"header": "Command Authority",
			"text": "Once per game, after resolving a skill check, instead of discarding the used Skill Cards, draw them into your hand."
		},
		"neg": {
			"header": "Emotionally Attached",
			"text": "You may not activate the \"Admiral's Quarters\" or \"Airlock\" location."
		},
		"setup": "Admiral's Quarters",
		"succ": {
			"president": 11,
			"admiral": 2,
			"cag": 10
		},
		"image": "http://media.battlestarwiki.org/images/3/38/William_Adama_promo.jpg",
		"skills": [
			{
				"num": 3,
				"text": "leadership"
			},
			{
				"num": 2,
				"text": "tactics"
			}
		],
		"origin": "base"
	},
	{
		"name": "Saul Tigh (b)",
		"type": "military",
		"pos": {
			"header": "Cylon Hatred",
			"text": "When a player activates the \"Admiral's Quarters\" or \"Airlock\" location, you may choose to reduce the difficulty by 3."
		},
		"opg": {
			"header": "Declare Martial Law - Action",
			"text": "Once per game, give the President title to the Admiral."
		},
		"neg": {
			"header": "Alcoholic",
			"text": "At the start of any player's turn, if you have exactly 1 Skill Card in your hand, you must discard it."
		},
		"setup": "Command",
		"succ": {
			"president": 22,
			"admiral": 3,
			"cag": 12
		},
		"image": "https://battlebloggalactica.files.wordpress.com/2007/01/200px-tigh.PNG",
		"skills": [
			{
				"num": 2,
				"text": "leadership"
			},
			{
				"num": 3,
				"text": "tactics"
			}
		],
		"origin": "base"
	},
	{
		"name": "Karl \"Helo\" Agathon (b)",
		"type": "military",
		"pos": {
			"header": "ECO Officer",
			"text": "When you roll a die or a die is rolled on your turn, you may reroll it right afterwards (once per turn). You must use the new result."
		},
		"opg": {
			"header": "Moral Compass",
			"text": "Once per game, after a player makes a choice on a Crisis Card, you may change it."
		},
		"neg": {
			"header": "Stranded",
			"text": "Your character is not placed on the game board at the start of the game. While not on the game board, you may not move, be moved, or take actions. At the start of your 2nd turn, place your character on the \"Hangar Deck\" location."
		},
		"setup": "",
		"succ": {
			"president": 12,
			"admiral": 4,
			"cag": 9
		},
		"image": "http://media.battlestarwiki.org/images/thumb/4/43/Season_3_Helo.jpg/200px-Season_3_Helo.jpg",
		"skills": [
			{
				"num": 2,
				"text": "leadership"
			},
			{
				"num": 2,
				"text": "tactics"
			},
			{
				"num": 1,
				"text": "piloting"
			}
		],
		"origin": "base"
	},
	{
		"name": "Lee \"Apollo\" Adama",
		"type": "pilot",
		"pos": {
			"header": "Alert Viper Pilot",
			"text": "When a viper is placed in a space area from the \"Reserves,\" you may choose to pilot it and take 1 action. You may only do this when you are on a Galactica location, excluding the \"Brig.\""
		},
		"opg": {
			"header": "CAG - Action",
			"text": "Once per game, you may activate up to 6 unmanned vipers."
		},
		"neg": {
			"header": "Headstrong",
			"text": "When you are forced to discard Skill Cards, you must discard randomly."
		},
		"setup": "Launch and pilot a viper",
		"succ": {
			"president": 8,
			"admiral": 8,
			"cag": 1
		},
		"image": "http://vignette3.wikia.nocookie.net/headhuntersholosuite/images/c/c2/Lee_Adama_001.jpg",
		"skills": [
			{
				"num": 1,
				"text": "tactics"
			},
			{
				"num": 2,
				"text": "piloting"
			},
			{
				"num": 2,
				"text": "leadership/politics"
			}
		],
		"origin": "base"
	},
	{
		"name": "Kara \"Starbuck\" Thrace (c)",
		"type": "pilot",
		"pos": {
			"header": "Expert Pilot",
			"text": "When you start your turn piloting a viper, you may take 2 actions during your Action Step (instead of 1)."
		},
		"opg": {
			"header": "Secret Destiny",
			"text": "Once per game, after a Crisis Card is revealed and before a choice is made or a skill check started, discard it and draw a new one."
		},
		"neg": {
			"header": "Insubordinate",
			"text": "When a player chooses you with the \"Admiral's Quarters\" location, reduce the difficulty by 3."
		},
		"setup": "Hangar Deck",
		"succ": {
			"president": 25,
			"admiral": 11,
			"cag": 2
		},
		"image": "https://upload.wikimedia.org/wikipedia/en/8/87/KaraThrace.jpg",
		"skills": [
			{
				"num": 2,
				"text": "tactics"
			},
			{
				"num": 2,
				"text": "piloting"
			},
			{
				"num": 1,
				"text": "leadership/engineering"
			}
		],
		"origin": "base"
	},
	{
		"name": "Sharon \"Boomer\" Valerii",
		"type": "pilot",
		"pos": {
			"header": "Recon",
			"text": "At the end of your turn, you may look at the top card of the Crisis Deck and place it on the top or bottom."
		},
		"opg": {
			"header": "Mysterious Intuition",
			"text": "Once per game, before resolving a skill check on a Crisis Card, choose the result (Pass or Fail), instead of resolving it normally."
		},
		"neg": {
			"header": "Sleeper Agent",
			"text": "During the Sleeper Agent Phase, you are dealt 2 Loyalty Cards (instead of 1) and then moved to the \"Brig\" location."
		},
		"setup": "Armory",
		"succ": {
			"president": 21,
			"admiral": 13,
			"cag": 5
		},
		"image": "https://titch1992.files.wordpress.com/2011/01/bsgboomer.jpg",
		"skills": [
			{
				"num": 2,
				"text": "Tactics"
			},
			{
				"num": 2,
				"text": "Piloting"
			},
			{
				"num": 1,
				"text": "Engineering"
			}
		],
		"origin": "base"
	},
	{
		"name": "\"Chief\" Galen Tyrol",
		"type": "support",
		"pos": {
			"header": "Maintenance Engineer",
			"text": "During your turn, after you use a \"Repair\" Skill Card, you may take another action (once per turn)."
		},
		"opg": {
			"header": "Blind Devotion",
			"text": "Once per game, after cards have been added to a Skill Check (but before revealing them), you may choose a skill type. All cards of the chosen type are considered strength 0."
		},
		"neg": {
			"header": "Reckless",
			"text": "Your hand limit is 8 (instead of 10)."
		},
		"setup": "Hangar Deck",
		"succ": {
			"president": 13,
			"admiral": 16,
			"cag": 17
		},
		"image": "https://s-media-cache-ak0.pinimg.com/736x/8b/e6/2f/8be62fa678b792ba97d5eadebd334e08.jpg",
		"skills": [
			{
				"num": 1,
				"text": "politics"
			},
			{
				"num": 2,
				"text": "leadership"
			},
			{
				"num": 2,
				"text": "engineering"
			}
		],
		"origin": "base"
	},
	{
		"name": "Ellen Tigh",
		"type": "political",
		"pos": {
			"header": "Politically Adroit",
			"text": "When you end your Movement step in the same location as another human player, you may give that player 1 Skill Card from your hand to draw 2 Skill Cards."
		},
		"opg": {
			"header": "Manipulative",
			"text": "Once per game, you may take the Admiral or President title at the start of your turn. Return that title to its previous owner at the end of your turn."
		},
		"neg": {
			"header": "Nothing But Trouble",
			"text": "Your Skill set includes Treachery. (Human players can't use text abilities of Treachery Cards.)"
		},
		"setup": "Admiral's Quarters",
		"succ": {
			"president": 7,
			"admiral": 21,
			"cag": 21
		},
		"image": "https://upload.wikimedia.org/wikipedia/en/f/fa/BSG-EllenTigh.jpg",
		"skills": [
			{
				"num": 2,
				"text": "politics"
			},
			{
				"num": 2,
				"text": "leadership"
			},
			{
				"num": 1,
				"text": "treachery"
			}
		],
		"origin": "pegasus"
	},
	{
		"name": "Helena Cain (n)",
		"type": "military",
		"pos": {
			"header": "Intolerant",
			"text": "When an \"Admiral's Quarters\" Skill check is passed with a 10 or more, you may choose to execute that character instead of sending him to the \"Brig.\""
		},
		"opg": {
			"header": "Blind Jump - Action",
			"text": "Once per game, if at 6 or less distance, draw 2 civilian ships and destroy them to immediately jump the fleet (even if the fleet marker is on a red space), then reset jump prep. The Admiral only draws 1 Destination Card."
		},
		"neg": {
			"header": "Bent on Revenge",
			"text": "If there is a basestar on the main board, skip the \"Jump Preparation Step\" of your turn."
		},
		"setup": "Pegasus CIC <span class='italic'>or</span> Command",
		"succ": {
			"president": 17,
			"admiral": 1,
			"cag": 11
		},
		"image": "http://www.geekgirlcon.com/wp-content/uploads/2013/08/Battlestar-Galactica143.jpg",
		"skills": [
			{
				"num": 2,
				"text": "leadership"
			},
			{
				"num": 2,
				"text": "tactics"
			},
			{
				"num": 1,
				"text": "tactics/leadership"
			}
		],
		"origin": "pegasus"
	},
	{
		"name": "Louanne \"Kat\" Katraine",
		"type": "pilot",
		"pos": {
			"header": "Hotshot",
			"text": "When you would roll a die during your Action step, you may instead discard a Skill Card. Use the card's strength +2 instead of the die roll."
		},
		"opg": {
			"header": "Sacrifice - Action",
			"text": "Once per game while piloting a viper, send yourself to \"Sickbay\" to destroy 5 raiders, 2 heavy raiders, 1 basestar, or 1 civilian ship in your space area."
		},
		"neg": {
			"header": "Stim Junkie",
			"text": "At the end of your Action step, if you are in the same location or space area that you were in at the start of your turn, you are moved to \"Sickbay.\""
		},
		"setup": "Hangar Deck",
		"succ": {
			"president": 26,
			"admiral": 12,
			"cag": 3
		},
		"image": "http://media.battlestarwiki.org/images/thumb/0/02/Kat_bsgviper3_big.jpg/200px-Kat_bsgviper3_big.jpg",
		"skills": [
			{
				"num": 1,
				"text": "leadership"
			},
			{
				"num": 2,
				"text": "tactics"
			},
			{
				"num": 2,
				"text": "piloting"
			}
		],
		"origin": "pegasus"
	},
	{
		"name": "Louanne \"Kat\" Katraine (a)",
		"type": "pilot",
		"pos": {
			"header": "Brash",
			"text": "When you launch yourself in a Viper, you may take 2 additional actions instead of 1."
		},
		"opg": {
			"header": "Sacrifice - Action",
			"text": "Once per game while piloting a viper, send yourself to \"Sickbay\" to destroy 5 raiders, 2 heavy raiders, 1 basestar, or 1 civilian ship in your space area."
		},
		"neg": {
			"header": "Stim Junkie",
			"text": "At the end of your Action step, if you are in the same location or space area that you were in at the start of your turn, you are moved to \"Sickbay.\""
		},
		"setup": "Hangar Deck",
		"succ": {
			"president": 26,
			"admiral": 12,
			"cag": 3
		},
		"image": "http://media.battlestarwiki.org/images/thumb/0/02/Kat_bsgviper3_big.jpg/200px-Kat_bsgviper3_big.jpg",
		"skills": [
			{
				"num": 1,
				"text": "leadership"
			},
			{
				"num": 2,
				"text": "tactics"
			},
			{
				"num": 2,
				"text": "piloting"
			}
		],
		"origin": "pegasus"
	},
	{
		"name": "Anastasia \"Dee\" Dualla (b)",
		"type": "support",
		"pos": {
			"header": "Efficient",
			"text": "When you activate the \"Communications\" location, you may look at every civilian ship on the game board and may move any number of them."
		},
		"opg": {
			"header": "Fast Learner",
			"text": "Once per game, before making a Skill check, look at the top 3 cards of any Skill deck (even outside your Skill set), and add all of them to either the Skill check or your hand."
		},
		"neg": {
			"header": "Emotionally Fragile",
			"text": "When morale is reduced to 2 or less, you are executed. If you are human, do not lose 1 morale."
		},
		"setup": "Communications",
		"succ": {
			"president": 18,
			"admiral": 9,
			"cag": 14
		},
		"image": "http://media.battlestarwiki.org/images/thumb/d/d8/Anastasia_Dualla.jpg/200px-Anastasia_Dualla.jpg",
		"skills": [
			{
				"num": 1,
				"text": "leadership"
			},
			{
				"num": 2,
				"text": "tactics"
			},
			{
				"num": 1,
				"text": "engineering"
			},
			{
				"num": 1,
				"text": "leadership/engineering"
			}
		],
		"origin": "pegasus"
	},
	{
		"name": "\"Caprica\" Six",
		"type": "cylon",
		"pos": {
			"header": "Intimate - Movement",
			"text": "Draw 1 Skill Card at random from a player's hand. Then, that player draws 1 card from the Skill deck of your choice (it may be from outside his Skill set)."
		},
		"opg": {
			"header": "Human Delusion",
			"text": "Once per game, after all Skill Cards played into a Skill check have been revealed, you may play any number of Skill Cards from your hand into the check."
		},
		"neg": {
			"header": "Conflicted Loyalties",
			"text": "You must discard 1 Skill Card to activate the \"Cylon Fleet\" location."
		},
		"setup": "Caprica",
		"succ": {
			"president": 99,
			"admiral": 99,
			"cag": 99
		},
		"image": "http://media.battlestarwiki.org/images/thumb/f/fe/Season_3_-_Promo_-_AMOS_-_Number_Six.jpg/200px-Season_3_-_Promo_-_AMOS_-_Number_Six.jpg",
		"skills": [
			{
				"num": 1,
				"text": "leadership"
			},
			{
				"num": 1,
				"text": "treachery/engineering"
			}
		],
		"origin": "pegasus"
	},
	{
		"name": "Cavil",
		"type": "cylon",
		"pos": {
			"header": "Primacy - Action",
			"text": "Place 1 basestar in front of Galactica, or if all basestars are in play, you may remove 1 from the game board. You may then place 3 raiders in front of Galactica and 1 civilian ship behind Galactica."
		},
		"opg": {
			"header": "Aggressive Tactics - Movement",
			"text": "Once per game you may take 2 Actions."
		},
		"neg": {
			"header": "Lies and Secrets",
			"text": "When a player reveals a \"You are a Cylon\" Loyalty Card, you must discard all Skill Cards in your hand."
		},
		"setup": "Cylon Fleet",
		"succ": {
			"president": 99,
			"admiral": 99,
			"cag": 99
		},
		"image": "http://media.battlestarwiki.org/images/thumb/2/2d/John_Cavil.jpg/200px-John_Cavil.jpg",
		"skills": [
			{
				"num": 1,
				"text": "tactics"
			},
			{
				"num": 1,
				"text": "treachery/engineering"
			}
		],
		"origin": "pegasus"
	},
	{
		"name": "Leoben Conoy",
		"type": "cylon",
		"pos": {
			"header": "Glimpse the Face of God - Movement",
			"text": "Draw 2 cards from the top of the Destiny deck, then place 2 cards from your hand on top of the Destiny deck."
		},
		"opg": {
			"header": "Cryptic Message - Action",
			"text": "Once per game, exchange your hand of Skill Cards with another player's hand of Skill Cards."
		},
		"neg": {
			"header": "Clouded",
			"text": "You may not voluntarily move to a location that contains another character."
		},
		"setup": "Human Fleet",
		"succ": {
			"president": 99,
			"admiral": 99,
			"cag": 99
		},
		"image": "http://media.battlestarwiki.org/images/thumb/1/19/Leoben2.jpg/200px-Leoben2.jpg",
		"skills": [
			{
				"num": 1,
				"text": "politics"
			},
			{
				"num": 1,
				"text": "treachery/engineering"
			}
		],
		"origin": "pegasus"
	},
	{
		"name": "Tory Foster (n)",
		"type": "political",
		"pos": {
			"header": "Adaptable",
			"text": "After any player uses the action on a Quorum Card, you may draw 2 Skill Cards of your choice (they may be from outside your skill set) and keep 1."
		},
		"opg": {
			"header": "Influential - Action",
			"text": "Once per game, you may examine the top 5 cards of the Quorum deck, and return them to the top of the deck in any order you choose (even if you are not currently the President)."
		},
		"neg": {
			"header": "Amoral",
			"text": "When you make a choice on a Crisis Card, you must choose the first option."
		},
		"setup": "Press Room",
		"succ": {
			"president": 6,
			"admiral": 25,
			"cag": 24
		},
		"image": "https://upload.wikimedia.org/wikipedia/en/0/03/Tory_Foster.png",
		"skills": [
			{
				"num": 3,
				"text": "politics"
			},
			{
				"num": 1,
				"text": "leadership"
			},
			{
				"num": 1,
				"text": "tactics"
			}
		],
		"origin": "exodus"
	},
	{
		"name": "Felix Gaeta",
		"type": "military",
		"pos": {
			"header": "FTL Operator",
			"text": "Anytime \"FTL Control\" is activated, you may reroll the die. You must use the new result."
		},
		"opg": {
			"header": "Coup - Action",
			"text": "Once per game, you may take the Admiral title. If you are in the \"Brig\" when you take this action, move immediately to \"Command\" before taking the title."
		},
		"neg": {
			"header": "Misguided",
			"text": "You may not play more than 3 cards into any skill check."
		},
		"setup": "FTL Control",
		"succ": {
			"president": 10,
			"admiral": 5,
			"cag": 13
		},
		"image": "https://upload.wikimedia.org/wikipedia/en/b/be/Gaeta_Season_3.jpg",
		"skills": [
			{
				"num": 2,
				"text": "tactics"
			},
			{
				"num": 1,
				"text": "engineering"
			},
			{
				"num": 2,
				"text": "leadership/politics"
			}
		],
		"origin": "exodus"
	},
	{
		"name": "Samuel T. Anders (b)",
		"type": "pilot",
		"pos": {
			"header": "Star Player - Action",
			"text": "Discard any number of Skill Cards. Then draw that number of Skill Cards from any one type within your skill set."
		},
		"opg": {
			"header": "Longshot",
			"text": "Once per game, you may choose the result of your die roll or a die roll on your turn instead of rolling it. This result cannot be modified or rerolled."
		},
		"neg": {
			"header": "Starts on the Bench",
			"text": "Skip the Receive Skills Step of your first turn."
		},
		"setup": "Armory",
		"succ": {
			"president": 24,
			"admiral": 15,
			"cag": 7
		},
		"image": "http://media.battlestarwiki.org/images/thumb/9/93/Samuel_Anders.jpg/200px-Samuel_Anders.jpg",
		"skills": [
			{
				"num": 2,
				"text": "leadership"
			},
			{
				"num": 2,
				"text": "tactics"
			},
			{
				"num": 1,
				"text": "tactics/piloting"
			}
		],
		"origin": "exodus"
	},
	{
		"name": "Callandra \"Cally\" Tyrol",
		"type": "support",
		"pos": {
			"header": "Quick Fix",
			"text": "On your turn, once all Skill Cards played into a skill check have been revealed, you may choose 1 card to discard before resolving skill check abilities and totalling strength."
		},
		"opg": {
			"header": "Discharge of a Firearm - Action",
			"text": "Once per game, you may execute another character who is in your current location."
		},
		"neg": {
			"header": "Impulsive",
			"text": "You cannot contribute only 1 Skill Card into a skill check. You must either contribute no Skill Cards or contribute 2 or more Skill Cards. (Disregard this while you are in the \"Brig.\")"
		},
		"setup": "Hangar Deck",
		"succ": {
			"president": 15,
			"admiral": 17,
			"cag": 18
		},
		"image": "http://media.battlestarwiki.org/images/thumb/2/2c/Cally_UnfinBusiness.JPG/180px-Cally_UnfinBusiness.JPG",
		"skills": [
			{
				"num": 1,
				"text": "politics"
			},
			{
				"num": 1,
				"text": "leadership"
			},
			{
				"num": 1,
				"text": "tactics"
			},
			{
				"num": 2,
				"text": "engineering"
			}
		],
		"origin": "exodus"
	},
	{
		"name": "Romo Lampkin",
		"type": "political",
		"pos": {
			"header": "Deceitful",
			"text": "When a Crisis Card requires you to discard Skill Cards, reduce the number of cards you discard by 1 (once per Crisis Card)."
		},
		"opg": {
			"header": "Attorney - Action",
			"text": "Once per game, move a character in the \"Brig\" to any non-hazardous location on Galactica. If he belongs to another player, take all of that player's Skill Cards."
		},
		"neg": {
			"header": "Kleptomania",
			"text": "If you end your Movement Step in a location with another player, you must discard 2 Skill Cards. If you cannot, you are sent to the \"Brig\" at the end of your turn."
		},
		"setup": "Administration",
		"succ": {
			"president": 5,
			"admiral": 24,
			"cag": 25
		},
		"image": "http://media.battlestarwiki.org/images/thumb/d/d7/Romo_Lampkin.jpg/200px-Romo_Lampkin.jpg",
		"skills": [
			{
				"num": 3,
				"text": "politics"
			},
			{
				"num": 2,
				"text": "tactics"
			}
		],
		"origin": "daybreak"
	},
	{
		"name": "Lee Adama",
		"type": "political",
		"pos": {
			"header": "Forward Thinker",
			"text": "AFter you use an \"Executive Order\" Skill Card and the chosen player has finished moving and taking actions, you may activate your current location."
		},
		"opg": {
			"header": "Choose a Different Path",
			"text": "Once per game, when you must make a choice on a Crisis Card, you may choose to have the result be: \"The current player discards 5 Skill Cards.\""
		},
		"neg": {
			"header": "Moral Dilemma",
			"text": "When you draw a Mutiny Card, you must discard 2 Skill Cards."
		},
		"setup": "Admiral's Quarters",
		"succ": {
			"president": 3,
			"admiral": 19,
			"cag": 8
		},
		"image": "http://media.battlestarwiki.org/images/thumb/e/ea/Lee_Adama.jpg/200px-Lee_Adama.jpg",
		"skills": [
			{
				"num": 1,
				"text": "tactics"
			},
			{
				"num": 2,
				"text": "piloting"
			},
			{
				"num": 2,
				"text": "leadership/politics"
			}
		],
		"origin": "daybreak"
	},
	{
		"name": "Lee Adama (a)",
		"type": "political",
		"pos": {
			"header": "Forward Thinker",
			"text": "AFter you use an \"Executive Order\" Skill Card and the chosen player has finished moving and taking actions, you may activate your current location."
		},
		"opg": {
			"header": "Choose a Different Path",
			"text": "Once per game, when you must make a choice on a Crisis Card, you may choose to have the result be: \"The current player discards 5 Skill Cards.\""
		},
		"neg": {
			"header": "Headstrong",
			"text": "When you are forced to discard Skill Cards, you must discard randomly."
		},
		"setup": "Admiral's Quarters",
		"succ": {
			"president": 3,
			"admiral": 19,
			"cag": 8
		},
		"image": "http://media.battlestarwiki.org/images/thumb/e/ea/Lee_Adama.jpg/200px-Lee_Adama.jpg",
		"skills": [
			{
				"num": 1,
				"text": "tactics"
			},
			{
				"num": 2,
				"text": "piloting"
			},
			{
				"num": 2,
				"text": "leadership/politics"
			}
		],
		"origin": "daybreak"
	},
	{
		"name": "Tom Zarek",
		"type": "military",
		"pos": {
			"header": "Necessary Steps",
			"text": "Each time a player draws a Mutiny Card, you instead look at the top 2 cards of the Mutiny deck, give 1 to that player, and place the other on the bottom of the deck."
		},
		"opg": {
			"header": "Abuse Power - Action",
			"text": "Once per game, draw 4 Mutiny Cards. Choose 1 of them to play and place the other 3 Mutiny Cards on the bottom of the deck. Ignore your \"Necessary Steps\" ability and do not move to the \"Brig.\""
		},
		"neg": {
			"header": "Disreputable",
			"text": "You start the game with 1 Mutiny Card."
		},
		"setup": "Weapons Control",
		"succ": {
			"president": 9,
			"admiral": 7,
			"cag": 16
		},
		"image": "http://media.battlestarwiki.org/images/thumb/0/0e/Zarek.jpg/200px-Zarek.jpg",
		"skills": [
			{
				"num": 2,
				"text": "politics"
			},
			{
				"num": 2,
				"text": "leadership"
			},
			{
				"num": 1,
				"text": "tactics"
			}
		],
		"origin": "daybreak"
	},
	{
		"name": "Louis Hoshi (b)",
		"type": "military",
		"pos": {
			"header": "Dutiful",
			"text": "Once per turn, if you activate \"Command,\" \"Communications,\" or \"Weapons Control,\" you may discard 1 Skill Card to immediately activate that location again."
		},
		"opg": {
			"header": "Organized - Action",
			"text": "Once per game, if you are not in the \"Brig,\" activate any 3 undamaged locations, regardless of where you are. You cannot activate the same location more than once or any Cylon locations."
		},
		"neg": {
			"header": "Reluctant",
			"text": "You must discard 1 Skill Card to use a Skill Card action."
		},
		"setup": "Communications",
		"succ": {
			"president": 19,
			"admiral": 6,
			"cag": 15
		},
		"image": "http://cache1.asset-cache.net/xr/138211532.jpg?v=1&c=IWSAsset&k=3&d=77BFBA49EF8789215AB089EE596C6588C9F41CC39F9B7ECCF66C8B2FF5A0BC559E10AF306068BB79E30A760B0D811297",
		"skills": [
			{
				"num": 2,
				"text": "leadership"
			},
			{
				"num": 2,
				"text": "tactics"
			},
			{
				"num": 1,
				"text": "engineering"
			}
		],
		"origin": "daybreak"
	},
	{
		"name": "Karl \"Helo\" Agathon",
		"type": "pilot",
		"pos": {
			"header": "Raptor Pilot",
			"text": "When you look at the top card of a deck as a result of a \"Launch Scout\" card, look at the top 2 cards instead and, in the order of your choosing, place each card on the top or the bottom of the deck."
		},
		"opg": {
			"header": "No One Gets Left Behind",
			"text": "Once per game, during the Remove Ships step of Jumping the Fleet, lose 1 fuel to gain 2 population."
		},
		"neg": {
			"header": "Family Commitments",
			"text": "If you are not on Galactica, draw 1 fewer Skill Card during your Receive Skills step."
		},
		"setup": "Admiral's Quarters",
		"succ": {
			"president": 20,
			"admiral": 10,
			"cag": 4
		},
		"image": "http://media.battlestarwiki.org/images/thumb/4/43/Season_3_Helo.jpg/200px-Season_3_Helo.jpg",
		"skills": [
			{
				"num": 2,
				"text": "leadership"
			},
			{
				"num": 2,
				"text": "tactics"
			},
			{
				"num": 1,
				"text": "piloting"
			}
		],
		"origin": "daybreak"
	},
	{
		"name": "Brendan \"Hot Dog\" Costanza",
		"type": "pilot",
		"pos": {
			"header": "Memento",
			"text": "Once per turn, immediately after population is reduced, you may draw the top 3 cards from the Piloting deck, discard 1 of them, and keep the other 2 cards."
		},
		"opg": {
			"header": "Escort",
			"text": "Once per game, before flipping over a civilian ship in a space area and destroying it, you may destroy an undamaged viper instead. Shuffle the civilian ship back into the pile of unused civilian ships."
		},
		"neg": {
			"header": "Forced to Eject",
			"text": "Any time a viper you are piloting is damaged, destroy it instead."
		},
		"setup": "Hangar Deck",
		"succ": {
			"president": 23,
			"admiral": 14,
			"cag": 6
		},
		"image": "http://i86.servimg.com/u/f86/11/36/36/93/200px-30.jpg",
		"skills": [
			{
				"num": 1,
				"text": "leadership"
			},
			{
				"num": 1,
				"text": "tactics"
			},
			{
				"num": 2,
				"text": "piloting"
			},
			{
				"num": 1,
				"text": "engineering"
			}
		],
		"origin": "daybreak"
	},
	{
		"name": "Sherman \"Doc\" Cottle",
		"type": "support",
		"pos": {
			"header": "Treatment - Action",
			"text": "Choose a human player and draw 2 Skill Cards from his skill set. Then, give him 2 Skill Cards from your hand."
		},
		"opg": {
			"header": "Quarantine - Action",
			"text": "Once per game, look at each civilian ship on the board. Choose 1 and draw a new civilian ship to replace it if possible. Shuffle the chosen ship back into the pile of unused civilian ships."
		},
		"neg": {
			"header": "Specialized",
			"text": "You cannot use actions printed on Engineering Cards."
		},
		"setup": "Research Lab",
		"succ": {
			"president": 16,
			"admiral": 18,
			"cag": 19
		},
		"image": "https://images-na.ssl-images-amazon.com/images/M/MV5BODkyNDUxMzQwOF5BMl5BanBnXkFtZTcwODUwODYxOA@@._V1_UY1200_CR83,0,630,1200_AL_.jpg",
		"skills": [
			{
				"num": 1,
				"text": "politics"
			},
			{
				"num": 2,
				"text": "tactics"
			},
			{
				"num": 2,
				"text": "engineering"
			}
		],
		"origin": "daybreak"
	},
	{
		"name": "Aaron Doral",
		"type": "cylon",
		"pos": {
			"header": "Industrious",
			"text": "While Infiltrating, draw 2 extra Skill Cards on your turn instead of 1. Disregard this ability while you are in \"Sickbay.\""
		},
		"opg": {
			"header": "Meticulous",
			"text": "Once per game, when you use an action to end your Infiltration, you may move to any Cylon location and take another action instead of moving to the Resurrection Ship."
		},
		"neg": {
			"header": "Vanity",
			"text": "You cannot contribute to skill checks during another player's Action Step."
		},
		"setup": "Caprica",
		"succ": {
			"president": 99,
			"admiral": 99,
			"cag": 99
		},
		"image": "http://media.battlestarwiki.org/images/thumb/7/77/CyDorFiv.jpg/180px-CyDorFiv.jpg",
		"skills": [
			{
				"num": 1,
				"text": "treachery"
			},
			{
				"num": 1,
				"text": "politics/tactics"
			}
		],
		"origin": "daybreak"
	},
	{
		"name": "D'Anna Biers",
		"type": "cylon",
		"pos": {
			"header": "Visions - Action",
			"text": "If you are Infiltrating, choose a human player and look at 1 of his Loyalty Cards at random. Then, end your Infiltration and move to the \"Resurrection Ship.\""
		},
		"opg": {
			"header": "Don't Trust Anyone - Action",
			"text": "Once per game, draw 2 Super Crisis Cards."
		},
		"neg": {
			"header": "Heretic",
			"text": "If you are on the \"Resurrection Ship\" location (but not the \"Hub Destroyed\" location), you must discard a Super Crisis Card to move to a different location."
		},
		"setup": "Human Fleet",
		"succ": {
			"president": 99,
			"admiral": 99,
			"cag": 99
		},
		"image": "http://media.battlestarwiki.org/images/thumb/0/06/CylonThree.jpg/200px-CylonThree.jpg",
		"skills": [
			{
				"num": 1,
				"text": "politics/leadership"
			},
			{
				"num": 1,
				"text": "treachery/engineering"
			}
		],
		"origin": "daybreak"
	},
	{
		"name": "Sharon \"Athena\" Agathon",
		"type": "cylon",
		"pos": {
			"header": "For Love",
			"text": "Once per turn, when another player must discard 1 or more Skill Cards (except when discarding down to his hand limit), you may draw 1 Treachery Card to reduce the number of cards he discards by 1."
		},
		"opg": {
			"header": "Resolute - Action",
			"text": "Once per game, activate any undamaged location."
		},
		"neg": {
			"header": "Grieving",
			"text": "When you are in a hazardous location, you cannot draw Skill Cards during your \"Receive Skills\" or \"Draw Skills\" step."
		},
		"setup": "Hangar Deck (Infiltrating)",
		"succ": {
			"president": 99,
			"admiral": 99,
			"cag": 99
		},
		"image": "http://vignette4.wikia.nocookie.net/galactica/images/c/ce/Sharon-valerii-boomer-gr.jpg",
		"skills": [
			{
				"num": 1,
				"text": "Piloting"
			},
			{
				"num": 1,
				"text": "leadership/engineering"
			}
		],
		"origin": "daybreak"
	},
	{
		"name": "Simon O'Neill",
		"type": "cylon",
		"pos": {
			"header": "Calculating",
			"text": "You may contribute 2 Skill Cards to skill checks, or 3 Skill Cards when Infiltrating. Disregard this ability while you are in the \"Brig.\""
		},
		"opg": {
			"header": "Modifications",
			"text": "Once per game, at the start of a player's \"Activate Cylon Ships\" step, either choose a Cylon ship type to activate or launch raiders. Ignore any Activate Cylon Ships icons on the bottom of the Crisis Card."
		},
		"neg": {
			"header": "Logic-Bound",
			"text": "When you play any Skill Cards into a skill check, you must play 1 face up."
		},
		"setup": "Cylon Fleet",
		"succ": {
			"president": 99,
			"admiral": 99,
			"cag": 99
		},
		"image": "http://media.battlestarwiki.org/images/thumb/2/2d/Cysim.jpg/200px-Cysim.jpg",
		"skills": [
			{
				"num": 1,
				"text": "engineering"
			},
			{
				"num": 1,
				"text": "treachery/tactics"
			}
		],
		"origin": "daybreak"
	},
	{
		"name": "Tory Foster",
		"type": "political",
		"pos": {
			"header": "Political Experience",
			"text": "During your \"Receive Skills\" Step, you may choose to draw 1 Quorum Card instead of 2 Politics Cards. This is your own personal hand (separate from the President's), cannot be passed, and you may play them even without being President by discarding a Skill Card."
		},
		"opg": {
			"header": "Backup Plan for Victory",
			"text": "Once per game after the \"Administration\" skill check has been resolved, you may change the result."
		},
		"neg": {
			"header": "Conflicted",
			"text": "Discard 2 Skill Cards everytime someone is sent to the \"Brig\" or reveals themselves as a Cylon."
		},
		"setup": "Press Room",
		"succ": {
			"president": 6,
			"admiral": 25,
			"cag": 24
		},
		"image": "https://upload.wikimedia.org/wikipedia/en/0/03/Tory_Foster.png",
		"skills": [
			{
				"num": 3,
				"text": "politics"
			},
			{
				"num": 1,
				"text": "leadership"
			},
			{
				"num": 1,
				"text": "tactics"
			}
		],
		"origin": "custom"
	},
	{
		"name": "Saul Tigh",
		"type": "military",
		"pos": {
			"header": "Launch Alert Vipers",
			"text": "Once per turn, you may activate 1 unmanned viper right before a human ship would be shot at. This applies even if this would prevent the human ship from being shot at."
		},
		"opg": {
			"header": "Authorise Suicide Bombings - Action",
			"text": "Once per game, if population is 2 or more, lose 1 population to destroy up to 5 raiders, 2 heavy raiders, 1 basestar or 2 centurions in the same area anywhere on the main board."
		},
		"neg": {
			"header": "Final Five",
			"text": "When the Fleet reaches the 2nd last Destination (before the final jump), initiate an \"Airlock\" (independent of the actual location) skill check targeting yourself."
		},
		"setup": "Command",
		"succ": {
			"president": 22,
			"admiral": 3,
			"cag": 12
		},
		"image": "https://upload.wikimedia.org/wikipedia/en/a/a1/Tigh_Season_3.jpg",
		"skills": [
			{
				"num": 2,
				"text": "leadership"
			},
			{
				"num": 3,
				"text": "tactics"
			}
		],
		"origin": "custom"
	},
	{
		"name": "Felix Gaeta",
		"type": "military",
		"pos": {
			"header": "FTL Operator",
			"text": "Anytime \"FTL Control\" is activated, you may reroll the die. You must use the new result."
		},
		"opg": {
			"header": "FTL Expert - Action",
			"text": "Once per game, you may move the fleet token 1 space in either direction on the Jump Preparation Track. If you are in the FTL Control location, you may then activate that location."
		},
		"neg": {
			"header": "Handicapped",
			"text": "If you end your movement step in a different location on the same ship, discard a Skill card if possible."
		},
		"setup": "FTL Control",
		"succ": {
			"president": 10,
			"admiral": 5,
			"cag": 13
		},
		"image": "https://upload.wikimedia.org/wikipedia/en/b/be/Gaeta_Season_3.jpg",
		"skills": [
			{
				"num": 2,
				"text": "tactics"
			},
			{
				"num": 1,
				"text": "engineering"
			},
			{
				"num": 2,
				"text": "leadership/politics"
			}
		],
		"origin": "custom"
	},
	{
		"name": "Lee \"Fat\" Adama",
		"type": "military",
		"pos": {
			"header": "CAG Experience",
			"text": "You may treat any Pegasus location as if it were \"Command\"."
		},
		"opg": {
			"header": "At Any Cost - Action",
			"text": "Once per game, you may damage Pegasus twice to destroy a Basestar and all Cylon ships sharing its location. This ability may only be used if you are in a Pegasus location and two or more Pegasus locations are undamaged. If Pegasus is destroyed, jump rope to change to Apollo (setup in \"Sickbay\")."
		},
		"neg": {
			"header": "Soft",
			"text": "If you end your movement step in a different location on the same ship, discard a Skill card if possible."
		},
		"setup": "Pegasus CIC",
		"succ": {
			"president": 8,
			"admiral": 2.5,
			"cag": 8
		},
		"image": "https://s-media-cache-ak0.pinimg.com/originals/5f/02/07/5f0207e82bf75f4e7caf355520cf2a34.jpg",
		"skills": [
			{
				"num": 3,
				"text": "leadership"
			},
			{
				"num": 2,
				"text": "tactics"
			}
		],
		"origin": "custom"
	},
	{
		"name": "Lee \"Fat\" Adama",
		"type": "military",
		"pos": {
			"header": "Decisive Leader",
			"text": "When you activate \"Weapons Control\", \"CIC\" or \"Main Batteries\" on your turn, you may treat the roll as though Strategic Planning has been applied. If you do, no other Strategic Planning may be played on this roll."
		},
		"opg": {
			"header": "Private Stash - Action",
			"text": "Once per game, you may gain 1 Food; or you may lose 2 Food to gain 1 Morale or to draw 5 cards (may be from outside your Skill set)."
		},
		"neg": {
			"header": "Too Fat to Fly",
			"text": "Though you draw Piloting you may not man a Viper."
		},
		"setup": "Pegasus CIC",
		"succ": {
			"president": 8,
			"admiral": 2.5,
			"cag": 8
		},
		"image": "https://s-media-cache-ak0.pinimg.com/originals/5f/02/07/5f0207e82bf75f4e7caf355520cf2a34.jpg",
		"skills": [
			{
				"num": 2,
				"text": "leadership"
			},
			{
				"num": 2,
				"text": "tactics"
			},
			{
				"num": 1,
				"text": "piloting"
			}
		],
		"origin": "custom"
	},
	{
		"name": "Kara \"Starbuck\" Thrace",
		"type": "pilot",
		"pos": {
			"header": "Stealth Ship",
			"text": "Your manned viper can move 1 extra space, and you may choose to have enemy ships ignore it when attacking."
		},
		"opg": {
			"header": "\"We're Going the Wrong Way!\"",
			"text": "Once per game, after a Destination has been chosen, put that card at the bottom of the Destination deck, and choose another one as if you were the Admiral.<br><br><div class='bold' style='text-align: center;'>If you are executed as a human, you may choose to keep this character or use the original.</div>"
		},
		"neg": {
			"header": "Harbinger of Death",
			"text": "Whenever a Crisis Card requires you to make a choice, you must discard a Skill Card at random. If you have a title, then all other human players must also do the same."
		},
		"setup": "Hangar Deck",
		"succ": {
			"president": 25,
			"admiral": 11,
			"cag": 2
		},
		"image": "https://upload.wikimedia.org/wikipedia/en/8/87/KaraThrace.jpg",
		"skills": [
			{
				"num": 2,
				"text": "tactics"
			},
			{
				"num": 2,
				"text": "piloting"
			},
			{
				"num": 1,
				"text": "leadership/engineering"
			}
		],
		"origin": "custom"
	},
	{
		"name": "Brendan \"Hot Dog\" Costanza",
		"type": "pilot",
		"pos": {
			"header": "Hot Shot Wingman",
			"text": "When sharing a section of space with another Viper, you may take an extra pilot movement/action."
		},
		"opg": {
			"header": "Weapons Check - Action",
			"text": "Once per game, all Vipers currently in space may take 1 attack action. You control the unmanned Vipers, while manned Vipers are controlled by their pilot."
		},
		"neg": {
			"header": "Green",
			"text": "Whenever you return from a Viper after having engaged in combat at least once (including Cylons trying to attack you), move to Sickbay."
		},
		"setup": "Hangar Deck",
		"succ": {
			"president": 23,
			"admiral": 14,
			"cag": 6
		},
		"image": "http://i86.servimg.com/u/f86/11/36/36/93/200px-30.jpg",
		"skills": [
			{
				"num": 1,
				"text": "leadership"
			},
			{
				"num": 1,
				"text": "tactics"
			},
			{
				"num": 2,
				"text": "piloting"
			},
			{
				"num": 1,
				"text": "engineering"
			}
		],
		"origin": "custom"
	},
	{
		"name": "Sharon \"Athena\" Agathon",
		"type": "pilot",
		"pos": {
			"header": "Opera House Visions",
			"text": "On your turn, before any die is rolled, you may discard 1 Skill Card to add or subtract 1 from the result (limit once per roll)."
		},
		"opg": {
			"header": "A Mother Scorned",
			"text": "Once per game, if you are not in the \"Brig\", discard all Skill Cards and lose any titles to move to the \"Resurrection Ship\". You may view the top 5 cards of the Super Crisis Deck and place them on the top or bottom in any order and combination. You are treated as a revealed Cylon player until the start of your next turn, upon which you draw Skill Cards and move to the \"Hangar Deck\"."
		},
		"neg": {
			"header": "Known Cylon",
			"text": "You are dealt 2 Loyalty Cards at the beginning of the game, but none during the Sleeper Agent Phase."
		},
		"setup": "Brig",
		"succ": {
			"president": 27,
			"admiral": 13,
			"cag": 5
		},
		"image": "http://vignette4.wikia.nocookie.net/galactica/images/c/ce/Sharon-valerii-boomer-gr.jpg",
		"skills": [
			{
				"num": 2,
				"text": "tactics"
			},
			{
				"num": 2,
				"text": "piloting"
			},
			{
				"num": 1,
				"text": "leadership/engineering"
			}
		],
		"origin": "custom"
	},
	{
		"name": "Sharon \"Athena\" Agathon",
		"type": "pilot",
		"pos": {
			"header": "Opera House Visions",
			"text": "On your turn, before any die is rolled, you may discard 1 Skill Card to add or subtract 1 from the result (limit once per roll)."
		},
		"opg": {
			"header": "A Mother Scorned - Action",
			"text": "Once per game, you may render inactivate any non-hazardous 1 Human or Cylon location until the start of your next turn."
		},
		"neg": {
			"header": "Known Cylon",
			"text": "You are dealt 2 Loyalty Cards at the beginning of the game, but none during the Sleeper Agent Phase."
		},
		"setup": "Brig",
		"succ": {
			"president": 27,
			"admiral": 13,
			"cag": 5
		},
		"image": "http://vignette4.wikia.nocookie.net/galactica/images/c/ce/Sharon-valerii-boomer-gr.jpg",
		"skills": [
			{
				"num": 2,
				"text": "tactics"
			},
			{
				"num": 2,
				"text": "piloting"
			},
			{
				"num": 1,
				"text": "leadership/engineering"
			}
		],
		"origin": "custom"
	},
	{
		"name": "\"Chief\" Galen Tyrol",
		"type": "support",
		"pos": {
			"header": "Union Leader",
			"text": "When you use the \"Scientific Research\" Skill Card, you can make any Skill type of your choice positive or negative."
		},
		"opg": {
			"header": "Inside Source",
			"text": "Once per game, look at the top 4 cards of the Crisis deck, then place them on the top or bottom of the deck in any order and combination."
		},
		"neg": {
			"header": "Reckless",
			"text": "Your hand limit is 8 (instead of 10)."
		},
		"setup": "Hangar Deck",
		"succ": {
			"president": 13,
			"admiral": 16,
			"cag": 17
		},
		"image": "https://s-media-cache-ak0.pinimg.com/736x/cf/d6/46/cfd646a63126500b707dae6f374b502b.jpg",
		"skills": [
			{
				"num": 1,
				"text": "politics"
			},
			{
				"num": 2,
				"text": "leadership"
			},
			{
				"num": 2,
				"text": "engineering"
			}
		],
		"origin": "custom"
	},
	{
		"name": "Elosha",
		"type": "political",
		"pos": {
			"header": "Spiritual Advisor",
			"text": "Before every skill check on your turn, look through the Destiny deck and select 2 cards to place on top. \"Investigative Committee\" cards may not be played after this. Shuffle the Destiny deck after resolving the check."
		},
		"opg": {
			"header": "All This Has Happened Before - Action",
			"text": "Once per game, you may discard 3 random Skill Cards to look through the discarded Crisis Cards, choose 1 of them and place it back on top of the Crisis Deck."
		},
		"neg": {
			"header": "Will of the Gods",
			"text": "When participating in a skill check, any cards you wish to contribute must be chosen randomly."
		},
		"setup": "President's Office",
		"succ": {
			"president": 6.5,
			"admiral": 27,
			"cag": 27
		},
		"image": "http://media.battlestarwiki.org/images/thumb/a/a3/Elosha1.jpg/200px-Elosha1.jpg",
		"skills": [
			{
				"num": 3,
				"text": "politics"
			},
			{
				"num": 2,
				"text": "leadership"
			}
		],
		"origin": "custom"
	},
	{
		"name": "Aaron Kelly",
		"type": "military",
		"pos": {
			"header": "Landing Signals Officer",
			"text": "Once per turn, when any characters would go to \"Sickbay\" as a result of a damaged vehicle, draw 2 Skill Cards (may be out of your Skill set). Then for each character, roll a die and on a 3 or higher move the character to the \"Hangar Deck\" instead."
		},
		"opg": {
			"header": "Authorize Bombing - Action",
			"text": "Once per game, damage an occupied location of your choice on Galactica. Then you must destroy up to 2 centurions (nearest to the end) if any."
		},
		"neg": {
			"header": "Terrorist",
			"text": "When your current location is damaged, move to the Brig instead of Sickbay."
		},
		"setup": "Command",
		"succ": {
			"president": 16.5,
			"admiral": 11.5,
			"cag": 15.5
		},
		"image": "http://www.aveleyman.com/Gallery/ActorsO/tve32700-20031208-1646.gif",
		"skills": [
			{
				"num": 2,
				"text": "leadership"
			},
			{
				"num": 3,
				"text": "tactics"
			}
		],
		"origin": "custom"
	},
	{
		"name": "Jack Fisk",
		"type": "military",
		"pos": {
			"header": "Black Market",
			"text": "Following your \"Receive Skills\" step, draw 1 card of any Skill type. Then choose 1 card from your hand to discard."
		},
		"opg": {
			"header": "Lead Black Market - Action",
			"text": "Once per game, discard Skill Cards with a minimum total strength of 20 to raise or lower any resource by 1."
		},
		"neg": {
			"header": "Talkative Drunk",
			"text": "When any Loyalty Cards are viewed, you must reveal 1 of your Loyalty Cards (at random) to the player whose Loyalty Cards are being viewed."
		},
		"setup": "Command",
		"succ": {
			"president": 17.5,
			"admiral": 4.5,
			"cag": 12.5
		},
		"image": "http://media.battlestarwiki.org/images/thumb/a/a2/Jack_Fisk.jpg/200px-Jack_Fisk.jpg",
		"skills": [
			{
				"num": 3,
				"text": "leadership"
			},
			{
				"num": 2,
				"text": "tactics"
			}
		],
		"origin": "custom"
	},
	{
		"name": "Kendra Shaw",
		"type": "military",
		"pos": {
			"header": "Efficient Officer",
			"text": "If another player chooses you as the target of an \"Executive Order\" Skill Card, you may take an additional movement."
		},
		"opg": {
			"header": "Razor - Action",
			"text": "Once per game, you may draw and destroy 1 civilian ship to cancel the text effects of a Crisis Card. Proceed to \"Activate Cylon Ships\" step."
		},
		"neg": {
			"header": "Authority Issues",
			"text": "You draw 2 Treachery Cards whenever you are the target of a Quorum or Skill Card effect."
		},
		"setup": "Pegasus CIC <span class='italic'>or</span> Command",
		"succ": {
			"president": 17.5,
			"admiral": 6.5,
			"cag": 14.5
		},
		"image": "http://media-cache-ec0.pinimg.com/736x/38/90/7f/38907fcba8e67add84e9dfab726b62e0.jpg",
		"skills": [
			{
				"num": 2,
				"text": "leadership"
			},
			{
				"num": 2,
				"text": "tactics"
			},
			{
				"num": 1,
				"text": "engineering"
			}
		],
		"origin": "custom"
	},
	{
		"name": "Margaret \"Racetrack\" Edmondson",
		"type": "pilot",
		"pos": {
			"header": "First Scout",
			"text": "Once per turn, draw 2 Leadership Cards whenever a raptor is risked."
		},
		"opg": {
			"header": "Critical Discovery - Action",
			"text": "Once per game, look at the top 3 cards of the Destination deck, then place them on the top or bottom of the deck in any order and combination."
		},
		"neg": {
			"header": "Raptor Pilot",
			"text": "Each time you roll for your manned viper, discard a Skill Card or -1 to the result."
		},
		"setup": "Hangar Deck",
		"succ": {
			"president": 20.5,
			"admiral": 15.5,
			"cag": 7.5
		},
		"image": "http://media.battlestarwiki.org/images/thumb/c/cb/Margaret_Edmondson.jpg/200px-Margaret_Edmondson.jpg",
		"skills": [
			{
				"num": 3,
				"text": "tactics"
			},
			{
				"num": 2,
				"text": "piloting"
			}
		],
		"origin": "custom"
	},
	{
		"name": "Margaret \"Racetrack\" Edmondson",
		"type": "pilot",
		"pos": {
			"header": "First Scout",
			"text": "Once per turn, draw 2 Leadership Cards whenever a raptor is risked."
		},
		"opg": {
			"header": "Critical Discovery",
			"text": "Once per game, when a new jump destination is chosen, you may either negate all resource loss or increase any single resource loss by one."
		},
		"neg": {
			"header": "Raptor Pilot",
			"text": "Each time you roll for your manned viper, discard a Skill Card or -1 to the result."
		},
		"setup": "Hangar Deck",
		"succ": {
			"president": 20.5,
			"admiral": 15.5,
			"cag": 7.5
		},
		"image": "http://media.battlestarwiki.org/images/thumb/c/cb/Margaret_Edmondson.jpg/200px-Margaret_Edmondson.jpg",
		"skills": [
			{
				"num": 3,
				"text": "tactics"
			},
			{
				"num": 2,
				"text": "piloting"
			}
		],
		"origin": "custom"
	},
	{
		"name": "Diana \"Hardball\" Seelix",
		"type": "support",
		"pos": {
			"header": "Avionics Expert - Action",
			"text": "Once per turn, if you are in the \"Hangar Deck\" location, you may play a \"Repair\" Skill Card from your hand to repair up to 3 damaged vipers."
		},
		"opg": {
			"header": "Break the Chains of Society - Movement or Action",
			"text": "Once per game, draw 6 Piloting or Engineering Skill Cards in any combination."
		},
		"neg": {
			"header": "Knuckle Dragger",
			"text": "You may not launch yourself in a viper as long as there are damaged vipers."
		},
		"setup": "Hangar Deck",
		"succ": {
			"president": 15.5,
			"admiral": 15.7,
			"cag": 9.5
		},
		"image": "http://media.battlestarwiki.org/images/thumb/7/79/Flight_of_the_Phoenix-Seelix.jpg/200px-Flight_of_the_Phoenix-Seelix.jpg",
		"skills": [
			{
				"num": 2,
				"text": "tactics"
			},
			{
				"num": 2,
				"text": "engineering"
			},
			{
				"num": 1,
				"text": "piloting"
			}
		],
		"origin": "custom"
	},
	{
		"name": "Peter Laird",
		"type": "support",
		"pos": {
			"header": "Engineering Designs",
			"text": "Once per turn, draw a Skill Card whenever you play an Engineering Skill Card for its text."
		},
		"opg": {
			"header": "Unconventional Deck Chief",
			"text": "Once per game, when any Galactica or Pegasus damage token is to be resolved, you may pick any undamaged Galactica or Pegasus location to damage instead (doesn't need to be the same ship)."
		},
		"neg": {
			"header": "Drafted into Service",
			"text": "You may never become the Admiral or the CAG."
		},
		"setup": "Engine Room <span class='italic'>or</span> Hangar Deck",
		"succ": {
			"president": 12.5,
			"admiral": 99,
			"cag": 99
		},
		"image": "http://media.battlestarwiki.org/images/thumb/9/96/Peter_Laird.jpg/200px-Peter_Laird.jpg",
		"skills": [
			{
				"num": 1,
				"text": "leadership"
			},
			{
				"num": 1,
				"text": "tactics"
			},
			{
				"num": 3,
				"text": "engineering"
			}
		],
		"origin": "custom"
	},
	{
		"name": "Barry Garner",
		"type": "support",
		"pos": {
			"header": "Skilled Engineer",
			"text": "Once per turn, when you play a Repair card you may return that card to your hand."
		},
		"opg": {
			"header": "Noble Sacrifice - Action",
			"text": "Once per game, discard all Skill Cards and move to Sickbay, then repair the FTL Control location if damaged, and jump the fleet without drawing any destination cards (reset jump prep and clear enemy ships)."
		},
		"neg": {
			"header": "Unfit to Lead",
			"text": "At the end of your turn, if you have a title, pass that title to the next player in succession."
		},
		"setup": "Command",
		"succ": {
			"president": 12.7,
			"admiral": 2.7,
			"cag": 15.5
		},
		"image": "http://media.battlestarwiki.org/images/thumb/e/e3/Barry_Garner.jpg/200px-Barry_Garner.jpg",
		"skills": [
			{
				"num": 1,
				"text": "leadership"
			},
			{
				"num": 2,
				"text": "tactics"
			},
			{
				"num": 2,
				"text": "engineering"
			}
		],
		"origin": "custom"
	},
	{
		"name": "Barry Garner",
		"type": "support",
		"pos": {
			"header": "Skilled Engineer",
			"text": "Once per turn, when you play a Repair card you may return that card to your hand."
		},
		"opg": {
			"header": "Noble Sacrifice - Action",
			"text": "Once per game, discard all Skill Cards and move to Sickbay. Then repair the FTL Control location if damaged and clear all enemy ships (like after a jump), OR damage FTL Control if possible and bring back all ships from the CFB (resetting token)."
		},
		"neg": {
			"header": "Unfit to Lead",
			"text": "At the end of any turn, if you have a title, pass that title to the next player in succession."
		},
		"setup": "Command",
		"succ": {
			"president": 12.7,
			"admiral": 2.7,
			"cag": 15.5
		},
		"image": "http://media.battlestarwiki.org/images/thumb/e/e3/Barry_Garner.jpg/200px-Barry_Garner.jpg",
		"skills": [
			{
				"num": 1,
				"text": "leadership"
			},
			{
				"num": 2,
				"text": "tactics"
			},
			{
				"num": 2,
				"text": "engineering"
			}
		],
		"origin": "custom"
	}
];
