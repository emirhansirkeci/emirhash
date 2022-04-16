import Typical from "react-typical";

export default function TypeAnimation() {
  return (
    <Typical
      steps={[
        "Backend Developer",
        1000,
        "NFT Smartcontract",
        1000,
        "Next.JS",
        500,
        "React.JS",
        500,
      ]}
      loop={Infinity}
      wrapper="label"
      className="typical"
    />
  );
}
