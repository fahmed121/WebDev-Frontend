import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

describe("Counter Component", () => {
  // Mock function for onChange prop
  const mockOnChange = jest.fn();

  beforeEach(() => {
    mockOnChange.mockClear();
  });

  test("renders with initial count of 0", () => {
    render(<Counter onChange={mockOnChange} />);
    expect(screen.getByText("0")).toBeInTheDocument();
  });

  test('increments count when "+" button is clicked', () => {
    render(<Counter onChange={mockOnChange} />);
    const incrementButton = screen.getByText("+");

    fireEvent.click(incrementButton);
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(mockOnChange).toHaveBeenCalledWith(1);

    fireEvent.click(incrementButton);
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(mockOnChange).toHaveBeenCalledWith(2);
  });

  test('decrements count when "-" button is clicked', () => {
    render(<Counter onChange={mockOnChange} />);
    const incrementButton = screen.getByText("+");
    const decrementButton = screen.getByText("-");

    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);

    fireEvent.click(decrementButton);
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(mockOnChange).toHaveBeenCalledWith(1);
  });

  test("does not decrement below 0", () => {
    render(<Counter onChange={mockOnChange} />);
    const decrementButton = screen.getByText("-");

    fireEvent.click(decrementButton);
    expect(screen.getByText("0")).toBeInTheDocument();
    expect(mockOnChange).toHaveBeenCalledWith(0);

    fireEvent.click(decrementButton);
    expect(screen.getByText("0")).toBeInTheDocument();
    expect(mockOnChange).toHaveBeenCalledWith(0);
  });
});
