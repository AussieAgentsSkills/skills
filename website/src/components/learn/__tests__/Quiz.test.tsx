import { render, screen, fireEvent } from "@testing-library/react";
import { Quiz } from "../Quiz";
import type { QuizQuestion } from "@/data/lessons";

const mockQuestions: QuizQuestion[] = [
  {
    id: "q1",
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    correctIndex: 1,
    explanation: "2 + 2 equals 4.",
  },
  {
    id: "q2",
    question: "What color is the sky?",
    options: ["Red", "Green", "Blue", "Yellow"],
    correctIndex: 2,
    explanation: "The sky appears blue due to Rayleigh scattering.",
  },
  {
    id: "q3",
    question: "Which planet is closest to the sun?",
    options: ["Venus", "Mercury", "Earth", "Mars"],
    correctIndex: 1,
    explanation: "Mercury is the closest planet to the sun.",
  },
];

function answerQuestion(optionText: string) {
  fireEvent.click(screen.getByText(optionText));
}

function clickNext() {
  const nextButton = screen.getByText(/Next Question|See Results/);
  fireEvent.click(nextButton);
}

function answerAllCorrectly() {
  answerQuestion("4");
  clickNext();
  answerQuestion("Blue");
  clickNext();
  answerQuestion("Mercury");
  clickNext();
}

function answerAllIncorrectly() {
  answerQuestion("3");
  clickNext();
  answerQuestion("Red");
  clickNext();
  answerQuestion("Venus");
  clickNext();
}

describe("Quiz", () => {
  it("renders the first question", () => {
    render(<Quiz questions={mockQuestions} onPass={jest.fn()} />);
    expect(screen.getByText("What is 2 + 2?")).toBeInTheDocument();
    expect(screen.getByText("Question 1 of 3")).toBeInTheDocument();
  });

  it("shows all answer options", () => {
    render(<Quiz questions={mockQuestions} onPass={jest.fn()} />);
    expect(screen.getByText("3")).toBeInTheDocument();
    expect(screen.getByText("4")).toBeInTheDocument();
    expect(screen.getByText("5")).toBeInTheDocument();
    expect(screen.getByText("6")).toBeInTheDocument();
  });

  it("shows explanation after selecting an answer", () => {
    render(<Quiz questions={mockQuestions} onPass={jest.fn()} />);
    answerQuestion("4");
    expect(screen.getByText("2 + 2 equals 4.")).toBeInTheDocument();
  });

  it("shows correct feedback for right answer", () => {
    render(<Quiz questions={mockQuestions} onPass={jest.fn()} />);
    answerQuestion("4");
    expect(screen.getByText(/Correct/)).toBeInTheDocument();
  });

  it("shows incorrect feedback for wrong answer", () => {
    render(<Quiz questions={mockQuestions} onPass={jest.fn()} />);
    answerQuestion("3");
    expect(screen.getByText(/Not quite/)).toBeInTheDocument();
  });

  it("prevents changing answer after selection", () => {
    render(<Quiz questions={mockQuestions} onPass={jest.fn()} />);
    answerQuestion("3");
    // Try clicking a different option — the explanation should remain the same
    fireEvent.click(screen.getByText("4"));
    expect(screen.getByText(/Not quite/)).toBeInTheDocument();
  });

  it("advances to next question on clicking Next", () => {
    render(<Quiz questions={mockQuestions} onPass={jest.fn()} />);
    answerQuestion("4");
    clickNext();
    expect(screen.getByText("What color is the sky?")).toBeInTheDocument();
    expect(screen.getByText("Question 2 of 3")).toBeInTheDocument();
  });

  it("shows See Results button on last question", () => {
    render(<Quiz questions={mockQuestions} onPass={jest.fn()} />);
    answerQuestion("4");
    clickNext();
    answerQuestion("Blue");
    clickNext();
    answerQuestion("Mercury");
    expect(screen.getByText("See Results")).toBeInTheDocument();
  });

  it("shows pass result when all answers are correct", () => {
    const onPass = jest.fn();
    render(<Quiz questions={mockQuestions} onPass={onPass} />);
    answerAllCorrectly();
    expect(screen.getByText("Quiz Passed!")).toBeInTheDocument();
    expect(screen.getByText("100%")).toBeInTheDocument();
  });

  it("calls onPass when score meets threshold", () => {
    const onPass = jest.fn();
    render(<Quiz questions={mockQuestions} onPass={onPass} />);
    answerAllCorrectly();
    expect(onPass).toHaveBeenCalledTimes(1);
  });

  it("shows fail result when all answers are wrong", () => {
    const onPass = jest.fn();
    render(<Quiz questions={mockQuestions} onPass={onPass} />);
    answerAllIncorrectly();
    expect(screen.getByText("Not Quite...")).toBeInTheDocument();
    expect(screen.getByText("0%")).toBeInTheDocument();
    expect(onPass).not.toHaveBeenCalled();
  });

  it("shows Try Again button on failure", () => {
    render(<Quiz questions={mockQuestions} onPass={jest.fn()} />);
    answerAllIncorrectly();
    expect(screen.getByText("Try Again")).toBeInTheDocument();
  });

  it("resets quiz on Try Again click", () => {
    render(<Quiz questions={mockQuestions} onPass={jest.fn()} />);
    answerAllIncorrectly();
    fireEvent.click(screen.getByText("Try Again"));
    expect(screen.getByText("What is 2 + 2?")).toBeInTheDocument();
    expect(screen.getByText("Question 1 of 3")).toBeInTheDocument();
  });

  it("does not show Try Again on pass", () => {
    render(<Quiz questions={mockQuestions} onPass={jest.fn()} />);
    answerAllCorrectly();
    expect(screen.queryByText("Try Again")).not.toBeInTheDocument();
  });

  it("shows unlock message on pass", () => {
    render(<Quiz questions={mockQuestions} onPass={jest.fn()} />);
    answerAllCorrectly();
    expect(screen.getByText(/unlocked the next module/)).toBeInTheDocument();
  });

  it("shows required percentage on failure", () => {
    render(<Quiz questions={mockQuestions} onPass={jest.fn()} passThreshold={80} />);
    answerAllIncorrectly();
    expect(screen.getByText(/need 80% to pass/)).toBeInTheDocument();
  });

  it("respects custom passThreshold", () => {
    const onPass = jest.fn();
    // Answer 2 of 3 correctly = 67% — with threshold 60 should pass
    render(<Quiz questions={mockQuestions} onPass={onPass} passThreshold={60} />);
    answerQuestion("4"); // correct
    clickNext();
    answerQuestion("Blue"); // correct
    clickNext();
    answerQuestion("Venus"); // wrong
    clickNext();
    expect(screen.getByText("Quiz Passed!")).toBeInTheDocument();
    expect(onPass).toHaveBeenCalledTimes(1);
  });

  it("fails with score below custom threshold", () => {
    const onPass = jest.fn();
    // Answer 1 of 3 correctly = 33% — with threshold 50 should fail
    render(<Quiz questions={mockQuestions} onPass={onPass} passThreshold={50} />);
    answerQuestion("4"); // correct
    clickNext();
    answerQuestion("Red"); // wrong
    clickNext();
    answerQuestion("Venus"); // wrong
    clickNext();
    expect(screen.getByText("Not Quite...")).toBeInTheDocument();
    expect(onPass).not.toHaveBeenCalled();
  });

  it("does not call onPass multiple times on re-render", () => {
    const onPass = jest.fn();
    const { rerender } = render(
      <Quiz questions={mockQuestions} onPass={onPass} />
    );
    answerAllCorrectly();
    expect(onPass).toHaveBeenCalledTimes(1);

    // Re-render with same props
    rerender(<Quiz questions={mockQuestions} onPass={onPass} />);
    expect(onPass).toHaveBeenCalledTimes(1);
  });
});
