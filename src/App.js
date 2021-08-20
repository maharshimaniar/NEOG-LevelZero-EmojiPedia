import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [meaning, setMeaning] = useState("");
  const emojiDictionary = {
    "😊": "Smiling",
    "😳": "disbelief",
    "😔": "sad",
    "🥡": "takeout box",
    "❤️": "love",
    "😑": "annoyance",
    "😀": "Grinning Face",
    "😃": "Grinning Face with Big Eyes",
    "😄": "Grinning Face with Smiling Eyes",
    "😁": "Beaming Face with Smiling Eyes",
    "😆": "Grinning Squinting Face",
    "😅": "Grinning Face with Sweat",
    "🤣": "Rolling on the Floor Laughing",
    "😂": "Face with Tears of Joy",
    "🙂": "Slightly Smiling Face",
    "🙃": "Upside-Down Face",
    "😉": "Winking Face",
    "😊": "Smiling Face with Smiling Eyes",
    "😇": "Smiling Face with Halo",
    "🥰": "Smiling Face with Hearts",
    "😍": "Smiling Face with Heart-Eyes",
    "🤩": "Star-Struck",
    "😘": "Face Blowing a Kiss",
    "😗": "Kissing Face",
    "😚": "Kissing Face with Closed Eyes",
    "😙": "Kissing Face with Smiling Eyes",
    "🥲": "Smiling Face with Tear",
    "😋": "Face Savoring Food",
    "😛": "Face with Tongue",
    "😜": "Winking Face with Tongue",
    "🤪": "Zany Face",
    "😝": "Squinting Face with Tongue",
    "🤑": "Money-Mouth Face",
    "🤗": "Hugging Face",
    "🤭": "Face with Hand Over Mouth",
    "🤫": "Shushing Face",
    "🤔": "Thinking Face",
    "🤐": "Zipper-Mouth Face",
    "🤨": "Face with Raised Eyebrow",
    "😐": "Neutral Face",
    "😑": "Expressionless Face",
    "😶": "Face Without Mouth",
    "😏": "Smirking Face",
    "😒": "Unamused Face",
    "🙄": "Face with Rolling Eyes",
    "😬": "Grimacing Face",
    "😮": "‍💨 Face Exhaling",
    "🤥": "Lying Face",
    "😌": "Relieved Face",
    "😔": "Pensive Face",
    "😪": "Sleepy Face",
    "🤤": "Drooling Face",
    "😴": "Sleeping Face",
    "😷": "Face with Medical Mask",
    "🤒": "Face with Thermometer",
    "🤕": "Face with Head-Bandage",
    "🤢": "Nauseated Face",
    "🤮": "Face Vomiting",
    "🤧": "Sneezing Face",
    "🥵": "Hot Face",
    "🥶": "Cold Face",
    "🥴": "Woozy Face",
    "😵": "Dizzy Face",
    "😵": "‍💫 Face with Spiral Eyes",
    "🤯": "Exploding Head",
    "🤠": "Cowboy Hat Face",
    "🥳": "Partying Face",
    "🥸": "Disguised Face",
    "😎": "Smiling Face with Sunglasses",
    "🤓": "Nerd Face",
    "🧐": "Face with Monocle",
    "😕": "Confused Face",
    "😟": "Worried Face",
    "🙁": "Slightly Frowning Face",
    "😮": "Face with Open Mouth",
    "😯": "Hushed Face",
    "😲": "Astonished Face",
    "😳": "Flushed Face",
    "🥺": "Pleading Face",
    "😦": "Frowning Face with Open Mouth",
    "😧": "Anguished Face",
    "😨": "Fearful Face",
    "😰": "Anxious Face with Sweat",
    "😥": "Sad but Relieved Face",
    "😢": "Crying Face",
    "😭": "Loudly Crying Face",
    "😱": "Face Screaming in Fear",
    "😖": "Confounded Face",
    "😣": "Persevering Face",
    "😞": "Disappointed Face",
    "😓": "Downcast Face with Sweat",
    "😩": "Weary Face",
    "😫": "Tired Face",
    "🥱": "Yawning Face",
    "😤": "Face with Steam From Nose",
    "😡": "Pouting Face",
    "😠": "Angry Face",
    "🤬": "Face with Symbols on Mouth",
    "😈": "Smiling Face with Horns",
    "👿": "Angry Face with Horns",
    "💀": "Skull",
    "☠": "Skull and Crossbones",
    "💩": "Pile of Poo",
    "🤡": "Clown Face",
    "👹": "Ogre",
    "👺": "Goblin",
    "👻": "Ghost",
    "👽": "Alien",
    "👾": "Alien Monster",
    "🤖": "Robot",
    "😺": "Grinning Cat",
    "😸": "Grinning Cat with Smiling Eyes",
    "😹": "Cat with Tears of Joy",
    "😻": "Smiling Cat with Heart-Eyes",
    "😼": "Cat with Wry Smile",
    "😽": "Kissing Cat",
    "🙀": "Weary Cat",
    "😿": "Crying Cat",
    "😾": "Pouting Cat",
    "💋": "Kiss Mark",
    "👋": "Waving Hand",
    "🤚": "Raised Back of Hand",
    "🖐": " Hand with Fingers Splayed",
    "✋": "aised Hand",
    "🖖": "Vulcan Salute",
    "👌": "OK Hand",
    "🤌": "Pinched Fingers",
    "🤏": "Pinching Hand",
    "✌": "Victory Hand",
    "🤞": "Crossed Fingers",
    "🤟": "Love-You Gesture",
    "🤘": "Sign of the Horns",
    "🤙": "Call Me Hand",
    "👈": "Backhand Index Pointing Left",
    "👉": "Backhand Index Pointing Right",
    "👆": "Backhand Index Pointing Up",
    "🖕": "Middle Finger",
    "👇": "Backhand Index Pointing Down",
    "☝": "Index Pointing Up",
    "👍": "Thumbs Up",
    "👎": "Thumbs Down",
    "✊": "aised Fist",
    "👊": "Oncoming Fist",
    "🤛": "Left-Facing Fist",
    "🤜": "Right-Facing Fist",
    "👏": "Clapping Hands",
    "🙌": "Raising Hands",
    "👐": "Open Hands",
    "🤲": "Palms Up Together",
    "🤝": "Handshake",
    "🙏": "Folded Hands",
    "✍": "Writing Hand",
    "💅": "Nail Polish",
    "🤳": "Selfie",
    "💪": "Flexed Biceps",
    "🦾": "Mechanical Arm",
    "🦿": "Mechanical Leg",
    "🦵": "Leg",
    "🦶": "Foot",
    "👂": "Ear",
    "🦻": "Ear with Hearing Aid",
    "👃": "Nose",
    "🧠": "Brain",
    "🫀": "Anatomical Heart",
    "🫁": "Lungs",
    "🦷": "Tooth",
    "🦴": "Bone",
    "👀": "Eyes",
    "👁": " Eye",
    "👅": "Tongue",
    "👄": "Mouth",
    "👶": "Baby",
    "🧒": "Child",
    "👦": "Boy",
    "👧": "Girl",
    "🧑": "Person",
    "👱": "Person: Blond Hair",
    "👨": "Man",
    "🧔": "Person: Beard"
  };
  const emojiList = Object.keys(emojiDictionary);
  var emoji;
  function onChangeListener(event) {
    emoji = emojiDictionary[event.target.value];
    if (emoji === undefined) {
      emoji = "Sorry! We don't have this Emoji in our Database.";
    }
    setMeaning(emoji);
  }

  function onClickHandler(index) {
    emoji = emojiDictionary[emojiList[index]];
    setMeaning(emoji);
  }

  return (
    <div className="App">
      <h1>EmojiPedia</h1>
      <input
        placeholder="Enter Emoji Here"
        className="search-box"
        onChange={onChangeListener}
      ></input>
      <div>
        <h3
          style={{
            fontSize: "1.5rem",
            fontStyle: "italic",
            fontWeight: "lighter"
          }}
        >
          {meaning}
        </h3>
      </div>
      <div className="emoji-div">
        <h4>Emojis we know</h4>
        {emojiList.map(function (emoji, index) {
          return (
            <span
              style={{ fontSize: "2rem", cursor: "pointer" }}
              key={emoji}
              onClick={() => onClickHandler(index)}
            >
              {emoji}{" "}
            </span>
          );
        })}
      </div>
    </div>
  );
}
