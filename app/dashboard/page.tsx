
import { useState, useEffect } from 'react';

const Home: React.FC = () => {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);
  const [clickedButton, setClickedButton] = useState<string | null>(null);

  // Initial question
  const question = 'Please select one of the buttons A, B, C, or D';

  useEffect(() => {
    // Dictate the initial question when the component mounts
    speak(question);
  }, []);

  const handleMouseOver = (button: string) => {
    setHoveredButton(button);
    speak(button.split('').join(' '));
  };

  const handleMouseOut = () => {
    setHoveredButton(null);
  };

login:
// pages/login.tsx
import { useState, ChangeEvent, KeyboardEvent } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setEmail(newValue);
    readCharAloud(newValue.slice(-1)); // Read only the last typed character
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setPassword(newValue);
    readCharAloud(newValue.slice(-1)); // Read only the last typed character
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      readEmailWordByWord();
    }
  };

  const readCharAloud = (char: string) => {
    const text = char === ' ' ? 'space' : char;
    const speech = new SpeechSynthesisUtterance(text);
    speech.rate = 2; // Adjust this value for faster reading
    window.speechSynthesis.speak(speech);
  };

  const readEmailWordByWord = () => {
    const words = email.split(' ');
    words.forEach((word, index) => {
      setTimeout(() => {
        const speech = new SpeechSynthesisUtterance(word);
        speech.rate = 1.2; // Slightly faster than normal rate
        window.speechSynthesis.speak(speech);
        if (index === words.length - 1) {
          document.getElementById('password')?.focus();
        }
      }, index * 700); // Delay each word by 700ms
    });
  };

  return (
    <div>
      <h1>Login</h1>
      <form>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            onKeyDown={handleKeyDown}
            aria-label="Email"
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            aria-label="Password"
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}


  const handleClick = (button: string) => {
    setClickedButton(button);
    speak(button);
  };

  const getSpelling = (button: string) => {
    if (hoveredButton === button) {
      return button.split('').join(' ');
    } else if (clickedButton === button) {
      return button;
    } else {
      return button;
    }
  };

  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      const synth = window.speechSynthesis;
      const utterance = new SpeechSynthesisUtterance(text);
      synth.speak(utterance);
    } else {
      console.error('Speech Synthesis not supported in this browser.');
    }
  };

  const buttonColors = ['#ff6666', '#66b3ff', '#99ff99', '#ffcc66'];

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Button Spelling Example</h1>
      <div>
        {['A', 'B', 'C', 'D'].map((button, index) => (
          <button
            key={button}
            onMouseOver={() => handleMouseOver(button)}
            onMouseOut={handleMouseOut}
            onClick={() => handleClick(button)}
            style={{
              margin: '10px',
              padding: '20px 40px',
              fontSize: '24px',
              backgroundColor: buttonColors[index],
              color: 'white',
              border: 'none',
              borderRadius: '10px',
              cursor: 'pointer'
            }}
          >
            {getSpelling(button)}
          </button>
        ))}
      </div>
      {clickedButton && (
        <div style={{ marginTop: '20px', fontSize: '20px' }}>
          You selected: {clickedButton}
        </div>
      )}
    </div>
  );
};

export default Home;