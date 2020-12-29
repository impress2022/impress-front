import Button from "../components/button";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <Button name="Social Media" isGhost={false}/>
      <Button name="Prowadzenie bloga" isGhost={true}/>
    </Layout>
  )
}
