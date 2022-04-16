import Typical from "react-typical";

export default function TypeAnimation() {
  return (
    <Typical
      steps={[
        "Backend Developer",
        1000,
        "NFT Smartcontracts",
        1000,
        "Next.JS + React.JS",
        1000,
      ]}
      loop={Infinity}
      wrapper="label"
      className="typical"
    />
  );
}
