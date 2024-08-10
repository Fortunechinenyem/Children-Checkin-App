import CheckInForm from "@/app/Components/CheckInForm";
import CheckOutForm from "@/app/Components/CheckOutForm";
import Layout from "@/app/Components/Layout";

export default function Homepage() {
  return (
    <Layout>
      <CheckInForm />
      <CheckOutForm />
    </Layout>
  );
}
