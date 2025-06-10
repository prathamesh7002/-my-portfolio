# Firebase Studio

This is a NextJS starter in Firebase Studio.

To get started, take a look at src/app/page.tsx.
this is the final portfolio
# Firebase Studio Next.js Portfolio Project

This is a Next.js starter portfolio project built with Firebase Studio. It features sections for About Me, Skills, Projects, Resume, and a Contact Form. It's styled with Tailwind CSS and ShadCN UI components, and uses EmailJS for the contact form functionality and Genkit for potential AI features.

## Getting Started

To get this project up and running on your local machine, follow these steps:

### Prerequisites

*   Node.js (version 18.x or later recommended)
*   npm (usually comes with Node.js)
*   Git (for cloning the repository)

### 1. Clone the Repository

If you haven't already, clone the repository to your local machine:

```bash
git clone <your-repository-url>
cd <repository-name>
```

Replace `<your-repository-url>` with the actual URL of your Git repository and `<repository-name>` with the directory name.

### 2. Install Dependencies

Install the project dependencies using npm:

```bash
npm install
```

This command will download and install all the packages listed in `package.json`.

### 3. Set Up Environment Variables (for Contact Form)

The contact form uses EmailJS to send emails. You'll need to create an EmailJS account and get your Service ID, Template ID, and Public Key.

1.  Create a file named `.env.local` in the root of your project.
2.  Add your EmailJS credentials to this file:

    ```env
    NEXT_PUBLIC_EMAILJS_SERVICE_ID=YOUR_SERVICE_ID
    NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=YOUR_TEMPLATE_ID
    NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=YOUR_PUBLIC_KEY
    ```

3.  Replace `YOUR_SERVICE_ID`, `YOUR_TEMPLATE_ID`, and `YOUR_PUBLIC_KEY` with your actual credentials from your [EmailJS dashboard](https://www.emailjs.com/).

    *   **Service ID**: Found under "Email Services".
    *   **Template ID**: Found under "Email Templates". Ensure your template uses the variables `{{name}}`, `{{email}}`, and `{{message}}`.
    *   **Public Key (User ID)**: Found under "Account" > "API Keys".

### 4. Run the Next.js Development Server

To start the Next.js application in development mode:

```bash
npm run dev
```

This command will start the development server, usually on `http://localhost:9002` (as specified in `package.json`). Open this URL in your browser to see the application. The app will automatically reload if you make changes to the code.

### 5. Run the Genkit Development Server (Optional for AI Features)

If you plan to work with or develop AI features using Genkit (which is set up in this project), you'll need to run the Genkit development server in a separate terminal:

To start the Genkit server:
```bash
npm run genkit:dev
```

Or, to start it with watch mode (restarts on file changes in the `src/ai` directory):
```bash
npm run genkit:watch
```

This server typically runs on `http://localhost:3400` and is where Genkit flows are managed and can be inspected via the Genkit Developer UI.

### Summary of Commands

*   Install dependencies: `npm install`
*   Run Next.js app: `npm run dev` (typically on `http://localhost:9002`)
*   Run Genkit server (optional): `npm run genkit:dev` or `npm run genkit:watch` (typically on `http://localhost:3400`)

## Project Structure Highlights

*   `src/app/`: Contains the main application pages and layouts (using Next.js App Router).
    *   `src/app/page.tsx`: The main landing page.
    *   `src/app/layout.tsx`: The root layout for the application.
    *   `src/app/globals.css`: Global styles and Tailwind CSS theme customizations.
*   `src/components/`: Reusable React components.
    *   `src/components/ui/`: ShadCN UI components.
*   `src/lib/`: Utility functions and data.
    *   `src/lib/data.ts`: Contains data for navigation links, skills, projects, etc.
*   `src/ai/`: Contains Genkit AI flows and configuration.
    *   `src/ai/genkit.ts`: Genkit initialization.
    *   `src/ai/dev.ts`: Entry point for Genkit development server.
*   `public/`: Static assets (e.g., images, resume PDF). Ensure your resume PDF (`Prathamesh_Saharkar_Resume.pdf`) is placed here.

## Building for Production

To create a production build of the application:

```bash
npm run build
```

This will generate an optimized version of your app in the `.next` folder.

To run the production build locally:

```bash
npm start
```

## Deployment

This project is set up for Firebase App Hosting. Refer to the Firebase documentation for deployment instructions. You'll typically use the Firebase CLI.

```bash
firebase deploy
```

Ensure `apphosting.yaml` is configured according to your needs.
