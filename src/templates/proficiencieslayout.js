import React, { Component } from 'react';
import '../../src/scss/fontawesome/font-awesome.scss';

class ProficienciesLayout extends Component {
  render() {
    return (
      <div className='app'>
        <header>
          <div className="wrapper text-center my-5 px-3">
            <h1>My Proficiencies</h1>
            <h2>So what am I good at anyway?</h2>
          </div>
        </header>
        <div className='container'>
          <section className='proficiencies-radial row no-gutters py-5'>
            <div className="col-12">
              <figure className="chart bootstrap" data-percent="95">
                <figcaption>Bootstrap</figcaption>
                <img className="fa svg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MTIgNjEyIj48ZyBzb2RpcG9kaTpkb2NuYW1lPSJ0d2l0dGVyX2Jvb3RzdHJhcF9sb2dvLnN2ZyIgaW5rc2NhcGU6dmVyc2lvbj0iMC40OC4xIHI5NzYwIiB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSI+PHBhdGggZmlsbD0iIzU2M0Q3QyIgZD0iTTYxMiA1MTBjMCA1Ni4xLTQ1LjkgMTAyLTEwMiAxMDJIMTAyQzQ1LjkgNjEyIDAgNTY2LjEgMCA1MTBWMTAyQzAgNDUuOSA0NS45IDAgMTAyIDBoNDA4YzU2LjEgMCAxMDIgNDUuOSAxMDIgMTAydjQwOHoiLz48cGF0aCBmaWxsPSIjRkZGIiBkPSJNMTY2LjMgMTMzaDE3My41YzMyIDAgNTcuNyA3LjMgNzcgMjJzMjkgMzYuOCAyOSA2Ni41YzAgMTgtNC40IDMzLjQtMTMuMiA0Ni4yLTguOCAxMi44LTIxLjQgMjIuOC0zNy44IDI5Ljh2MWMyMiA0LjcgMzguNyAxNS4xIDUwIDMxLjIgMTEuMyAxNi4yIDE3IDM2LjQgMTcgNjAuOCAwIDE0LTIuNSAyNy4xLTcuNSAzOS4yLTUgMTIuMi0xMi44IDIyLjctMjMuNSAzMS41cy0yNC4zIDE1LjgtNDEgMjEtMzYuNSA3LjgtNTkuNSA3LjhoLTE2NFYxMzN6bTYyLjUgMTQ5LjVoMTAyYzE1IDAgMjcuNS00LjIgMzcuNS0xMi44czE1LTIwLjggMTUtMzYuOGMwLTE4LTQuNS0zMC43LTEzLjUtMzhzLTIyLTExLTM5LTExaC0xMDJ2OTguNnptMCAxNTYuNWgxMTAuNWMxOSAwIDMzLjgtNC45IDQ0LjItMTQuOCAxMC41LTkuOCAxNS44LTIzLjggMTUuOC00MS44IDAtMTcuNy01LjItMzEuMi0xNS44LTQwLjhzLTI1LjItMTQuMi00NC4yLTE0LjJIMjI4LjhWNDM5eiIvPjwvZz48L3N2Zz4=" width="144" height="144"/>
                <svg width="200" height="200">
                  <circle className="outer" cx="95" cy="95" r="85" transform="rotate(-90, 95, 95)"></circle>
                </svg>
              </figure>
              <figure className="chart sass" data-percent="95">
                <figcaption>SASS</figcaption>
                <img className="fa svg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgMzg0Ij48cGF0aCBmaWxsPSIjQ0Y2NDlBIiBkPSJNNDQwLjYgMjIwLjZjLTE3LjkuMS0zMy40IDQuNC00Ni40IDEwLjgtNC44LTkuNS05LjYtMTcuOC0xMC40LTI0LS45LTcuMi0yLTExLjYtLjktMjAuMnM2LjEtMjAuOCA2LjEtMjEuOGMtLjEtLjktMS4xLTUuMy0xMS40LTUuNHMtMTkuMiAyLTIwLjIgNC43LTMgOC45LTQuMyAxNS4zYy0xLjggOS40LTIwLjYgNDIuNy0zMS4zIDYwLjItMy41LTYuOC02LjUtMTIuOC03LjEtMTcuNi0uOS03LjItMi0xMS42LS45LTIwLjJzNi4xLTIwLjggNi4xLTIxLjhjLS4xLS45LTEuMS01LjMtMTEuNC01LjQtMTAuMy0uMS0xOS4yIDItMjAuMiA0LjdzLTIuMSA5LjEtNC4zIDE1LjNjLTIuMSA2LjItMjcuMSA2MS44LTMzLjYgNzYuMy0zLjMgNy40LTYuMiAxMy4zLTguMyAxNy4zLTIuMSA0LS4xLjMtLjMuNy0xLjggMy40LTIuOCA1LjMtMi44IDUuM3YuMWMtMS40IDIuNS0yLjkgNC45LTMuNiA0LjktLjUgMC0xLjUtNi43LjItMTUuOSAzLjctMTkuMyAxMi43LTQ5LjQgMTIuNi01MC41IDAtLjUgMS43LTUuOC01LjgtOC41LTcuMy0yLjctOS45IDEuOC0xMC41IDEuOC0uNiAwLTEuMSAxLjYtMS4xIDEuNnM4LjEtMzMuODk4LTE1LjUtMzMuODk4Yy0xNC44IDAtMzUuMiAxNi4xLTQ1LjMgMzAuOC02LjQgMy41LTIwIDEwLjktMzQuNCAxOC44LTUuNSAzLTExLjIgNi4yLTE2LjYgOS4xbC0xLjEtMS4yMDJjLTI4LjYtMzAuNS04MS41LTUyLjEtNzkuMy05My4xLjgtMTQuOSA2LTU0LjIgMTAxLjYtMTAxLjggNzguMy0zOSAxNDEtMjguMyAxNTEuOS00LjUgMTUuNSAzNC0zMy41IDk3LjItMTE0LjkgMTA2LjMtMzEgMy41LTQ3LjMtOC41LTUxLjQtMTMtNC4zLTQuNy00LjktNC45LTYuNS00LTIuNiAxLjQtMSA1LjYgMCA4LjEgMi40IDYuMyAxMi40IDE3LjUgMjkuNCAyMy4xIDE0LjkgNC45IDUxLjMgNy42IDk1LjMtOS40IDQ5LjMtMTkuMSA4Ny44LTcyLjEgNzYuNS0xMTYuNC0xMS41LTQ1LjEtODYuMy01OS45LTE1Ny0zNC44LTQyLjEgMTUtODcuNyAzOC40LTEyMC41IDY5LjFDNCAxMTcuOS0yLjIgMTQ5LjcuNCAxNjIuOWM5LjEgNDcuMSA3NCA3Ny44IDEwMCAxMDAuNS0xLjMuNy0yLjUgMS40LTMuNiAyLTEzIDYuNC02Mi41IDMyLjMtNzQuOSA1OS43LTE0IDMxIDIuMiA1My4zIDEzIDU2LjMgMzMuNCA5LjMgNjcuNi03LjQgODYuMS0zNC45IDE4LjQtMjcuNSAxNi4yLTYzLjIgNy43LTc5LjVsLS4zLS42IDEwLjItNmM2LjYtMy45IDEzLjEtNy41IDE4LjgtMTAuNi0zLjIgOC43LTUuNSAxOS02LjcgMzQtMS40IDE3LjYgNS44IDQwLjQgMTUuMyA0OS40IDQuMiAzLjg5OCA5LjIgNCAxMi4zIDQgMTEgMCAxNi05LjEwMiAyMS41LTIwIDYuOC0xMy4zIDEyLjgtMjguNyAxMi44LTI4LjdzLTcuNSA0MS43IDEzIDQxLjdjNy41IDAgMTUtOS43IDE4LjQtMTQuN3YuMXMuMi0uMy42LTFhMzYuMTMgMzYuMTMgMCAwIDAgMS4yLTEuOXYtLjJjMy01LjIgOS43LTE3LjEgMTkuNy0zNi44IDEyLjktMjUuNCAyNS4zLTU3LjIgMjUuMy01Ny4yczEuMiA3LjggNC45IDIwLjZjMi4yIDcuNiA3IDE1LjkgMTAuNyAyNC0zIDQuMi00LjggNi42LTQuOCA2LjZsLjEuMWMtMi40IDMuMi01LjEgNi42MDItNy45IDEwLTEwLjIgMTIuMi0yMi40IDI2LjEwMi0yNCAzMC4xMDItMS45IDQuNy0xLjUgOC4yIDIuMiAxMSAyLjcgMiA3LjUgMi40IDEyLjYgMiA5LjItLjYgMTUuNi0yLjkgMTguOC00LjMgNS0xLjggMTAuNy00LjUgMTYuMi04LjUgMTAtNy40IDE2LjEtMTcuOSAxNS41LTMxLjktLjMtNy43LTIuOC0xNS4zLTUuOS0yMi41LjktMS4zIDEuOC0yLjYgMi43LTQgMTUuOC0yMy4xIDI4LTQ4LjUgMjgtNDguNXMxLjIgNy44IDQuOSAyMC42YzEuOSA2LjUgNS43IDEzLjYgOS4xIDIwLjYtMTQuOCAxMi4xLTI0LjEgMjYuMS0yNy4zIDM1LjMtNS45IDE3LTEuMyAyNC43IDcuNCAyNi41IDMuOS44IDkuNS0xIDEzLjctMi44IDUuMi0xLjcgMTEuNS00LjYgMTcuMy04LjkgMTAtNy40IDE5LjYtMTcuNyAxOS4xLTMxLjYtLjMtNi40LTItMTIuNy00LjMtMTguNyAxMi42LTUuMiAyOC45LTguMiA0OS42LTUuNyA0NC41IDUuMiA1My4zIDMzIDUxLjYgNDQuNi0xLjcgMTEuNjAyLTExIDE4LTE0LjEgMjAtMy4xIDEuOS00LjEgMi42MDItMy44IDQgLjQgMi4xMDIgMS44IDIgNC41IDEuNjAyIDMuNy0uNiAyMy40LTkuNSAyNC4yLTMwLjkgMS4yLTI3LjUwMy0yNC45LTU3LjUwMy03MS4yLTU3LjIwNHpNOTcuNCAzMzYuM2MtMTQuNyAxNi4xLTM1LjQgMjIuMi00NC4yIDE3LTkuNS01LjUtNS44LTI5LjIgMTIuMy00Ni4zIDExLTEwLjQgMjUuMy0yMCAzNC43LTI1LjkgMi4xLTEuMyA1LjMtMy4yIDkuMS01LjUuNi0uNCAxLS42IDEtLjYuNy0uNCAxLjUtLjkgMi4zLTEuNCA2LjcgMjQuNC4zIDQ1LjgtMTUuMiA2Mi43em0xMDcuNS03My4xYy01LjEgMTIuNS0xNS45IDQ0LjYtMjIuNCA0Mi44LTUuNi0xLjUtOS0yNS44LTEuMS00OS44IDQtMTIuMSAxMi41LTI2LjUgMTcuNS0zMi4xIDguMS05IDE2LjktMTIgMTkuMS04LjMgMi42IDQuOC05LjkgMzkuNi0xMy4xIDQ3LjR6bTg4LjcgNDIuNGMtMi4yIDEuMS00LjIgMS45LTUuMSAxLjMtLjctLjQuOS0xLjkuOS0xLjlzMTEuMS0xMS45IDE1LjUtMTcuNGMyLjUtMy4xOTggNS41LTYuODk4IDguNy0xMS4xdjEuMmMwIDE0LjQtMTMuOCAyNC0yMCAyNy45ek0zNjIgMjkwYy0xLjYtMS4yLTEuNC00LjkgNC0xNi41IDIuMS00LjYgNi45LTEyLjMgMTUuMi0xOS42IDEgMyAxLjYgNS45IDEuNSA4LjYtLjEgMTgtMTIuOSAyNC43LTIwLjcgMjcuNXoiLz48L3N2Zz4=" width="144" height="144"/>
                <svg width="200" height="200">
                  <circle className="outer" cx="95" cy="95" r="85" transform="rotate(-90, 95, 95)"></circle>
                </svg>
              </figure>
              <figure className="chart joomla" data-percent="100">
                <figcaption>Joomla</figcaption>
                <em className="fa fa-joomla"></em>
                <svg width="200" height="200"> <circle className="outer" cx="95" cy="95" r="85" transform="rotate(-90, 95, 95)"></circle>
                </svg>
              </figure>
              <figure className="chart wordpress" data-percent="90">
                <figcaption>WordPress</figcaption>
                <em className="fa fa-wordpress"></em>
                <svg width="200" height="200">
                  <circle className="outer" cx="95" cy="95" r="85" transform="rotate(-90, 95, 95)"></circle>
                </svg>
              </figure>
              <figure className="chart css3" data-percent="95">
                <figcaption>CSS3</figcaption>
                <em className="fa fa-css3"></em>
                <svg width="200" height="200">
                  <circle className="outer" cx="95" cy="95" r="85" transform="rotate(-90, 95, 95)"></circle>
                </svg>
              </figure>
              <figure className="chart html5" data-percent="95">
                <figcaption>HTML5</figcaption>
                <em className="fa fa-html5"></em>
                <svg width="200" height="200">
                  <circle className="outer" cx="95" cy="95" r="85" transform="rotate(-90, 95, 95)"></circle>
                </svg>
              </figure>
              <figure className="chart email" data-percent="90">
                <figcaption>EDMs</figcaption>
                <em className="fa fa-envelope"></em>
                <svg width="200" height="200">
                  <circle className="outer" cx="95" cy="95" r="85" transform="rotate(-90, 95, 95)"></circle>
                </svg>
              </figure>
              <figure className="chart drupal" data-percent="45">
                <figcaption>Drupal</figcaption>
                <em className="fa fa-drupal"></em>
                <svg width="200" height="200">
                  <circle className="outer" cx="95" cy="95" r="85" transform="rotate(-90, 95, 95)"></circle>
                </svg>
              </figure>
            </div>
          </section>
          <section className='row pb-5'>
            <div className='col-12'>
              <h3 className='my-4'>To sum up the above...</h3>
              <ul>
                <li><strong>Bootstrap - 95%</strong>: Very experienced with Bootstrap - currently using Bootstrap 4 and will use for almost all projects</li>
                <li><strong>SASS - 95%</strong>: Very experienced with SASS - will use for almost all projects</li>
                <li><strong>Joomla - 100%</strong>: Joomla's my jam...</li>
                <li><strong>WordPress - 90%</strong>: I've done a lot of builds in WordPress, but I feel like there's still more to know.</li>
                <li><strong>CSS3 &amp; HTML5 - 95%</strong>: Got it down, but there's always an obscure new thing to surprise me.</li>
                <li><strong>Email templates / EDMs - 90%</strong>: Coding like it's 1999... It's always challenging, but I do well.</li>
                <li><strong>Drupal - 45%</strong>: I've done work on Drupal sites in the past - there's plenty I can do, but plenty more I can learn.</li>
              </ul>
              <h4 className='my-4'>Anything Else?</h4>
              <p><strong>Yes!</strong> The following list should cover it:</p>
              <ul>
                <li><strong>Site Optimisation</strong>: I can get a little obsessed with this when left to my own devices... I have many tools in my tool belt for this...</li>
                <li><strong>PHP</strong>: I do well with PHP - most of what I do in a day is in PHP.</li>
                <li><strong>React JS</strong>: I'm relatively new to React JS but am learning quickly. This portfolio is built from scratch using React JS!</li>
                <li><strong>JavaScript / jQuery</strong>: Have done plenty with this - very comfortable with it.</li> <li><strong>Vision6 / MailChimp</strong>: I've done many email templates in these - they always turn out great.</li>
                <li><b>SQL</b>: Sometimes a CMS doesn't give you everything you need and you have to go straight to the database - I've had quite a bit of experience with this.</li>
                <li><b>Node / Gulp</b>: I've been using Node and Gulp in my projects. Ideally, using Webpack would render Gulp redundant, and Yarn is meant to be better than Node, but am yet to flesh those out thoroughly.</li>
                <li><strong>BigCommerce</strong>: Have had a couple of clients in this.</li>
                <li><strong>SquareSpace</strong>: Have had a couple of clients in this too.</li>
                <li>and I've dabbled a little with <strong>SVGs</strong>. I can build a <strong>custom font</strong> with SVG elements.</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default ProficienciesLayout;
