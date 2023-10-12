import Typical from "react-typical";

export default function TypeAnimation() {
  return (
    <Typical
      steps={[
        "Developer",
        1000,
        "NFT Smart Contracts",
        1000,
        "React.js | Next.js",
        1000,
        "Student",
      ]}
      loop={Infinity}
      wrapper="label"
      className="typical"
    />
  );
}
