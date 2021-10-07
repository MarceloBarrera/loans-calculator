import { render, screen } from "@testing-library/react";
import Loans from "../../../components/loans/Loans";

const fetchingText = 'Fetching limitations...'
it("should render component with Fetching text", () => {
  render( <Loans fetchData={true} /> )
  const text = screen.queryByText(fetchingText)
  expect(text).toBeInTheDocument()

});

it("should render with No Fetching text", () => {
  render( <Loans fetchData={false} /> )
  const text = screen.queryByText(fetchingText)
  expect(text).toBeNull()
});
