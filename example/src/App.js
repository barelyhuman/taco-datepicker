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
              {`npm i @barelyhuman/taco-datepicker 
# or 
yarn add @barelyhuman/taco-datepicker`}
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
            <h3>Normal Sized (for inline selections)</h3>
            <p>Selected Date: {value.toString()}</p>
            <Datepicker value={value} onChange={handleDateChange} />
          </div>

          <div className="p-2 mb-2">
            <h3>Mini Sized (for modal based datepickers)</h3>
            <p>Selected Date: {value.toString()}</p>
            <Datepicker mini value={value} onChange={handleDateChange} />
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
    // mini prop for the mini version as shown above
    <Datepicker mini value={value} onChange={handleDateChange} />
  );
}`}
            </code>
          </pre>

          <h2>Props</h2>
          <section>
            <h3>
              <code>value : Date</code>
            </h3>
            <p>
              The value for the datepicker to sync with , the default value is{" "}
              <code>new Date()</code> if nothing is provided.
            </p>
            <h3>
              <code>onChange : function(dateObj){}</code>
            </h3>
            <p>
              Function callback called on each date change and the callback is
              provided with a dateObj.
            </p>
            <h3>
              <code>mini : boolean</code>
            </h3>
            <p>
              Boolean prop to decide if the mini calendar styles are to be used.
              Helpful if you plan to use the picker in a small modal
            </p>
            <h3 id="type-dateobj">
              <code>type dateObj</code>
            </h3>
            <pre>
              <code>
                {`
  {
    date // date 1-31
    isoDay // iso day of the week 1 - 7
    month // month 1-12
    year // year in XXXX format
    hours // hours 0 - 23
    minutes // mins 0 - 59
    seconds // seconds 0 - 59
    timeOfDay // string enum of am | pm
  }
  `}
              </code>
            </pre>
          </section>

          <h2>Theming</h2>
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

          <div className="p-2 mb-2 flex flex-col flex-center">
            <h3>Example: Nord Themed</h3>
            <p>Selected Date: {value.toString()}</p>
            <div className="rounded-sm nord-colors p-2 d-inline-block">
              <Datepicker value={value} onChange={handleDateChange} />
              <div className="flex flex-center p-2">
                <Datepicker mini value={value} onChange={handleDateChange} />
              </div>
            </div>
          </div>

          <h2>License</h2>
          <p>MIT &copy; Reaper 2021</p>
        </article>
      </main>
    </>
  );
}

export default App;
