import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [valueEmoji, setValueEmoji] = useState("");
  const [nameEmoji, setNameEmoji] = useState("");
  const emojiArray = [
    {
      emojiName: "smiling",
      emojiDes: "😊"
    },
    {
      emojiName: "grinning face",
      emojiDes: "😀"
    },
    {
      emojiName: "sad",
      emojiDes: "😔"
    },
    {
      emojiName: "rolling laughing",
      emojiDes: "🤣"
    },
    {
      emojiName: "love",
      emojiDes: "❤️"
    },
    {
      emojiName: "annoyance",
      emojiDes: "😑"
    },
    {
      emojiName: "sunglasses",
      emojiDes: "😎"
    },
    {
      emojiName: "face blowing a kiss",
      emojiDes: "😘"
    },
    {
      emojiName: "money mouth face",
      emojiDes: "🤑"
    },
    {
      emojiName: "heart eyes",
      emojiDes: "😍"
    }
  ];

  return (
    <div className="App">
      <h3>
        Hello Emoji{" "}
        <span role="img" aria-label="love_emoji">
          😍
        </span>
      </h3>
      <input
        value={valueEmoji}
        onChange={(e) => {
          setNameEmoji("");
          return setValueEmoji(e.target.value);
        }}
        placeholder="Find Your Emoji"
      />
      <h4>{nameEmoji}</h4>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          flexWrap: "wrap"
        }}
      >
        {emojiArray &&
          emojiArray
            .filter((emoji) =>
              valueEmoji === ""
                ? emoji
                : emoji.emojiName
                    .toLowerCase()
                    .includes(valueEmoji.toLowerCase())
            )
            .map((e, index) => (
              <div key={index}>
                <div
                  style={{
                    width: "100px",
                    height: "130px",
                    background: "yellow",
                    padding: "10px",
                    margin: "10px",
                    cursor: "pointer"
                  }}
                  onClick={() => {
                    setNameEmoji(e.emojiName);
                  }}
                >
                  <h3>{e.emojiName}</h3>
                  <span role="img" aria-label="image emoji">
                    {e.emojiDes}
                  </span>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}

// {
//   Data.filter(post => {
//     if (query === '') {
//       return post;
//     } else if (data.title.toLowerCase().includes(query.toLowerCase())) {
//       return post;
//     }
//   }).map((post, index) => (
//     <div className="box" key={index}>
//       <p>{post.title}</p>
//       <p>{post.author}</p>
//     </div>
//   ))
// }

{
  /* <div>
Data.map((post, index) => {
  <div key={index}>
    <p>{post.title}</p>
    <p>{post.author}</p>
  </div>
})
}
</div> */
}
