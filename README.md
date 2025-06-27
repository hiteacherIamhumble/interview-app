# Post-Production Committee Interview App 2025/26

An interactive web application designed for conducting interviews for the Post-Production Committee positions, featuring bilingual support (English/Chinese) and comprehensive question sets for both photo adjustment and video editing skills assessment.

## Features

- **Bilingual Interface**: Full support for English and Chinese content
- **Interview Timer**: Built-in countdown timer with 1-5 minute options
- **Individual Questions**: 
  - Photo Adjustment (Lightroom) - 5 comprehensive sets
  - Video Editing (CapCut) - 4 technical question sets
- **Group Interview Questions**: Discussion topics for group assessments
- **Self-Introduction Guidelines**: Structured 2-minute self-introduction format
- **Responsive Design**: Optimized for various screen sizes

## Tech Stack

- React 18 with TypeScript
- Vite for fast development and building
- React Router for navigation
- CSS3 with modern styling techniques

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/[your-username]/interview-app.git
cd interview-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
interview-app/
├── src/
│   ├── components/
│   │   └── Timer.tsx          # Interview timer component
│   ├── data/
│   │   └── questionsData.ts   # Photo adjustment questions data
│   ├── pages/
│   │   ├── Introduction.tsx   # Landing page with position info
│   │   ├── SelfIntro.tsx      # Self-introduction guidelines
│   │   ├── IndividualQuestions.tsx  # Individual interview questions
│   │   ├── GroupQuestions.tsx # Group discussion topics
│   │   └── ContactUs.tsx      # Contact information
│   ├── App.tsx                # Main app component
│   ├── App.css                # Global styles
│   └── main.tsx              # Entry point
├── public/
│   └── assets/               # Images for questions
└── package.json
```

## Usage

1. **Navigation**: Use the top navigation bar to switch between different sections
2. **Timer**: The timer is visible on all pages - select duration and click Start
3. **Questions**: Click on any question set to view the full question and answers
4. **Show/Hide Answers**: Toggle answers visibility for interview preparation

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is open source and available under the MIT License.