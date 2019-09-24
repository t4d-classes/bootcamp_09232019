import React from 'react';

export const HelloWorld = () => {

  // return React.createElement('div', null,
  //   React.createElement('h1', null, 'Hello World!'),
  //   React.createElement('span', null, 'test'));
  return <>
    <header>
      <h1>Hello World!</h1>
    </header>
    <nav>
      <ul>
        <li><a href="https://www.espn.com/">ESPN</a></li>
        <li><a href="https://www.espn.com/nhl/">ESPN2</a></li>
        <li><a href="http://www.google.com">Google</a></li>
        <li><a href="http://www.hulu.com">Hulu</a></li>
      </ul>
    </nav>
    <div>some block content</div>
    <span>some inline content</span>

    <p>Here is some amazing paragraph text! Living in the Bay Area is great!</p>

    <ul>
      <li>blue</li>
      <li>teal</li>
      <li>burgundy</li>
      <li>green</li>
      <li>red</li>
      <li>gold</li>
      <li>orange</li>
      <li>purple</li>
    </ul>

    <ol>
      <li>Intuit</li>
      <li>HR Block</li>
      <li>Xero</li>
    </ol>

    <table>
      <thead>
        <tr>
          <th>Team</th>
          <th>Conference</th>
          <th>Division</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>San Jose Sharks</td>
          <td>Western</td>
          <td>Pacific</td>
        </tr>
        <tr>
          <td>Philadelphia Flyers</td>
          <td>Eastern</td>
          <td>Metropolitan</td>
        </tr>
        <tr>
          <td>LA Kings</td>
          <td>Western</td>
          <td>Pacific</td>
        </tr>
      </tbody>
    </table>

    <img src="logo512.png" alt="This is the class Kitten Mascot" />

    <section>
      <header>
        Section Header
      </header>

      <footer>
        Section Footer
      </footer>
    </section>

    <main>
      <header>

      </header>
      <aside></aside>
      <div id="content"></div>
      <article>
        
      </article>
      <footer>

      </footer>
    </main>



  </>;

};