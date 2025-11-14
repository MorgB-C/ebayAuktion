# System Patterns

## Architecture
The application is a **Static Single-Page Application (SPA)**. It consists of three core files:
- `index.html`: The single HTML document containing the form and all UI elements.
- `style.css`: A single stylesheet for all visual presentation.
- `script.js`: A single JavaScript file that handles all application logic.

## Key Design Patterns
- **DOM Manipulation:** The `script.js` file directly manipulates the Document Object Model (DOM) to handle user interactions, such as displaying image previews and updating calculated fields.
- **Event-Driven Logic:** The application's functionality is driven by user events (e.g., `input` on the price field, `change` on the file input, `submit` on the form, `click` on the snippet button). Event listeners are used to trigger the corresponding logic.
- **Separation of Concerns:** Although simple, the project maintains a clear separation between structure (HTML), presentation (CSS), and behavior (JavaScript).
- **No Backend:** As a POC, the application has no backend. All data is handled client-side. On form submission, the data is currently logged to the browser's developer console.
