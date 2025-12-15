import React, { useState, useEffect } from 'react';

const Study = () => {


  return (
   <!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vocabulary Master Pro</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    :root {
      --primary: #4361ee;
      --secondary: #3a0ca3;
      --accent: #7209b7;
      --success: #4cc9f0;
      --danger: #f72585;
      --warning: #f8961e;
      --light: #f8f9fa;
      --dark: #212529;
      --card-bg: #ffffff;
      --shadow: rgba(0, 0, 0, 0.1);
      --vocab-bg: #f0f7ff;
      --sentence-bg: #fff8e1;
    }

    body {
      background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
      color: var(--dark);
      min-height: 100vh;
      padding: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .container {
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
    }

    header {
      text-align: center;
      padding: 30px 0;
      width: 100%;
    }

    h1 {
      font-size: 3.2rem;
      margin-bottom: 10px;
      background: linear-gradient(to right, var(--primary), var(--accent));
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    }

    .subtitle {
      font-size: 1.2rem;
      color: #666;
      max-width: 600px;
      margin: 0 auto 30px;
    }

    .nav-buttons {
      display: flex;
      justify-content: center;
      gap: 15px;
      margin-bottom: 30px;
      flex-wrap: wrap;
    }

    .nav-btn {
      background: var(--card-bg);
      border: none;
      padding: 12px 25px;
      border-radius: 50px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      gap: 10px;
      box-shadow: 0 4px 10px var(--shadow);
    }

    .nav-btn:hover {
      transform: translateY(-3px);
      box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
    }

    .nav-btn.quiz {
      background: linear-gradient(to right, var(--primary), var(--secondary));
      color: white;
    }

    .nav-btn.vocab {
      background: linear-gradient(to right, #4cc9f0, #4361ee);
      color: white;
    }

    .nav-btn.abbr {
      background: linear-gradient(to right, #7209b7, #f72585);
      color: white;
    }

    .nav-btn.sentence {
      background: linear-gradient(to right, #f8961e, #f72585);
      color: white;
    }

    .nav-btn.states {
      background: linear-gradient(to right, #38b000, #006400);
      color: white;
    }

    .nav-btn.countries {
      background: linear-gradient(to right, #ff5400, #ff6d00);
      color: white;
    }

    .nav-btn.railway {
      background: linear-gradient(to right, #9d4edd, #560bad);
      color: white;
    }

    .dashboard {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 25px;
      margin-bottom: 40px;
    }

    .card {
      background: var(--card-bg);
      border-radius: 20px;
      padding: 25px;
      box-shadow: 0 10px 30px var(--shadow);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      border: 1px solid rgba(255, 255, 255, 0.2);
    }

    .card:hover {
      transform: translateY(-10px);
      box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
    }

    .card-header {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      padding-bottom: 15px;
      border-bottom: 2px solid #f0f0f0;
    }

    .icon {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 15px;
      font-size: 1.8rem;
      color: white;
    }

    .synonym .icon {
      background: linear-gradient(135deg, var(--primary), #4cc9f0);
    }

    .antonym .icon {
      background: linear-gradient(135deg, var(--accent), #f72585);
    }

    .abbreviation .icon {
      background: linear-gradient(135deg, #7209b7, #3a0ca3);
    }

    .sentence .icon {
      background: linear-gradient(135deg, #f8961e, #f72585);
    }

    .states .icon {
      background: linear-gradient(135deg, #38b000, #006400);
    }

    .countries .icon {
      background: linear-gradient(135deg, #ff5400, #ff6d00);
    }

    .railway .icon {
      background: linear-gradient(135deg, #9d4edd, #560bad);
    }

    .card-title {
      font-size: 1.6rem;
      font-weight: 700;
    }

    .card-desc {
      color: #666;
      line-height: 1.6;
      margin-bottom: 20px;
    }

    .btn {
      background: linear-gradient(to right, var(--primary), var(--secondary));
      color: white;
      border: none;
      padding: 12px 25px;
      border-radius: 50px;
      font-weight: 600;
      font-size: 1rem;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      box-shadow: 0 4px 15px rgba(67, 97, 238, 0.3);
    }

    .btn:hover {
      transform: translateY(-3px);
      box-shadow: 0 6px 20px rgba(67, 97, 238, 0.4);
    }

    .btn i {
      margin-right: 8px;
    }

    /* Quiz Container */
    .quiz-container,
    .vocab-container,
    .abbr-container,
    .sentence-container,
    .states-container,
    .countries-container,
    .railway-container {
      display: none;
      background: var(--card-bg);
      border-radius: 20px;
      padding: 30px;
      box-shadow: 0 10px 30px var(--shadow);
      width: 100%;
      margin-bottom: 30px;
    }

    .container-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 30px;
      padding-bottom: 20px;
      border-bottom: 2px solid #f0f0f0;
    }

    .container-title {
      font-size: 1.8rem;
      color: var(--primary);
    }

    .quiz-progress {
      font-weight: 600;
      color: var(--accent);
      background: #f0f0f0;
      padding: 8px 16px;
      border-radius: 50px;
    }

    .question-container {
      margin-bottom: 30px;
    }

    .question {
      font-size: 1.5rem;
      margin-bottom: 25px;
      line-height: 1.5;
      color: var(--dark);
    }

    .dashboard {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 20px;
      margin-bottom: 40px;
    }

    /* Better mobile handling for options */
    .options-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 12px;
      margin-bottom: 25px;
    }

    /* Improved touch targets for mobile[citation:8] */
    .option {
      padding: 15px 18px;
      min-height: 60px;
      cursor: pointer;
      touch-action: manipulation;
    }

    /* Responsive typography */
    @media (max-width: 480px) {
      h1 {
        font-size: 2rem;
      }

      .container-title {
        font-size: 1.4rem;
      }

      .question {
        font-size: 1.2rem;
        line-height: 1.4;
      }

      .option {
        padding: 12px 15px;
        font-size: 1rem;
      }

      .nav-btn {
        padding: 10px 15px;
        font-size: 0.9rem;
      }

      .score-value {
        font-size: 2.5rem;
      }
    }

    /* Fluid images for better mobile experience[citation:4] */
    .card img,
    .icon img {
      max-width: 100%;
      height: auto;
    }

    /* Better breakpoints for tablets */
    @media (min-width: 769px) and (max-width: 1024px) {
      .dashboard {
        grid-template-columns: repeat(2, 1fr);
      }

      .vocab-list,
      .states-list,
      .countries-list,
      .railway-list {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    /* Ensure content doesn't overflow on small screens */
    .container {
      width: 100%;
      max-width: 1200px;
      padding: 15px;
      overflow-x: hidden;
    }

    /* Improve button touch targets[citation:8] */
    .btn,
    .nav-btn {
      min-height: 44px;
      min-width: 44px;
      padding: 12px 20px;
    }

    /* Better form inputs on mobile */
    #write-answer-input,
    #sentence-input {
      font-size: 16px;
      /* Prevents iOS zoom on focus */
      padding: 12px;
    }

    .options-container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 15px;
      margin-bottom: 30px;
    }

    .option {
      background: #f8f9fa;
      border: 2px solid #e9ecef;
      border-radius: 12px;
      padding: 18px 20px;
      cursor: pointer;
      transition: all 0.2s ease;
      font-size: 1.1rem;
      display: flex;
      align-items: center;
    }

    .option:hover {
      background: #e9ecef;
      border-color: #dee2e6;
    }

    .option.selected {
      background: rgba(67, 97, 238, 0.1);
      border-color: var(--primary);
      color: var(--primary);
      font-weight: 600;
    }

    .option.correct {
      background: rgba(76, 201, 240, 0.1);
      border-color: var(--success);
      color: #1a936f;
    }

    .option.wrong {
      background: rgba(247, 37, 133, 0.1);
      border-color: var(--danger);
      color: #d00000;
    }

    .option-letter {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      height: 30px;
      background: #e9ecef;
      border-radius: 50%;
      margin-right: 15px;
      font-weight: 700;
      flex-shrink: 0;
    }

    .selected .option-letter {
      background: var(--primary);
      color: white;
    }

    .correct .option-letter {
      background: var(--success);
      color: white;
    }

    .wrong .option-letter {
      background: var(--danger);
      color: white;
    }

    .container-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 20px;
    }

    .btn-secondary {
      background: #6c757d;
      box-shadow: 0 4px 15px rgba(108, 117, 125, 0.3);
    }

    .btn-secondary:hover {
      background: #5a6268;
      box-shadow: 0 6px 20px rgba(108, 117, 125, 0.4);
    }

    /* Write Answer Container */
    .write-answer-container {
      margin-top: 30px;
      padding: 25px;
      background: #f8f9fa;
      border-radius: 15px;
      border-left: 5px solid var(--primary);
    }

    .write-answer-title {
      font-size: 1.3rem;
      margin-bottom: 15px;
      color: var(--primary);
    }

    #write-answer-input {
      width: 100%;
      padding: 15px;
      border: 2px solid #dee2e6;
      border-radius: 10px;
      font-size: 1.1rem;
      margin-bottom: 15px;
      resize: vertical;
      min-height: 100px;
    }

    #write-answer-input:focus {
      outline: none;
      border-color: var(--primary);
    }

    /* Vocabulary List Container */
    .vocab-list,
    .states-list,
    .countries-list,
    .railway-list {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 20px;
      margin-top: 20px;
    }

    .vocab-item,
    .state-item,
    .country-item,
    .railway-item {
      background: var(--vocab-bg);
      border-radius: 15px;
      padding: 20px;
      border-left: 5px solid var(--primary);
      transition: transform 0.3s ease;
    }

    .vocab-item:hover,
    .state-item:hover,
    .country-item:hover,
    .railway-item:hover {
      transform: translateY(-5px);
    }

    .vocab-word,
    .state-name,
    .country-name,
    .railway-name {
      font-size: 1.4rem;
      font-weight: 700;
      color: var(--primary);
      margin-bottom: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .vocab-meaning,
    .state-detail,
    .country-detail,
    .railway-detail {
      color: #555;
      margin-bottom: 8px;
      font-style: italic;
    }

    .vocab-hindi {
      color: #d00000;
      font-weight: 600;
      margin-bottom: 10px;
    }

    .vocab-synonyms,
    .vocab-antonyms {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-top: 10px;
    }

    .syn-tag {
      background: rgba(67, 97, 238, 0.1);
      color: var(--primary);
      padding: 4px 10px;
      border-radius: 20px;
      font-size: 0.9rem;
    }

    .ant-tag {
      background: rgba(247, 37, 133, 0.1);
      color: var(--danger);
      padding: 4px 10px;
      border-radius: 20px;
      font-size: 0.9rem;
    }

    /* Abbreviation List */
    .abbr-list {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 15px;
      margin-top: 20px;
    }

    .abbr-item {
      background: #f0f7ff;
      border-radius: 12px;
      padding: 15px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-left: 4px solid #7209b7;
    }

    .abbr-short {
      font-weight: 700;
      font-size: 1.2rem;
      color: #7209b7;
    }

    .abbr-full {
      color: #555;
      text-align: right;
      font-size: 0.95rem;
    }

    /* Sentence Container */
    .sentence-exercise {
      background: var(--sentence-bg);
      border-radius: 15px;
      padding: 25px;
      margin-bottom: 25px;
      border-left: 5px solid #f8961e;
    }

    .sentence-word {
      font-size: 1.5rem;
      font-weight: 700;
      color: #f8961e;
      margin-bottom: 10px;
    }

    .sentence-meaning {
      color: #555;
      margin-bottom: 20px;
      font-style: italic;
    }

    .sentence-input-container {
      margin: 20px 0;
    }

    #sentence-input {
      width: 100%;
      padding: 15px;
      border: 2px solid #f8961e;
      border-radius: 10px;
      font-size: 1.1rem;
      margin-bottom: 15px;
      resize: vertical;
      min-height: 100px;
    }

    .sentence-feedback {
      padding: 15px;
      border-radius: 10px;
      margin-top: 15px;
      display: none;
    }

    .sentence-feedback.correct {
      background: rgba(76, 201, 240, 0.1);
      border: 2px solid var(--success);
      color: #1a936f;
    }

    .sentence-feedback.incorrect {
      background: rgba(247, 37, 133, 0.1);
      border: 2px solid var(--danger);
      color: #d00000;
    }

    .sentence-example {
      margin-top: 15px;
      padding: 15px;
      background: rgba(248, 249, 250, 0.8);
      border-radius: 10px;
      font-style: italic;
    }

    /* Results Container */
    .results-container {
      display: none;
      background: var(--card-bg);
      border-radius: 20px;
      padding: 40px;
      box-shadow: 0 10px 30px var(--shadow);
      text-align: center;
      width: 100%;
      margin-bottom: 30px;
    }

    .results-title {
      font-size: 2.5rem;
      margin-bottom: 20px;
      color: var(--primary);
    }

    .score-container {
      display: flex;
      justify-content: center;
      gap: 40px;
      margin: 30px 0;
      flex-wrap: wrap;
    }

    .score-box {
      background: #f8f9fa;
      border-radius: 15px;
      padding: 25px;
      min-width: 150px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    }

    .score-value {
      font-size: 3.5rem;
      font-weight: 800;
      margin-bottom: 5px;
    }

    .correct-answers .score-value {
      color: #4cc9f0;
    }

    .wrong-answers .score-value {
      color: #f72585;
    }

    .score-label {
      font-size: 1.1rem;
      color: #666;
      font-weight: 600;
    }

    .reward-container {
      background: linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%);
      border-radius: 15px;
      padding: 25px;
      margin: 30px 0;
      box-shadow: 0 8px 25px rgba(255, 154, 158, 0.3);
    }

    .reward-title {
      font-size: 1.8rem;
      color: #d00000;
      margin-bottom: 10px;
    }

    .reward-text {
      font-size: 1.2rem;
      color: #6a040f;
    }

    .answers-review {
      text-align: left;
      margin-top: 30px;
      background: #f8f9fa;
      border-radius: 15px;
      padding: 25px;
    }

    .review-title {
      font-size: 1.5rem;
      margin-bottom: 20px;
      color: var(--primary);
    }

    .review-item {
      padding: 15px;
      border-bottom: 1px solid #e9ecef;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
    }

    .review-item:last-child {
      border-bottom: none;
    }

    .review-question {
      flex: 1;
      margin-right: 20px;
      min-width: 300px;
    }

    .review-answer {
      font-weight: 600;
      min-width: 150px;
    }

    .correct-answer {
      color: #4cc9f0;
    }

    .wrong-answer {
      color: #f72585;
    }

    .back-to-dashboard {
      margin-top: 30px;
    }

    @media (max-width: 768px) {
      h1 {
        font-size: 2.5rem;
      }

      .dashboard {
        grid-template-columns: 1fr;
      }

      .options-container {
        grid-template-columns: 1fr;
      }

      .container-header {
        flex-direction: column;
        align-items: flex-start;
      }

      .quiz-progress {
        margin-top: 10px;
      }

      .score-container {
        gap: 20px;
      }

      .review-item {
        flex-direction: column;
        align-items: flex-start;
      }

      .review-answer {
        margin-top: 10px;
      }

      .vocab-list,
      .abbr-list,
      .states-list,
      .countries-list,
      .railway-list {
        grid-template-columns: 1fr;
      }

      .nav-buttons {
        flex-direction: column;
        align-items: center;
      }

      .nav-btn {
        width: 100%;
        max-width: 300px;
      }
    }

    .pulse {
      animation: pulse 1.5s infinite;
    }

    @keyframes pulse {
      0% {
        transform: scale(1);
      }

      50% {
        transform: scale(1.05);
      }

      100% {
        transform: scale(1);
      }
    }

    .celebrate {
      animation: celebrate 0.5s ease;
    }

    @keyframes celebrate {
      0% {
        transform: scale(0.8);
        opacity: 0;
      }

      100% {
        transform: scale(1);
        opacity: 1;
      }
    }

    .floating {
      animation: floating 3s ease-in-out infinite;
    }

    @keyframes floating {
      0% {
        transform: translateY(0px);
      }

      50% {
        transform: translateY(-10px);
      }

      100% {
        transform: translateY(0px);
      }
    }

    .type-indicator {
      padding: 5px 12px;
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: 600;
      margin-left: 10px;
    }

    .type-mcq {
      background: rgba(67, 97, 238, 0.1);
      color: var(--primary);
    }

    .type-write {
      background: rgba(248, 150, 30, 0.1);
      color: #f8961e;
    }

    .detail-item {
      display: flex;
      margin-bottom: 8px;
    }

    .detail-label {
      font-weight: 600;
      min-width: 120px;
      color: #666;
    }

    .detail-value {
      color: #333;
      flex: 1;
    }
  </style>
</head>

<body>
  <div class="container">
    <header>
      <h1>Knowledge Master Pro</h1>
      <p class="subtitle">Enhance your knowledge with quizzes and learning materials on vocabulary, abbreviations,
        states, countries, and railways</p>
    </header>

    <div class="nav-buttons">
      <button class="nav-btn quiz" id="nav-quiz">
        <i class="fas fa-gamepad"></i> Quiz Dashboard
      </button>
      <button class="nav-btn vocab" id="nav-vocab">
        <i class="fas fa-book"></i> Vocabulary List
      </button>
      <button class="nav-btn abbr" id="nav-abbr">
        <i class="fas fa-ab"></i> Abbreviations List
      </button>
      <button class="nav-btn states" id="nav-states">
        <i class="fas fa-landmark"></i> States & UTs
      </button>
      <button class="nav-btn countries" id="nav-countries">
        <i class="fas fa-globe"></i> Countries
      </button>
      <button class="nav-btn railway" id="nav-railway">
        <i class="fas fa-train"></i> Railway Zones
      </button>
      <button class="nav-btn sentence" id="nav-sentence">
        <i class="fas fa-comment-alt"></i> Sentence Making
      </button>
    </div>

    <!-- Quiz Dashboard -->
    <div class="dashboard" id="dashboard">
      <div class="card synonym">
        <div class="card-header">
          <div class="icon">
            <i class="fas fa-sync-alt"></i>
          </div>
          <div>
            <h2 class="card-title">Synonyms Quiz</h2>
            <p class="card-desc">Find words with similar meanings</p>
          </div>
        </div>
        <p>Test your knowledge of words that have similar meanings. Each question will present a word, and you need to
          select its correct synonym from the options.</p>
        <button class="btn" id="start-synonyms">
          <i class="fas fa-play"></i> Start Synonyms Quiz
        </button>
      </div>

      <div class="card antonym">
        <div class="card-header">
          <div class="icon">
            <i class="fas fa-exchange-alt"></i>
          </div>
          <div>
            <h2 class="card-title">Antonyms Quiz</h2>
            <p class="card-desc">Find words with opposite meanings</p>
          </div>
        </div>
        <p>Challenge yourself with words that have opposite meanings. Each question will present a word, and you need to
          select its correct antonym from the options.</p>
        <button class="btn" id="start-antonyms">
          <i class="fas fa-play"></i> Start Antonyms Quiz
        </button>
      </div>

      <div class="card abbreviation">
        <div class="card-header">
          <div class="icon">
            <i class="fas fa-ab"></i>
          </div>
          <div>
            <h2 class="card-title">Abbreviations Quiz</h2>
            <p class="card-desc">MCQ & Write Full Forms</p>
          </div>
        </div>
        <p>Expand your knowledge of abbreviations with mixed question types - multiple choice and write the full form.
          Test your memory and understanding.</p>
        <button class="btn" id="start-abbreviations">
          <i class="fas fa-play"></i> Start Abbreviations Quiz
        </button>
      </div>

      <div class="card states">
        <div class="card-header">
          <div class="icon">
            <i class="fas fa-landmark"></i>
          </div>
          <div>
            <h2 class="card-title">States & UTs Quiz</h2>
            <p class="card-desc">Test knowledge of Indian states</p>
          </div>
        </div>
        <p>Test your knowledge of Indian states and union territories - capitals, chief ministers, governors, and
          establishment details.</p>
        <button class="btn" id="start-states">
          <i class="fas fa-play"></i> Start States Quiz
        </button>
      </div>

      <div class="card countries">
        <div class="card-header">
          <div class="icon">
            <i class="fas fa-globe"></i>
          </div>
          <div>
            <h2 class="card-title">Countries Quiz</h2>
            <p class="card-desc">Test knowledge of world countries</p>
          </div>
        </div>
        <p>Test your knowledge of world countries - capitals, currencies, heads of state, and continents.</p>
        <button class="btn" id="start-countries">
          <i class="fas fa-play"></i> Start Countries Quiz
        </button>
      </div>

      <div class="card railway">
        <div class="card-header">
          <div class="icon">
            <i class="fas fa-train"></i>
          </div>
          <div>
            <h2 class="card-title">Railway Zones Quiz</h2>
            <p class="card-desc">Test knowledge of Indian Railway zones</p>
          </div>
        </div>
        <p>Test your knowledge of Indian Railway zones - headquarters, divisions, covered states, and establishment
          years.</p>
        <button class="btn" id="start-railway">
          <i class="fas fa-play"></i> Start Railway Quiz
        </button>
      </div>

      <div class="card sentence">
        <div class="card-header">
          <div class="icon">
            <i class="fas fa-comment-alt"></i>
          </div>
          <div>
            <h2 class="card-title">Sentence Making</h2>
            <p class="card-desc">Create sentences with given words</p>
          </div>
        </div>
        <p>Practice using vocabulary words in context. You'll be given a word and need to create a meaningful sentence.
          Get feedback on your sentence construction.</p>
        <button class="btn" id="start-sentence">
          <i class="fas fa-play"></i> Start Sentence Exercise
        </button>
      </div>
    </div>

    <!-- Synonyms/Antonyms Quiz Container -->
    <div class="quiz-container" id="quiz-container">
      <div class="container-header">
        <h2 class="container-title" id="quiz-type">Synonyms Quiz</h2>
        <div class="quiz-progress" id="quiz-progress">Question 1 of 10</div>
      </div>

      <div class="question-container">
        <h3 class="question" id="question">What is a synonym for the word 'Abate'?</h3>
        <div class="options-container" id="options-container">
          <!-- Options will be generated here by JavaScript -->
        </div>
      </div>

      <div class="container-footer">
        <button class="btn btn-secondary" id="back-to-dashboard">
          <i class="fas fa-arrow-left"></i> Back to Dashboard
        </button>
        <button class="btn" id="next-question" disabled>
          Next Question <i class="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>

    <!-- Abbreviations Quiz Container -->
    <div class="quiz-container" id="abbr-quiz-container">
      <div class="container-header">
        <h2 class="container-title">Abbreviations Quiz</h2>
        <div class="quiz-progress" id="abbr-quiz-progress">Question 1 of 10</div>
      </div>

      <div class="question-container">
        <h3 class="question" id="abbr-question">What is the full form of 'AAFI'?</h3>

        <!-- MCQ Questions will show options here -->
        <div class="options-container" id="abbr-options-container">
          <!-- Options will be generated here by JavaScript -->
        </div>

        <!-- Write Answer Section for write-type questions -->
        <div class="write-answer-container" id="write-answer-container" style="display: none;">
          <h4 class="write-answer-title">Write the full form:</h4>
          <textarea id="write-answer-input" placeholder="Type the full form here..."></textarea>
          <button class="btn" id="submit-written-answer">
            <i class="fas fa-check"></i> Submit Answer
          </button>
        </div>
      </div>

      <div class="container-footer">
        <button class="btn btn-secondary" id="abbr-back-to-dashboard">
          <i class="fas fa-arrow-left"></i> Back to Dashboard
        </button>
        <button class="btn" id="abbr-next-question" disabled>
          Next Question <i class="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>

    <!-- Vocabulary List Container -->
    <div class="vocab-container" id="vocab-container">
      <div class="container-header">
        <h2 class="container-title">Vocabulary List (with Hindi Meanings)</h2>
        <div>
          <button class="btn btn-secondary" id="vocab-back-to-dashboard">
            <i class="fas fa-arrow-left"></i> Back
          </button>
        </div>
      </div>

      <div class="vocab-list" id="vocab-list">
        <!-- Vocabulary items will be generated here by JavaScript -->
      </div>
    </div>

    <!-- Abbreviations List Container -->
    <div class="abbr-container" id="abbr-container">
      <div class="container-header">
        <h2 class="container-title">Abbreviations List</h2>
        <div>
          <button class="btn btn-secondary" id="abbr-list-back-to-dashboard">
            <i class="fas fa-arrow-left"></i> Back
          </button>
        </div>
      </div>

      <div class="abbr-list" id="abbr-list">
        <!-- Abbreviation items will be generated here by JavaScript -->
      </div>
    </div>

    <!-- States List Container -->
    <div class="states-container" id="states-container">
      <div class="container-header">
        <h2 class="container-title">Indian States & Union Territories</h2>
        <div>
          <button class="btn btn-secondary" id="states-back-to-dashboard">
            <i class="fas fa-arrow-left"></i> Back
          </button>
        </div>
      </div>

      <div class="states-list" id="states-list">
        <!-- State items will be generated here by JavaScript -->
      </div>
    </div>

    <!-- Countries List Container -->
    <div class="countries-container" id="countries-container">
      <div class="container-header">
        <h2 class="container-title">World Countries</h2>
        <div>
          <button class="btn btn-secondary" id="countries-back-to-dashboard">
            <i class="fas fa-arrow-left"></i> Back
          </button>
        </div>
      </div>

      <div class="countries-list" id="countries-list">
        <!-- Country items will be generated here by JavaScript -->
      </div>
    </div>

    <!-- Railway Zones List Container -->
    <div class="railway-container" id="railway-container">
      <div class="container-header">
        <h2 class="container-title">Indian Railway Zones</h2>
        <div>
          <button class="btn btn-secondary" id="railway-back-to-dashboard">
            <i class="fas fa-arrow-left"></i> Back
          </button>
        </div>
      </div>

      <div class="railway-list" id="railway-list">
        <!-- Railway zone items will be generated here by JavaScript -->
      </div>
    </div>

    <!-- Sentence Making Container -->
    <div class="sentence-container" id="sentence-container">
      <div class="container-header">
        <h2 class="container-title">Sentence Making Exercise</h2>
        <div>
          <button class="btn btn-secondary" id="sentence-back-to-dashboard">
            <i class="fas fa-arrow-left"></i> Back
          </button>
        </div>
      </div>

      <div class="sentence-exercise">
        <div class="sentence-word" id="sentence-word">Education</div>
        <div class="sentence-meaning" id="sentence-meaning">The process of receiving or giving systematic instruction
        </div>

        <div class="sentence-input-container">
          <label for="sentence-input"><strong>Create a sentence using this word:</strong></label>
          <textarea id="sentence-input" placeholder="Type your sentence here..."></textarea>
          <button class="btn" id="check-sentence">
            <i class="fas fa-check-circle"></i> Check Sentence
          </button>
        </div>

        <div class="sentence-feedback" id="sentence-feedback">
          <!-- Feedback will appear here -->
        </div>

        <div class="sentence-example" id="sentence-example">
          <strong>Example:</strong> "Education is the key to personal and societal development."
        </div>

        <div class="container-footer">
          <button class="btn" id="next-sentence-word">
            Next Word <i class="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>

    <!-- Results Container -->
    <div class="results-container" id="results-container">
      <h2 class="results-title">Quiz Results</h2>
      <div class="score-container">
        <div class="score-box correct-answers">
          <div class="score-value" id="correct-score">0</div>
          <div class="score-label">Correct Answers</div>
        </div>
        <div class="score-box wrong-answers">
          <div class="score-value" id="wrong-score">0</div>
          <div class="score-label">Wrong Answers</div>
        </div>
      </div>

      <div class="reward-container" id="reward-container">
        <h3 class="reward-title" id="reward-title">Keep Practicing!</h3>
        <p class="reward-text" id="reward-text">You can do better! Try again to improve your score.</p>
      </div>

      <div class="answers-review">
        <h3 class="review-title">Review Your Answers</h3>
        <div id="answers-review">
          <!-- Review items will be generated here by JavaScript -->
        </div>
      </div>

      <button class="btn back-to-dashboard" id="back-to-dashboard-results">
        <i class="fas fa-home"></i> Back to Dashboard
      </button>
    </div>
  </div>

  <script>
    // Data from the provided JSON - You'll paste your complete data here
    // For now, I'll include sample structure and you'll replace with your full data

    // SAMPLE DATA STRUCTURE - REPLACE WITH YOUR FULL DATA
    const appData = {
      "abbreviations": {
        "AAFI": "Amateur Athletics Federation of India",
        "AAPSO": "Afro-Asian People's Solidarity Organisation",
        "AASU": "All Assam Students Union",
        "ABM": "Anti Ballistic Missiles",
        "ABSU": "All Bodo Students Union",
        "ABVP": "Akhil Bharatiya Vidyarthi Parishad",
        "AC": "Alternating Current; Ashoka Chakra",
        "ACC": "Ancillary Cadet Core",
        "ACCORD": "Action for Community Organisation Rehabilitation and Development",
        "ACU": "Asian Currency Union",
        "ADB": "Asian Development Bank",
        "AERE": "Atomic Energy Research Establishment",
        "AD": "Anno Domini; in the year of Lord Christ",
        "ADC": "Aide-de-Camp",
        "AFTA": "Asia Free Trade Area",
        "AGOC": "Asian Games Organisation Committee",
        "AICC": "All India Congress Committee",
        "AICTE": "All India Council of Technical Education",
        "AIDS": "Acquired Immuno Deficiency Syndrome",
        "AIFE": "All India Football Federation",
        "AIIMS": "All India Institute of Medical Sciences",
        "AIL": "Aeronautics India Limited",
        "AIMPLB": "All India Muslim Personal Law Board",
        "ADF": "Asian Development Fund",
        "AI": "Air India",
        "AG": "Accountant General; Adjutant General",
        "AMC": "Army Medical Corps; Asset Management Companies",
        "AME": "Associate Member of the Institute of Engineers",
        "ANURAG": "Advanced Numerical Research and Analysis Group",
        "APC": "Agricultural Prices Commission",
        "APPEAL": "Asia Pacific Program of Education for All",
        "APEC": "Asia Pacific Economic Cooperation",
        "APSC": "Army Postal Services Core",
        "ASWAC": "Airborne Surveillance Warning and Control",
        "APPU": "Asian Pacific Postal Union",
        "ANC": "African National Congress",
        "AISSF": "All India Sikh Students Federation",
        "AITUC": "All India Trade Union Congress",
        "AJSU": "All Jharkhand Students Union",
        "AJT": "Advanced Jet Trainer",
        "ALH": "Advanced Light Helicopter",
        "ARDR": "Agricultural and Rural Debt Relief",
        "ASC": "Army Service Corps",
        "ASEAN": "Association of South-East Asian Nations",
        "ASLV": "Augmented Satellite Launch Vehicle",
        "ASPAC": "Asian and Pacific Council",
        "ASROCK": "Anti Submarine Rocket Launchers",
        "ASSOCHAM": "Associated Chambers of Commerce and Industry",
        "ATA": "Air Time Authority; Allen Telescope Array",
        "ATM": "Automatic Teller Machine",
        "ATN": "Asian Television Network",
        "ATO": "Air Taxi Operators",
        "ATR": "Action Taken Report",
        "ATS": "Anti Tetanus Serum",
        "AVARD": "Association of Voluntary Agencies for Rural Development",
        "AVC": "Army Veterinary Corps",
        "AWACS": "Airborne Warning and Control System",
        "BARC": "Bhabha Atomic Research Centre",
        "BBC": "British Broadcasting Corporation",
        "BC": "Before Christ",
        "BCG": "Bacillus Calmette Guerin—Anti-Tuberculosis Vaccine",
        "BICP": "Bureau of Industrial Costs and Prices",
        "BKU": "Bharatiya Kisan Union",
        "BOLT": "BSE On-Line Trading System",
        "BRO": "Border Road Organisation",
        "BSE": "Bombay Stock Exchange",
        "BSF": "Border Security Force",
        "BSNL": "Bharat Sanchar Nigam Ltd",
        "BVO": "Brominated Vegetable Oil",
        "BAMS": "Bachelor of Ayurvedic Medicine and Surgery",
        "BCCI": "Board of Control for Cricket in India",
        "BEL": "Bharat Electronics Limited",
        "BENELUX": "Belgium, Netherlands and Luxemburg",
        "BHEL": "Bharat Heavy Electricals Limited",
        "BIFR": "Board of Industrial Finance and Reconstruction",
        "BIMSTEC": "Bangladesh, India, Myanmar, Sri Lanka, Thailand Economic Cooperation",
        "BIS": "Bureau of Indian Standards",
        "BPharma": "Bachelor of Pharmacy",
        "CA": "Chartered Accountant",
        "CABE": "Central Advisory Board of Education",
        "CAG": "Comptroller and Auditor General",
        "CAIR": "Centre for Artificial Intelligence and Robotics",
        "CAPART": "Council for People's Action and Advancement of Rural Technology",
        "CAD": "Command Area Development",
        "CARE": "Cooperative for American Relief Everywhere",
        "CASE": "Commission for Alternative Sources of Energy",
        "CAS": "Chief of Army Staff; Conditional Access System",
        "CAT": "Centre for Advanced Technology",
        "CAZRI": "Central Arid Zone Research Institute",
        "CB": "Citizen Band",
        "CBI": "Central Bureau of Investigation",
        "CBSE": "Central Board of Secondary Education",
        "CCEA": "Cabinet Committee of Economic Affairs",
        "CCS": "Cabinet Committee on Security",
        "CCIC": "Central Cottage Industries Corporation",
        "CBFC": "Central Board of Film Certification",
        "CCPA": "Cabinet Committee on Political Affairs",
        "CD": "Conference on Disarmament",
        "CDAC": "Centre for Development of Advanced Computing",
        "CDMA": "Code Division Multiple Access",
        "CDRI": "Central Drug Research Institute",
        "CDS": "Compulsory Deposit Scheme",
        "CECA": "Comprehensive Economic Cooperation Agreement",
        "CEF": "Commonwealth Equity Fund",
        "CERN": "European Organisation for Nuclear Research",
        "CFC": "Chloro Fluoro Carbon",
        "CFS": "Container Freight Station",
        "CHEER": "Children's Enrichment Experiment through Radio",
        "CHOGM": "Commonwealth Heads of Government Meeting",
        "CIA": "Central Intelligence Agency",
        "CIBIL": "Credit Information Bureau (India) Ltd",
        "CIC": "Chief Information Commissioner",
        "CID": "Criminal Investigation Department",
        "C-in-C": "Commander-in-Chief",
        "CIF": "Cost, Insurance and Freight",
        "CIS": "Commonwealth of Independent States",
        "CISF": "Central Industrial Security Force",
        "CITES": "Convention on International Trade in Endangered Species",
        "CITU": "Centre of Indian Trade Unions",
        "CLASP": "Child Labor Action and Support Project",
        "CLASS": "Computer Literacy and Studies in Schools",
        "CLAT": "Common Law Admission Test",
        "CLAWS": "Centre for Land Warfare Studies",
        "CM": "Chief Minister",
        "CMP": "Common Minimum Programme",
        "CNG": "Compressed Natural Gas",
        "CNN": "Cable News Network",
        "CNS": "Chief of the Naval Staff",
        "CO": "Commanding Officer",
        "COD": "Central Ordnance Depot; Cash on Delivery",
        "COFEPOSA": "Conservation of Foreign Exchange and Prevention of Smuggling Act",
        "CONCORD": "Council for North Indian States for Cooperation and Regional Development",
        "CPCB": "Central Pollution Control Board",
        "CPI": "Communist Party of India",
        "CPI(M)": "Communist Party of India (Marxists)",
        "CPU": "Central Processing Unit",
        "CPO": "Central Passport Organisation",
        "CPRI": "Central Power Research Institute",
        "CR": "Central Railway",
        "CRAC": "Cyber Regulation Advisory Council",
        "CRDI": "Common Rail Direct Injection",
        "CRISIL": "Credit Rating Information Services of India Limited",
        "CRM": "Customer Relationship Management",
        "CRR": "Cash Reserve Ratio",
        "CRPF": "Central Reserve Police Force",
        "CSIR": "Council of Scientific and Industrial Research",
        "CSO": "Central Statistical Organisation",
        "CTBT": "Comprehensive Test Ban Treaty",
        "CTO": "Central Telegraph Office; Central Tractor Organisation",
        "CTS": "Computerized Tomography Scanner",
        "CTT": "Commodities Transaction Tax",
        "CVC": "Central Vigilance Commission",
        "CVRDE": "Combat Vehicles Research and Development Establishment",
        "DA": "Dearness Allowance; Daily Allowance",
        "DAVP": "Directorate of Advertising and Visual Publicity",
        "DC": "Deputy Commissioner; Direct Current",
        "DDT": "Dichloro-Diphenyl Trichloro-ethane",
        "DFDR": "Digital Flight Data Recorder",
        "DIG": "Deputy Inspector General",
        "DIN": "Director Identification Number",
        "D.Lit": "Doctor of Literature",
        "DM": "District Magistrate; Deputy Minister",
        "DMIC": "Delhi-Mumbai Industrial Corridor",
        "DMK": "Dravida Munnetra Kazhagam",
        "DNA": "Deoxyribonucleic Acid",
        "DO": "Demi-official (letter)",
        "DOD": "Department of Ocean Development",
        "DPAP": "Drought Prone Area Program",
        "DPC": "Dabhol Power Company",
        "DPEP": "District Primary Education Programme",
        "DPI": "Director of Public Instruction",
        "DPSA": "Deep Penetration Strike Aircraft",
        "DRAM": "Dynamic Random Access Memory",
        "DRDO": "Defence Research and Development Organisation",
        "DST": "Daylight Saving Time; Department of Science & Technology",
        "DRES": "Department of Renewable Energy Sources",
        "DTH": "Direct to Home (broadcasting)",
        "DVD": "Digital Versatile Disk",
        "EARC": "Economic Administration Reforms Commission",
        "EAS": "Employment Assurance Scheme",
        "EBRD": "European Bank for Reconstruction and Development",
        "ECD": "European Central Bank",
        "ECE": "Economic Commission for Europe",
        "ECG": "Electro Cardio-gram",
        "ECIL": "Electronics Corporation of India Limited",
        "ECO": "Electronics Cooperation Organisation",
        "ECS": "Electronic Clearing Service",
        "ECT": "Electro-Convulsant Therapy",
        "ECU": "European Currency Unit",
        "EDI": "Electronic Data Interchange",
        "EDUSAT": "Education Satellite",
        "EEC": "European Economic Community",
        "EEG": "Electro-encephalography",
        "EET": "Exempt Exempt Taxation",
        "EFA": "Education for All",
        "EFF": "Extended Fund Facility",
        "EHTP": "Electronic Hardware Technology Parks",
        "ELISA": "Enzyme Linked Immuno Sorbent Assay",
        "EMF": "Electromotive Force",
        "EMI": "Equated Monthly Instalment",
        "EMS": "European Monetary System",
        "EMU": "Electric-Multiple Unit; European Economic and Monetary Union",
        "EPABX": "Electronic Private Automatic Branch Exchange",
        "EPROM": "Erasable Programmable Read Only Memory",
        "EPS": "Employee Pension Scheme",
        "EPZ": "Export Processing Zone",
        "ER": "Eastern Railway",
        "ERDA": "Energy Research and Development Administration",
        "ERM": "Exchange Rate Mechanism",
        "ERNET": "Educational and Research Network",
        "ESA": "European Space Agency",
        "ESCAP": "Economic and Social Commission for Asia and the Pacific",
        "ESMA": "Essential Services Maintenance Act",
        "ESOP": "Employee Stock Option Programme",
        "ESPRIT": "European Strategic Programme of Research in Information Technology",
        "EU": "European Union",
        "EVM": "Electronic Voting Machine",
        "EWS": "Economically Weaker Section",
        "EXIM Bank": "Export-Import Bank of India",
        "FAO": "Food and Agriculture Organisation",
        "FBI": "Federal Bureau of Investigation",
        "FBTR": "Fast Breeder Test Reactor",
        "FCI": "Food Corporation of India",
        "FCNR": "Foreign Currency (Non-Resident) Accounts Scheme",
        "FDR": "Flight Data Recorder; Fixed Deposit Receipt",
        "FEMA": "Foreign Exchange Management Act",
        "FERA": "Foreign Exchange Regulations Act",
        "FICCI": "Federation of Indian Chambers of Commerce and Industry",
        "FIEO": "Federation of Indian Export Organisations",
        "FII": "Foreign Institutional Investors",
        "FIPB": "Foreign Investment Promotion Board",
        "FIR": "First Information Report",
        "FLAG": "Fibre Optic Link Around the Globe",
        "FM": "Field Marshal; Frequency Modulated",
        "FPSB": "Financial Planning Standards Boards (India)",
        "FRBM": "Fiscal Responsibility and Budget Management",
        "FRS": "Fellow of the Royal Society",
        "FSSA": "Food Safety and Standards Authority",
        "FTA": "Free Trade Area",
        "FTII": "Films and Television Institute of India",
        "FTP": "File Transfer Protocol",
        "FTZ": "Free Trade Zone",
        "GAGAN": "GPS-aided Geo-augmented Navigation",
        "GAIL": "Gas Authority of India Limited",
        "GAIN": "Global Alliance for Improved Nutrition",
        "GATS": "General Agreement on Trade in Services",
        "GATT": "General Agreement on Tariffs and Trade",
        "GCA": "General Currency Area",
        "GCC": "Gulf Cooperation Council",
        "GCM": "Greatest Common Measure",
        "GEF": "Global Environment Fund",
        "GHQ": "General Headquarters",
        "GIC": "General Insurance Corporation",
        "GIST": "Graphics and Intelligence-based Script Technology",
        "GMPS": "Global Mobile Personal Communications System",
        "GMRT": "Giant Metrewave Radio Telescope",
        "GMT": "Greenwich Mean Time",
        "GNLF": "Gorkha National Liberation Front",
        "GNSS": "Global Navigation Satellite System",
        "GNP": "Gross National Product",
        "GOC": "General Officer Commanding",
        "GPF": "General Provident Fund",
        "GPO": "General Post Office",
        "GPRS": "General Packet Radio Service",
        "GPS": "Global Positioning System",
        "GSI": "Geological Survey of India",
        "GSLV": "Geosynchronous Satellite Launch Vehicle",
        "GSP": "Generalised Special Preferences",
        "GST": "Goods and Service Tax",
        "GSTP": "Global System of Trade Preferences",
        "HAWS": "High Altitude Warfare School",
        "HAC": "Hindustan Aluminium Corporation",
        "HCF": "Highest Common Factor",
        "HDFC": "Housing Development Finance Corporation",
        "HDI": "Human Development Index",
        "HDTV": "High Definition Television",
        "HE": "His/Her Excellency; High Explosive",
        "HIV": "Human Immuno-deficiency Virus",
        "HITS": "Headend In The Sky",
        "HMMWV": "High Mobility Multipurpose-Wheeled Vehicle",
        "HMS": "Hybrid Mail Service",
        "HMT": "Hindustan Machine Tools",
        "HP": "Himachal Pradesh; Horse Power",
        "HTML": "Hyper Text Markup Language",
        "HTTP": "Hypertext Transfer Protocol",
        "HUDCO": "Housing and Urban Development Corporation",
        "HVDC": "High Voltage Direct Current",
        "HYVS": "High Yield Variety Seeds",
        "IAAI": "International Airport Authority of India",
        "IAAS": "Indian Audit and Accounts Service",
        "IADF": "International Agricultural Development Fund",
        "IAEA": "International Atomic Energy Agency",
        "IAF": "Indian Air Force",
        "IAMC": "Indian Army Medical Corps",
        "IARI": "Indian Agricultural Research Institute",
        "IAS": "Indian Administrative Service",
        "IATA": "International Air Transport Association",
        "IATT": "Inland Air Travel Tax",
        "IBRD": "International Bank for Reconstruction and Development",
        "IBEX": "Interstellar Boundary Explorer Mission",
        "ICANN": "Internet Corporation for Assigned Names and Numbers",
        "ICAO": "International Civil Aviation Organisation",
        "ICAR": "Indian Council of Agricultural Research",
        "ICBM": "Inter Continental Ballistic Missile",
        "ICC": "International Cricket Council",
        "ICCR": "Indian Council of Cultural Relations",
        "ICCW": "Indian Council for Child Welfare",
        "ICDS": "Integrated Child Development Service",
        "ICFTU": "International Confederation of Free Trade Unions",
        "ICICI": "Industrial Credit and Investment Corporation of India",
        "ICJ": "International Court of Justice",
        "ICL": "Indian Cricket League",
        "ICMR": "Indian Council of Medical Research",
        "ICPA": "Indian Cricket Players' Association",
        "ICRC": "International Committee of the Red Cross",
        "ICSI": "Institute of Company Secretaries of India",
        "IDA": "International Development Association",
        "IDBI": "Industrial Development Bank of India",
        "IDO": "International Defence Organisation",
        "IDPL": "Indian Drugs and Pharmaceuticals Limited",
        "IDSA": "Institute of Defence Studies and Analysis",
        "IEA": "International Energy Agency",
        "IES": "Indian Economic Service",
        "IEX": "Indian Energy Exchange",
        "IFA": "Indian Football Association",
        "IFCI": "Industrial Finance Corporation of India",
        "IFFI": "International Film Festival of India",
        "IFFCO": "Indian Farmers Fertilizers Cooperative",
        "IFRS": "International Financial Reporting Standards",
        "IFS": "Indian Foreign Service; Indian Forest Service",
        "IFTU": "International Federation of Trade Unions",
        "IFWJ": "Indian Federation of Working Journalists",
        "IGNOU": "Indira Gandhi National Open University",
        "IIPA": "Indian Institute of Public Administration",
        "IIS": "Indian Institute of Science",
        "IISCO": "Indian Iron and Steel Company",
        "IISS": "International Institute of Strategic Studies",
        "IIT": "Indian Institutes of Technology",
        "ILO": "International Labour Organisation",
        "IMA": "Indian Military Academy",
        "IMET": "International Military Education Training Programme",
        "IMF": "International Monetary Fund",
        "IMO": "International Maritime Organisation",
        "IN": "Indian Navy; Intelligent Network",
        "INA": "Indian National Army",
        "INS": "Indian Naval Ship",
        "INSAT": "Indian National Satellite",
        "INTELSAT": "International Telecommunication Satellite",
        "INTERPOL": "International Police Organisation",
        "INTUC": "Indian National Trade Union Congress",
        "IOC": "International Olympic Committee; Indian Oil Corporation",
        "IPC": "Indian Penal Code",
        "IPKF": "Indian Peace Keeping Force",
        "IQ": "Intelligence Quotient",
        "IRBM": "Intermediate Range Ballistic Missile",
        "IRC": "International Red Cross",
        "IRDA": "Insurance Regulatory Development Authority",
        "IRDP": "Integrated Rural Development Programme",
        "ISB": "Indian Standard Bureau",
        "ISM": "Indian School of Mines",
        "ISO": "International Organisation for Standardisation",
        "ISP": "Internet Service Provider",
        "ISRO": "Indian Space Research Organisation",
        "IST": "Indian Standard Time",
        "ITBP": "Indo-Tibet Border Police",
        "ITDC": "Indian Tourism Development Corporation",
        "ITPO": "Indian Trade Promotion Organisation",
        "ITO": "International Trade Organisation",
        "IUCN": "International Union for Conservation of Nature",
        "ITUC": "Indian Trade Union Congress",
        "IAMAI": "Internet and Mobile Association of India",
        "JCO": "Junior Commissioned Officer",
        "JMM": "Jharkhand Mukti Morcha",
        "JNNURM": "Jawaharlal Nehru National Urban Renewal Mission",
        "JPC": "Joint Parliamentary Committee",
        "JPEG": "Joint Photographic Experts Group",
        "JWG": "Joint Working Group",
        "KG": "Kindergarten",
        "Kg": "Kilogramme",
        "KPO": "Knowledge Process Outsourcing",
        "KVIC": "Khadi & Village Industries Corporation",
        "KYC": "Know Your Customer",
        "LAC": "Line of Actual Control",
        "LASER": "Light Amplification by Stimulated Emission of Radiation",
        "LCA": "Light Combat Aircraft",
        "LDC": "Least Developed Countries",
        "LHC": "Large Hadron Collider",
        "LIC": "Life Insurance Corporation of India",
        "LLB": "Bachelor of Law",
        "LLM": "Master of Law",
        "LLP": "Limited Liability Partnership",
        "LMG": "Light Machine Gun",
        "LOC": "Line of Control",
        "LPG": "Liquefied Petroleum Gas",
        "LSD": "Lysergic Acid Diethylamide",
        "LTA": "Light Transport Aircraft",
        "LTTE": "Liberation Tigers of Tamil Eelam",
        "MA": "Master of Arts",
        "MASER": "Microwave Amplification by Stimulated Emission of Radiation",
        "MAT": "Minimum Alternative Tax",
        "MBA": "Master of Business Administration",
        "MBBS": "Bachelor of Medicine and Bachelor of Surgery",
        "MCA": "Master of Computer Applications",
        "MCC": "Melbourne Cricket Club",
        "MCF": "Master Control Facility",
        "MD": "Doctor of Medicine",
        "MEP": "Minimum Export Price",
        "MES": "Military Engineering Service",
        "METSAT": "Meteorological Satellite",
        "MFA": "Multi-Fibre Agreement",
        "MFN": "Most Favoured Nation",
        "MI": "Military Intelligence",
        "MIP": "Moon Impact Probe",
        "MISA": "Maintenance of Internal Security Act",
        "MIT": "Massachusetts Institute of Technology",
        "MLA": "Member of Legislative Assembly",
        "MLC": "Member of Legislative Council",
        "MMS": "Multimedia Messaging Service",
        "MMTC": "Metals and Minerals Trading Corporation of India",
        "MNC": "Multi-national Corporation",
        "MNIC": "Multi-purpose National Identity Card",
        "MODEM": "Modulator-Demodulator",
        "MODVAT": "Modified Value Added Tax",
        "MRI": "Magnetic Resonance Imaging",
        "MRTPC": "Monopolies and Restrictive Trade Practices Commission",
        "MRTS": "Mass Rapid Transit System",
        "MSA": "Maritime Safety Agency",
        "MSCF": "Maritime Security Cooperation Framework",
        "MTCR": "Missile Technology Control Regime",
        "MTO": "Multilateral Trade Organisation",
        "MVC": "Maha Vir Chakra",
        "NAA": "National Airport Authority",
        "NABARD": "National Bank for Agriculture and Rural Development",
        "NACIL": "National Aviation Company of India Ltd",
        "NADA": "National Anti-Doping Agency",
        "NAEP": "National Adult Education Programme",
        "NAFTA": "North America Free Trade Agreement",
        "NAFED": "National Agricultural Cooperative Marketing Federation of India",
        "NAG": "National Air Guard",
        "NAM": "Non-aligned Movement",
        "NAMA": "Non-Agriculture Market Access",
        "NASA": "National Aeronautics and Space Administration",
        "NASDAQ": "National Association of Securities Dealers Automated Quotation",
        "NASSCOM": "National Association of Software & Service Companies",
        "NATA": "National Aptitude Test for Architecture",
        "NATO": "North Atlantic Treaty Organisation",
        "NACO": "National AIDS Control Organisation",
        "NAV": "Net Asset Value",
        "NB": "Nota Bene; note well",
        "NBFC": "Non-Banking Finance Companies",
        "NCA": "Nuclear Command Authority",
        "NCC": "National Cadet Corps",
        "NCCR": "National Council for Civil Rights",
        "NCW": "National Commission for Women",
        "NCEP": "National Committee on Environmental Planning",
        "NCERT": "National Council of Education Research and Training",
        "NCR": "National Capital Region",
        "NDA": "National Defence Academy; National Democratic Alliance",
        "NDDB": "National Dairy Development Board",
        "NDF": "National Defence Fund",
        "NDNC": "National Do Not Call Registry",
        "NDPS": "Narcotic Drugs and Psychotropic Substances Act",
        "NDRF": "National Disaster Response Force",
        "NDTL": "National Dope Testing Laboratory",
        "NeGP": "National e-Governance Plan",
        "NEDB": "North-Eastern Development Bank",
        "NEERI": "National Environmental Engineering Research Institute",
        "NEFA": "North-East Frontier Agency",
        "NEP": "National Education Policy",
        "NEPA": "National Environment Protection Authority",
        "NFDC": "National Film Development Corporation",
        "NFL": "National Fertilizer Limited",
        "NFO": "New Fund Offers",
        "NHDP": "National Highways Development Project",
        "NHRC": "National Human Rights Commission",
        "NIC": "National Informatics Centre / National Industrial Classification",
        "NICO": "New Information and Communication Order",
        "NIDC": "National Industrial Development Corporation",
        "NIMHANS": "National Institute of Mental Health and Neuro-Sciences",
        "NIO": "National Institute of Oceanography",
        "NIS": "National Institute of Sports",
        "NIIT": "National Institute of Information Technology",
        "NIT": "National Institute of Technology",
        "NITIE": "National Institute for Training in Industrial Engineering",
        "NLMA": "National Literacy Mission Authority",
        "NMD": "Nuclear Missile Defence",
        "NMEP": "National Malaria Eradication Programme",
        "NMDC": "National Mineral Development Corporation",
        "NMDS": "National Missile Defence System",
        "NOIDA": "New Okhla Industrial Development Authority",
        "NPC": "National Productivity Council",
        "NPL": "National Physical Laboratory",
        "NPP": "National Population Policy",
        "NPR": "National Population Register",
        "NPT": "Nuclear Non-Proliferation Treaty",
        "NRBI": "National Rural Bank of India",
        "NREGA": "National Rural Employment Guarantee Act",
        "NREP": "National Rural Employment Programme",
        "NRDC": "National Research and Development Corporation",
        "NRI": "Non-Resident Indian",
        "NRR": "National Reproduction Rate",
        "NRSA": "National Remote Sensing Agency",
        "NSA": "National Security Act",
        "NSC": "National Security Council / National Service Corps",
        "NSDL": "National Securities Depository Limited",
        "NSE": "National Stock Exchange",
        "NSR": "National Skills Registry",
        "NSSO": "National Sample Survey Organisation",
        "NTC": "National Textile Corporation",
        "NTPC": "National Thermal Power Corporation",
        "NWDA": "National Water Development Agency",
        "NWRC": "National Water Resources Council",
        "OAS": "Organisation of American States",
        "OAU": "Organisation of African Unity",
        "OBC": "Other Backward Classes",
        "OBU": "Offshore Banking Unit",
        "ODA": "Official Development Assistance",
        "ODF": "Open Document Format",
        "ODS": "Ozone Depletion Substances",
        "OECD": "Organisation for Economic Co-operation and Development",
        "OGL": "Open General Licence",
        "OIC": "Organisation of Islamic Countries",
        "OIGS": "On India Government Service",
        "OIL": "Oil India Limited",
        "OK": "All Correct",
        "OM": "Order of Merit",
        "ONGC": "Oil and Natural Gas Commission",
        "OPEC": "Organisation of Petroleum Exporting Countries",
        "OSCE": "Organisation for Security and Cooperation in Europe",
        "OSD": "Officer on Special Duty",
        "OXML": "Open Extended Marking Language",
        "PAC": "Public Accounts Committee",
        "PACER": "Programme for Acceleration of Commercial Energy Research",
        "PAN": "Permanent Account Number",
        "PATA": "Pacific-Asia Travel Association",
        "PCI": "Press Council of India",
        "PCS": "Public Civil Service; Punjab Civil Service",
        "PhD": "Doctor of Philosophy",
        "PIB": "Press Information Bureau",
        "Pin Code": "Postal Index Number Code",
        "PIO": "Persons of Indian Origin",
        "PLO": "Palestine Liberation Organisation",
        "PLF": "Plant Load Factor",
        "PM": "Prime Minister; Post Meridiem",
        "PMG": "Postmaster General",
        "PN": "Participatory Note",
        "PO": "Post Office; Postal Order",
        "POPs": "Persistent Organic Pollutants",
        "POTA": "Prevention of Terrorism Act",
        "POW": "Prisoner of War",
        "PP": "Public Prosecutor",
        "PRO": "Public Relations Officer",
        "PS": "Post Script",
        "PSC": "Public Service Commission",
        "PSE": "Public Sector Enterprises",
        "PSLV": "Polar Satellite Launch Vehicle",
        "PTA": "Preferential Trade Area",
        "PTI": "Press Trust of India",
        "PTO": "Please Turn Over",
        "PUFA": "Poly Unsaturated Fatty Acids",
        "PVC": "Param Vir Chakra",
        "PVSM": "Param Vishisht Seva Medal",
        "PWD": "Public Works Department",
        "PWG": "People's War Group",
        "QED": "Quod Erat Demonstrandum",
        "QEF": "Quod Erat Faciendum",
        "QEI": "Quod Erat Inveniendum",
        "QMG": "Quarter Master General",
        "QR": "Quantitative Restriction",
        "RADAR": "Radio Angle Direction And Range",
        "RAF": "Rapid Action Force",
        "RAM": "Random Access Memory",
        "RAW": "Research and Analysis Wing",
        "RBI": "Reserve Bank of India",
        "RCC": "Reinforced Concrete Cement",
        "R&D": "Research and Development",
        "RDF": "Rapid Development Force",
        "RDS": "Radio Data Servicing",
        "RDSS": "Radio Determination Satellite Service",
        "RDX": "Research Developed Explosive",
        "REACH": "Rehabilitate, Educate and Support Street Children",
        "RIMC": "Rashtriya Indian Military College",
        "RLO": "Returned Letter Office",
        "RLV": "Reusable Launch Vehicle",
        "RPM": "Revolutions Per Minute",
        "RPO": "Recruitment Process Outsourcing",
        "RRB": "Regional Rural Bank",
        "RRPI": "Rural Retail Price Index",
        "RSS": "Rashtriya Swayamsevak Sangh",
        "RSVP": "Répondez S'il Vous Plaît",
        "RTGS": "Real Time Gross Settlement System",
        "RMS": "Railway Mail Service",
        "RLEGP": "Rural Landless Employment Guarantee Programme",
        "RNA": "Ribonucleic Acid",
        "RTO": "Regional Transport Officer",
        "SAC": "Space Application Centre",
        "SAARC": "South Asian Association for Regional Co-operation",
        "SAFTA": "South Asian Free Trade Area",
        "SAI": "Sports Authority of India",
        "SAIL": "Steel Authority of India Limited",
        "SAPTA": "SAARC Preferential Trading Agreement",
        "SARS": "Severe Acute Respiratory Syndrome",
        "SATNAV": "Satellite Navigation",
        "SAVE": "SAARC Audio Visual Exchange",
        "SC": "Supreme Court; Scheduled Caste",
        "SCI": "Shipping Corporation of India",
        "SCO": "Shanghai Cooperation Organisation",
        "SCOPE": "Standing Conference on Public Enterprises",
        "SCRA": "Special Class Railway Apprentice",
        "SDO": "Sub-Divisional Officer",
        "SDR": "Special Drawing Rights",
        "SEBI": "Securities and Exchange Board of India",
        "SFC": "State Financial Corporation; Strategic Forces Command",
        "SGPC": "Shiromani Gurdwara Prabandhak Committee",
        "SHAR": "Sriharikota Range",
        "SIDBI": "Small Industries Development Bank of India",
        "SIS": "Secret Intelligence Service (UK)",
        "SIT": "Special Investigation Team",
        "SITA": "Suppression of Immoral Traffic in Women and Girls Act",
        "SITE": "Satellite Instructional Television Experiment",
        "SLV": "Satellite Launch Vehicle",
        "SLR": "Statutory Liquidity Ratio",
        "SMS": "Short Messaging Service",
        "SOS": "Save Our Souls",
        "SPCA": "Society for Prevention of Cruelty to Animals",
        "SPG": "Special Protection Group",
        "SPIN": "Software Process Improvement Networks",
        "SPV": "Solar Photo Voltaic",
        "SQUID": "Superconducting Quantum Interference Device",
        "SRE": "Space Capsule Recovery Experiment",
        "SRV": "Submarine Rescue Vessel",
        "SSN": "Social Security Number",
        "STARS": "Satellite Tracking and Ranging Station",
        "START": "Strategic Arms Reduction Talks",
        "STEP": "Science and Technology Entrepreneurship Park",
        "STD": "Subscriber Trunk Dialing",
        "STPI": "Software Technology Parks of India",
        "STT": "Securities Transaction Tax",
        "SWAN": "State-Wide Area Network",
        "SWAPO": "South West African People's Organisation",
        "SWIFT": "Society for Worldwide Interbank Financial Telecommunications",
        "TA": "Travelling Allowance; Territorial Army",
        "TAAI": "Travel Agents Association of India",
        "TACDE": "Tactics and Air Combat Development Establishment",
        "TADA": "Terrorist and Disruptive Activities Act",
        "TAPS": "Tarapur Atomic Power Station",
        "TB": "Tuberculosis",
        "TDC": "Transport Development Council",
        "TDS": "Tax Deduction at Source",
        "TDSAT": "Telecom Dispute Settlement Appellate Tribunal",
        "TELCO": "Tata Engineering and Locomotive Company",
        "TELEX": "Teleprinter Exchange",
        "TERLS": "Thumba Equatorial Rocket Launching Station",
        "TIFR": "Tata Institute of Fundamental Research",
        "TIN": "Tax Information Network",
        "TISCO": "Tata Iron and Steel Company",
        "TMC": "Terrain Mapping Camera",
        "TMO": "Telegraphic Money Order",
        "TNT": "Tri-nitro-toluene",
        "TOEFL": "Test of English as a Foreign Language",
        "TPP": "Twenty-Point Programme",
        "TRAI": "Telecom Regulatory Authority of India",
        "TRIMs": "Trade-Related Investment Measures",
        "TRIPS": "Trade-Related Intellectual Property Rights",
        "TRP": "Television Rating Points",
        "TRYSEM": "Training of Rural Youth for Self Employment",
        "TTE": "Travelling Ticket Examiner",
        "TTF": "Tourism Task Force",
        "TTFI": "Table Tennis Federation of India",
        "TWA": "Trans World Airlines",
        "UAE": "United Arab Emirates",
        "UAV": "Unmanned Aerial Vehicle",
        "UDC": "Upper Division Clerk",
        "UF": "United Front",
        "UFO": "Unidentified Flying Object",
        "UGC": "University Grants Commission",
        "UHT": "Ultra High Temperature",
        "ULFA": "United Liberation Front of Assam",
        "UN": "United Nations",
        "UNASUR": "Union of South American Nations",
        "UNCTAD": "United Nations Conference on Trade and Development",
        "UNDP": "United Nations Development Programme",
        "UNEF": "United Nations Emergency Force",
        "UNEP": "United Nations Environment Programme",
        "UNESCO": "United Nations Educational, Scientific and Cultural Organisation",
        "UNFPA": "United Nations Fund for Population Activities",
        "UNHCR": "United Nations High Commissioner for Refugees",
        "UNHRC": "United Nations Human Rights Commission",
        "UNI": "United News of India",
        "UNICEF": "United Nations International Children’s Emergency Fund",
        "UNIDO": "United Nations Industrial Development Organisation",
        "UNO": "United Nations Organisation",
        "UNRRA": "United Nations Relief and Rehabilitation Administration",
        "UNTAC": "United Nations Transitional Authority for Cambodia",
        "UPA": "United Progressive Alliance",
        "UPS": "Uninterrupted Power Supply",
        "UPSC": "Union Public Service Commission",
        "UPTN": "Universal Personal Telephone Number",
        "USA": "United States of America",
        "USIS": "United States Information Service",
        "USSR": "Union of Soviet Socialist Republics",
        "UTI": "Unit Trust of India",
        "VAT": "Value Added Tax",
        "VC": "Vice-Chancellor; Victoria Cross; Vir Chakra",
        "VDIS": "Voluntary Disclosure of Income Scheme",
        "VHRR": "Very High Resolution Radiometer",
        "VIP": "Very Important Person",
        "VLSI": "Very Large Scale Integration",
        "VOIP": "Voice Over Internet Protocol",
        "VPN": "Virtual Private Network",
        "VPP": "Value Payable Post",
        "VRS": "Voluntary Retirement Scheme",
        "VSAT": "Very Small Aperture Terminal",
        "VSNL": "Videsh Sanchar Nigam Limited",
        "VSSC": "Vikram Sarabhai Space Centre",
        "WADA": "World Anti-Doping Agency",
        "WAP": "Wireless Application Protocol",
        "WDF": "Wasteland Development Force",
        "WEF": "World Economic Forum",
        "WFP": "World Food Programme",
        "WFTU": "World Federation of Trade Unions",
        "WIPO": "World Intellectual Property Organisation",
        "WMO": "World Meteorological Organisation",
        "WPI": "Wholesale Price Index",
        "WTO": "World Trade Organisation",
        "WWW": "World Wide Web",
        "XML": "eXtensible Markup Language",
        "YMCA": "Young Men's Christian Association",
        "YWCA": "Young Women's Christian Association",
        "ZBB": "Zero Based Budgeting",
        "ZSI": "Zoological Survey of India",
        "ZOPFAN": "Zone of Peace, Freedom and Neutrality",
        "ZIP": "Zone Improvement Plan"
      },
      "words": [
        {
          "word": "Abate",
          "meaning": "To reduce in intensity or degree",
          "hindi_meaning": "कम होना, घटना",
          "synonyms": [
            "Moderate",
            "Decrease"
          ],
          "antonyms": [
            "Aggravate"
          ]
        },
        {
          "word": "Abash",
          "meaning": "To cause embarrassment or confusion",
          "hindi_meaning": "लज्जित करना, शर्मिंदा करना",
          "synonyms": [
            "Disconcert",
            "Rattle"
          ],
          "antonyms": [
            "Uphold",
            "Discompose"
          ]
        },
        {
          "word": "Abject",
          "meaning": "Extremely unpleasant or degraded",
          "hindi_meaning": "नीच, दयनीय",
          "synonyms": [
            "Despicable",
            "Servile"
          ],
          "antonyms": [
            "Commendable",
            "Praiseworthy"
          ]
        },
        {
          "word": "Abjure",
          "meaning": "To formally reject or renounce",
          "hindi_meaning": "त्यागना, छोड़ना",
          "synonyms": [
            "Forsake",
            "Renounce"
          ],
          "antonyms": [
            "Approve",
            "Sanction"
          ]
        },
        {
          "word": "Abolish",
          "meaning": "To formally put an end to something",
          "hindi_meaning": "समाप्त करना, रद्द करना",
          "synonyms": [
            "Abrogate",
            "Annul"
          ],
          "antonyms": [
            "Setup",
            "Establish"
          ]
        },
        {
          "word": "Abortive",
          "meaning": "Unsuccessful or fruitless",
          "hindi_meaning": "असफल, निष्फल",
          "synonyms": [
            "Vain",
            "Unproductive"
          ],
          "antonyms": [
            "Productive"
          ]
        },
        {
          "word": "Absolve",
          "meaning": "To free from blame or guilt",
          "hindi_meaning": "दोषमुक्त करना, क्षमा करना",
          "synonyms": [
            "Pardon",
            "Forgive"
          ],
          "antonyms": [
            "Compel",
            "Accuse"
          ]
        },
        {
          "word": "Abound",
          "meaning": "To exist in large numbers or amounts",
          "hindi_meaning": "प्रचुर मात्रा में होना",
          "synonyms": [
            "Flourish",
            "Proliferate"
          ],
          "antonyms": [
            "Deficient",
            "Destitute"
          ]
        },
        {
          "word": "Accord",
          "meaning": "Agreement or harmony between people",
          "hindi_meaning": "सहमति, समझौता",
          "synonyms": [
            "Agreement",
            "Harmony"
          ],
          "antonyms": [
            "Discord"
          ]
        },
        {
          "word": "Acrimony",
          "meaning": "Bitterness or sharpness in speech",
          "hindi_meaning": "कटुता, तीखापन",
          "synonyms": [
            "Harshness",
            "Bitterness"
          ],
          "antonyms": [
            "Courtesy",
            "Benevolence"
          ]
        },
        {
          "word": "Acumen",
          "meaning": "The ability to make good judgments",
          "hindi_meaning": "कुशाग्र बुद्धि, समझ",
          "synonyms": [
            "Awareness",
            "Brilliance"
          ],
          "antonyms": [
            "Stupidity",
            "Ignorance"
          ]
        },
        {
          "word": "Adamant",
          "meaning": "Refusing to change one's mind",
          "hindi_meaning": "अटल, हठी",
          "synonyms": [
            "Stubborn",
            "Inflexible"
          ],
          "antonyms": [
            "Flexible",
            "Soft"
          ]
        },
        {
          "word": "Adhere",
          "meaning": "To stick fast or follow closely",
          "hindi_meaning": "पालन करना, चिपकना",
          "synonyms": [
            "Comply",
            "Observe"
          ],
          "antonyms": [
            "Condemn",
            "Disjoin"
          ]
        },
        {
          "word": "Adherent",
          "meaning": "A supporter or follower",
          "hindi_meaning": "समर्थक, अनुयायी",
          "synonyms": [
            "Follower",
            "Disciple"
          ],
          "antonyms": [
            "Rival",
            "Adversary"
          ]
        },
        {
          "word": "Adjunct",
          "meaning": "Something joined or added",
          "hindi_meaning": "सहायक, अनुपूरक",
          "synonyms": [
            "Joined",
            "Added"
          ],
          "antonyms": [
            "Separated",
            "Subtracted"
          ]
        },
        {
          "word": "Admonish",
          "meaning": "To warn or reprimand firmly",
          "hindi_meaning": "चेतावनी देना, डाँटना",
          "synonyms": [
            "Counsel",
            "Reprove"
          ],
          "antonyms": [
            "Approve",
            "Applaud"
          ]
        },
        {
          "word": "Adversity",
          "meaning": "Difficult or unfortunate circumstances",
          "hindi_meaning": "विपत्ति, विषम परिस्थिति",
          "synonyms": [
            "Misfortune",
            "Calamity"
          ],
          "antonyms": [
            "Prosperity",
            "Fortune"
          ]
        },
        {
          "word": "Alien",
          "meaning": "Belonging to a foreign country",
          "hindi_meaning": "विदेशी, पराया",
          "synonyms": [
            "Foreigner",
            "Outsider"
          ],
          "antonyms": [
            "Native",
            "Resident"
          ]
        },
        {
          "word": "Allay",
          "meaning": "To diminish or put to rest",
          "hindi_meaning": "शांत करना, कम करना",
          "synonyms": [
            "Pacify",
            "Soothe"
          ],
          "antonyms": [
            "Aggravate",
            "Excite"
          ]
        },
        {
          "word": "Alleviate",
          "meaning": "To make suffering less severe",
          "hindi_meaning": "कम करना, शांत करना",
          "synonyms": [
            "Abate",
            "Relieve"
          ],
          "antonyms": [
            "Aggravate",
            "Enhance"
          ]
        },
        {
          "word": "Allure",
          "meaning": "The quality of being powerfully attractive",
          "hindi_meaning": "आकर्षण, लुभावनापन",
          "synonyms": [
            "Entice",
            "Fascinate"
          ],
          "antonyms": [
            "Repulse",
            "Repel"
          ]
        },
        {
          "word": "Amplify",
          "meaning": "To increase in size or extent",
          "hindi_meaning": "बढ़ाना, विस्तृत करना",
          "synonyms": [
            "Augment",
            "Deepen"
          ],
          "antonyms": [
            "Lessen",
            "Contract"
          ]
        },
        {
          "word": "Arraign",
          "meaning": "To call before a court to answer charges",
          "hindi_meaning": "अदालत में पेश करना, आरोप लगाना",
          "synonyms": [
            "Incriminate",
            "Indict"
          ],
          "antonyms": [
            "Exculpate",
            "Pardon"
          ]
        },
        {
          "word": "Ascend",
          "meaning": "To go up or climb",
          "hindi_meaning": "चढ़ना, ऊपर जाना",
          "synonyms": [
            "Climb",
            "Escalate"
          ],
          "antonyms": [
            "Descend",
            "Decline"
          ]
        },
        {
          "word": "Audacity",
          "meaning": "Bold or daring confidence",
          "hindi_meaning": "साहस, दुस्साहस",
          "synonyms": [
            "Boldness",
            "Courage"
          ],
          "antonyms": [
            "Mildness",
            "Cowardice"
          ]
        },
        {
          "word": "Authentic",
          "meaning": "Genuine or real",
          "hindi_meaning": "वास्तविक, प्रामाणिक",
          "synonyms": [
            "Accurate",
            "Credible"
          ],
          "antonyms": [
            "Fictitious",
            "Unreal"
          ]
        },
        {
          "word": "Awkward",
          "meaning": "Lacking grace or skill",
          "hindi_meaning": "अनाड़ी, भद्दा",
          "synonyms": [
            "Rude",
            "Blundering"
          ],
          "antonyms": [
            "Adroit",
            "Clever"
          ]
        },
        {
          "word": "Axiom",
          "meaning": "A statement accepted as true",
          "hindi_meaning": "स्वयंसिद्ध सत्य, सिद्धांत",
          "synonyms": [
            "Adage",
            "Truism"
          ],
          "antonyms": [
            "Absurdity",
            "Blunder"
          ]
        },
        {
          "word": "Baffle",
          "meaning": "To confuse or perplex",
          "hindi_meaning": "चकरा देना, उलझाना",
          "synonyms": [
            "Astound",
            "Faze"
          ],
          "antonyms": [
            "Facilitate",
            "Clarify"
          ]
        },
        {
          "word": "Barbarous",
          "meaning": "Extremely cruel or uncivilized",
          "hindi_meaning": "निर्दयी, बर्बर",
          "synonyms": [
            "Frustrate",
            "Perplex"
          ],
          "antonyms": [
            "Civilized"
          ]
        },
        {
          "word": "Baroque",
          "meaning": "Highly ornate and elaborate",
          "hindi_meaning": "अलंकृत, भव्य",
          "synonyms": [
            "Florid",
            "Gilt"
          ],
          "antonyms": [
            "Plain",
            "Unadorned"
          ]
        },
        {
          "word": "Barren",
          "meaning": "Unable to produce vegetation",
          "hindi_meaning": "बंजर, अनुर्वर",
          "synonyms": [
            "Desolate",
            "Sterile"
          ],
          "antonyms": [
            "Damp",
            "Fertile"
          ]
        },
        {
          "word": "Barrier",
          "meaning": "An obstacle that prevents movement",
          "hindi_meaning": "बाधा, रुकावट",
          "synonyms": [
            "Barricade",
            "Obstacle"
          ],
          "antonyms": [
            "Link",
            "Assistance"
          ]
        },
        {
          "word": "Base",
          "meaning": "Without moral principles",
          "hindi_meaning": "नीच, नीचतापूर्ण",
          "synonyms": [
            "Vulgar",
            "Coarse"
          ],
          "antonyms": [
            "Summit",
            "Noble"
          ]
        },
        {
          "word": "Batty",
          "meaning": "Mad or eccentric",
          "hindi_meaning": "सनकी, पागल",
          "synonyms": [
            "Insane",
            "Silly"
          ],
          "antonyms": [
            "Sane"
          ]
        },
        {
          "word": "Bawdy",
          "meaning": "Dealing with sexual matters humorously",
          "hindi_meaning": "अश्लील, गंदा",
          "synonyms": [
            "Erotic",
            "Coarse"
          ],
          "antonyms": [
            "Decent",
            "Moral"
          ]
        },
        {
          "word": "Befogged",
          "meaning": "Unable to think clearly",
          "hindi_meaning": "भ्रमित, धुंधला",
          "synonyms": [
            "Becloud",
            "Dim"
          ],
          "antonyms": [
            "Clear headed",
            "Uncloud"
          ]
        },
        {
          "word": "Benevolent",
          "meaning": "Well meaning and kindly",
          "hindi_meaning": "परोपकारी, दयालु",
          "synonyms": [
            "Benign",
            "Generous"
          ],
          "antonyms": [
            "Malevolent",
            "Miserly"
          ]
        },
        {
          "word": "Benign",
          "meaning": "Gentle and kindly",
          "hindi_meaning": "दयालु, कृपालु",
          "synonyms": [
            "Favorable",
            "Friendly"
          ],
          "antonyms": [
            "Malignant",
            "Cruel"
          ]
        },
        {
          "word": "Bewitching",
          "meaning": "Enchanting or delightful",
          "hindi_meaning": "मोहक, जादुई",
          "synonyms": [
            "Alluring",
            "Charming"
          ],
          "antonyms": [
            "Repulsive",
            "Repugnant"
          ]
        },
        {
          "word": "Bind",
          "meaning": "A difficult situation",
          "hindi_meaning": "मुश्किल स्थिति, फंसना",
          "synonyms": [
            "Predicament"
          ],
          "antonyms": [
            "Release"
          ]
        },
        {
          "word": "Bleak",
          "meaning": "Lacking warmth or cheerfulness",
          "hindi_meaning": "निराशाजनक, उदास",
          "synonyms": [
            "Grim",
            "Austere"
          ],
          "antonyms": [
            "Bright",
            "Pleasant"
          ]
        },
        {
          "word": "Blunt",
          "meaning": "Having a worn-down edge or point",
          "hindi_meaning": "कुंद, सीधा",
          "synonyms": [
            "Dull",
            "Insensitive"
          ],
          "antonyms": [
            "Keen",
            "Sharp"
          ]
        },
        {
          "word": "Boisterous",
          "meaning": "Noisy and energetic",
          "hindi_meaning": "उधमी, शोरगुल करने वाला",
          "synonyms": [
            "Clamorous",
            "Rowdy"
          ],
          "antonyms": [
            "Placid",
            "Calm"
          ]
        },
        {
          "word": "Bold",
          "meaning": "Showing courage or confidence",
          "hindi_meaning": "साहसी, निडर",
          "synonyms": [
            "Adventurous"
          ],
          "antonyms": [
            "Timid"
          ]
        },
        {
          "word": "Brittle",
          "meaning": "Hard but liable to break easily",
          "hindi_meaning": "भंगुर, नाजुक",
          "synonyms": [
            "Breakable",
            "Crisp"
          ],
          "antonyms": [
            "Tough",
            "Enduring"
          ]
        },
        {
          "word": "Bustle",
          "meaning": "Excited activity and movement",
          "hindi_meaning": "हलचल, चहल-पहल",
          "synonyms": [
            "Commotion",
            "Tumult"
          ],
          "antonyms": [
            "Slowness",
            "Quiet"
          ]
        },
        {
          "word": "Busy",
          "meaning": "Having much to do",
          "hindi_meaning": "व्यस्त",
          "synonyms": [
            "Active",
            "Engaged"
          ],
          "antonyms": [
            "Idle",
            "Lazy"
          ]
        },
        {
          "word": "Calculating",
          "meaning": "Acting with careful planning",
          "hindi_meaning": "चालाक, स्वार्थी",
          "synonyms": [
            "Canny",
            "Devious"
          ],
          "antonyms": [
            "Artless",
            "Honest"
          ]
        },
        {
          "word": "Calamity",
          "meaning": "A disaster or great misfortune",
          "hindi_meaning": "आपदा, विपत्ति",
          "synonyms": [
            "Adversity",
            "Misfortune"
          ],
          "antonyms": [
            "Fortune"
          ]
        },
        {
          "word": "Callous",
          "meaning": "Showing no concern for others",
          "hindi_meaning": "निर्दयी, संवेदनाहीन",
          "synonyms": [
            "Obdurate",
            "Unfeeling"
          ],
          "antonyms": [
            "Compassionate",
            "Tender"
          ]
        },
        {
          "word": "Calm",
          "meaning": "Peaceful and tranquil",
          "hindi_meaning": "शांत",
          "synonyms": [
            "Harmonious",
            "Unruffled"
          ],
          "antonyms": [
            "Stormy",
            "Turbulent"
          ]
        },
        {
          "word": "Calumny",
          "meaning": "Making false statements to damage reputation",
          "hindi_meaning": "अपवाद, निंदा",
          "synonyms": [
            "Defamation",
            "Aspersion"
          ],
          "antonyms": [
            "Commendation",
            "Praise"
          ]
        },
        {
          "word": "Camouflage",
          "meaning": "To hide or disguise",
          "hindi_meaning": "छद्मावरण, भेष बदलना",
          "synonyms": [
            "Cloak",
            "Disguise"
          ],
          "antonyms": [
            "Reveal"
          ]
        },
        {
          "word": "Candid",
          "meaning": "Truthful and straightforward",
          "hindi_meaning": "स्पष्टवादी, खरा",
          "synonyms": [
            "Blunt",
            "Bluff"
          ],
          "antonyms": [
            "Evasive"
          ]
        },
        {
          "word": "Capable",
          "meaning": "Having the ability to do something",
          "hindi_meaning": "सक्षम, योग्य",
          "synonyms": [
            "Competent",
            "Able"
          ],
          "antonyms": [
            "Incompetent",
            "Inept"
          ]
        },
        {
          "word": "Captivate",
          "meaning": "To attract and hold interest",
          "hindi_meaning": "मोह लेना, मंत्रमुग्ध करना",
          "synonyms": [
            "Charm",
            "Fascinate"
          ],
          "antonyms": [
            "Disillusion",
            "Offend"
          ]
        },
        {
          "word": "Captivity",
          "meaning": "The condition of being imprisoned",
          "hindi_meaning": "कैद, बंदी स्थिति",
          "synonyms": [
            "Imprisonment",
            "Confinement"
          ],
          "antonyms": [
            "Freedom",
            "Liberty"
          ]
        },
        {
          "word": "Carnal",
          "meaning": "Relating to physical desires",
          "hindi_meaning": "शारीरिक, भौतिक",
          "synonyms": [
            "Earthly",
            "Fleshly"
          ],
          "antonyms": [
            "Spiritual"
          ]
        },
        {
          "word": "Catholic",
          "meaning": "Including a wide variety",
          "hindi_meaning": "विशाल, सार्वभौमिक",
          "synonyms": [
            "Generic",
            "Liberal"
          ],
          "antonyms": [
            "Narrow-minded"
          ]
        },
        {
          "word": "Cease",
          "meaning": "To bring to an end",
          "hindi_meaning": "रोकना, बंद करना",
          "synonyms": [
            "Terminate",
            "Desist"
          ],
          "antonyms": [
            "Begin",
            "Originate"
          ]
        },
        {
          "word": "Celebrated",
          "meaning": "Greatly admired or famous",
          "hindi_meaning": "प्रसिद्ध, मशहूर",
          "synonyms": [
            "Acclaimed",
            "Lionized"
          ],
          "antonyms": [
            "Unknown",
            "Inglorious"
          ]
        },
        {
          "word": "Cement",
          "meaning": "To bind or unite firmly",
          "hindi_meaning": "जोड़ना, मजबूत करना",
          "synonyms": [
            "Plaster",
            "Mortar"
          ],
          "antonyms": [
            "Disintegrate"
          ]
        },
        {
          "word": "Censure",
          "meaning": "To express severe disapproval",
          "hindi_meaning": "निंदा करना, भर्त्सना करना",
          "synonyms": [
            "Rebuke",
            "Reprimand"
          ],
          "antonyms": [
            "Praise",
            "Acceptance"
          ]
        },
        {
          "word": "Chaste",
          "meaning": "Abstaining from sexual activity",
          "hindi_meaning": "पवित्र, शुद्ध",
          "synonyms": [
            "Virtuous",
            "Pure"
          ],
          "antonyms": [
            "Sullied",
            "Lustful"
          ]
        },
        {
          "word": "Chastise",
          "meaning": "To rebuke or reprimand severely",
          "hindi_meaning": "दंड देना, डाँटना",
          "synonyms": [
            "Punish",
            "Admonish"
          ],
          "antonyms": [
            "Cheer",
            "Encourage"
          ]
        },
        {
          "word": "Cheap",
          "meaning": "Low in price",
          "hindi_meaning": "सस्ता",
          "synonyms": [
            "Competitive",
            "Inexpensive"
          ],
          "antonyms": [
            "Dear",
            "Unreasonable"
          ]
        },
        {
          "word": "Clandestine",
          "meaning": "Kept secret or hidden",
          "hindi_meaning": "गुप्त, छिपा हुआ",
          "synonyms": [
            "Covert",
            "Furtive"
          ],
          "antonyms": [
            "Open",
            "Legal"
          ]
        },
        {
          "word": "Classic",
          "meaning": "Judged over time to be excellent",
          "hindi_meaning": "श्रेष्ठ, उत्कृष्ट",
          "synonyms": [
            "Simple",
            "Typical"
          ],
          "antonyms": [
            "Romantic",
            "Unusual"
          ]
        },
        {
          "word": "Coarse",
          "meaning": "Rough or crude in texture",
          "hindi_meaning": "मोटा, खुरदरा",
          "synonyms": [
            "Bawdy",
            "Boorish"
          ],
          "antonyms": [
            "Fine",
            "Chaste"
          ]
        },
        {
          "word": "Comic",
          "meaning": "Causing laughter or amusement",
          "hindi_meaning": "हास्यजनक, मजाकिया",
          "synonyms": [
            "Clown",
            "Jester"
          ],
          "antonyms": [
            "Tragic",
            "Tragedian"
          ]
        },
        {
          "word": "Compact",
          "meaning": "Closely packed together",
          "hindi_meaning": "संक्षिप्त, सुसंहत",
          "synonyms": [
            "Bunched",
            "Thick"
          ],
          "antonyms": [
            "Loose",
            "Diffuse"
          ]
        },
        {
          "word": "Compassion",
          "meaning": "Sympathetic concern for others",
          "hindi_meaning": "दया, करुणा",
          "synonyms": [
            "Kindness",
            "Sympathy"
          ],
          "antonyms": [
            "Cruelty",
            "Barbarity"
          ]
        },
        {
          "word": "Comprise",
          "meaning": "To consist of or be made up of",
          "hindi_meaning": "शामिल होना, बने होना",
          "synonyms": [
            "Include",
            "Contain"
          ],
          "antonyms": [
            "Reject",
            "Lack"
          ]
        },
        {
          "word": "Compress",
          "meaning": "To squeeze or press together",
          "hindi_meaning": "संपीडित करना, दबाना",
          "synonyms": [
            "Abbreviate",
            "Shrink"
          ],
          "antonyms": [
            "Amplify",
            "Expand"
          ]
        },
        {
          "word": "Concede",
          "meaning": "To admit something is true",
          "hindi_meaning": "स्वीकार करना, मान लेना",
          "synonyms": [
            "Yield",
            "Permit"
          ],
          "antonyms": [
            "Deny",
            "Reject"
          ]
        },
        {
          "word": "Conceit",
          "meaning": "Excessive pride in oneself",
          "hindi_meaning": "घमंड, अहंकार",
          "synonyms": [
            "Egotism",
            "Immodesty"
          ],
          "antonyms": [
            "Modesty"
          ]
        },
        {
          "word": "Concord",
          "meaning": "Agreement or harmony",
          "hindi_meaning": "सामंजस्य, एकता",
          "synonyms": [
            "Agreement",
            "Accord"
          ],
          "antonyms": [
            "Discord"
          ]
        },
        {
          "word": "Concur",
          "meaning": "To agree or be of the same opinion",
          "hindi_meaning": "सहमत होना",
          "synonyms": [
            "Approve",
            "Agree"
          ],
          "antonyms": [
            "Differ",
            "Disagree"
          ]
        },
        {
          "word": "Condemn",
          "meaning": "To express complete disapproval",
          "hindi_meaning": "निंदा करना, दोषी ठहराना",
          "synonyms": [
            "Castigate",
            "Chide"
          ],
          "antonyms": [
            "Approve",
            "Praise"
          ]
        },
        {
          "word": "Confident",
          "meaning": "Feeling self-assured",
          "hindi_meaning": "आत्मविश्वासी",
          "synonyms": [
            "Bold",
            "Undaunted"
          ],
          "antonyms": [
            "Diffident",
            "Cowardly"
          ]
        },
        {
          "word": "Consequence",
          "meaning": "A result or effect",
          "hindi_meaning": "परिणाम, नतीजा",
          "synonyms": [
            "Effect",
            "Outcome"
          ],
          "antonyms": [
            "Origin",
            "Start"
          ]
        },
        {
          "word": "Consent",
          "meaning": "To give permission for something",
          "hindi_meaning": "सहमति, अनुमति",
          "synonyms": [
            "Agree",
            "Permit"
          ],
          "antonyms": [
            "Object",
            "Disagree"
          ]
        },
        {
          "word": "Consolidate",
          "meaning": "To make stronger or more solid",
          "hindi_meaning": "मजबूत करना, एकत्र करना",
          "synonyms": [
            "Solidify",
            "Strengthen"
          ],
          "antonyms": [
            "Separate",
            "Weaken"
          ]
        },
        {
          "word": "Conspicuous",
          "meaning": "Standing out and easily noticed",
          "hindi_meaning": "सुस्पष्ट, स्पष्ट",
          "synonyms": [
            "Prominent",
            "Obvious"
          ],
          "antonyms": [
            "Concealed",
            "Hidden"
          ]
        },
        {
          "word": "Contempt",
          "meaning": "Feeling that something is worthless",
          "hindi_meaning": "तिरस्कार, अवमानना",
          "synonyms": [
            "Scorn",
            "Disregard"
          ],
          "antonyms": [
            "Regard",
            "Praise"
          ]
        },
        {
          "word": "Contradict",
          "meaning": "To deny the truth of a statement",
          "hindi_meaning": "खंडन करना, विरोध करना",
          "synonyms": [
            "Deny",
            "Oppose"
          ],
          "antonyms": [
            "Approve",
            "Confirm"
          ]
        },
        {
          "word": "Contrary",
          "meaning": "Opposite in nature or direction",
          "hindi_meaning": "विपरीत, उल्टा",
          "synonyms": [
            "Dissimilar",
            "Conflicting"
          ],
          "antonyms": [
            "Similar",
            "Alike"
          ]
        },
        {
          "word": "Courtesy",
          "meaning": "Polite behavior",
          "hindi_meaning": "शिष्टाचार, भद्रता",
          "synonyms": [
            "Generosity",
            "Reverence"
          ],
          "antonyms": [
            "Disdain",
            "Rudeness"
          ]
        },
        {
          "word": "Creation",
          "meaning": "The action of bringing something into existence",
          "hindi_meaning": "सृष्टि, निर्माण",
          "synonyms": [
            "Formation",
            "Foundation"
          ],
          "antonyms": [
            "Destruction"
          ]
        },
        {
          "word": "Cunning",
          "meaning": "Skilled at achieving goals by deceit",
          "hindi_meaning": "चालाक, धूर्त",
          "synonyms": [
            "Acute",
            "Smart"
          ],
          "antonyms": [
            "Naive",
            "Coarse"
          ]
        },
        {
          "word": "Decay",
          "meaning": "To rot or decompose",
          "hindi_meaning": "सड़न, क्षय",
          "synonyms": [
            "Collapse",
            "Decompose"
          ],
          "antonyms": [
            "Flourish",
            "Progress"
          ]
        },
        {
          "word": "Deceit",
          "meaning": "The action of deceiving someone",
          "hindi_meaning": "छल, धोखा",
          "synonyms": [
            "Deception",
            "Artifice"
          ],
          "antonyms": [
            "Veracity",
            "Sincerity"
          ]
        },
        {
          "word": "Decipher",
          "meaning": "To convert code into normal language",
          "hindi_meaning": "गूढ़लिपि पढ़ना, समझना",
          "synonyms": [
            "Interpret",
            "Reveal"
          ],
          "antonyms": [
            "Misinterpret",
            "Distort"
          ]
        },
        {
          "word": "Defray",
          "meaning": "To provide money to pay costs",
          "hindi_meaning": "व्यय वहन करना",
          "synonyms": [
            "Spend",
            "Pay"
          ],
          "antonyms": [
            "Disclaim",
            "Repudiate"
          ]
        },
        {
          "word": "Defile",
          "meaning": "To damage the purity of something",
          "hindi_meaning": "अपवित्र करना, दूषित करना",
          "synonyms": [
            "Contaminate",
            "Pollute"
          ],
          "antonyms": [
            "Purify",
            "Sanctity"
          ]
        },
        {
          "word": "Deliberate",
          "meaning": "Done consciously and intentionally",
          "hindi_meaning": "जानबूझकर, सोच-समझकर",
          "synonyms": [
            "Cautious",
            "Intentional"
          ],
          "antonyms": [
            "Rash",
            "Sudden"
          ]
        },
        {
          "word": "Demolish",
          "meaning": "To destroy completely",
          "hindi_meaning": "तोड़ना, ध्वस्त करना",
          "synonyms": [
            "Ruin",
            "Devastate"
          ],
          "antonyms": [
            "Repair",
            "Construct"
          ]
        },
        {
          "word": "Dense",
          "meaning": "Closely compacted together",
          "hindi_meaning": "घना, सघन",
          "synonyms": [
            "Opaque",
            "Piled"
          ],
          "antonyms": [
            "Sparse",
            "Brainy"
          ]
        },
        {
          "word": "Denounce",
          "meaning": "To publicly declare wrong or evil",
          "hindi_meaning": "निंदा करना, आरोप लगाना",
          "synonyms": [
            "Blame",
            "Boycott"
          ],
          "antonyms": [
            "Defend"
          ]
        },
        {
          "word": "Deprive",
          "meaning": "To prevent from having something",
          "hindi_meaning": "वंचित करना, छीनना",
          "synonyms": [
            "Despoil",
            "Divest"
          ],
          "antonyms": [
            "Restore",
            "Renew"
          ]
        },
        {
          "word": "Deride",
          "meaning": "To express contempt for",
          "hindi_meaning": "उपहास करना, मज़ाक उड़ाना",
          "synonyms": [
            "Mock",
            "Taunt"
          ],
          "antonyms": [
            "Inspire",
            "Encourage"
          ]
        },
        {
          "word": "Derogatory",
          "meaning": "Showing a critical attitude",
          "hindi_meaning": "अपमानजनक, निंदात्मक",
          "synonyms": [
            "Sarcastic",
            "Critical"
          ],
          "antonyms": [
            "Laudatory",
            "Appreciative"
          ]
        },
        {
          "word": "Despair",
          "meaning": "Complete loss of hope",
          "hindi_meaning": "निराशा, हताशा",
          "synonyms": [
            "Depression",
            "Misery"
          ],
          "antonyms": [
            "Contentment",
            "Hope"
          ]
        },
        {
          "word": "Destructive",
          "meaning": "Causing great damage",
          "hindi_meaning": "विनाशकारी, नाशक",
          "synonyms": [
            "Catastrophic",
            "Pernicious"
          ],
          "antonyms": [
            "Creative",
            "Constructive"
          ]
        },
        {
          "word": "Disdain",
          "meaning": "The feeling that something is unworthy",
          "hindi_meaning": "तिरस्कार, घृणा",
          "synonyms": [
            "Detest",
            "Despise"
          ],
          "antonyms": [
            "Approve",
            "Praise"
          ]
        },
        {
          "word": "Dissuade",
          "meaning": "To persuade not to do something",
          "hindi_meaning": "रोकना, मना करना",
          "synonyms": [
            "Remonstrate",
            "Counsel"
          ],
          "antonyms": [
            "Incite",
            "Persuade"
          ]
        },
        {
          "word": "Docile",
          "meaning": "Ready to accept control",
          "hindi_meaning": "विनम्र, सीखने योग्य",
          "synonyms": [
            "Pliable",
            "Pliant"
          ],
          "antonyms": [
            "Headstrong",
            "Obstinate"
          ]
        },
        {
          "word": "Dwarf",
          "meaning": "Unusually small in size",
          "hindi_meaning": "बौना, छोटा",
          "synonyms": [
            "Diminutive",
            "Petite"
          ],
          "antonyms": [
            "Huge",
            "Giant"
          ]
        },
        {
          "word": "Eager",
          "meaning": "Strongly wanting to do something",
          "hindi_meaning": "उत्सुक, इच्छुक",
          "synonyms": [
            "Keen",
            "Acquisitive"
          ],
          "antonyms": [
            "Indifferent",
            "Apathetic"
          ]
        },
        {
          "word": "Eccentric",
          "meaning": "Unconventional and unusual",
          "hindi_meaning": "सनकी, विचित्र",
          "synonyms": [
            "Strange",
            "Abnormal"
          ],
          "antonyms": [
            "Natural",
            "Conventional"
          ]
        },
        {
          "word": "Eclipse",
          "meaning": "To obscure or block",
          "hindi_meaning": "ग्रहण, अस्पष्ट करना",
          "synonyms": [
            "Diminution",
            "Dimming"
          ],
          "antonyms": [
            "Shine",
            "Eclipse"
          ]
        },
        {
          "word": "Ecstasy",
          "meaning": "An overwhelming feeling of joy",
          "hindi_meaning": "परमानंद, आनंद",
          "synonyms": [
            "Delight",
            "Exultation"
          ],
          "antonyms": [
            "Despair",
            "Calamity"
          ]
        },
        {
          "word": "Efface",
          "meaning": "To erase or remove",
          "hindi_meaning": "मिटा देना, हटाना",
          "synonyms": [
            "Destroy",
            "Obliterate"
          ],
          "antonyms": [
            "Retain",
            "Maintain"
          ]
        },
        {
          "word": "Eloquence",
          "meaning": "Fluent or persuasive speaking",
          "hindi_meaning": "वाक्पटुता, वाक्चातुर्य",
          "synonyms": [
            "Expression",
            "Fluency"
          ],
          "antonyms": [
            "Halting",
            "Stammering"
          ]
        },
        {
          "word": "Encumbrance",
          "meaning": "A burden or impediment",
          "hindi_meaning": "बोझ, रुकावट",
          "synonyms": [
            "Hindrance",
            "Obstacle"
          ],
          "antonyms": [
            "Incentive",
            "Stimulant"
          ]
        },
        {
          "word": "Endeavour",
          "meaning": "To try hard to achieve something",
          "hindi_meaning": "प्रयास करना, कोशिश करना",
          "synonyms": [
            "Undertake",
            "Aspire"
          ],
          "antonyms": [
            "Cease",
            "Quit"
          ]
        },
        {
          "word": "Enormous",
          "meaning": "Very large in size",
          "hindi_meaning": "विशाल, भारी",
          "synonyms": [
            "Colossal",
            "Mammoth"
          ],
          "antonyms": [
            "Diminutive",
            "Negligible"
          ]
        },
        {
          "word": "Epitome",
          "meaning": "A perfect example of something",
          "hindi_meaning": "सार, प्रतिमान",
          "synonyms": [
            "Precise",
            "Example"
          ],
          "antonyms": [
            "Increment",
            "Expansion"
          ]
        },
        {
          "word": "Equivocal",
          "meaning": "Open to more than one interpretation",
          "hindi_meaning": "संदिग्ध, अस्पष्ट",
          "synonyms": [
            "Uncertain",
            "Hazy"
          ],
          "antonyms": [
            "Obvious",
            "Lucid"
          ]
        },
        {
          "word": "Eradicate",
          "meaning": "To destroy completely",
          "hindi_meaning": "जड़ से मिटा देना, उन्मूलन करना",
          "synonyms": [
            "Destroy",
            "Exterminate"
          ],
          "antonyms": [
            "Secure",
            "Plant"
          ]
        },
        {
          "word": "Fabricate",
          "meaning": "To construct or manufacture",
          "hindi_meaning": "गढ़ना, निर्माण करना",
          "synonyms": [
            "Construct",
            "Produce"
          ],
          "antonyms": [
            "Destroy",
            "Dismantle"
          ]
        },
        {
          "word": "Fallacy",
          "meaning": "A mistaken belief",
          "hindi_meaning": "भ्रम, तर्कदोष",
          "synonyms": [
            "Delusion",
            "Mistake"
          ],
          "antonyms": [
            "Veracity",
            "Truth"
          ]
        },
        {
          "word": "Falter",
          "meaning": "To lose strength or momentum",
          "hindi_meaning": "डगमगाना, लड़खड़ाना",
          "synonyms": [
            "Stumble",
            "Demur"
          ],
          "antonyms": [
            "Persist",
            "Endure"
          ]
        },
        {
          "word": "Fanatical",
          "meaning": "Filled with excessive enthusiasm",
          "hindi_meaning": "कट्टर, उन्मादी",
          "synonyms": [
            "Narrow-minded",
            "Biased"
          ],
          "antonyms": [
            "Liberal",
            "Tolerant"
          ]
        },
        {
          "word": "Feeble",
          "meaning": "Lacking physical strength",
          "hindi_meaning": "कमजोर, निर्बल",
          "synonyms": [
            "Weak",
            "Frail"
          ],
          "antonyms": [
            "Strong",
            "Robust"
          ]
        },
        {
          "word": "Ferocious",
          "meaning": "Savagely fierce or violent",
          "hindi_meaning": "भयंकर, क्रूर",
          "synonyms": [
            "Cruel",
            "Fierce"
          ],
          "antonyms": [
            "Gentle",
            "Sympathetic"
          ]
        },
        {
          "word": "Feud",
          "meaning": "A prolonged quarrel",
          "hindi_meaning": "झगड़ा, वैर",
          "synonyms": [
            "Strife",
            "Quarrel"
          ],
          "antonyms": [
            "Harmony",
            "Fraternity"
          ]
        },
        {
          "word": "Fluctuate",
          "meaning": "To rise and fall irregularly",
          "hindi_meaning": "उतार-चढ़ाव होना",
          "synonyms": [
            "Deflect",
            "Vacillate"
          ],
          "antonyms": [
            "Stabilize",
            "Resolve"
          ]
        },
        {
          "word": "Forsake",
          "meaning": "To abandon or leave",
          "hindi_meaning": "त्याग देना, छोड़ देना",
          "synonyms": [
            "Desert",
            "Renounce"
          ],
          "antonyms": [
            "Hold",
            "Maintain"
          ]
        },
        {
          "word": "Fragile",
          "meaning": "Easily broken or damaged",
          "hindi_meaning": "नाजुक, भंगुर",
          "synonyms": [
            "Weak",
            "Infirm"
          ],
          "antonyms": [
            "Enduring",
            "Tough"
          ]
        },
        {
          "word": "Frantic",
          "meaning": "Distraught with fear or anxiety",
          "hindi_meaning": "उन्मत्त, बेकाबू",
          "synonyms": [
            "Violent",
            "Agitated"
          ],
          "antonyms": [
            "Subdued",
            "Gentle"
          ]
        },
        {
          "word": "Frivolous",
          "meaning": "Not having serious purpose",
          "hindi_meaning": "तुच्छ, ओछा",
          "synonyms": [
            "Petty",
            "Worthless"
          ],
          "antonyms": [
            "Solemn",
            "Significant"
          ]
        },
        {
          "word": "Frugality",
          "meaning": "The quality of being economical",
          "hindi_meaning": "मितव्ययिता, किफ़ायत",
          "synonyms": [
            "Economy",
            "Providence"
          ],
          "antonyms": [
            "Lavishness",
            "Extravagance"
          ]
        },
        {
          "word": "Gather",
          "meaning": "To come together or assemble",
          "hindi_meaning": "इकट्ठा होना, जमा होना",
          "synonyms": [
            "Converge",
            "huddle"
          ],
          "antonyms": [
            "Disperse",
            "Dissemble"
          ]
        },
        {
          "word": "Gorgeous",
          "meaning": "Beautiful and very attractive",
          "hindi_meaning": "भव्य, शानदार",
          "synonyms": [
            "Magnificent",
            "Dazzling"
          ],
          "antonyms": [
            "Dull",
            "Unpretentious"
          ]
        },
        {
          "word": "Glut",
          "meaning": "To supply or fill to excess",
          "hindi_meaning": "भरमार, अधिकता",
          "synonyms": [
            "Stuff",
            "Satiate"
          ],
          "antonyms": [
            "Starve",
            "Abstain"
          ]
        },
        {
          "word": "Grisly",
          "meaning": "Causing horror or disgust",
          "hindi_meaning": "भयानक, डरावना",
          "synonyms": [
            "Disgusting",
            "Atrocious"
          ],
          "antonyms": [
            "Pleasing",
            "Attractive"
          ]
        },
        {
          "word": "Gracious",
          "meaning": "Courteous, kind, and pleasant",
          "hindi_meaning": "कृपालु, दयालु",
          "synonyms": [
            "Courteous",
            "Beneficent"
          ],
          "antonyms": [
            "Rude",
            "Unforgiving"
          ]
        },
        {
          "word": "Guile",
          "meaning": "Sly or cunning intelligence",
          "hindi_meaning": "धोखा, छल",
          "synonyms": [
            "Cunning",
            "Deceit"
          ],
          "antonyms": [
            "Honesty",
            "Frankness"
          ]
        },
        {
          "word": "Grudge",
          "meaning": "A persistent feeling of ill will",
          "hindi_meaning": "द्वेष, वैर",
          "synonyms": [
            "Hatred",
            "Aversion"
          ],
          "antonyms": [
            "Benevolence",
            "Affection"
          ]
        },
        {
          "word": "Genuine",
          "meaning": "Truly what it is said to be",
          "hindi_meaning": "वास्तविक, असली",
          "synonyms": [
            "Absolute",
            "Factual"
          ],
          "antonyms": [
            "Spurious"
          ]
        },
        {
          "word": "Generosity",
          "meaning": "The quality of being kind and giving",
          "hindi_meaning": "उदारता, दानशीलता",
          "synonyms": [
            "Altruism",
            "Bounty"
          ],
          "antonyms": [
            "Stinginess",
            "Greed"
          ]
        },
        {
          "word": "Glory",
          "meaning": "High renown or honor",
          "hindi_meaning": "गौरव, यश",
          "synonyms": [
            "Dignity",
            "Renown"
          ],
          "antonyms": [
            "Shame",
            "Disgrace"
          ]
        },
        {
          "word": "Gloomy",
          "meaning": "Dark or poorly lit; causing sadness",
          "hindi_meaning": "उदास, निराशाजनक",
          "synonyms": [
            "Bleak",
            "Cloudy"
          ],
          "antonyms": [
            "Gay",
            "Bright"
          ]
        },
        {
          "word": "Harass",
          "meaning": "To subject to aggressive pressure",
          "hindi_meaning": "परेशान करना, तंग करना",
          "synonyms": [
            "Irritate",
            "Molest"
          ],
          "antonyms": [
            "Assist",
            "Comfort"
          ]
        },
        {
          "word": "Hamper",
          "meaning": "To hinder or impede movement",
          "hindi_meaning": "बाधा डालना, रोकना",
          "synonyms": [
            "Retard",
            "Prevent"
          ],
          "antonyms": [
            "Promote",
            "Facilitate"
          ]
        },
        {
          "word": "Hazard",
          "meaning": "A danger or risk",
          "hindi_meaning": "खतरा, जोखिम",
          "synonyms": [
            "Peril",
            "Danger"
          ],
          "antonyms": [
            "Conviction",
            "Security"
          ]
        },
        {
          "word": "Hapless",
          "meaning": "Unfortunate or unlucky",
          "hindi_meaning": "अभागा, बदकिस्मत",
          "synonyms": [
            "Unfortunate",
            "Ill-fated"
          ],
          "antonyms": [
            "Fortunate",
            "Lucky"
          ]
        },
        {
          "word": "Haughty",
          "meaning": "Arrogantly superior and disdainful",
          "hindi_meaning": "घमंडी, अभिमानी",
          "synonyms": [
            "Arrogant",
            "Pompous"
          ],
          "antonyms": [
            "Humble",
            "Submissive"
          ]
        },
        {
          "word": "Hideous",
          "meaning": "Extremely ugly or unpleasant",
          "hindi_meaning": "भद्दा, वीभत्स",
          "synonyms": [
            "Frightful",
            "Shocking"
          ],
          "antonyms": [
            "Attractive",
            "Alluring"
          ]
        },
        {
          "word": "Heretic",
          "meaning": "One who holds unorthodox opinions",
          "hindi_meaning": "विधर्मी, नास्तिक",
          "synonyms": [
            "Non-conformist",
            "Secularist"
          ],
          "antonyms": [
            "Conformable",
            "Religious"
          ]
        },
        {
          "word": "Harmony",
          "meaning": "Agreement or peaceful arrangement",
          "hindi_meaning": "सामंजस्य, मेल",
          "synonyms": [
            "Conformity",
            "Amicability"
          ],
          "antonyms": [
            "Discord",
            "Discord"
          ]
        },
        {
          "word": "Hamstrung",
          "meaning": "To severely restrict or disable",
          "hindi_meaning": "अशक्त करना, लंगड़ा करना",
          "synonyms": [
            "Cripple",
            "Debilitate"
          ],
          "antonyms": [
            "Strengthen",
            "Encourage"
          ]
        },
        {
          "word": "Honor",
          "meaning": "High respect or great esteem",
          "hindi_meaning": "सम्मान, प्रतिष्ठा",
          "synonyms": [
            "Adoration",
            "Reverence"
          ],
          "antonyms": [
            "Denunciation",
            "Shame"
          ]
        },
        {
          "word": "Hasty",
          "meaning": "Done with excessive speed",
          "hindi_meaning": "जल्दबाज़ी, हड़बड़ी",
          "synonyms": [
            "Abrupt",
            "Impetuous"
          ],
          "antonyms": [
            "Leisurely",
            "Cautious"
          ]
        },
        {
          "word": "Humility",
          "meaning": "A modest view of one's own importance",
          "hindi_meaning": "विनम्रता, नम्रता",
          "synonyms": [
            "Resignation",
            "Fawning"
          ],
          "antonyms": [
            "Boldness",
            "Pride"
          ]
        },
        {
          "word": "Humble",
          "meaning": "Having a modest opinion of oneself",
          "hindi_meaning": "विनम्र",
          "synonyms": [
            "Meek",
            "Timid"
          ],
          "antonyms": [
            "Proud",
            "Assertive"
          ]
        },
        {
          "word": "Immaculate",
          "meaning": "Perfectly clean or free from flaws",
          "hindi_meaning": "निर्मल, बेदाग",
          "synonyms": [
            "Unsullied",
            "Spotless"
          ],
          "antonyms": [
            "Defiled",
            "Tarnished"
          ]
        },
        {
          "word": "Immense",
          "meaning": "Extremely large or great",
          "hindi_meaning": "अपार, विशाल",
          "synonyms": [
            "Huge",
            "Enormous"
          ],
          "antonyms": [
            "Puny",
            "Insignificant"
          ]
        },
        {
          "word": "Immerse",
          "meaning": "To dip or submerge in liquid",
          "hindi_meaning": "डुबाना, तल्लीन करना",
          "synonyms": [
            "Submerge",
            "Involve"
          ],
          "antonyms": [
            "Emerge",
            "Uncover"
          ]
        },
        {
          "word": "Imminent",
          "meaning": "About to happen",
          "hindi_meaning": "आसन्न, निकट",
          "synonyms": [
            "Impending",
            "Brewing"
          ],
          "antonyms": [
            "Distant",
            "Receding"
          ]
        },
        {
          "word": "Immunity",
          "meaning": "Protection from something",
          "hindi_meaning": "प्रतिरक्षा, छूट",
          "synonyms": [
            "Prerogative",
            "Privilege"
          ],
          "antonyms": [
            "Blame",
            "Censure"
          ]
        },
        {
          "word": "Impair",
          "meaning": "To weaken or damage",
          "hindi_meaning": "कमजोर करना, हानि पहुँचाना",
          "synonyms": [
            "Diminish",
            "Deteriorate"
          ],
          "antonyms": [
            "Restore",
            "Revive"
          ]
        },
        {
          "word": "Impartial",
          "meaning": "Treating all equally; fair",
          "hindi_meaning": "निष्पक्ष, अपक्षपाती",
          "synonyms": [
            "Just",
            "Unbiased"
          ],
          "antonyms": [
            "Prejudiced",
            "Biased"
          ]
        },
        {
          "word": "Impediment",
          "meaning": "A hindrance or obstruction",
          "hindi_meaning": "बाधा, रुकावट",
          "synonyms": [
            "Hurdle",
            "Obstruction"
          ],
          "antonyms": [
            "Assistant",
            "Concurrence"
          ]
        },
        {
          "word": "Impenitent",
          "meaning": "Not feeling remorse",
          "hindi_meaning": "अनुतापी, पश्चातापरहित",
          "synonyms": [
            "Uncontrite",
            "Obdurate"
          ],
          "antonyms": [
            "Repentant"
          ]
        },
        {
          "word": "Impious",
          "meaning": "Showing lack of respect for God",
          "hindi_meaning": "अधर्मी, नास्तिक",
          "synonyms": [
            "Irreligious",
            "Unholy"
          ],
          "antonyms": [
            "Pious",
            "Devout"
          ]
        },
        {
          "word": "Impulsive",
          "meaning": "Acting without forethought",
          "hindi_meaning": "अविवेकी, आवेगशील",
          "synonyms": [
            "Flaky",
            "Impetuous"
          ],
          "antonyms": [
            "Cautious",
            "Deliberate"
          ]
        },
        {
          "word": "Impute",
          "meaning": "To attribute or ascribe",
          "hindi_meaning": "आरोप लगाना, अभियोग लगाना",
          "synonyms": [
            "Attribute",
            "Ascribe"
          ],
          "antonyms": [
            "Exculpate",
            "Support"
          ]
        },
        {
          "word": "Inclination",
          "meaning": "A tendency or preference",
          "hindi_meaning": "झुकाव, प्रवृत्ति",
          "synonyms": [
            "Disposition",
            "Affection"
          ],
          "antonyms": [
            "Indifference",
            "Disinclination"
          ]
        },
        {
          "word": "Incompetent",
          "meaning": "Not having necessary skills",
          "hindi_meaning": "अक्षम, अयोग्य",
          "synonyms": [
            "Inefficient",
            "Unskilled"
          ],
          "antonyms": [
            "Dexterous",
            "Skilled"
          ]
        },
        {
          "word": "Incongruous",
          "meaning": "Not in harmony or keeping with",
          "hindi_meaning": "असंगत, बेतुका",
          "synonyms": [
            "Inappropriate",
            "Absurd"
          ],
          "antonyms": [
            "Compatible",
            "Harmonious"
          ]
        },
        {
          "word": "Indifferent",
          "meaning": "Having no particular interest",
          "hindi_meaning": "उदासीन, लापरवाह",
          "synonyms": [
            "Equitable",
            "Haughty"
          ],
          "antonyms": [
            "Partial",
            "Biased"
          ]
        },
        {
          "word": "Indigent",
          "meaning": "Poor or needy",
          "hindi_meaning": "गरीब, दरिद्र",
          "synonyms": [
            "Destitute",
            "Impoverished"
          ],
          "antonyms": [
            "Rich",
            "Affluent"
          ]
        },
        {
          "word": "Inevitable",
          "meaning": "Certain to happen; unavoidable",
          "hindi_meaning": "अनिवार्य, अपरिहार्य",
          "synonyms": [
            "Unavoidable",
            "Ascertained"
          ],
          "antonyms": [
            "Unlikely",
            "Doubtful"
          ]
        },
        {
          "word": "Infernal",
          "meaning": "Relating to hell; diabolical",
          "hindi_meaning": "नारकीय, शैतानी",
          "synonyms": [
            "Damned",
            "Accursed"
          ],
          "antonyms": [
            "Heavenly"
          ]
        },
        {
          "word": "Infringe",
          "meaning": "To violate or break a rule",
          "hindi_meaning": "उल्लंघन करना, भंग करना",
          "synonyms": [
            "Violate",
            "Encroach"
          ],
          "antonyms": [
            "Comply",
            "Concur"
          ]
        },
        {
          "word": "Ingenuous",
          "meaning": "Innocent and unsuspecting",
          "hindi_meaning": "सीधा-सादा, भोला",
          "synonyms": [
            "Undisguised",
            "Naive"
          ],
          "antonyms": [
            "Wily",
            "Craftly"
          ]
        },
        {
          "word": "Insinuate",
          "meaning": "To suggest indirectly",
          "hindi_meaning": "इशारा करना, संकेत करना",
          "synonyms": [
            "Allude",
            "Hint"
          ],
          "antonyms": [
            "Conceal",
            "Camouflage"
          ]
        },
        {
          "word": "Insipid",
          "meaning": "Lacking flavor or interest",
          "hindi_meaning": "फीका, नीरस",
          "synonyms": [
            "Tedious",
            "Prosaic"
          ],
          "antonyms": [
            "Pleasing",
            "Appetizing"
          ]
        },
        {
          "word": "Insolvent",
          "meaning": "Unable to pay debts",
          "hindi_meaning": "दिवालिया, शोधन अक्षम",
          "synonyms": [
            "Indigent",
            "Destitute"
          ],
          "antonyms": [
            "Wealthy",
            "Solvent"
          ]
        },
        {
          "word": "Instill",
          "meaning": "To gradually introduce an idea",
          "hindi_meaning": "बैठाना, अंतर्निहित करना",
          "synonyms": [
            "Inculcate",
            "Inject"
          ],
          "antonyms": [
            "Eradicate",
            "Extract"
          ]
        },
        {
          "word": "Interesting",
          "meaning": "Arousing curiosity or attention",
          "hindi_meaning": "दिलचस्प, रोचक",
          "synonyms": [
            "Enchanting",
            "Riveting"
          ],
          "antonyms": [
            "Dull",
            "Uninteresting"
          ]
        },
        {
          "word": "Intricate",
          "meaning": "Very complicated or detailed",
          "hindi_meaning": "जटिल, पेचीदा",
          "synonyms": [
            "Tangled",
            "Complicated"
          ],
          "antonyms": [
            "Regulated",
            "Orderly"
          ]
        },
        {
          "word": "Intrigue",
          "meaning": "A secret plan or scheme",
          "hindi_meaning": "षड्यंत्र, साजिश",
          "synonyms": [
            "Scheme",
            "Conspiracy"
          ],
          "antonyms": [
            "Candor",
            "Sincerity"
          ]
        },
        {
          "word": "Intrinsic",
          "meaning": "Belonging naturally; essential",
          "hindi_meaning": "आंतरिक, मूलभूत",
          "synonyms": [
            "Genuine",
            "Fundamental"
          ],
          "antonyms": [
            "Extraneous",
            "Incidental"
          ]
        },
        {
          "word": "Invective",
          "meaning": "Insulting or abusive language",
          "hindi_meaning": "गाली-गलौज, अपशब्द",
          "synonyms": [
            "Accusation",
            "Censure"
          ],
          "antonyms": [
            "Approval",
            "Acclamation"
          ]
        },
        {
          "word": "Invincible",
          "meaning": "Too powerful to be defeated",
          "hindi_meaning": "अजेय, अदम्य",
          "synonyms": [
            "Unconquerable",
            "Impregnable"
          ],
          "antonyms": [
            "Effeminate",
            "Languid"
          ]
        },
        {
          "word": "Irrepressible",
          "meaning": "Not able to be controlled",
          "hindi_meaning": "अदम्य, अवश नियंत्रित",
          "synonyms": [
            "Irresistible",
            "Unconfined"
          ],
          "antonyms": [
            "Composed",
            "Hesitant"
          ]
        },
        {
          "word": "Jaded",
          "meaning": "Tired or bored from overexposure",
          "hindi_meaning": "थका हुआ, उकता हुआ",
          "synonyms": [
            "Tired",
            "Exhausted"
          ],
          "antonyms": [
            "Renewed",
            "Recreated"
          ]
        },
        {
          "word": "Jejune",
          "meaning": "Naive or simplistic; dull",
          "hindi_meaning": "नीरस, साधारण",
          "synonyms": [
            "Dull",
            "Boring"
          ],
          "antonyms": [
            "Interesting",
            "Exciting"
          ]
        },
        {
          "word": "Jovial",
          "meaning": "Cheerful and friendly",
          "hindi_meaning": "हंसमुख, प्रसन्न",
          "synonyms": [
            "Frolicsome",
            "Cheerful"
          ],
          "antonyms": [
            "Solemn",
            "Morose"
          ]
        },
        {
          "word": "Jubilant",
          "meaning": "Feeling great happiness",
          "hindi_meaning": "आनंदित, उल्लसित",
          "synonyms": [
            "Rejoicing",
            "Triumphant"
          ],
          "antonyms": [
            "Melancholy",
            "Depressing"
          ]
        },
        {
          "word": "Judicious",
          "meaning": "Having good judgment",
          "hindi_meaning": "विवेकपूर्ण, समझदार",
          "synonyms": [
            "Thoughtful",
            "Prudent"
          ],
          "antonyms": [
            "Irrational",
            "Foolish"
          ]
        },
        {
          "word": "Just",
          "meaning": "Based on what is morally right",
          "hindi_meaning": "न्यायसंगत, उचित",
          "synonyms": [
            "Honest",
            "Impartial"
          ],
          "antonyms": [
            "Unequal",
            "Unfair"
          ]
        },
        {
          "word": "Justify",
          "meaning": "To show something to be right",
          "hindi_meaning": "न्यायोचित ठहराना, सही साबित करना",
          "synonyms": [
            "Defend",
            "Exculpate"
          ],
          "antonyms": [
            "Impute",
            "Arraign"
          ]
        },
        {
          "word": "Juvenile",
          "meaning": "Relating to young people",
          "hindi_meaning": "किशोर, युवा",
          "synonyms": [
            "Young",
            "Tender"
          ],
          "antonyms": [
            "Dotage",
            "Antiquated"
          ]
        },
        {
          "word": "Keen",
          "meaning": "Having a sharp edge or intellect",
          "hindi_meaning": "उत्सुक, तीक्ष्ण",
          "synonyms": [
            "Sharp",
            "Poignant"
          ],
          "antonyms": [
            "Vapid",
            "Insipid"
          ]
        },
        {
          "word": "Kindred",
          "meaning": "One's family and relations",
          "hindi_meaning": "स्वजन, संबंधी",
          "synonyms": [
            "Relation",
            "Species"
          ],
          "antonyms": [
            "Unrelated",
            "Dissimilar"
          ]
        },
        {
          "word": "Knave",
          "meaning": "A dishonest person",
          "hindi_meaning": "धूर्त, दुष्ट",
          "synonyms": [
            "Dishonest",
            "Scoundrel"
          ],
          "antonyms": [
            "Paragon",
            "Innocent"
          ]
        },
        {
          "word": "Knell",
          "meaning": "The sound of a bell tolled for death",
          "hindi_meaning": "मृत्यु घंटा, अंत की घंटी",
          "synonyms": [
            "Death knell",
            "Last blow"
          ],
          "antonyms": [
            "Reconstruction",
            "Rediscovery"
          ]
        },
        {
          "word": "Knotty",
          "meaning": "Extremely difficult or complex",
          "hindi_meaning": "उलझा हुआ, कठिन",
          "synonyms": [
            "Complicated",
            "Difficult"
          ],
          "antonyms": [
            "Simple",
            "Manageable"
          ]
        },
        {
          "word": "Languid",
          "meaning": "Lacking energy or vitality",
          "hindi_meaning": "सुस्त, निस्तेज",
          "synonyms": [
            "Sluggish",
            "Apathetic"
          ],
          "antonyms": [
            "Energetic",
            "Spirited"
          ]
        },
        {
          "word": "Lavish",
          "meaning": "Sumptuously rich or luxurious",
          "hindi_meaning": "फिजूलखर्च, प्रचुर",
          "synonyms": [
            "Abundant",
            "Excessive"
          ],
          "antonyms": [
            "Scarce",
            "Deficient"
          ]
        },
        {
          "word": "Lax",
          "meaning": "Not strict or severe",
          "hindi_meaning": "ढीला, लापरवाह",
          "synonyms": [
            "Slack",
            "Careless"
          ],
          "antonyms": [
            "Firm",
            "Reliable"
          ]
        },
        {
          "word": "Lenient",
          "meaning": "More merciful than expected",
          "hindi_meaning": "उदार, दयालु",
          "synonyms": [
            "Compassionate",
            "Merciful"
          ],
          "antonyms": [
            "Cruel",
            "Severe"
          ]
        },
        {
          "word": "Liable",
          "meaning": "Responsible by law",
          "hindi_meaning": "उत्तरदायी, जिम्मेदार",
          "synonyms": [
            "Accountable",
            "Bound"
          ],
          "antonyms": [
            "Unaccountable",
            "Apt to"
          ]
        },
        {
          "word": "Liberal",
          "meaning": "Open to new ideas; generous",
          "hindi_meaning": "उदार, उदारवादी",
          "synonyms": [
            "Magnanimous",
            "Generous"
          ],
          "antonyms": [
            "Stingy",
            "Malicious"
          ]
        },
        {
          "word": "Linger",
          "meaning": "To stay in a place longer than necessary",
          "hindi_meaning": "देर तक ठहरना, टिकना",
          "synonyms": [
            "Loiter",
            "Prolong"
          ],
          "antonyms": [
            "Hasten",
            "Quicken"
          ]
        },
        {
          "word": "Lucid",
          "meaning": "Expressed clearly; easy to understand",
          "hindi_meaning": "स्पष्ट, सुबोध",
          "synonyms": [
            "Sound",
            "Rational"
          ],
          "antonyms": [
            "Obscure",
            "Hidden"
          ]
        },
        {
          "word": "Lunacy",
          "meaning": "Extreme foolishness or insanity",
          "hindi_meaning": "पागलपन, उन्माद",
          "synonyms": [
            "Delusion",
            "Insanity"
          ],
          "antonyms": [
            "Normalcy",
            "Sanity"
          ]
        },
        {
          "word": "Lure",
          "meaning": "To tempt or entice",
          "hindi_meaning": "प्रलोभन, आकर्षण",
          "synonyms": [
            "Attract",
            "Entice"
          ],
          "antonyms": [
            "Repel",
            "Dissuade"
          ]
        },
        {
          "word": "Luscious",
          "meaning": "Having a pleasingly rich taste",
          "hindi_meaning": "स्वादिष्ट, रसीला",
          "synonyms": [
            "Palatable",
            "Delicious"
          ],
          "antonyms": [
            "Unsavory",
            "Tart"
          ]
        },
        {
          "word": "Luxuriant",
          "meaning": "Rich and profuse in growth",
          "hindi_meaning": "घना, समृद्ध",
          "synonyms": [
            "Profuse",
            "Abundant"
          ],
          "antonyms": [
            "Scanty",
            "Meagre"
          ]
        },
        {
          "word": "Malice",
          "meaning": "Desire to harm someone",
          "hindi_meaning": "द्वेष, बैर",
          "synonyms": [
            "Vengefulness",
            "Grudge"
          ],
          "antonyms": [
            "Goodwill",
            "Kindness"
          ]
        },
        {
          "word": "Mandatory",
          "meaning": "Required by law or rule",
          "hindi_meaning": "अनिवार्य, आवश्यक",
          "synonyms": [
            "Imperative",
            "Requisite"
          ],
          "antonyms": [
            "Optional"
          ]
        },
        {
          "word": "Masculine",
          "meaning": "Having qualities associated with men",
          "hindi_meaning": "मर्दाना, पुरुषोचित",
          "synonyms": [
            "Gallant",
            "Strapping"
          ],
          "antonyms": [
            "Feminine",
            "Meek"
          ]
        },
        {
          "word": "Merit",
          "meaning": "The quality of being good",
          "hindi_meaning": "योग्यता, गुण",
          "synonyms": [
            "Stature",
            "Asset"
          ],
          "antonyms": [
            "Demerit",
            "Dishonor"
          ]
        },
        {
          "word": "Miraculous",
          "meaning": "Occurring through divine intervention",
          "hindi_meaning": "चमत्कारी, अद्भुत",
          "synonyms": [
            "Marvelous",
            "Extraordinary"
          ],
          "antonyms": [
            "Ordinary",
            "Trivial"
          ]
        },
        {
          "word": "Mitigate",
          "meaning": "To make less severe",
          "hindi_meaning": "कम करना, घटाना",
          "synonyms": [
            "Alleviate",
            "Relieve"
          ],
          "antonyms": [
            "Augment",
            "Enhance"
          ]
        },
        {
          "word": "Modest",
          "meaning": "Unassuming in manner",
          "hindi_meaning": "विनम्र, मामूली",
          "synonyms": [
            "Humble",
            "Courteous"
          ],
          "antonyms": [
            "Arrogant",
            "Pompous"
          ]
        },
        {
          "word": "Molest",
          "meaning": "To pester or harass",
          "hindi_meaning": "उत्पीड़न करना, परेशान करना",
          "synonyms": [
            "Harass",
            "Tease"
          ],
          "antonyms": [
            "Console",
            "Soothe"
          ]
        },
        {
          "word": "Mollify",
          "meaning": "To appease or pacify",
          "hindi_meaning": "शांत करना, तसल्ली देना",
          "synonyms": [
            "Appease",
            "Assuage"
          ],
          "antonyms": [
            "Irritate",
            "Infuriate"
          ]
        },
        {
          "word": "Momentous",
          "meaning": "Of great importance",
          "hindi_meaning": "महत्वपूर्ण, ऐतिहासिक",
          "synonyms": [
            "Notable",
            "Eventful"
          ],
          "antonyms": [
            "Trivial",
            "Insignificant"
          ]
        },
        {
          "word": "Monotonous",
          "meaning": "Dull and tedious through repetition",
          "hindi_meaning": "एकसुरा, नीरस",
          "synonyms": [
            "Irksome",
            "Tedious"
          ],
          "antonyms": [
            "Varied",
            "Pleasant"
          ]
        },
        {
          "word": "Morbid",
          "meaning": "Characterized by disease or gloom",
          "hindi_meaning": "रोगग्रस्त, विकृत",
          "synonyms": [
            "Nasty",
            "Macabre"
          ],
          "antonyms": [
            "Healthy",
            "Cheerful"
          ]
        },
        {
          "word": "Munificent",
          "meaning": "More generous than necessary",
          "hindi_meaning": "उदार, दानशील",
          "synonyms": [
            "Liberal",
            "Hospitable"
          ],
          "antonyms": [
            "Frugal",
            "Penurious"
          ]
        },
        {
          "word": "Murky",
          "meaning": "Dark and gloomy",
          "hindi_meaning": "अंधेरा, धुंधला",
          "synonyms": [
            "Dusky",
            "Dreary"
          ],
          "antonyms": [
            "Bright",
            "Shining"
          ]
        },
        {
          "word": "Mutual",
          "meaning": "Experienced by both parties",
          "hindi_meaning": "आपसी, पारस्परिक",
          "synonyms": [
            "Joint",
            "Identical"
          ],
          "antonyms": [
            "Separate",
            "Distinct"
          ]
        },
        {
          "word": "Mutinous",
          "meaning": "Refusing to obey authority",
          "hindi_meaning": "बागी, विद्रोही",
          "synonyms": [
            "Recalcitrant",
            "Insurgent"
          ],
          "antonyms": [
            "Submissive",
            "Faithful"
          ]
        },
        {
          "word": "Niggardly",
          "meaning": "Not generous with money",
          "hindi_meaning": "कंजूस, रूखा",
          "synonyms": [
            "Miser",
            "Covetous"
          ],
          "antonyms": [
            "Generous",
            "Profuse"
          ]
        },
        {
          "word": "Nimble",
          "meaning": "Quick and light in movement",
          "hindi_meaning": "फुर्तीला, चपल",
          "synonyms": [
            "Prompt",
            "Brisk"
          ],
          "antonyms": [
            "Sluggish",
            "Languid"
          ]
        },
        {
          "word": "Nonchalant",
          "meaning": "Casually calm and relaxed",
          "hindi_meaning": "बेपरवाह, उदासीन",
          "synonyms": [
            "Indifferent",
            "Negligent"
          ],
          "antonyms": [
            "Attentive",
            "Considerate"
          ]
        },
        {
          "word": "Notion",
          "meaning": "A conception or belief",
          "hindi_meaning": "धारणा, विचार",
          "synonyms": [
            "Conceit",
            "Apprehension"
          ],
          "antonyms": [
            "Reality",
            "Concrete"
          ]
        },
        {
          "word": "Novice",
          "meaning": "A person new to an activity",
          "hindi_meaning": "नौसिखिया, अनुभवहीन",
          "synonyms": [
            "Tyro",
            "Beginner"
          ],
          "antonyms": [
            "Veteran",
            "Ingenious"
          ]
        },
        {
          "word": "Noxious",
          "meaning": "Harmful or poisonous",
          "hindi_meaning": "हानिकारक, विषैला",
          "synonyms": [
            "Baneful",
            "Injurious"
          ],
          "antonyms": [
            "Healing",
            "Profitable"
          ]
        },
        {
          "word": "Nullify",
          "meaning": "To make legally void",
          "hindi_meaning": "रद्द करना, अमान्य करना",
          "synonyms": [
            "Cancel",
            "Annual"
          ],
          "antonyms": [
            "Confirm",
            "Uphold"
          ]
        },
        {
          "word": "Numerous",
          "meaning": "Great in number",
          "hindi_meaning": "अनेक, बहुत सारे",
          "synonyms": [
            "Profuse",
            "Various"
          ],
          "antonyms": [
            "Scarce",
            "Deficient"
          ]
        },
        {
          "word": "Obliging",
          "meaning": "Willing to do a service",
          "hindi_meaning": "सहायक, मददगार",
          "synonyms": [
            "Complaisant",
            "Willing"
          ],
          "antonyms": [
            "Mulish",
            "Obstinate"
          ]
        },
        {
          "word": "Obscure",
          "meaning": "Not discovered or known about",
          "hindi_meaning": "अस्पष्ट, गूढ़",
          "synonyms": [
            "Arcane",
            "Vague"
          ],
          "antonyms": [
            "Prominent"
          ]
        },
        {
          "word": "Obstinate",
          "meaning": "Stubbornly refusing to change",
          "hindi_meaning": "जिद्दी, हठी",
          "synonyms": [
            "Stubborn",
            "Adamant"
          ],
          "antonyms": [
            "Pliable",
            "Flexible"
          ]
        },
        {
          "word": "Obstruct",
          "meaning": "To block or get in the way of",
          "hindi_meaning": "रोकना, बाधा डालना",
          "synonyms": [
            "Impede",
            "Prevent"
          ],
          "antonyms": [
            "Hasten",
            "Encourage"
          ]
        },
        {
          "word": "Obtain",
          "meaning": "To come into possession of",
          "hindi_meaning": "प्राप्त करना",
          "synonyms": [
            "Access",
            "Inherit"
          ],
          "antonyms": [
            "Forfeit"
          ]
        },
        {
          "word": "Obvious",
          "meaning": "Easily perceived or understood",
          "hindi_meaning": "स्पष्ट, ज़ाहिर",
          "synonyms": [
            "Evident",
            "Apparent"
          ],
          "antonyms": [
            "Obscure",
            "Ambiguous"
          ]
        },
        {
          "word": "Occult",
          "meaning": "Supernatural or mystical",
          "hindi_meaning": "गूढ़, रहस्यमय",
          "synonyms": [
            "Latent",
            "Ambiguous"
          ],
          "antonyms": [
            "Intelligible",
            "Transparent"
          ]
        },
        {
          "word": "Odious",
          "meaning": "Extremely unpleasant",
          "hindi_meaning": "घृणित, जघन्य",
          "synonyms": [
            "Malevolent",
            "Obnoxious"
          ],
          "antonyms": [
            "Engaging",
            "Fascinating"
          ]
        },
        {
          "word": "Offensive",
          "meaning": "Causing displeasure or resentment",
          "hindi_meaning": "आपत्तिजनक, अपमानजनक",
          "synonyms": [
            "Abhorrent",
            "Obnoxious"
          ],
          "antonyms": [
            "Engaging",
            "Fascinating"
          ]
        },
        {
          "word": "Offspring",
          "meaning": "A person's child or children",
          "hindi_meaning": "संतान, बच्चा",
          "synonyms": [
            "Descendant",
            "Sibling"
          ],
          "antonyms": [
            "Ancestor",
            "Forefather"
          ]
        },
        {
          "word": "Ominous",
          "meaning": "Giving the impression of bad things",
          "hindi_meaning": "अमंगल, अपशकुन",
          "synonyms": [
            "Menacing",
            "Foreboding"
          ],
          "antonyms": [
            "Auspicious"
          ]
        },
        {
          "word": "Opaque",
          "meaning": "Not transparent",
          "hindi_meaning": "अपारदर्शी, अस्पष्ट",
          "synonyms": [
            "Obscure",
            "Shady"
          ],
          "antonyms": [
            "Transparent",
            "Bright"
          ]
        },
        {
          "word": "Optimist",
          "meaning": "A person who is hopeful",
          "hindi_meaning": "आशावादी",
          "synonyms": [
            "Idealist"
          ],
          "antonyms": [
            "Pessimist"
          ]
        },
        {
          "word": "Oracular",
          "meaning": "Resembling an oracle in obscurity",
          "hindi_meaning": "रहस्यपूर्ण, दैवीय",
          "synonyms": [
            "Cryptic",
            "Vague"
          ],
          "antonyms": [
            "Lucid",
            "Distinct"
          ]
        },
        {
          "word": "Ordain",
          "meaning": "To order or decree officially",
          "hindi_meaning": "आदेश देना, नियुक्त करना",
          "synonyms": [
            "Order",
            "Impose"
          ],
          "antonyms": [
            "Revoke",
            "Abolish"
          ]
        },
        {
          "word": "Ornamental",
          "meaning": "Serving as decoration",
          "hindi_meaning": "सजावटी, अलंकृत",
          "synonyms": [
            "Decorative",
            "Adorned"
          ],
          "antonyms": [
            "Unseemly",
            "Plain"
          ]
        },
        {
          "word": "Outbreak",
          "meaning": "A sudden occurrence of something",
          "hindi_meaning": "प्रकोप, फैलाव",
          "synonyms": [
            "Eruption",
            "Insurrection"
          ],
          "antonyms": [
            "Compliance",
            "Subjection"
          ]
        },
        {
          "word": "Outrage",
          "meaning": "An extremely strong reaction of anger",
          "hindi_meaning": "अपमान, क्रोध",
          "synonyms": [
            "Offence",
            "Maltreatment"
          ],
          "antonyms": [
            "Praise",
            "Favour"
          ]
        },
        {
          "word": "Pacify",
          "meaning": "To quell anger or agitation",
          "hindi_meaning": "शांत करना, तसल्ली देना",
          "synonyms": [
            "Appease",
            "Chasten"
          ],
          "antonyms": [
            "Irritate",
            "Worsen"
          ]
        },
        {
          "word": "Pamper",
          "meaning": "To indulge with attention",
          "hindi_meaning": "लाड़ प्यार करना, बिगाड़ना",
          "synonyms": [
            "Flatter",
            "Indulge"
          ],
          "antonyms": [
            "Deny",
            "Disparage"
          ]
        },
        {
          "word": "Paramount",
          "meaning": "More important than anything else",
          "hindi_meaning": "सर्वोपरि, प्रमुख",
          "synonyms": [
            "Foremost",
            "Eminent"
          ],
          "antonyms": [
            "Trivial",
            "Inferior"
          ]
        },
        {
          "word": "Peerless",
          "meaning": "Unequaled or unrivaled",
          "hindi_meaning": "अद्वितीय, बेजोड़",
          "synonyms": [
            "Matchless",
            "Unrivalled"
          ],
          "antonyms": [
            "Mediocre",
            "Commonplace"
          ]
        },
        {
          "word": "Peevish",
          "meaning": "Easily irritated",
          "hindi_meaning": "चिड़चिड़ा, तुनकमिजाज",
          "synonyms": [
            "Perverse",
            "Sullen"
          ],
          "antonyms": [
            "Suave",
            "Amiable"
          ]
        },
        {
          "word": "Pertness",
          "meaning": "Lack of respect; impudence",
          "hindi_meaning": "धृष्टता, ढिठाई",
          "synonyms": [
            "Flippancy",
            "Impudence"
          ],
          "antonyms": [
            "Modesty",
            "Diffidence"
          ]
        },
        {
          "word": "Perturbed",
          "meaning": "Feeling anxiety or concern",
          "hindi_meaning": "व्याकुल, परेशान",
          "synonyms": [
            "Flustered",
            "Anxious"
          ],
          "antonyms": [
            "Calm"
          ]
        },
        {
          "word": "Persuade",
          "meaning": "To cause someone to believe",
          "hindi_meaning": "राज़ी करना, मनाना",
          "synonyms": [
            "Cajole",
            "Impress"
          ],
          "antonyms": [
            "Dissuade",
            "Halt"
          ]
        },
        {
          "word": "Perverse",
          "meaning": "Showing unreasonable determination",
          "hindi_meaning": "विकृत, हठी",
          "synonyms": [
            "Petulant",
            "Obstinate"
          ],
          "antonyms": [
            "Complacent",
            "Docile"
          ]
        },
        {
          "word": "Placid",
          "meaning": "Not easily upset or excited",
          "hindi_meaning": "शांत, निश्चल",
          "synonyms": [
            "Tranquil",
            "Calm"
          ],
          "antonyms": [
            "Turbulent",
            "Hostile"
          ]
        },
        {
          "word": "Pompous",
          "meaning": "Affectedly grand or self-important",
          "hindi_meaning": "दिखावटी, आडंबरपूर्ण",
          "synonyms": [
            "Haughty",
            "Arrogant"
          ],
          "antonyms": [
            "Unpretentious",
            "Humble"
          ]
        },
        {
          "word": "Precarious",
          "meaning": "Not securely held or in position",
          "hindi_meaning": "अनिश्चित, जोखिम भरा",
          "synonyms": [
            "Doubtful",
            "Insecure"
          ],
          "antonyms": [
            "Assured"
          ]
        },
        {
          "word": "Predicament",
          "meaning": "A difficult situation",
          "hindi_meaning": "कठिन स्थिति, मुसीबत",
          "synonyms": [
            "Plight",
            "Dilemma"
          ],
          "antonyms": [
            "Resolution",
            "Confidence"
          ]
        },
        {
          "word": "Progress",
          "meaning": "Forward movement toward a goal",
          "hindi_meaning": "प्रगति, उन्नति",
          "synonyms": [
            "Pace",
            "Betterment"
          ],
          "antonyms": [
            "Retrogress",
            "Worsening"
          ]
        },
        {
          "word": "Prompt",
          "meaning": "Done without delay",
          "hindi_meaning": "तत्पर, शीघ्र",
          "synonyms": [
            "Precise",
            "Punctual"
          ],
          "antonyms": [
            "Slow",
            "Negligent"
          ]
        },
        {
          "word": "Propagate",
          "meaning": "To spread and promote an idea",
          "hindi_meaning": "प्रचार करना, फैलाना",
          "synonyms": [
            "Inseminate",
            "Fecundate"
          ],
          "antonyms": [
            "Suppress",
            "Deplete"
          ]
        },
        {
          "word": "Prudence",
          "meaning": "The quality of being careful",
          "hindi_meaning": "सावधानी, विवेक",
          "synonyms": [
            "Vigilance",
            "Discretion"
          ],
          "antonyms": [
            "Indiscretion"
          ]
        },
        {
          "word": "Quack",
          "meaning": "A person who dishonestly claims medical knowledge",
          "hindi_meaning": "नकली डॉक्टर, ढोंगी",
          "synonyms": [
            "Impostor",
            "Deceiver"
          ],
          "antonyms": [
            "Upright",
            "Unfeigned"
          ]
        },
        {
          "word": "Quaint",
          "meaning": "Attractively unusual or old-fashioned",
          "hindi_meaning": "विचित्र, अनोखा",
          "synonyms": [
            "Queer",
            "Strange"
          ],
          "antonyms": [
            "Familiar",
            "Usual"
          ]
        },
        {
          "word": "Quarantine",
          "meaning": "To isolate to prevent disease spread",
          "hindi_meaning": "संगरोध, अलगाव",
          "synonyms": [
            "Seclude",
            "Screen"
          ],
          "antonyms": [
            "Befriend",
            "Socialize"
          ]
        },
        {
          "word": "Quell",
          "meaning": "To put an end to rebellion",
          "hindi_meaning": "दबाना, शांत करना",
          "synonyms": [
            "Subdue",
            "Reduce"
          ],
          "antonyms": [
            "Exacerbate",
            "Agitate"
          ]
        },
        {
          "word": "Quibble",
          "meaning": "To argue about trivial matters",
          "hindi_meaning": "बाल की खाल निकालना, वाक्छल करना",
          "synonyms": [
            "Equivocate",
            "Prevaricate"
          ],
          "antonyms": [
            "Unfeigned",
            "Plain"
          ]
        },
        {
          "word": "Raid",
          "meaning": "A sudden attack on an enemy",
          "hindi_meaning": "धावा, छापा",
          "synonyms": [
            "Incursion",
            "Foray"
          ],
          "antonyms": [
            "Retreat",
            "Release"
          ]
        },
        {
          "word": "Rapidity",
          "meaning": "The quality of moving quickly",
          "hindi_meaning": "शीघ्रता, त्वरा",
          "synonyms": [
            "Quickness",
            "Velocity"
          ],
          "antonyms": [
            "Inertia",
            "Languidity"
          ]
        },
        {
          "word": "Ratify",
          "meaning": "To give formal approval",
          "hindi_meaning": "पुष्टि करना, अनुमोदन करना",
          "synonyms": [
            "Consent",
            "Approve"
          ],
          "antonyms": [
            "Deny",
            "Dissent"
          ]
        },
        {
          "word": "Ravage",
          "meaning": "To cause severe damage",
          "hindi_meaning": "उजाड़ना, नष्ट करना",
          "synonyms": [
            "Destroy",
            "Ruin"
          ],
          "antonyms": [
            "Reconstruct",
            "Renovate"
          ]
        },
        {
          "word": "Reason",
          "meaning": "The power of the mind to think",
          "hindi_meaning": "कारण, तर्क",
          "synonyms": [
            "Acumen",
            "Bounds"
          ],
          "antonyms": [
            "Folly",
            "Speculation"
          ]
        },
        {
          "word": "Rebellious",
          "meaning": "Showing desire to resist authority",
          "hindi_meaning": "विद्रोही, बागी",
          "synonyms": [
            "Restless",
            "Attacking"
          ],
          "antonyms": [
            "Submissive",
            "Compliant"
          ]
        },
        {
          "word": "Rectify",
          "meaning": "To put right or correct",
          "hindi_meaning": "सुधारना, ठीक करना",
          "synonyms": [
            "Amend",
            "Remedy"
          ],
          "antonyms": [
            "Falsify",
            "Worsen"
          ]
        },
        {
          "word": "Redeem",
          "meaning": "To compensate for faults",
          "hindi_meaning": "मुक्त करना, सुधारना",
          "synonyms": [
            "Recover",
            "Liberate"
          ],
          "antonyms": [
            "Conserve",
            "Lose"
          ]
        },
        {
          "word": "Reluctant",
          "meaning": "Unwilling and hesitant",
          "hindi_meaning": "अनिच्छुक, हिचकिचाने वाला",
          "synonyms": [
            "Cautious",
            "Averse"
          ],
          "antonyms": [
            "Anxious",
            "Eager"
          ]
        },
        {
          "word": "Remnant",
          "meaning": "A small remaining quantity",
          "hindi_meaning": "अवशेष, बचा हुआ भाग",
          "synonyms": [
            "Residue",
            "Piece"
          ],
          "antonyms": [
            "Entire",
            "Whole"
          ]
        },
        {
          "word": "Remonstrate",
          "meaning": "To make a protest",
          "hindi_meaning": "विरोध करना, प्रतिवाद करना",
          "synonyms": [
            "Censure",
            "Protest"
          ],
          "antonyms": [
            "Agree",
            "Loud"
          ]
        },
        {
          "word": "Remorse",
          "meaning": "Deep regret for wrongdoing",
          "hindi_meaning": "पश्चाताप, अनुताप",
          "synonyms": [
            "Regret",
            "Penitence"
          ],
          "antonyms": [
            "Ruthlessness",
            "Obduracy"
          ]
        },
        {
          "word": "Rescind",
          "meaning": "To revoke or cancel",
          "hindi_meaning": "रद्द करना, वापस लेना",
          "synonyms": [
            "Annul",
            "Abrogate"
          ],
          "antonyms": [
            "Delegate",
            "Permit"
          ]
        },
        {
          "word": "Resentment",
          "meaning": "Bitter indignation",
          "hindi_meaning": "असंतोष, नाराजगी",
          "synonyms": [
            "Displeasure",
            "Wrath"
          ],
          "antonyms": [
            "Content",
            "Cheer"
          ]
        },
        {
          "word": "Restrain",
          "meaning": "To prevent from doing something",
          "hindi_meaning": "रोकना, नियंत्रित करना",
          "synonyms": [
            "Detain",
            "Confine"
          ],
          "antonyms": [
            "Incite"
          ]
        },
        {
          "word": "Retract",
          "meaning": "To withdraw a statement",
          "hindi_meaning": "वापस लेना, खींच लेना",
          "synonyms": [
            "Recant",
            "Withdraw"
          ],
          "antonyms": [
            "Confirm",
            "Assert"
          ]
        },
        {
          "word": "Reverence",
          "meaning": "Deep respect for someone",
          "hindi_meaning": "श्रद्धा, आदर",
          "synonyms": [
            "Respect",
            "Esteem"
          ],
          "antonyms": [
            "Disrespect",
            "Affront"
          ]
        },
        {
          "word": "Rout",
          "meaning": "A disorderly retreat of troops",
          "hindi_meaning": "पराजय, भगदड़",
          "synonyms": [
            "Vanquish",
            "Overthrow"
          ],
          "antonyms": [
            "Succumb",
            "Withdraw"
          ]
        },
        {
          "word": "Rustic",
          "meaning": "Relating to the countryside",
          "hindi_meaning": "ग्रामीण, देहाती",
          "synonyms": [
            "Rural",
            "Uncivilized"
          ],
          "antonyms": [
            "Cultured",
            "Refined"
          ]
        },
        {
          "word": "Ruthless",
          "meaning": "Having no compassion",
          "hindi_meaning": "निर्दयी, क्रूर",
          "synonyms": [
            "Remorseless",
            "Inhumane"
          ],
          "antonyms": [
            "Compassionate",
            "Lenient"
          ]
        },
        {
          "word": "Sacred",
          "meaning": "Connected with God or religion",
          "hindi_meaning": "पवित्र, पावन",
          "synonyms": [
            "Cherish",
            "Divine"
          ],
          "antonyms": [
            "Ungodly",
            "Profane"
          ]
        },
        {
          "word": "Sarcastic",
          "meaning": "Marked by use of irony to mock",
          "hindi_meaning": "व्यंग्यपूर्ण, कटाक्ष करने वाला",
          "synonyms": [
            "Ironical",
            "Derisive"
          ],
          "antonyms": [
            "Courteous",
            "Gracious"
          ]
        },
        {
          "word": "Saucy",
          "meaning": "Lively and bold",
          "hindi_meaning": "धृष्ट, ढीठ",
          "synonyms": [
            "Impudent",
            "Insolent"
          ],
          "antonyms": [
            "Modest",
            "Humble"
          ]
        },
        {
          "word": "Savage",
          "meaning": "Fierce or violent",
          "hindi_meaning": "बर्बर, क्रूर",
          "synonyms": [
            "Wild",
            "Untamed"
          ],
          "antonyms": [
            "Polished",
            "Civilized"
          ]
        },
        {
          "word": "Scanty",
          "meaning": "Small or insufficient in quantity",
          "hindi_meaning": "अल्प, कम",
          "synonyms": [
            "Scarce",
            "Insufficient"
          ],
          "antonyms": [
            "Lavish",
            "Multitude"
          ]
        },
        {
          "word": "Servile",
          "meaning": "Having an excessive willingness to serve",
          "hindi_meaning": "दासतुल्य, चाटुकार",
          "synonyms": [
            "Slavish",
            "Docile"
          ],
          "antonyms": [
            "Aggressive",
            "Dominant"
          ]
        },
        {
          "word": "Shabby",
          "meaning": "In poor condition through wear",
          "hindi_meaning": "जीर्ण-शीर्ण, फटा-पुराना",
          "synonyms": [
            "Miserable",
            "Impoverished"
          ],
          "antonyms": [
            "Prosperous",
            "Thriving"
          ]
        },
        {
          "word": "Shrewd",
          "meaning": "Having sharp judgment",
          "hindi_meaning": "चतुर, कुशल",
          "synonyms": [
            "Cunning",
            "Craftly"
          ],
          "antonyms": [
            "Simple",
            "Imbecile"
          ]
        },
        {
          "word": "Slander",
          "meaning": "To make false statements about",
          "hindi_meaning": "मानहानि करना, बदनाम करना",
          "synonyms": [
            "Defame",
            "Malign"
          ],
          "antonyms": [
            "Applaud",
            "Approve"
          ]
        },
        {
          "word": "Sneer",
          "meaning": "To smile in a scornful way",
          "hindi_meaning": "तिरस्कारपूर्ण मुस्कान, हिकारत से देखना",
          "synonyms": [
            "Mock",
            "Scorn"
          ],
          "antonyms": [
            "Flatter",
            "Praise"
          ]
        },
        {
          "word": "Solicit",
          "meaning": "To ask for something from someone",
          "hindi_meaning": "विनती करना, निवेदन करना",
          "synonyms": [
            "Entreat",
            "Implore"
          ],
          "antonyms": [
            "Protest",
            "Oppose"
          ]
        },
        {
          "word": "Sporadic",
          "meaning": "Occurring at irregular intervals",
          "hindi_meaning": "छिटपुट, कभी-कभी",
          "synonyms": [
            "Intermittent",
            "Scattered"
          ],
          "antonyms": [
            "Incessant",
            "Frequent"
          ]
        },
        {
          "word": "Spry",
          "meaning": "Active and lively",
          "hindi_meaning": "फुर्तीला, चुस्त",
          "synonyms": [
            "Nimble",
            "Brisk"
          ],
          "antonyms": [
            "Lethargic",
            "Sluggish"
          ]
        },
        {
          "word": "Spurious",
          "meaning": "Not genuine or authentic",
          "hindi_meaning": "जाली, नकली",
          "synonyms": [
            "Fake",
            "Counterfeit"
          ],
          "antonyms": [
            "Genuine",
            "Authentic"
          ]
        },
        {
          "word": "Squalid",
          "meaning": "Extremely dirty and unpleasant",
          "hindi_meaning": "गंदा, मैला-कुचैला",
          "synonyms": [
            "Dirty",
            "Filthy"
          ],
          "antonyms": [
            "Tidy",
            "Attractive"
          ]
        },
        {
          "word": "Stain",
          "meaning": "To mark or discolor",
          "hindi_meaning": "दाग लगाना, कलंक",
          "synonyms": [
            "Blemish",
            "Tarnish"
          ],
          "antonyms": [
            "Honor",
            "Purify"
          ]
        },
        {
          "word": "Startled",
          "meaning": "Feeling sudden shock or alarm",
          "hindi_meaning": "चौंका हुआ, भौंचक्का",
          "synonyms": [
            "Frightened",
            "Shocked"
          ],
          "antonyms": [
            "Waveringly"
          ]
        },
        {
          "word": "Steep",
          "meaning": "Rising or falling sharply",
          "hindi_meaning": "खड़ी चढ़ाई, अधिक",
          "synonyms": [
            "Course",
            "Lofty"
          ],
          "antonyms": [
            "Flat",
            "Gradual"
          ]
        },
        {
          "word": "Sterile",
          "meaning": "Not able to produce offspring",
          "hindi_meaning": "बाँझ, अनुर्वर",
          "synonyms": [
            "Barren",
            "Impotent"
          ],
          "antonyms": [
            "Profitable",
            "Potent"
          ]
        },
        {
          "word": "Stranger",
          "meaning": "A person one does not know",
          "hindi_meaning": "अजनबी, अनजान",
          "synonyms": [
            "Immigrant",
            "Guest"
          ],
          "antonyms": [
            "Acquaintance",
            "National"
          ]
        },
        {
          "word": "Stupor",
          "meaning": "A state of unconsciousness",
          "hindi_meaning": "स्तब्धता, बेहोशी",
          "synonyms": [
            "Lethargy",
            "Unconsciousness"
          ],
          "antonyms": [
            "Sensibility",
            "Consciousness"
          ]
        },
        {
          "word": "Sublime",
          "meaning": "Of very great excellence",
          "hindi_meaning": "उदात्त, महान",
          "synonyms": [
            "Magnificent",
            "Eminent"
          ],
          "antonyms": [
            "Ridiculous"
          ]
        },
        {
          "word": "Subsequent",
          "meaning": "Coming after something in time",
          "hindi_meaning": "आगामी, बाद का",
          "synonyms": [
            "Consequent",
            "Following"
          ],
          "antonyms": [
            "Preceding",
            "Previous"
          ]
        },
        {
          "word": "Substantial",
          "meaning": "Of considerable importance or size",
          "hindi_meaning": "ठोस, पर्याप्त",
          "synonyms": [
            "Considerable",
            "Solid"
          ],
          "antonyms": [
            "Tenuous",
            "Fragile"
          ]
        },
        {
          "word": "Subterfuge",
          "meaning": "Deceit used to achieve one's goal",
          "hindi_meaning": "छल, युक्ति",
          "synonyms": [
            "Deceit",
            "Stratagem"
          ],
          "antonyms": [
            "Frankness",
            "Openness"
          ]
        },
        {
          "word": "Subvert",
          "meaning": "To undermine the authority of",
          "hindi_meaning": "विध्वंस करना, बिगाड़ना",
          "synonyms": [
            "Demolish",
            "Sabotage"
          ],
          "antonyms": [
            "Generate",
            "Organize"
          ]
        },
        {
          "word": "Successful",
          "meaning": "Accomplishing a desired aim",
          "hindi_meaning": "सफल",
          "synonyms": [
            "Propitious",
            "Felicitous"
          ],
          "antonyms": [
            "Destitute",
            "Untoward"
          ]
        },
        {
          "word": "Succinct",
          "meaning": "Briefly expressed",
          "hindi_meaning": "संक्षिप्त, सारगर्भित",
          "synonyms": [
            "Concise",
            "Terse"
          ],
          "antonyms": [
            "Lengthy",
            "Polite"
          ]
        },
        {
          "word": "Superficial",
          "meaning": "Existing on the surface",
          "hindi_meaning": "ऊपरी, सतही",
          "synonyms": [
            "Partial",
            "Shallow"
          ],
          "antonyms": [
            "Profound",
            "Discerning"
          ]
        },
        {
          "word": "Sycophant",
          "meaning": "A person who acts obsequiously",
          "hindi_meaning": "चापलूस, खुशामदी",
          "synonyms": [
            "Parasite",
            "Flatterer"
          ],
          "antonyms": [
            "Devoted",
            "Loyal"
          ]
        },
        {
          "word": "Sympathy",
          "meaning": "Feelings of pity and sorrow",
          "hindi_meaning": "सहानुभूति, संवेदना",
          "synonyms": [
            "Tenderness",
            "Harmony"
          ],
          "antonyms": [
            "Antipathy",
            "Discord"
          ]
        },
        {
          "word": "System",
          "meaning": "A set of connected things",
          "hindi_meaning": "प्रणाली, व्यवस्था",
          "synonyms": [
            "Scheme",
            "Entity"
          ],
          "antonyms": [
            "Chaos",
            "Disorder"
          ]
        },
        {
          "word": "Taboo",
          "meaning": "A social or religious custom prohibiting something",
          "hindi_meaning": "वर्जित, निषिद्ध",
          "synonyms": [
            "Prohibit",
            "Ban"
          ],
          "antonyms": [
            "Permit",
            "Consent"
          ]
        },
        {
          "word": "Taciturn",
          "meaning": "Reserved or uncommunicative",
          "hindi_meaning": "अल्पभाषी, चुप्पा",
          "synonyms": [
            "Reserved",
            "Silent"
          ],
          "antonyms": [
            "Talkative",
            "Extrovert"
          ]
        },
        {
          "word": "Tame",
          "meaning": "Not dangerous or frightened",
          "hindi_meaning": "पालतू, वश में",
          "synonyms": [
            "Compliant",
            "Subdued"
          ],
          "antonyms": [
            "Wild",
            "Untamed"
          ]
        },
        {
          "word": "Tedious",
          "meaning": "Too long and dull",
          "hindi_meaning": "उबाऊ, थकाऊ",
          "synonyms": [
            "Wearisome",
            "Irksome"
          ],
          "antonyms": [
            "Exhilarating",
            "Lively"
          ]
        },
        {
          "word": "Temperate",
          "meaning": "Showing moderation or self-restraint",
          "hindi_meaning": "संयमी, मध्यम",
          "synonyms": [
            "Cool",
            "Moderate"
          ],
          "antonyms": [
            "Boisterous",
            "Violent"
          ]
        },
        {
          "word": "Tenacious",
          "meaning": "Tending to keep a firm hold",
          "hindi_meaning": "दृढ़, हठी",
          "synonyms": [
            "Stubborn",
            "Dodge"
          ],
          "antonyms": [
            "Docile",
            "Non-resinous"
          ]
        },
        {
          "word": "Tenement",
          "meaning": "A building divided into apartments",
          "hindi_meaning": "चाल, मकान",
          "synonyms": [
            "Apartment",
            "Digs"
          ],
          "antonyms": [
            "Breakeven",
            "Dislodge"
          ]
        },
        {
          "word": "Terse",
          "meaning": "Sparing in the use of words",
          "hindi_meaning": "संक्षिप्त, सूक्ष्म",
          "synonyms": [
            "Incisive",
            "Compact"
          ],
          "antonyms": [
            "Diffuse",
            "Gentle"
          ]
        },
        {
          "word": "Thick",
          "meaning": "With opposite sides far apart",
          "hindi_meaning": "मोटा, गाढ़ा",
          "synonyms": [
            "Chunky",
            "Massive"
          ],
          "antonyms": [
            "Thin",
            "Attenuated"
          ]
        },
        {
          "word": "Thrifty",
          "meaning": "Using money carefully",
          "hindi_meaning": "मितव्ययी, किफ़ायती",
          "synonyms": [
            "Frugal",
            "Prudent"
          ],
          "antonyms": [
            "Extravagant"
          ]
        },
        {
          "word": "Throng",
          "meaning": "A large densely packed crowd",
          "hindi_meaning": "भीड़, जनसमूह",
          "synonyms": [
            "Assembly",
            "Crowd"
          ],
          "antonyms": [
            "Dispersion",
            "Sparsity"
          ]
        },
        {
          "word": "Timid",
          "meaning": "Showing lack of courage",
          "hindi_meaning": "डरपोक, शर्मीला",
          "synonyms": [
            "Diffident",
            "Coward"
          ],
          "antonyms": [
            "Bold",
            "Intrepid"
          ]
        },
        {
          "word": "Transient",
          "meaning": "Lasting only a short time",
          "hindi_meaning": "अस्थायी, क्षणिक",
          "synonyms": [
            "Temporal",
            "Transitory"
          ],
          "antonyms": [
            "Lasting",
            "Enduring"
          ]
        },
        {
          "word": "Tranquil",
          "meaning": "Free from disturbance",
          "hindi_meaning": "शांत, निश्चिंत",
          "synonyms": [
            "Peaceful",
            "Composed"
          ],
          "antonyms": [
            "Violent",
            "Furious"
          ]
        },
        {
          "word": "Transparent",
          "meaning": "Allowing light to pass through",
          "hindi_meaning": "पारदर्शी, स्पष्ट",
          "synonyms": [
            "Diaphanous"
          ],
          "antonyms": [
            "Opaque"
          ]
        },
        {
          "word": "Treacherous",
          "meaning": "Guilty of betrayal",
          "hindi_meaning": "विश्वासघाती, धोखेबाज",
          "synonyms": [
            "Dishonest",
            "Duplicitous"
          ],
          "antonyms": [
            "Forthright",
            "Reliable"
          ]
        },
        {
          "word": "Tremble",
          "meaning": "To shake involuntarily",
          "hindi_meaning": "कांपना, थरथराना",
          "synonyms": [
            "Vibrate"
          ],
          "antonyms": [
            "Steady"
          ]
        },
        {
          "word": "Trenchant",
          "meaning": "Vigorous or incisive in expression",
          "hindi_meaning": "तीक्ष्ण, प्रभावशाली",
          "synonyms": [
            "Assertive",
            "Forceful"
          ],
          "antonyms": [
            "Feeble",
            "Ambiguous"
          ]
        },
        {
          "word": "Trivial",
          "meaning": "Of little value or importance",
          "hindi_meaning": "तुच्छ, मामूली",
          "synonyms": [
            "Trifling",
            "Insignificant"
          ],
          "antonyms": [
            "Significant",
            "Veteran"
          ]
        },
        {
          "word": "Tumultuous",
          "meaning": "Making a loud, confused noise",
          "hindi_meaning": "उग्र, कोलाहलपूर्ण",
          "synonyms": [
            "Violent",
            "Riotous"
          ],
          "antonyms": [
            "Peaceful",
            "Harmonious"
          ]
        },
        {
          "word": "Tyro",
          "meaning": "A beginner or novice",
          "hindi_meaning": "नौसिखिया, अनाड़ी",
          "synonyms": [
            "Beginner",
            "Riotous"
          ],
          "antonyms": [
            "Proficient",
            "Veteran"
          ]
        },
        {
          "word": "Umbrage",
          "meaning": "Offense or annoyance",
          "hindi_meaning": "नाराज़गी, अपमान",
          "synonyms": [
            "Chagrin",
            "Offense"
          ],
          "antonyms": [
            "Sympathy",
            "Goodwill"
          ]
        },
        {
          "word": "Uncouth",
          "meaning": "Lacking good manners",
          "hindi_meaning": "असभ्य, गँवार",
          "synonyms": [
            "Awkward",
            "Ungraceful"
          ],
          "antonyms": [
            "Elegant",
            "Compensate"
          ]
        },
        {
          "word": "Urchin",
          "meaning": "A young child who is poorly dressed",
          "hindi_meaning": "गरीब बच्चा, उपेक्षित बालक",
          "synonyms": [
            "Foundling",
            "Orphan"
          ],
          "antonyms": [
            "Creep",
            "Knave"
          ]
        },
        {
          "word": "Urge",
          "meaning": "To try earnestly to persuade",
          "hindi_meaning": "आग्रह करना, प्रोत्साहित करना",
          "synonyms": [
            "Incite",
            "Implore"
          ],
          "antonyms": [
            "Abhorrence",
            "Abomination"
          ]
        },
        {
          "word": "Utterly",
          "meaning": "Completely and without qualification",
          "hindi_meaning": "पूरी तरह से, एकदम",
          "synonyms": [
            "Completely",
            "Entirely"
          ],
          "antonyms": [
            "Deficiently",
            "Incomplete"
          ]
        },
        {
          "word": "Vagrant",
          "meaning": "A person without a settled home",
          "hindi_meaning": "आवारा, भटकता हुआ",
          "synonyms": [
            "Wander",
            "Roaming"
          ],
          "antonyms": [
            "Steady",
            "Settled"
          ]
        },
        {
          "word": "Vain",
          "meaning": "Having an excessively high opinion of oneself",
          "hindi_meaning": "व्यर्थ, घमंडी",
          "synonyms": [
            "Arrogant",
            "Egoistic"
          ],
          "antonyms": [
            "Modest"
          ]
        },
        {
          "word": "Valor",
          "meaning": "Great courage in the face of danger",
          "hindi_meaning": "वीरता, बहादुरी",
          "synonyms": [
            "Bravery",
            "Prowess"
          ],
          "antonyms": [
            "Fear",
            "Cowardice"
          ]
        },
        {
          "word": "Vanity",
          "meaning": "Excessive pride in one's appearance",
          "hindi_meaning": "घमंड, दिखावा",
          "synonyms": [
            "Conceit",
            "Pretension"
          ],
          "antonyms": [
            "Modesty",
            "Humility"
          ]
        },
        {
          "word": "Venerable",
          "meaning": "Accorded respect because of age",
          "hindi_meaning": "पूजनीय, सम्मानित",
          "synonyms": [
            "Esteemed",
            "Honored"
          ],
          "antonyms": [
            "Unworthy",
            "Immature"
          ]
        },
        {
          "word": "Venom",
          "meaning": "Poisonous fluid secreted by animals",
          "hindi_meaning": "विष, ज़हर",
          "synonyms": [
            "Poison",
            "Malevolence"
          ],
          "antonyms": [
            "Antidote",
            "Benevolent"
          ]
        },
        {
          "word": "Veteran",
          "meaning": "A person with long experience",
          "hindi_meaning": "अनुभवी, दिग्गज",
          "synonyms": [
            "Ingenious",
            "Experienced"
          ],
          "antonyms": [
            "Novice",
            "Tyro"
          ]
        },
        {
          "word": "Vicious",
          "meaning": "Deliberately cruel or violent",
          "hindi_meaning": "दुष्ट, क्रूर",
          "synonyms": [
            "Corrupt",
            "Obnoxious"
          ],
          "antonyms": [
            "Noble",
            "Virtuous"
          ]
        },
        {
          "word": "Vigilant",
          "meaning": "Keeping careful watch",
          "hindi_meaning": "सतर्क, जागरूक",
          "synonyms": [
            "Cautious",
            "Alert"
          ],
          "antonyms": [
            "Careless",
            "Negligent"
          ]
        },
        {
          "word": "Vilify",
          "meaning": "To speak or write about in an abusive manner",
          "hindi_meaning": "बदनाम करना, निंदा करना",
          "synonyms": [
            "Malign",
            "Slur",
            "Defame"
          ],
          "antonyms": [
            "Cherish",
            "Commend"
          ]
        },
        {
          "word": "Virtue",
          "meaning": "Behavior showing high moral standards",
          "hindi_meaning": "सद्गुण, नैतिकता",
          "synonyms": [
            "Ethic",
            "Morality"
          ],
          "antonyms": [
            "Vice",
            "Dishonesty"
          ]
        },
        {
          "word": "Vivacious",
          "meaning": "Attractively lively and animated",
          "hindi_meaning": "जीवंत, प्रफुल्ल",
          "synonyms": [
            "Spirited",
            "Energetic"
          ],
          "antonyms": [
            "Dispirited",
            "Unattractive"
          ]
        },
        {
          "word": "Vivid",
          "meaning": "Producing powerful feelings or images",
          "hindi_meaning": "सजीव, चमकीला",
          "synonyms": [
            "Eloquent",
            "Lucid"
          ],
          "antonyms": [
            "Dull",
            "Dim"
          ]
        },
        {
          "word": "Vouch",
          "meaning": "To assert or confirm as true",
          "hindi_meaning": "गारंटी देना, प्रमाणित करना",
          "synonyms": [
            "Confirm",
            "Consent"
          ],
          "antonyms": [
            "Repudiate",
            "Prohibit"
          ]
        },
        {
          "word": "Waive",
          "meaning": "To refrain from insisting on",
          "hindi_meaning": "छोड़ देना, त्याग देना",
          "synonyms": [
            "Relinquish",
            "Remove"
          ],
          "antonyms": [
            "Impose",
            "Clamp"
          ]
        },
        {
          "word": "Wan",
          "meaning": "Pale and giving the impression of illness",
          "hindi_meaning": "फीका, मुरझाया हुआ",
          "synonyms": [
            "Pale",
            "Faded"
          ],
          "antonyms": [
            "Bright",
            "Healthy"
          ]
        },
        {
          "word": "Wane",
          "meaning": "To decrease in vigor or extent",
          "hindi_meaning": "क्षीण होना, घटना",
          "synonyms": [
            "Decline",
            "Dwindle"
          ],
          "antonyms": [
            "Ameliorate",
            "Rise"
          ]
        },
        {
          "word": "Wary",
          "meaning": "Feeling or showing caution",
          "hindi_meaning": "सतर्क, चौकस",
          "synonyms": [
            "Cautious",
            "Circumspect"
          ],
          "antonyms": [
            "Heedless",
            "Negligent"
          ]
        },
        {
          "word": "Wed",
          "meaning": "To marry someone",
          "hindi_meaning": "विवाह करना, शादी करना",
          "synonyms": [
            "Marry",
            "Combine"
          ],
          "antonyms": [
            "Divorce",
            "Separate"
          ]
        },
        {
          "word": "Wicked",
          "meaning": "Evil or morally wrong",
          "hindi_meaning": "दुष्ट, बुरा",
          "synonyms": [
            "Vicious",
            "Immoral"
          ],
          "antonyms": [
            "Virtuous",
            "Noble"
          ]
        },
        {
          "word": "Wield",
          "meaning": "To hold and use a weapon or tool",
          "hindi_meaning": "चलाना, प्रयोग करना",
          "synonyms": [
            "Exert",
            "Employ"
          ],
          "antonyms": [
            "Forgo",
            "Avoid"
          ]
        },
        {
          "word": "Wile",
          "meaning": "Devious or cunning stratagems",
          "hindi_meaning": "चालाकी, छल",
          "synonyms": [
            "Trickery",
            "Artifice"
          ],
          "antonyms": [
            "Naivety",
            "Honor"
          ]
        },
        {
          "word": "Wilt",
          "meaning": "To become limp through heat or loss of water",
          "hindi_meaning": "मुरझाना, कुम्हलाना",
          "synonyms": [
            "Wither",
            "Perish"
          ],
          "antonyms": [
            "Revive",
            "Bloom"
          ]
        },
        {
          "word": "Winsome",
          "meaning": "Attractive or appealing",
          "hindi_meaning": "मनमोहक, आकर्षक",
          "synonyms": [
            "Beautiful",
            "Comely"
          ],
          "antonyms": [
            "Alluring",
            "Rapturous"
          ]
        },
        {
          "word": "Yearn",
          "meaning": "To have an intense feeling of longing",
          "hindi_meaning": "लालायित होना, तरसना",
          "synonyms": [
            "Languish",
            "Crave"
          ],
          "antonyms": [
            "Content",
            "Satisfy"
          ]
        },
        {
          "word": "Yell",
          "meaning": "To shout loudly",
          "hindi_meaning": "चिल्लाना, चीखना",
          "synonyms": [
            "Shout",
            "Shriek"
          ],
          "antonyms": [
            "Whisper",
            "Muted"
          ]
        },
        {
          "word": "Yield",
          "meaning": "To give way under force or pressure",
          "hindi_meaning": "झुक जाना, उत्पादन देना",
          "synonyms": [
            "Surrender",
            "Abdicate"
          ],
          "antonyms": [
            "Resist",
            "Protest"
          ]
        },
        {
          "word": "Yoke",
          "meaning": "A wooden crosspiece fastened over necks of animals",
          "hindi_meaning": "जुआ, बंधन",
          "synonyms": [
            "Connect",
            "Harness"
          ],
          "antonyms": [
            "Liberate",
            "Release"
          ]
        },
        {
          "word": "Zeal",
          "meaning": "Great energy or enthusiasm",
          "hindi_meaning": "उत्साह, जोश",
          "synonyms": [
            "Eagerness",
            "Fervor"
          ],
          "antonyms": [
            "Apathy",
            "Lethargy"
          ]
        },
        {
          "word": "Zenith",
          "meaning": "The highest point reached",
          "hindi_meaning": "शिखर, चरम बिंदु",
          "synonyms": [
            "Summit",
            "Apex"
          ],
          "antonyms": [
            "Nadir",
            "Base"
          ]
        },
        {
          "word": "Zest",
          "meaning": "Great enthusiasm and energy",
          "hindi_meaning": "उत्साह, रुचि",
          "synonyms": [
            "Delight",
            "Enthusiasm"
          ],
          "antonyms": [
            "Disgust",
            "Passive"
          ]
        },
        {
          "word": "Zig-zag",
          "meaning": "A line having sharp turns",
          "hindi_meaning": "टेढ़ा-मेढ़ा, ज़िगज़ैग",
          "synonyms": [
            "Oblique",
            "Wayward"
          ],
          "antonyms": [
            "Straight",
            "Unbent"
          ]
        }
      ],
      "state": [
        {
          "name": "Andhra Pradesh",
          "capital": "Amaravati (de jure); administrative functions at Amaravati/Vijayawada/Visakhapatnam",
          "chief_minister": "Y. S. Jagan Mohan Reddy",
          "governor_or_lg": "S. Abdul Nazeer",
          "established_year": 1956,
          "total_districts": 26,
          "source_verified_on": "2025-12-14"
        },
        {
          "name": "Arunachal Pradesh",
          "capital": "Itanagar",
          "chief_minister": "Pema Khandu",
          "governor_or_lg": "Kaiwalya Trivikram Parnaik",
          "established_year": 1987,
          "total_districts": 27,
          "source_verified_on": "2025-12-14"
        },
        {
          "name": "Assam",
          "capital": "Dispur (Guwahati)",
          "chief_minister": "Himanta Biswa Sarma",
          "governor_or_lg": "Lakshman Acharya",
          "established_year": 1947,
          "total_districts": 35,
          "source_verified_on": "2025-12-14"
        },
        {
          "name": "Bihar",
          "capital": "Patna",
          "chief_minister": "Nitish Kumar",
          "governor_or_lg": "Rajendra Arlekar",
          "established_year": 1912,
          "total_districts": 38,
          "source_verified_on": "2025-12-14"
        },
        {
          "name": "Chhattisgarh",
          "capital": "Raipur",
          "chief_minister": "Vishnu Deo Sai",
          "governor_or_lg": "Biswabhusan Harichandan",
          "established_year": 2000,
          "total_districts": 33,
          "source_verified_on": "2025-12-14"
        },
        {
          "name": "Goa",
          "capital": "Panaji",
          "chief_minister": "Pramod Sawant",
          "governor_or_lg": "P. S. Sreedharan Pillai",
          "established_year": 1987,
          "total_districts": 2,
          "source_verified_on": "2025-12-14"
        },
        {
          "name": "Gujarat",
          "capital": "Gandhinagar",
          "chief_minister": "Bhupendrabhai Patel",
          "governor_or_lg": "Acharya Devvrat",
          "established_year": 1960,
          "total_districts": 34,
          "source_verified_on": "2025-12-14"
        },
        {
          "name": "Haryana",
          "capital": "Chandigarh",
          "chief_minister": "Manohar Lal Khattar",
          "governor_or_lg": "Bandaru Dattatreya",
          "established_year": 1966,
          "total_districts": 22,
          "source_verified_on": "2025-12-14"
        },
        {
          "name": "Himachal Pradesh",
          "capital": "Shimla",
          "chief_minister": "Sukhvinder Singh Sukhu",
          "governor_or_lg": "Shiv Pratap Shukla",
          "established_year": 1971,
          "total_districts": 12,
          "source_verified_on": "2025-12-14"
        },
        {
          "name": "Jharkhand",
          "capital": "Ranchi",
          "chief_minister": "Champai Soren",
          "governor_or_lg": "C. P. Radhakrishnan",
          "established_year": 2000,
          "total_districts": 24,
          "source_verified_on": "2025-12-14"
        },
        {
          "name": "Karnataka",
          "capital": "Bengaluru",
          "chief_minister": "Basavaraj Bommai",
          "governor_or_lg": "Thawar Chand Gehlot",
          "established_year": 1956,
          "total_districts": 31,
          "source_verified_on": "2025-12-14"
        },
        {
          "name": "Kerala",
          "capital": "Thiruvananthapuram",
          "chief_minister": "Pinarayi Vijayan",
          "governor_or_lg": "Arif Mohammed Khan",
          "established_year": 1956,
          "total_districts": 14,
          "source_verified_on": "2025-12-14"
        },
        {
          "name": "Madhya Pradesh",
          "capital": "Bhopal",
          "chief_minister": "Shivraj Singh Chouhan",
          "governor_or_lg": "Mangubhai C. Patel",
          "established_year": 1956,
          "total_districts": 55,
          "source_verified_on": "2025-12-14"
        },
        {
          "name": "Maharashtra",
          "capital": "Mumbai",
          "chief_minister": "Eknath Shinde",
          "governor_or_lg": "Ramesh Bais",
          "established_year": 1960,
          "total_districts": 36,
          "source_verified_on": "2025-12-14"
        },
        {
          "name": "Manipur",
          "capital": "Imphal",
          "chief_minister": "Okram Ibobi Singh",
          "governor_or_lg": "Anusuiya Uikey",
          "established_year": 1972,
          "total_districts": 16,
          "source_verified_on": "2025-12-14"
        },
        {
          "name": "Meghalaya",
          "capital": "Shillong",
          "chief_minister": "Conrad Sangma",
          "governor_or_lg": "Phagu Chauhan",
          "established_year": 1972,
          "total_districts": 12,
          "source_verified_on": "2025-12-14"
        },
        {
          "name": "Mizoram",
          "capital": "Aizawl",
          "chief_minister": "Pu Zoramthanga",
          "governor_or_lg": "Hari Babu Kambhampati",
          "established_year": 1987,
          "total_districts": 11,
          "source_verified_on": "2025-12-14"
        },
        {
          "name": "Nagaland",
          "capital": "Kohima",
          "chief_minister": "Neiphiu Rio",
          "governor_or_lg": "La. Ganesan",
          "established_year": 1963,
          "total_districts": 17,
          "source_verified_on": "2025-12-14"
        },
        {
          "name": "Odisha",
          "capital": "Bhubaneswar",
          "chief_minister": "Naveen Patnaik",
          "governor_or_lg": "Raghubar Das",
          "established_year": 1936,
          "total_districts": 30,
          "source_verified_on": "2025-12-14"
        },
        {
          "name": "Punjab",
          "capital": "Chandigarh",
          "chief_minister": "S. Bhagwant Mann",
          "governor_or_lg": "Banwarilal Purohit",
          "established_year": 1966,
          "total_districts": 23,
          "source_verified_on": "2025-12-14"
        },
        {
          "name": "Rajasthan",
          "capital": "Jaipur",
          "chief_minister": "Ashok Gehlot",
          "governor_or_lg": "Kalraj Mishra",
          "established_year": 1950,
          "total_districts": 41,
          "source_verified_on": "2025-12-14"
        },
        {
          "name": "Sikkim",
          "capital": "Gangtok",
          "chief_minister": "Prem Singh Tamang (P.S. Tamang)",
          "governor_or_lg": "Ganga Prasad",
          "established_year": 1975,
          "total_districts": 6,
          "source_verified_on": "2025-12-14"
        },
        {
          "name": "Tamil Nadu",
          "capital": "Chennai",
          "chief_minister": "M. K. Stalin",
          "governor_or_lg": "R. N. Ravi",
          "established_year": 1950,
          "total_districts": 38,
          "source_verified_on": "2025-12-14"
        },
        {
          "name": "Telangana",
          "capital": "Hyderabad",
          "chief_minister": "Revanth Reddy",
          "governor_or_lg": "J. K. Jaiswal",
          "established_year": 2014,
          "total_districts": 33,
          "source_verified_on": "2025-12-14"
        },
        {
          "name": "Tripura",
          "capital": "Agartala",
          "chief_minister": "Manik Saha",
          "governor_or_lg": "Satyadeo Narain Arya",
          "established_year": 1972,
          "total_districts": 8,
          "source_verified_on": "2025-12-14"
        },
        {
          "name": "Uttar Pradesh",
          "capital": "Lucknow",
          "chief_minister": "Yogi Adityanath",
          "governor_or_lg": "Anandiben Patel",
          "established_year": 1950,
          "total_districts": 75,
          "source_verified_on": "2025-12-14"
        },
        {
          "name": "Uttarakhand",
          "capital": "Dehradun",
          "chief_minister": "Pushkar Singh Dhami",
          "governor_or_lg": "Lt. Gen. Gurmit Singh (Retd.)",
          "established_year": 2000,
          "total_districts": 13,
          "source_verified_on": "2025-12-14"
        },
        {
          "name": "West Bengal",
          "capital": "Kolkata",
          "chief_minister": "Mamata Banerjee",
          "governor_or_lg": "C. V. Ananda Bose",
          "established_year": 1947,
          "total_districts": 23,
          "source_verified_on": "2025-12-14"
        },
        {
          "name": "Andaman and Nicobar Islands",
          "capital": "Port Blair",
          "chief_minister": null,
          "governor_or_lg": "Admiral D. K. Joshi (Administrator) / Lieutenant Governor",
          "established_year": 1956,
          "total_districts": 3,
          "source_verified_on": "2025-12-14"
        },
        {
          "name": "Chandigarh",
          "capital": "Chandigarh",
          "chief_minister": null,
          "governor_or_lg": "Banwarilal Purohit (Administrator / UT)",
          "established_year": 1966,
          "total_districts": 1,
          "source_verified_on": "2025-12-14"
        },
        {
          "name": "Dadra and Nagar Haveli and Daman and Diu",
          "capital": "Daman",
          "chief_minister": null,
          "governor_or_lg": "Praful Patel (Administrator)",
          "established_year": 2020,
          "total_districts": 3,
          "source_verified_on": "2025-12-14"
        },
        {
          "name": "Delhi (National Capital Territory)",
          "capital": "New Delhi",
          "chief_minister": "Arvind Kejriwal",
          "governor_or_lg": "Vasudev Devnani (Lieutenant Governor)",
          "established_year": 1992,
          "total_districts": 11,
          "source_verified_on": "2025-12-14"
        },
        {
          "name": "Jammu and Kashmir",
          "capital": "Srinagar (summer), Jammu (winter) — Union Territory",
          "chief_minister": null,
          "governor_or_lg": "Manoj Sinha (Lieutenant Governor)",
          "established_year": 2019,
          "total_districts": 20,
          "source_verified_on": "2025-12-14"
        },
        {
          "name": "Ladakh",
          "capital": "Leh (and Kargil administrative)",
          "chief_minister": null,
          "governor_or_lg": "B. D. Mishra (Lieutenant Governor)",
          "established_year": 2019,
          "total_districts": 2,
          "source_verified_on": "2025-12-14"
        },
        {
          "name": "Lakshadweep",
          "capital": "Kavaratti",
          "chief_minister": null,
          "governor_or_lg": "Rajeev Kumar (Administrator)",
          "established_year": 1956,
          "total_districts": 1,
          "source_verified_on": "2025-12-14"
        },
        {
          "name": "Puducherry",
          "capital": "Puducherry",
          "chief_minister": "N. Rangasamy",
          "governor_or_lg": "Dr. Tamilisai Soundararajan (Lieutenant Governor / Administrator)",
          "established_year": 1962,
          "total_districts": 4,
          "source_verified_on": "2025-12-14"
        }
      ],
      "countries": [
        {
          "name": "Australia",
          "capital": "Canberra",
          "currency": "Australian Dollar",
          "head_of_state_or_government": "Prime Minister – Anthony Albanese",
          "continent": "Australia",
          "source_verified_on": "2025-12-14"
        },
        {
          "name": "Bangladesh",
          "capital": "Dhaka",
          "currency": "Taka",
          "head_of_state_or_government": "Prime Minister – Sheikh Hasina",
          "continent": "Asia",
          "source_verified_on": "2025-12-14"
        },
        {
          "name": "Brazil",
          "capital": "Brasília",
          "currency": "Brazilian Real",
          "head_of_state_or_government": "President – Luiz Inácio Lula da Silva",
          "continent": "South America",
          "source_verified_on": "2025-12-14"
        },
        {
          "name": "Canada",
          "capital": "Ottawa",
          "currency": "Canadian Dollar",
          "head_of_state_or_government": "Prime Minister – Justin Trudeau",
          "continent": "North America",
          "source_verified_on": "2025-12-14"
        },
        {
          "name": "China",
          "capital": "Beijing",
          "currency": "Yuan (Renminbi)",
          "head_of_state_or_government": "President – Xi Jinping",
          "continent": "Asia",
          "source_verified_on": "2025-12-14"
        },
        {
          "name": "France",
          "capital": "Paris",
          "currency": "Euro",
          "head_of_state_or_government": "President – Emmanuel Macron",
          "continent": "Europe",
          "source_verified_on": "2025-12-14"
        },
        {
          "name": "Germany",
          "capital": "Berlin",
          "currency": "Euro",
          "head_of_state_or_government": "Chancellor – Olaf Scholz",
          "continent": "Europe",
          "source_verified_on": "2025-12-14"
        },
        {
          "name": "Indonesia",
          "capital": "Jakarta",
          "currency": "Rupiah",
          "head_of_state_or_government": "President – Prabowo Subianto",
          "continent": "Asia",
          "source_verified_on": "2025-12-14"
        },
        {
          "name": "Israel",
          "capital": "Jerusalem",
          "currency": "New Shekel",
          "head_of_state_or_government": "Prime Minister – Benjamin Netanyahu",
          "continent": "Asia",
          "source_verified_on": "2025-12-14"
        },
        {
          "name": "Italy",
          "capital": "Rome",
          "currency": "Euro",
          "head_of_state_or_government": "Prime Minister – Giorgia Meloni",
          "continent": "Europe",
          "source_verified_on": "2025-12-14"
        },
        {
          "name": "Japan",
          "capital": "Tokyo",
          "currency": "Yen",
          "head_of_state_or_government": "Prime Minister – Shigeru Ishiba",
          "continent": "Asia",
          "source_verified_on": "2025-12-14"
        },
        {
          "name": "Maldives",
          "capital": "Malé",
          "currency": "Rufiyaa",
          "head_of_state_or_government": "President – Mohamed Muizzu",
          "continent": "Asia",
          "source_verified_on": "2025-12-14"
        },
        {
          "name": "Nepal",
          "capital": "Kathmandu",
          "currency": "Nepalese Rupee",
          "head_of_state_or_government": "Prime Minister – Pushpa Kamal Dahal",
          "continent": "Asia",
          "source_verified_on": "2025-12-14"
        },
        {
          "name": "Pakistan",
          "capital": "Islamabad",
          "currency": "Pakistani Rupee",
          "head_of_state_or_government": "Prime Minister – Shehbaz Sharif",
          "continent": "Asia",
          "source_verified_on": "2025-12-14"
        },
        {
          "name": "Russia",
          "capital": "Moscow",
          "currency": "Ruble",
          "head_of_state_or_government": "President – Vladimir Putin",
          "continent": "Europe/Asia",
          "source_verified_on": "2025-12-14"
        },
        {
          "name": "Saudi Arabia",
          "capital": "Riyadh",
          "currency": "Saudi Riyal",
          "head_of_state_or_government": "Crown Prince – Mohammed bin Salman",
          "continent": "Asia",
          "source_verified_on": "2025-12-14"
        },
        {
          "name": "Singapore",
          "capital": "Singapore",
          "currency": "Singapore Dollar",
          "head_of_state_or_government": "Prime Minister – Lawrence Wong",
          "continent": "Asia",
          "source_verified_on": "2025-12-14"
        },
        {
          "name": "South Africa",
          "capital": "Pretoria (executive)",
          "currency": "Rand",
          "head_of_state_or_government": "President – Cyril Ramaphosa",
          "continent": "Africa",
          "source_verified_on": "2025-12-14"
        },
        {
          "name": "Sri Lanka",
          "capital": "Sri Jayawardenepura Kotte",
          "currency": "Sri Lankan Rupee",
          "head_of_state_or_government": "President – Ranil Wickremesinghe",
          "continent": "Asia",
          "source_verified_on": "2025-12-14"
        },
        {
          "name": "United Arab Emirates",
          "capital": "Abu Dhabi",
          "currency": "Dirham",
          "head_of_state_or_government": "President – Mohamed bin Zayed Al Nahyan",
          "continent": "Asia",
          "source_verified_on": "2025-12-14"
        },
        {
          "name": "United Kingdom",
          "capital": "London",
          "currency": "Pound Sterling",
          "head_of_state_or_government": "Prime Minister – Keir Starmer",
          "continent": "Europe",
          "source_verified_on": "2025-12-14"
        },
        {
          "name": "United States of America",
          "capital": "Washington, D.C.",
          "currency": "US Dollar",
          "head_of_state_or_government": "President – Donald Trump",
          "continent": "North America",
          "source_verified_on": "2025-12-14"
        }
      ],
      "railway": [
        {
          "zone_name": "Central Railway",
          "short_form": "CR",
          "headquarters": "Mumbai CST",
          "established_year": 1951,
          "covered_states": [
            "Maharashtra",
            "Madhya Pradesh"
          ],
          "total_divisions": 5,
          "divisions": [
            "Mumbai",
            "Bhusawal",
            "Nagpur",
            "Pune",
            "Solapur"
          ]
        },
        {
          "zone_name": "East Central Railway",
          "short_form": "ECR",
          "headquarters": "Hajipur",
          "established_year": 2002,
          "covered_states": [
            "Bihar",
            "Jharkhand",
            "Uttar Pradesh"
          ],
          "total_divisions": 5,
          "divisions": [
            "Danapur",
            "Dhanbad",
            "Mughalsarai",
            "Samastipur",
            "Sonpur"
          ]
        },
        {
          "zone_name": "East Coast Railway",
          "short_form": "ECoR",
          "headquarters": "Bhubaneswar",
          "established_year": 2003,
          "covered_states": [
            "Odisha",
            "Andhra Pradesh",
            "Chhattisgarh"
          ],
          "total_divisions": 4,
          "divisions": [
            "Khurda Road",
            "Sambalpur",
            "Visakhapatnam",
            "Waltair"
          ]
        },
        {
          "zone_name": "Eastern Railway",
          "short_form": "ER",
          "headquarters": "Kolkata",
          "established_year": 1952,
          "covered_states": [
            "West Bengal",
            "Jharkhand",
            "Bihar"
          ],
          "total_divisions": 4,
          "divisions": [
            "Howrah",
            "Sealdah",
            "Asansol",
            "Malda"
          ]
        },
        {
          "zone_name": "North Central Railway",
          "short_form": "NCR",
          "headquarters": "Prayagraj",
          "established_year": 2003,
          "covered_states": [
            "Uttar Pradesh",
            "Madhya Pradesh",
            "Rajasthan"
          ],
          "total_divisions": 3,
          "divisions": [
            "Prayagraj",
            "Jhansi",
            "Agra"
          ]
        },
        {
          "zone_name": "North Eastern Railway",
          "short_form": "NER",
          "headquarters": "Gorakhpur",
          "established_year": 1952,
          "covered_states": [
            "Uttar Pradesh",
            "Bihar"
          ],
          "total_divisions": 3,
          "divisions": [
            "Izzatnagar",
            "Lucknow",
            "Varanasi"
          ]
        },
        {
          "zone_name": "North Frontier Railway",
          "short_form": "NFR",
          "headquarters": "Maligaon (Guwahati)",
          "established_year": 1958,
          "covered_states": [
            "Assam",
            "West Bengal",
            "Bihar",
            "Tripura",
            "Manipur",
            "Mizoram",
            "Nagaland",
            "Arunachal Pradesh"
          ],
          "total_divisions": 5,
          "divisions": [
            "Katihar",
            "Alipurduar",
            "Rangiya",
            "Lumding",
            "Tinsukia"
          ]
        },
        {
          "zone_name": "Northern Railway",
          "short_form": "NR",
          "headquarters": "New Delhi",
          "established_year": 1952,
          "covered_states": [
            "Delhi",
            "Punjab",
            "Haryana",
            "Uttar Pradesh",
            "Himachal Pradesh",
            "Uttarakhand",
            "Jammu & Kashmir"
          ],
          "total_divisions": 5,
          "divisions": [
            "Delhi",
            "Ambala",
            "Firozpur",
            "Lucknow",
            "Moradabad"
          ]
        },
        {
          "zone_name": "North Western Railway",
          "short_form": "NWR",
          "headquarters": "Jaipur",
          "established_year": 2002,
          "covered_states": [
            "Rajasthan"
          ],
          "total_divisions": 4,
          "divisions": [
            "Jaipur",
            "Jodhpur",
            "Ajmer",
            "Bikaner"
          ]
        },
        {
          "zone_name": "South Central Railway",
          "short_form": "SCR",
          "headquarters": "Secunderabad",
          "established_year": 1966,
          "covered_states": [
            "Telangana",
            "Andhra Pradesh",
            "Maharashtra",
            "Karnataka",
            "Tamil Nadu"
          ],
          "total_divisions": 6,
          "divisions": [
            "Secunderabad",
            "Hyderabad",
            "Vijayawada",
            "Guntur",
            "Nanded",
            "Guntakal"
          ]
        },
        {
          "zone_name": "South East Central Railway",
          "short_form": "SECR",
          "headquarters": "Bilaspur",
          "established_year": 2003,
          "covered_states": [
            "Chhattisgarh",
            "Madhya Pradesh",
            "Maharashtra"
          ],
          "total_divisions": 3,
          "divisions": [
            "Bilaspur",
            "Raipur",
            "Nagpur"
          ]
        },
        {
          "zone_name": "South Eastern Railway",
          "short_form": "SER",
          "headquarters": "Kolkata",
          "established_year": 1955,
          "covered_states": [
            "West Bengal",
            "Jharkhand",
            "Odisha"
          ],
          "total_divisions": 4,
          "divisions": [
            "Howrah",
            "Adra",
            "Chakradharpur",
            "Kharagpur"
          ]
        },
        {
          "zone_name": "Southern Railway",
          "short_form": "SR",
          "headquarters": "Chennai",
          "established_year": 1951,
          "covered_states": [
            "Tamil Nadu",
            "Kerala",
            "Puducherry"
          ],
          "total_divisions": 6,
          "divisions": [
            "Chennai",
            "Salem",
            "Palakkad",
            "Trichy",
            "Madurai",
            "Trivandrum"
          ]
        },
        {
          "zone_name": "South Western Railway",
          "short_form": "SWR",
          "headquarters": "Hubballi",
          "established_year": 2003,
          "covered_states": [
            "Karnataka"
          ],
          "total_divisions": 3,
          "divisions": [
            "Hubballi",
            "Bengaluru",
            "Mysuru"
          ]
        },
        {
          "zone_name": "Western Central Railway",
          "short_form": "WCR",
          "headquarters": "Jabalpur",
          "established_year": 2003,
          "covered_states": [
            "Madhya Pradesh",
            "Uttar Pradesh"
          ],
          "total_divisions": 3,
          "divisions": [
            "Jabalpur",
            "Bhopal",
            "Kota"
          ]
        },
        {
          "zone_name": "Western Railway",
          "short_form": "WR",
          "headquarters": "Mumbai Churchgate",
          "established_year": 1951,
          "covered_states": [
            "Maharashtra",
            "Gujarat",
            "Rajasthan",
            "Madhya Pradesh"
          ],
          "total_divisions": 6,
          "divisions": [
            "Mumbai Central",
            "Vadodara",
            "Ahmedabad",
            "Ratlam",
            "Rajkot",
            "Bhavnagar"
          ]
        },
        {
          "zone_name": "Metro Railway",
          "short_form": "MR",
          "headquarters": "Kolkata",
          "established_year": 1984,
          "covered_states": [
            "West Bengal"
          ],
          "total_divisions": 1,
          "divisions": [
            "Metro Division"
          ]
        }
      ]
    };

    // Quiz state
    let currentQuizType = '';
    let currentQuestionIndex = 0;
    let score = 0;
    let questions = [];
    let userAnswers = [];
    let selectedOption = null;
    let currentAbbrQuestionType = ''; // 'mcq' or 'write'

    // Sentence exercise state
    let currentSentenceIndex = 0;
    let sentenceWords = [];

    // DOM elements
    const dashboard = document.getElementById('dashboard');
    const quizContainer = document.getElementById('quiz-container');
    const abbrQuizContainer = document.getElementById('abbr-quiz-container');
    const vocabContainer = document.getElementById('vocab-container');
    const abbrContainer = document.getElementById('abbr-container');
    const statesContainer = document.getElementById('states-container');
    const countriesContainer = document.getElementById('countries-container');
    const railwayContainer = document.getElementById('railway-container');
    const sentenceContainer = document.getElementById('sentence-container');
    const resultsContainer = document.getElementById('results-container');

    // Navigation buttons
    document.getElementById('nav-quiz').addEventListener('click', showDashboard);
    document.getElementById('nav-vocab').addEventListener('click', showVocabularyList);
    document.getElementById('nav-abbr').addEventListener('click', showAbbreviationsList);
    document.getElementById('nav-states').addEventListener('click', showStatesList);
    document.getElementById('nav-countries').addEventListener('click', showCountriesList);
    document.getElementById('nav-railway').addEventListener('click', showRailwayList);
    document.getElementById('nav-sentence').addEventListener('click', showSentenceExercise);

    // Quiz start buttons
    document.getElementById('start-synonyms').addEventListener('click', () => startQuiz('synonyms'));
    document.getElementById('start-antonyms').addEventListener('click', () => startQuiz('antonyms'));
    document.getElementById('start-abbreviations').addEventListener('click', startAbbreviationsQuiz);
    document.getElementById('start-states').addEventListener('click', () => startGeneralQuiz('states'));
    document.getElementById('start-countries').addEventListener('click', () => startGeneralQuiz('countries'));
    document.getElementById('start-railway').addEventListener('click', () => startGeneralQuiz('railway'));
    document.getElementById('start-sentence').addEventListener('click', startSentenceExercise);

    // Back to dashboard buttons
    document.getElementById('back-to-dashboard').addEventListener('click', showDashboard);
    document.getElementById('abbr-back-to-dashboard').addEventListener('click', showDashboard);
    document.getElementById('vocab-back-to-dashboard').addEventListener('click', showDashboard);
    document.getElementById('abbr-list-back-to-dashboard').addEventListener('click', showDashboard);
    document.getElementById('states-back-to-dashboard').addEventListener('click', showDashboard);
    document.getElementById('countries-back-to-dashboard').addEventListener('click', showDashboard);
    document.getElementById('railway-back-to-dashboard').addEventListener('click', showDashboard);
    document.getElementById('sentence-back-to-dashboard').addEventListener('click', showDashboard);
    document.getElementById('back-to-dashboard-results').addEventListener('click', showDashboard);

    // Quiz navigation buttons
    document.getElementById('next-question').addEventListener('click', nextQuestion);
    document.getElementById('abbr-next-question').addEventListener('click', nextAbbrQuestion);
    document.getElementById('submit-written-answer').addEventListener('click', submitWrittenAnswer);

    // Sentence exercise buttons
    document.getElementById('check-sentence').addEventListener('click', checkSentence);
    document.getElementById('next-sentence-word').addEventListener('click', nextSentenceWord);

    // Show dashboard
    function showDashboard() {
      dashboard.style.display = 'grid';
      quizContainer.style.display = 'none';
      abbrQuizContainer.style.display = 'none';
      vocabContainer.style.display = 'none';
      abbrContainer.style.display = 'none';
      statesContainer.style.display = 'none';
      countriesContainer.style.display = 'none';
      railwayContainer.style.display = 'none';
      sentenceContainer.style.display = 'none';
      resultsContainer.style.display = 'none';
      resetQuiz();
    }

    // Show vocabulary list
    function showVocabularyList() {
      dashboard.style.display = 'none';
      quizContainer.style.display = 'none';
      abbrQuizContainer.style.display = 'none';
      vocabContainer.style.display = 'block';
      abbrContainer.style.display = 'none';
      statesContainer.style.display = 'none';
      countriesContainer.style.display = 'none';
      railwayContainer.style.display = 'none';
      sentenceContainer.style.display = 'none';
      resultsContainer.style.display = 'none';

      // Populate vocabulary list
      const vocabList = document.getElementById('vocab-list');
      vocabList.innerHTML = '';

      // Use the data from appData
      const vocabularyData = appData.words || [];

      vocabularyData.forEach(item => {
        const vocabItem = document.createElement('div');
        vocabItem.className = 'vocab-item';

        let synonymsHTML = '';
        if (item.synonyms && item.synonyms.length > 0) {
          synonymsHTML = `<div class="vocab-synonyms">
                        <strong>Synonyms:</strong> ${item.synonyms.map(s => `<span class="syn-tag">${s}</span>`).join(' ')}
                    </div>`;
        }

        let antonymsHTML = '';
        if (item.antonyms && item.antonyms.length > 0) {
          antonymsHTML = `<div class="vocab-antonyms">
                        <strong>Antonyms:</strong> ${item.antonyms.map(a => `<span class="ant-tag">${a}</span>`).join(' ')}
                    </div>`;
        }

        vocabItem.innerHTML = `
                    <div class="vocab-word">
                        ${item.word}
                        <span class="type-indicator type-mcq">${item.synonyms && item.synonyms.length > 0 ? 'Syn/Ant' : 'Word'}</span>
                    </div>
                    <div class="vocab-meaning">${item.meaning}</div>
                    <div class="vocab-hindi">Hindi: ${item.hindi_meaning || 'N/A'}</div>
                    ${synonymsHTML}
                    ${antonymsHTML}
                `;

        vocabList.appendChild(vocabItem);
      });
    }

    // Show abbreviations list
    function showAbbreviationsList() {
      dashboard.style.display = 'none';
      quizContainer.style.display = 'none';
      abbrQuizContainer.style.display = 'none';
      vocabContainer.style.display = 'none';
      abbrContainer.style.display = 'block';
      statesContainer.style.display = 'none';
      countriesContainer.style.display = 'none';
      railwayContainer.style.display = 'none';
      sentenceContainer.style.display = 'none';
      resultsContainer.style.display = 'none';

      // Populate abbreviations list
      const abbrList = document.getElementById('abbr-list');
      abbrList.innerHTML = '';

      // Use the data from appData
      const abbreviationsData = appData.abbreviations || {};

      Object.entries(abbreviationsData).forEach(([abbrev, fullForm]) => {
        const abbrItem = document.createElement('div');
        abbrItem.className = 'abbr-item';
        abbrItem.innerHTML = `
                    <div class="abbr-short">${abbrev}</div>
                    <div class="abbr-full">${fullForm}</div>
                `;
        abbrList.appendChild(abbrItem);
      });
    }

    // Show states list
    function showStatesList() {
      dashboard.style.display = 'none';
      quizContainer.style.display = 'none';
      abbrQuizContainer.style.display = 'none';
      vocabContainer.style.display = 'none';
      abbrContainer.style.display = 'none';
      statesContainer.style.display = 'block';
      countriesContainer.style.display = 'none';
      railwayContainer.style.display = 'none';
      sentenceContainer.style.display = 'none';
      resultsContainer.style.display = 'none';

      // Populate states list
      const statesList = document.getElementById('states-list');
      statesList.innerHTML = '';

      // Use the data from appData
      const statesData = appData.state || [];

      statesData.forEach(state => {
        const stateItem = document.createElement('div');
        stateItem.className = 'state-item';

        stateItem.innerHTML = `
                    <div class="state-name">
                        ${state.name}
                        <span class="type-indicator type-mcq">${state.chief_minister ? 'State' : 'UT'}</span>
                    </div>
                    <div class="state-detail">
                        <div class="detail-item">
                            <span class="detail-label">Capital:</span>
                            <span class="detail-value">${state.capital}</span>
                        </div>
                        ${state.chief_minister ? `
                        <div class="detail-item">
                            <span class="detail-label">Chief Minister:</span>
                            <span class="detail-value">${state.chief_minister}</span>
                        </div>` : ''}
                        <div class="detail-item">
                            <span class="detail-label">Governor/LG:</span>
                            <span class="detail-value">${state.governor_or_lg}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">Established:</span>
                            <span class="detail-value">${state.established_year}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">Districts:</span>
                            <span class="detail-value">${state.total_districts}</span>
                        </div>
                    </div>
                `;

        statesList.appendChild(stateItem);
      });
    }

    // Show countries list
    function showCountriesList() {
      dashboard.style.display = 'none';
      quizContainer.style.display = 'none';
      abbrQuizContainer.style.display = 'none';
      vocabContainer.style.display = 'none';
      abbrContainer.style.display = 'none';
      statesContainer.style.display = 'none';
      countriesContainer.style.display = 'block';
      railwayContainer.style.display = 'none';
      sentenceContainer.style.display = 'none';
      resultsContainer.style.display = 'none';

      // Populate countries list
      const countriesList = document.getElementById('countries-list');
      countriesList.innerHTML = '';

      // Use the data from appData
      const countriesData = appData.countries || [];

      countriesData.forEach(country => {
        const countryItem = document.createElement('div');
        countryItem.className = 'country-item';

        countryItem.innerHTML = `
                    <div class="country-name">
                        ${country.name}
                        <span class="type-indicator type-mcq">${country.continent}</span>
                    </div>
                    <div class="country-detail">
                        <div class="detail-item">
                            <span class="detail-label">Capital:</span>
                            <span class="detail-value">${country.capital}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">Currency:</span>
                            <span class="detail-value">${country.currency}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">Head of State/Govt:</span>
                            <span class="detail-value">${country.head_of_state_or_government}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">Continent:</span>
                            <span class="detail-value">${country.continent}</span>
                        </div>
                    </div>
                `;

        countriesList.appendChild(countryItem);
      });
    }

    // Show railway list
    function showRailwayList() {
      dashboard.style.display = 'none';
      quizContainer.style.display = 'none';
      abbrQuizContainer.style.display = 'none';
      vocabContainer.style.display = 'none';
      abbrContainer.style.display = 'none';
      statesContainer.style.display = 'none';
      countriesContainer.style.display = 'none';
      railwayContainer.style.display = 'block';
      sentenceContainer.style.display = 'none';
      resultsContainer.style.display = 'none';

      // Populate railway list
      const railwayList = document.getElementById('railway-list');
      railwayList.innerHTML = '';

      // Use the data from appData
      const railwayData = appData.railway || [];

      railwayData.forEach(zone => {
        const railwayItem = document.createElement('div');
        railwayItem.className = 'railway-item';

        railwayItem.innerHTML = `
                    <div class="railway-name">
                        ${zone.zone_name}
                        <span class="type-indicator type-mcq">${zone.short_form}</span>
                    </div>
                    <div class="railway-detail">
                        <div class="detail-item">
                            <span class="detail-label">Headquarters:</span>
                            <span class="detail-value">${zone.headquarters}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">Established:</span>
                            <span class="detail-value">${zone.established_year}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">Covered States:</span>
                            <span class="detail-value">${zone.covered_states.join(', ')}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">Divisions:</span>
                            <span class="detail-value">${zone.divisions.join(', ')}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">Total Divisions:</span>
                            <span class="detail-value">${zone.total_divisions}</span>
                        </div>
                    </div>
                `;

        railwayList.appendChild(railwayItem);
      });
    }

    // Show sentence exercise
    function showSentenceExercise() {
      dashboard.style.display = 'none';
      quizContainer.style.display = 'none';
      abbrQuizContainer.style.display = 'none';
      vocabContainer.style.display = 'none';
      abbrContainer.style.display = 'none';
      statesContainer.style.display = 'none';
      countriesContainer.style.display = 'none';
      railwayContainer.style.display = 'none';
      sentenceContainer.style.display = 'block';
      resultsContainer.style.display = 'none';

      // Initialize sentence words if not already done
      if (sentenceWords.length === 0) {
        // Select 10 random words from vocabulary data
        const vocabularyData = appData.words || [];
        const shuffled = [...vocabularyData].sort(() => 0.5 - Math.random());
        sentenceWords = shuffled.slice(0, 10);
        currentSentenceIndex = 0;
      }

      loadSentenceWord();
    }

    // Start sentence exercise
    function startSentenceExercise() {
      // Select 10 random words from vocabulary data
      const vocabularyData = appData.words || [];
      const shuffled = [...vocabularyData].sort(() => 0.5 - Math.random());
      sentenceWords = shuffled.slice(0, 10);
      currentSentenceIndex = 0;
      showSentenceExercise();
    }

    // Load current sentence word
    function loadSentenceWord() {
      if (currentSentenceIndex >= sentenceWords.length) {
        // All words completed, reset
        alert("You've completed all sentence exercises! Starting over.");
        currentSentenceIndex = 0;
      }

      const wordData = sentenceWords[currentSentenceIndex];
      document.getElementById('sentence-word').textContent = wordData.word;
      document.getElementById('sentence-meaning').textContent = wordData.meaning;
      document.getElementById('sentence-input').value = '';

      // Hide feedback
      const feedback = document.getElementById('sentence-feedback');
      feedback.style.display = 'none';
      feedback.className = 'sentence-feedback';

      // Update button text for last word
      const nextBtn = document.getElementById('next-sentence-word');
      if (currentSentenceIndex === sentenceWords.length - 1) {
        nextBtn.innerHTML = 'Finish <i class="fas fa-flag-checkered"></i>';
      } else {
        nextBtn.innerHTML = 'Next Word <i class="fas fa-arrow-right"></i>';
      }
    }

    // Check sentence
    function checkSentence() {
      const sentenceInput = document.getElementById('sentence-input').value.trim();
      const word = sentenceWords[currentSentenceIndex].word;
      const feedback = document.getElementById('sentence-feedback');

      if (!sentenceInput) {
        feedback.textContent = "Please write a sentence before checking.";
        feedback.className = 'sentence-feedback incorrect';
        feedback.style.display = 'block';
        return;
      }

      // Basic validation: check if sentence contains the word and has proper structure
      const containsWord = sentenceInput.toLowerCase().includes(word.toLowerCase());
      const hasMinLength = sentenceInput.split(' ').length >= 3;
      const hasPeriod = sentenceInput.endsWith('.') || sentenceInput.endsWith('!') || sentenceInput.endsWith('?');

      if (containsWord && hasMinLength && hasPeriod) {
        feedback.innerHTML = `
                    <i class="fas fa-check-circle"></i> <strong>Great job!</strong> Your sentence is well-structured and correctly uses the word "${word}".
                    <br><br>
                    <strong>Your sentence:</strong> "${sentenceInput}"
                `;
        feedback.className = 'sentence-feedback correct';
      } else {
        let issues = [];
        if (!containsWord) issues.push(`Your sentence should contain the word "${word}"`);
        if (!hasMinLength) issues.push("Your sentence is too short (minimum 3 words)");
        if (!hasPeriod) issues.push("Your sentence should end with a period, exclamation mark, or question mark");

        feedback.innerHTML = `
                    <i class="fas fa-exclamation-circle"></i> <strong>Try again:</strong> 
                    <ul>${issues.map(issue => `<li>${issue}</li>`).join('')}</ul>
                    <br>
                    <strong>Example:</strong> "Good ${word.toLowerCase()} is essential for personal growth."
                `;
        feedback.className = 'sentence-feedback incorrect';
      }

      feedback.style.display = 'block';
    }

    // Next sentence word
    function nextSentenceWord() {
      currentSentenceIndex++;
      if (currentSentenceIndex >= sentenceWords.length) {
        // Finished all words
        alert("Congratulations! You've completed all sentence exercises.");
        showDashboard();
      } else {
        loadSentenceWord();
      }
    }

    // Reset quiz state
    function resetQuiz() {
      currentQuestionIndex = 0;
      score = 0;
      questions = [];
      userAnswers = [];
      selectedOption = null;
      document.getElementById('next-question').disabled = true;
      document.getElementById('abbr-next-question').disabled = true;
      document.getElementById('next-question').innerHTML = 'Next Question <i class="fas fa-arrow-right"></i>';
      document.getElementById('abbr-next-question').innerHTML = 'Next Question <i class="fas fa-arrow-right"></i>';
    }

    // Start quiz for synonyms/antonyms
    function startQuiz(type) {
      currentQuizType = type;
      resetQuiz();
      generateQuestions(type);

      // Update UI
      dashboard.style.display = 'none';
      quizContainer.style.display = 'block';
      abbrQuizContainer.style.display = 'none';
      vocabContainer.style.display = 'none';
      abbrContainer.style.display = 'none';
      statesContainer.style.display = 'none';
      countriesContainer.style.display = 'none';
      railwayContainer.style.display = 'none';
      sentenceContainer.style.display = 'none';
      resultsContainer.style.display = 'none';

      // Set quiz title
      document.getElementById('quiz-type').textContent =
        type === 'synonyms' ? 'Synonyms Quiz' : 'Antonyms Quiz';

      // Load first question
      loadQuestion();
    }

    // Start abbreviations quiz
    function startAbbreviationsQuiz() {
      resetQuiz();
      generateAbbrQuestions();

      // Update UI
      dashboard.style.display = 'none';
      quizContainer.style.display = 'none';
      abbrQuizContainer.style.display = 'block';
      vocabContainer.style.display = 'none';
      abbrContainer.style.display = 'none';
      statesContainer.style.display = 'none';
      countriesContainer.style.display = 'none';
      railwayContainer.style.display = 'none';
      sentenceContainer.style.display = 'none';
      resultsContainer.style.display = 'none';

      // Load first question
      loadAbbrQuestion();
    }

    // Start general quiz (states, countries, railway)
    function startGeneralQuiz(type) {
      currentQuizType = type;
      resetQuiz();
      generateGeneralQuestions(type);

      // Update UI
      dashboard.style.display = 'none';
      quizContainer.style.display = 'block';
      abbrQuizContainer.style.display = 'none';
      vocabContainer.style.display = 'none';
      abbrContainer.style.display = 'none';
      statesContainer.style.display = 'none';
      countriesContainer.style.display = 'none';
      railwayContainer.style.display = 'none';
      sentenceContainer.style.display = 'none';
      resultsContainer.style.display = 'none';

      // Set quiz title
      let title = '';
      if (type === 'states') title = 'Indian States & UTs Quiz';
      else if (type === 'countries') title = 'World Countries Quiz';
      else if (type === 'railway') title = 'Railway Zones Quiz';
      if (type === 'railway') {
            debugRailwayQuestions();
        }
      document.getElementById('quiz-type').textContent = title;

      // Load first question
      loadQuestion();
    }

    // Generate questions for synonyms/antonyms
    function generateQuestions(type) {
      // Get random vocabulary items from appData
      const vocabularyData = appData.words || [];
      const shuffled = vocabularyData.filter(item =>
        (type === 'synonyms' && item.synonyms && item.synonyms.length > 0) ||
        (type === 'antonyms' && item.antonyms && item.antonyms.length > 0)
      ).sort(() => 0.5 - Math.random());

      const selected = shuffled.slice(0, 10);

      selected.forEach(item => {
        const correctAnswer = type === 'synonyms'
          ? item.synonyms[0]
          : item.antonyms[0];

        // Generate wrong answers
        let wrongAnswers = [];
        if (type === 'synonyms') {
          // Get synonyms from other words
          const otherItems = vocabularyData.filter(v => v.word !== item.word && v.synonyms && v.synonyms.length > 0);
          otherItems.forEach(otherItem => {
            wrongAnswers.push(...otherItem.synonyms);
          });
        } else {
          // Get antonyms from other words
          const otherItems = vocabularyData.filter(v => v.word !== item.word && v.antonyms && v.antonyms.length > 0);
          otherItems.forEach(otherItem => {
            wrongAnswers.push(...otherItem.antonyms);
          });
        }

        // Shuffle and select 3 wrong answers
        wrongAnswers = [...new Set(wrongAnswers)]; // Remove duplicates
        wrongAnswers = wrongAnswers.sort(() => 0.5 - Math.random()).slice(0, 3);

        // Create question object
        questions.push({
          type: type,
          word: item.word,
          meaning: item.meaning,
          correctAnswer: correctAnswer,
          options: shuffleArray([correctAnswer, ...wrongAnswers])
        });
      });
    }

    // Generate questions for abbreviations (mixed MCQ and write)
    function generateAbbrQuestions() {
      // Get random abbreviations from appData
      const abbreviationsData = appData.abbreviations || {};
      const abbrevEntries = Object.entries(abbreviationsData);
      const shuffled = [...abbrevEntries].sort(() => 0.5 - Math.random());
      const selected = shuffled.slice(0, 10);

      selected.forEach(([abbrev, fullForm], index) => {
        // Alternate between MCQ and write questions (5 of each)
        const isWriteQuestion = index % 2 === 0; // Even indices are write questions

        if (!isWriteQuestion) {
          // Generate wrong answers for MCQ questions
          const otherEntries = abbrevEntries.filter(([a,]) => a !== abbrev);
          const wrongAnswers = otherEntries
            .map(([, ff]) => ff)
            .sort(() => 0.5 - Math.random())
            .slice(0, 3);

          // Create MCQ question object
          questions.push({
            type: 'abbreviations',
            questionType: 'mcq',
            abbreviation: abbrev,
            correctAnswer: fullForm,
            options: shuffleArray([fullForm, ...wrongAnswers])
          });
        } else {
          // Create write question object
          questions.push({
            type: 'abbreviations',
            questionType: 'write',
            abbreviation: abbrev,
            correctAnswer: fullForm
          });
        }
      });
    }

    // Generate questions for general topics (states, countries, railway)
    function generateGeneralQuestions(topic) {
      let data = [];
      let questionTypes = [];

      if (topic === 'states') {
        data = appData.state || [];
        questionTypes = [
          { type: 'capital', text: 'What is the capital of [name]?' },
          { type: 'chief_minister', text: 'Who is the Chief Minister of [name]?' },
          { type: 'governor_or_lg', text: 'Who is the Governor/Lieutenant Governor of [name]?' },
          { type: 'established_year', text: 'In which year was [name] established?' }
        ];
      } else if (topic === 'countries') {
        data = appData.countries || [];
        questionTypes = [
          { type: 'capital', text: 'What is the capital of [name]?' },
          { type: 'currency', text: 'What is the currency of [name]?' },
          { type: 'head_of_state_or_government', text: 'Who is the head of state/government of [name]?' },
          { type: 'continent', text: 'On which continent is [name] located?' }
        ];
      } else   if (topic === 'railway') {
        data = appData.railway || [];
        questionTypes = [
            { type: 'headquarters', text: 'Where is the headquarters of [name]?' },
            { type: 'short_form', text: 'What is the short form of [name]?' },
            { type: 'established_year', text: 'In which year was [name] established?' },
            { type: 'covered_states', text: 'Which states are covered by [name]?' }
        ];
        
        // Generate questions for railway
        const shuffled = [...data].sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, Math.min(10, shuffled.length));
        
        selected.forEach(item => {
            // Randomly select a question type
            const qType = questionTypes[Math.floor(Math.random() * questionTypes.length)];
            
            // Get correct answer based on question type
            let correctAnswer;
            if (qType.type === 'covered_states') {
                correctAnswer = Array.isArray(item.covered_states) ? 
                    item.covered_states.join(', ') : 
                    String(item.covered_states);
            } else {
                correctAnswer = String(item[qType.type] || 'Unknown');
            }
            
            // Generate wrong answers
            let wrongAnswers = [];
            
            // For established_year questions
            if (qType.type === 'established_year') {
                const year = parseInt(correctAnswer);
                // Generate random years around the correct year
                wrongAnswers = [
                    year + Math.floor(Math.random() * 5) + 1,
                    year - Math.floor(Math.random() * 5) - 1,
                    Math.floor(Math.random() * 50) + 1950
                ].filter(y => y !== year).slice(0, 3);
            } 
            // For headquarters questions
            else if (qType.type === 'headquarters') {
                const otherItems = data.filter(d => d !== item);
                wrongAnswers = otherItems
                    .map(d => d.headquarters)
                    .filter(hq => hq && hq !== correctAnswer)
                    .sort(() => 0.5 - Math.random())
                    .slice(0, 3);
                
                // If not enough wrong answers, add generic ones
                while (wrongAnswers.length < 3) {
                    wrongAnswers.push(`Location ${wrongAnswers.length + 1}`);
                }
            }
            // For other question types
            else {
                const otherItems = data.filter(d => d !== item);
                wrongAnswers = otherItems
                    .map(d => String(d[qType.type] || ''))
                    .filter(val => val && val !== correctAnswer)
                    .sort(() => 0.5 - Math.random())
                    .slice(0, 3);
            }
            
            // Ensure we have exactly 3 wrong answers
            while (wrongAnswers.length < 3) {
                wrongAnswers.push(`Option ${wrongAnswers.length + 1}`);
            }
            
            // Remove duplicates
            wrongAnswers = [...new Set(wrongAnswers)];
            
            // Format question text with actual item name
            const itemName = item.zone_name || item.name || 'this zone';
            const questionText = qType.text.replace('[name]', itemName);
            
            // Create question object
            questions.push({
                type: topic,
                item: item,
                questionType: qType.type,
                questionText: questionText,
                correctAnswer: correctAnswer,
                options: shuffleArray([correctAnswer, ...wrongAnswers])
            });
        });
    }

      // Shuffle and select 10 items
      const shuffled = [...data].sort(() => 0.5 - Math.random());
      const selected = shuffled.slice(0, 10);

      selected.forEach(item => {
        // Randomly select a question type
        const qType = questionTypes[Math.floor(Math.random() * questionTypes.length)];

        // Get correct answer based on question type
        const correctAnswer = item[qType.type];

        // Generate wrong answers
        let wrongAnswers = [];
        const otherItems = data.filter(d => d !== item);

        // Get 3 wrong answers from other items
        for (let i = 0; i < 3; i++) {
          const randomItem = otherItems[Math.floor(Math.random() * otherItems.length)];
          if (randomItem && randomItem[qType.type]) {
            wrongAnswers.push(randomItem[qType.type]);
          }
        }

        // Remove duplicates
        wrongAnswers = [...new Set(wrongAnswers)];

        // If we don't have enough wrong answers, add some generic ones
        while (wrongAnswers.length < 3) {
          if (topic === 'states') {
            wrongAnswers.push(`Unknown ${wrongAnswers.length + 1}`);
          } else if (topic === 'countries') {
            wrongAnswers.push(`Placeholder ${wrongAnswers.length + 1}`);
          } else if (topic === 'railway') {
            wrongAnswers.push(`Location ${wrongAnswers.length + 1}`);
          }
        }

        // Create question object
        questions.push({
          type: topic,
          item: item,
          questionType: qType.type,
          questionText: qType.text.replace('[name]', item.name || item.zone_name),
          correctAnswer: correctAnswer,
          options: shuffleArray([correctAnswer, ...wrongAnswers])
        });
      });
    }

    // Shuffle array
    function shuffleArray(array) {
      // Create a copy to avoid mutating original
      const newArray = [...array];

      // Fisher-Yates shuffle algorithm
      for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
      }

      return newArray;
    }

    function debugRailwayQuestions() {
    console.log('Railway Data:', appData.railway);
    console.log('Generated Questions:', questions);
    
    questions.forEach((q, index) => {
        console.log(`Question ${index + 1}:`, {
            questionText: q.questionText,
            item: q.item,
            correctAnswer: q.correctAnswer,
            options: q.options
        });
    });
}

    function getUniqueWrongAnswers(data, currentItem, field, count = 3) {
      const wrongAnswers = new Set();
      const otherItems = data.filter(item =>
        item !== currentItem && item[field] && item[field] !== currentItem[field]
      );

      // Shuffle other items
      const shuffledOthers = [...otherItems].sort(() => 0.5 - Math.random());

      for (let i = 0; i < Math.min(shuffledOthers.length, count); i++) {
        const answer = shuffledOthers[i][field];
        if (answer && !wrongAnswers.has(answer)) {
          wrongAnswers.add(answer);
        }
      }

      return Array.from(wrongAnswers);
    }
    // Load current question for synonyms/antonyms/general
    function loadQuestion() {
      const question = questions[currentQuestionIndex];

      // Update progress
      document.getElementById('quiz-progress').textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;

      // Set question text
      if (question.type === 'synonyms') {
        questionElement.textContent = `What is a synonym for the word '${question.word}'?`;
      } else if (question.type === 'antonyms') {
        questionElement.textContent = `What is an antonym for the word '${question.word}'?`;
      } else if (question.type === 'railway') {
            const zoneName = question.item?.zone_name || 'this railway zone';
            if (question.questionType === 'headquarters') {
                questionElement.textContent = `Where is the headquarters of ${zoneName}?`;
            } else if (question.questionType === 'established_year') {
                questionElement.textContent = `In which year was ${zoneName} established?`;
            } else if (question.questionType === 'short_form') {
                questionElement.textContent = `What is the short form of ${zoneName}?`;
            } else {
                questionElement.textContent = `Question about ${zoneName}`;
            } 
          } else {
        // For general topics
        questionElement.textContent = question.questionText;
      }

      // Clear options
      const optionsContainer = document.getElementById('options-container');
      optionsContainer.innerHTML = '';

      // Create option elements
      const letters = ['A', 'B', 'C', 'D'];
      question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.innerHTML = `
                    <div class="option-letter">${letters[index]}</div>
                    <div class="option-text">${option}</div>
                `;

        optionElement.addEventListener('click', () => selectOption(optionElement, option));
        optionsContainer.appendChild(optionElement);
      });

      // Reset selected option
      selectedOption = null;
      document.getElementById('next-question').disabled = true;
    }

    // Load current question for abbreviations
    function loadAbbrQuestion() {
      const question = questions[currentQuestionIndex];
      currentAbbrQuestionType = question.questionType;

      // Update progress
      document.getElementById('abbr-quiz-progress').textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;

      // Set question text
      document.getElementById('abbr-question').textContent = `What is the full form of '${question.abbreviation}'?`;

      // Show appropriate question type
      const optionsContainer = document.getElementById('abbr-options-container');
      const writeContainer = document.getElementById('write-answer-container');

      if (question.questionType === 'mcq') {
        // Show MCQ options
        writeContainer.style.display = 'none';
        optionsContainer.style.display = 'grid';

        // Clear options
        optionsContainer.innerHTML = '';

        // Create option elements
        const letters = ['A', 'B', 'C', 'D'];
        question.options.forEach((option, index) => {
          const optionElement = document.createElement('div');
          optionElement.className = 'option';
          optionElement.innerHTML = `
                        <div class="option-letter">${letters[index]}</div>
                        <div class="option-text">${option}</div>
                    `;

          optionElement.addEventListener('click', () => selectAbbrOption(optionElement, option));
          optionsContainer.appendChild(optionElement);
        });
      } else {
        // Show write answer section
        optionsContainer.style.display = 'none';
        writeContainer.style.display = 'block';
        document.getElementById('write-answer-input').value = '';
      }

      // Reset selected option
      selectedOption = null;
      document.getElementById('abbr-next-question').disabled = true;
    }

    // Select an option for synonyms/antonyms/general
    function selectOption(optionElement, option) {
      // Remove selected class from all options
      document.querySelectorAll('#options-container .option').forEach(opt => {
        opt.classList.remove('selected');
      });

      // Add selected class to clicked option
      optionElement.classList.add('selected');
      selectedOption = option;
      document.getElementById('next-question').disabled = false;
    }

    // Select an option for abbreviations MCQ
    function selectAbbrOption(optionElement, option) {
      // Remove selected class from all options
      document.querySelectorAll('#abbr-options-container .option').forEach(opt => {
        opt.classList.remove('selected');
      });

      // Add selected class to clicked option
      optionElement.classList.add('selected');
      selectedOption = option;
      document.getElementById('abbr-next-question').disabled = false;
    }

    // Submit written answer for abbreviations
    function submitWrittenAnswer() {
      const userAnswer = document.getElementById('write-answer-input').value.trim();
      if (!userAnswer) {
        alert('Please write an answer before submitting.');
        return;
      }

      selectedOption = userAnswer;
      document.getElementById('abbr-next-question').disabled = false;
    }

    // Move to next question for synonyms/antonyms/general
    function nextQuestion() {
      // Save user's answer
      const question = questions[currentQuestionIndex];
      const isCorrect = selectedOption === question.correctAnswer;

      userAnswers.push({
        question: question,
        userAnswer: selectedOption,
        isCorrect: isCorrect
      });

      // Update score if correct
      if (isCorrect) {
        score++;
      }

      // Move to next question or show results
      currentQuestionIndex++;

      if (currentQuestionIndex < questions.length) {
        loadQuestion();
      } else {
        showResults();
      }
    }

    // Move to next question for abbreviations
    function nextAbbrQuestion() {
      // Save user's answer
      const question = questions[currentQuestionIndex];
      let isCorrect = false;

      if (question.questionType === 'mcq') {
        isCorrect = selectedOption === question.correctAnswer;
      } else {
        // For write questions, do a case-insensitive partial match
        const userAnswer = selectedOption.toLowerCase();
        const correctAnswer = question.correctAnswer.toLowerCase();
        isCorrect = correctAnswer.includes(userAnswer) || userAnswer.includes(correctAnswer) ||
          userAnswer.replace(/[^a-zA-Z]/g, '') === correctAnswer.replace(/[^a-zA-Z]/g, '');
      }

      userAnswers.push({
        question: question,
        userAnswer: selectedOption,
        isCorrect: isCorrect,
        questionType: question.questionType
      });

      // Update score if correct
      if (isCorrect) {
        score++;
      }

      // Move to next question or show results
      currentQuestionIndex++;

      if (currentQuestionIndex < questions.length) {
        loadAbbrQuestion();
      } else {
        showResults();
      }
    }

    // Show results
    function showResults() {
      quizContainer.style.display = 'none';
      abbrQuizContainer.style.display = 'none';
      vocabContainer.style.display = 'none';
      abbrContainer.style.display = 'none';
      statesContainer.style.display = 'none';
      countriesContainer.style.display = 'none';
      railwayContainer.style.display = 'none';
      sentenceContainer.style.display = 'none';
      resultsContainer.style.display = 'block';
      resultsContainer.classList.add('celebrate');

      // Update scores
      const wrongAnswers = questions.length - score;
      correctScoreElement.textContent = score;
      wrongScoreElement.textContent = wrongAnswers;

      // Set reward message
      let rewardTitle = '';
      let rewardText = '';

      if (score === questions.length) {
        rewardTitle = 'Perfect Score! 🎉';
        rewardText = 'Outstanding! You got all answers correct. You are a knowledge master!';
        rewardContainer.style.background = 'linear-gradient(135deg, #a8e6cf 0%, #dcedc1 100%)';
      } else if (score >= questions.length * 0.8) {
        rewardTitle = 'Excellent Work! 🌟';
        rewardText = 'Great job! You have impressive knowledge.';
        rewardContainer.style.background = 'linear-gradient(135deg, #ffd3a5 0%, #fd6585 100%)';
      } else if (score >= questions.length * 0.6) {
        rewardTitle = 'Good Job! 👍';
        rewardText = 'Well done! You have a good grasp of the topic. Keep practicing to improve further.';
        rewardContainer.style.background = 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)';
      } else {
        rewardTitle = 'Keep Practicing! 💪';
        rewardText = 'You can do better! Try again to improve your knowledge.';
        rewardContainer.style.background = 'linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)';
      }

      rewardTitleElement.textContent = rewardTitle;
      rewardTextElement.textContent = rewardText;

      // Generate review of answers
      answersReviewElement.innerHTML = '';
      userAnswers.forEach((answer, index) => {
        const reviewItem = document.createElement('div');
        reviewItem.className = 'review-item';

        let questionText = '';
        if (answer.question.type === 'synonyms') {
          questionText = `What is a synonym for '${answer.question.word}'?`;
        } else if (answer.question.type === 'antonyms') {
          questionText = `What is an antonym for '${answer.question.word}'?`;
        } else if (answer.question.type === 'abbreviations') {
          questionText = `What is the full form of '${answer.question.abbreviation}'?`;
          if (answer.questionType === 'write') {
            questionText += ' <span class="type-indicator type-write">Write Answer</span>';
          } else {
            questionText += ' <span class="type-indicator type-mcq">MCQ</span>';
          }
        } else {
          // For general topics
          questionText = answer.question.questionText;
        }

        const answerClass = answer.isCorrect ? 'correct-answer' : 'wrong-answer';
        const answerStatus = answer.isCorrect ? '✓ Correct' : '✗ Wrong';

        reviewItem.innerHTML = `
                    <div class="review-question">
                        <strong>Q${index + 1}:</strong> ${questionText}
                    </div>
                    <div class="review-answer ${answerClass}">
                        <div>Your answer: ${answer.userAnswer || '(No answer)'}</div>
                        <div>${answerStatus}</div>
                        ${!answer.isCorrect ? `<div>Correct answer: ${answer.question.correctAnswer}</div>` : ''}
                    </div>
                `;

        answersReviewElement.appendChild(reviewItem);
      });
    }

    // Initialize with animations
    document.addEventListener('DOMContentLoaded', () => {
      // Add floating animation to cards
      document.querySelectorAll('.card').forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
        card.classList.add('floating');
      });

      // Add pulse animation to buttons
      document.querySelectorAll('.btn, .nav-btn').forEach(btn => {
        btn.addEventListener('mouseenter', function () {
          this.classList.add('pulse');
        });

        btn.addEventListener('mouseleave', function () {
          this.classList.remove('pulse');
        });
      });

      // Set correct score element reference
      window.correctScoreElement = document.getElementById('correct-score');
      window.wrongScoreElement = document.getElementById('wrong-score');
      window.rewardTitleElement = document.getElementById('reward-title');
      window.rewardTextElement = document.getElementById('reward-text');
      window.rewardContainer = document.getElementById('reward-container');
      window.answersReviewElement = document.getElementById('answers-review');
      window.questionElement = document.getElementById('question');
    });
  </script>
</body>

</html>
  );
};

export default Study;
