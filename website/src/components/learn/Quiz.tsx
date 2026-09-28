"use client";

import { useState, useEffect, useRef } from "react";
import type { QuizQuestion } from "@/data/lessons";

interface QuizProps {
  questions: QuizQuestion[];
  onPass: () => void;
  passThreshold?: number; // percentage, default 80
}

export function Quiz({ questions, onPass, passThreshold = 80 }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const question = questions[currentQuestion];
  const selectedAnswer = selectedAnswers[question.id];
  const isCorrect = selectedAnswer === question.correctIndex;
  const hasAnswered = selectedAnswer !== undefined;

  const handleSelect = (index: number) => {
    if (hasAnswered) return;
    
    setSelectedAnswers(prev => ({
      ...prev,
      [question.id]: index
    }));
    setShowExplanation(true);
  };

  const handleNext = () => {
    setShowExplanation(false);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach(q => {
      if (selectedAnswers[q.id] === q.correctIndex) {
        correct++;
      }
    });
    return Math.round((correct / questions.length) * 100);
  };

  const handleRetry = () => {
    setSelectedAnswers({});
    setCurrentQuestion(0);
    setShowResults(false);
    setShowExplanation(false);
  };

  const score = showResults ? calculateScore() : 0;
  const passed = showResults && score >= passThreshold;
  const hasCalledOnPass = useRef(false);

  useEffect(() => {
    if (passed && !hasCalledOnPass.current) {
      hasCalledOnPass.current = true;
      onPass();
    }
  }, [passed, onPass]);

  if (showResults) {
    return (
      <div className="bg-slate-800 rounded-xl p-8 border border-slate-700 text-center">
        <div className={`text-6xl mb-4 ${passed ? "" : "grayscale"}`}>
          {passed ? "🎉" : "📚"}
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">
          {passed ? "Quiz Passed!" : "Not Quite..."}
        </h3>
        <p className="text-slate-400 mb-4">
          You scored <span className={passed ? "text-green-400" : "text-orange-400"} >{score}%</span>
          {!passed && ` (need ${passThreshold}% to pass)`}
        </p>
        
        {passed ? (
          <p className="text-green-400 mb-6">
            ✓ You've unlocked the next module!
          </p>
        ) : (
          <button
            onClick={handleRetry}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            Try Again
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
      {/* Progress */}
      <div className="flex items-center justify-between mb-6">
        <span className="text-slate-400 text-sm">
          Question {currentQuestion + 1} of {questions.length}
        </span>
        <div className="flex gap-1">
          {questions.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition ${
                i === currentQuestion
                  ? "bg-orange-500"
                  : i < currentQuestion
                  ? "bg-green-500"
                  : "bg-slate-600"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Question */}
      <h3 className="text-xl font-semibold text-white mb-6">{question.question}</h3>

      {/* Options */}
      <div className="space-y-3 mb-6">
        {question.options.map((option, index) => {
          const isSelected = selectedAnswer === index;
          const isCorrectAnswer = index === question.correctIndex;
          
          let bgColor = "bg-slate-700 hover:bg-slate-600";
          let borderColor = "border-slate-600";
          
          if (hasAnswered) {
            if (isCorrectAnswer) {
              bgColor = "bg-green-900/50";
              borderColor = "border-green-500";
            } else if (isSelected && !isCorrect) {
              bgColor = "bg-red-900/50";
              borderColor = "border-red-500";
            } else {
              bgColor = "bg-slate-700/50";
            }
          } else if (isSelected) {
            bgColor = "bg-orange-900/50";
            borderColor = "border-orange-500";
          }

          return (
            <button
              key={index}
              onClick={() => handleSelect(index)}
              disabled={hasAnswered}
              className={`w-full text-left p-4 rounded-lg border transition ${bgColor} ${borderColor} ${
                !hasAnswered ? "cursor-pointer" : "cursor-default"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  hasAnswered && isCorrectAnswer ? "border-green-500 bg-green-500" :
                  hasAnswered && isSelected && !isCorrect ? "border-red-500 bg-red-500" :
                  isSelected ? "border-orange-500" : "border-slate-500"
                }`}>
                  {hasAnswered && isCorrectAnswer && (
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                  {hasAnswered && isSelected && !isCorrect && (
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )}
                </div>
                <span className="text-white">{option}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Explanation */}
      {showExplanation && (
        <div className={`p-4 rounded-lg mb-6 ${isCorrect ? "bg-green-900/30 border border-green-700" : "bg-orange-900/30 border border-orange-700"}`}>
          <p className={`font-medium mb-1 ${isCorrect ? "text-green-400" : "text-orange-400"}`}>
            {isCorrect ? "✓ Correct!" : "✗ Not quite"}
          </p>
          <p className="text-slate-300 text-sm">{question.explanation}</p>
        </div>
      )}

      {/* Next button */}
      {hasAnswered && (
        <button
          onClick={handleNext}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-medium transition"
        >
          {currentQuestion < questions.length - 1 ? "Next Question →" : "See Results"}
        </button>
      )}
    </div>
  );
}
