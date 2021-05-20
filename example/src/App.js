import React, { useState } from "react";
import { Datepicker } from "@barelyhuman/taco-datepicker";

function App() {
  const [value, setValue] = useState(new Date());

  const handleDateChange = (dateObj) => {
    setValue(new Date(dateObj.year, dateObj.month, dateObj.date));
  };

  return (
    <>
      <header className="container-boundaries">
        <h1 align="center">Taco Datepicker</h1>
      </header>
      <main className="container-boundaries">
        <article className="mb-2">
          <p>
            This is a simple inline datepicker that was extracted from the
            Barelyhuman Project [Taco](https://taco.barelyhuman.dev) to be a
            separate component since I reuse the datepicker a lot.
          </p>

          <h2>Install</h2>
          <pre>
            <code>
              {
                `npm i @barelyhuman/taco-datepicker 
# or 
yarn add @barelyhuman/taco-datepicker`
              }
            </code>
          </pre>

          <h2>Why Inline ?</h2>
          <ul>
            <li>Easier to integrate into custom modals</li>
            <li>
              Easier to handle it with custom inputs / buttons / whatever you
              like
            </li>
          </ul>
          <h2>Demo</h2>
          <div className="p-2 mb-2">
            <p>Selected Date: {value.toString()}</p>
            <Datepicker value={value} onChange={handleDateChange} />
          </div>
          <h2>Usage</h2>
          <p>
            <small>
              <strong>App.js</strong>
            </small>
          </p>
          <pre>
            <code>
              {`import React, { useState } from "react";
import { Datepicker } from "@barelyhuman/taco-datepicker/dist/index.js";

function App() {
const [value, setValue] = useState(new Date());

const handleDateChange = (dateObj) => {
setValue(new Date(dateObj.year, dateObj.month, dateObj.date));
};

return (
    <p>Selected Date: {value.toString()}</p>
    <Datepicker value={value} onChange={handleDateChange} />
  );
}`}
            </code>
          </pre>

          <h2>Themeing</h2>
          <p>
            The picker was built with css variables in mind and uses the
            predefined variables on the root to decide it's color scheme. The
            variables it depends on are as below.
          </p>
          <p>
            <strong>Dark Mode</strong>
            <br />
            You could define the same for the dark scheme and the datepicker
            will adapt accordingly.
          </p>
          <p>
            <strong>Note:</strong> The datepicker has no colors of it's own so
            it won't visually show any selection unless you define the variables
            above
          </p>
          <pre>
            <code>
              {`:root {
  --fg: #2e3440;
  --fg-light: #3b4252;
  --fg-lighter: #434c5e;
  --bg: #eceff4;
  --bg-lighter: #d8dee9;
}`}
            </code>
          </pre>

          <h2>License</h2>
          <p>MIT &copy; Reaper 2021</p>
        </article>
      </main>
    </>
  );
}

export default App;
