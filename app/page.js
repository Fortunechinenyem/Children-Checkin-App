import Layout from "./Components/Layout";
import CheckInForm from "./Components/CheckInForm";
import CheckOutForm from "./Components/CheckOutForm";

export default function Home() {
  return (
    <Layout>
      <CheckInForm />
      <CheckOutForm />
    </Layout>
  );
}
