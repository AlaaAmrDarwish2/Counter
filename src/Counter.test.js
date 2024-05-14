import { getByTestId, screen, render , fireEvent } from "@testing-library/react";
import Counter from "./Counter";
import App from "./App"


describe(App, () => {
    it("renders App component", () => {
        render(<App />);
        const appElement = screen.getByTestId("app");
        expect(appElement).toBeInTheDocument();
    });
 });

describe(Counter, () => {
    it('counter displays correct initial count', () => {
        const { getByTestId } = render(<Counter initialCount={0} />);
        const countValue = Number(screen.getByTestId('count').textContent);
        expect(countValue).toEqual(0);

    });
    it('count should increment by 1 if the increment button is clicked', () => {
        const { getByTestId,getByRole } = render(<Counter initialCount={0} />);
        const incrementBtn = screen.getByRole("button", { name: "Increment" });
        const countValue1 = Number(screen.getByTestId('count').textContent);
        expect(countValue1).toEqual(0);
        fireEvent.click(incrementBtn);
        const countValue2 = Number(screen.getByTestId('count').textContent);
        expect(countValue2).toEqual(1);

    });
    it('count should decrement by 1 if the decrement button is clicked', () => {
        const { getByTestId,getByRole } = render(<Counter initialCount={0} />);
        const decrementBtn = screen.getByRole("button", { name: "Decrement" });
        const countValue1 = Number(screen.getByTestId('count').textContent);
        expect(countValue1).toEqual(0);
        fireEvent.click(decrementBtn);
        const countValue2 = Number(screen.getByTestId('count').textContent);
        expect(countValue2).toEqual(-1);

    });
    it("count should be 0 if the restart button is clicked", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={50} />);
    const restartBttn = screen.getByRole("button", { name: "Restart" });
    expect(Number(screen.getByTestId("count").textContent)).toEqual(50);
    fireEvent.click(restartBttn);
    expect(Number(screen.getByTestId("count").textContent)).toEqual(0);
        
    });
    it("count should invert signs if the switch signs button is clicked", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={50} />);
    const switchBttn = screen.getByRole("button", { name: "Switch Signs" });
    expect(Number(screen.getByTestId("count").textContent)).toEqual(50);
    fireEvent.click(switchBttn);
    expect(Number(screen.getByTestId("count").textContent)).toEqual(-50);
  });

});