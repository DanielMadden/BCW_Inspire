import ImageController from "./Controllers/ImageController.js";
import QuoteController from "./Controllers/QuoteController.js";
import TimeController from "./Controllers/TimeController.js";
import TodoController from "./Controllers/TodoController.js";
import WeatherController from "./Controllers/WeatherController.js";
class App {
  constructor() {
    this.weatherController = new WeatherController();
    this.todoController = new TodoController();
    this.quoteController = new QuoteController();
    this.timeController = new TimeController();
    this.imageController = new ImageController();
  }
}


window["app"] = new App();


/**
 *
 * A systematic approach to everything that must be done:
 * DONE Todo Logic.
 * DONE Weather Logic
 * DONE Quote Logic
 * DONE Clock Logic
 * DONE Image Logic
 *
 */

/**
 * ----- TASK LIST
 * DONE Todo's are shown on the page
 * DONE When adding a todo the page does not reload
 * DONE Checkboxes remain checked/unchecked on reload
 * DONE Todo's can be added
 * DONE Todo's can be removed
 * DONE Todo's can be marked complete
 * DONE Todo data persists on reload
 * DONE Completed/Total tasks are shown
 *
 * ----- QUOTE
 * DONE Quote is always displayed
 * DONE Quote Author reveals on hover
 *
 * ----- WEATHER
 * DONE Weather temperature is displayed
 * DONE Weather temperature swaps between Celcius/Farenheit on click
 *
 * ----- CLOCK
 * DONE Clock shows time in middle of screen
 * DONE Clock updates every minute
 *
 * ----- IMAGE
 * DONE Background image
 * DONE At least one item overlayed on image
 *
 * ----- BCW EXTENSION IDEAS
 * NOTE Allow the user to set their name and have it save to localStorage
 * NOTE Change message from good morning to good afternoon, good evening as appropriate
 * DONE Allow user to toggle the clock from 12hr to 24hr
 * DONE Include an icon to show that the weather is sunny/cloudy/rainy
 * DONE Add a button to cycle to the next quote/picture
 * NOTE Add a theme button
 *
 * ----- BCW "BONUS" DIFFICULTY
 * DONE Todo's aren't redrawn or re-retrived. Easy because I did this in TaskMaster
 *
 * ----- PERSONAL STRETCH GOALS
 * DONE The last successful data is saved to localStorage
 * DONE If API fails, load localStorage
 * DONE If localStorage fails, load preset values
 * DONE Check if all data is prepared and load the page.
 * DONE Before data is prepared, have a loading screen
 * DONE Transition the image in in order for it to have time to load
 *
 */
